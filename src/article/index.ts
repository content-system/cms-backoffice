import { nanoid } from "nanoid"
import { ApproversPort, Log, Notification, NotificationPort, SearchResult, Transaction } from "onecore"
import { buildToSave } from "pg-extension"
import { DB, Repository, SqlViewRepository } from "query-core"
import { slugify } from "../common/slug"
import { ApproversAdapter } from "../shared/approvers"
import { HistoryAdapter, HistoryRepository, ignoreFields } from "../shared/history"
import { createNotification, NotificationAdapter } from "../shared/notification"
import { canUpdate, Status } from "../shared/status"
import { Article, ArticleFilter, articleModel, ArticleRepository, ArticleService, DraftArticleRepository } from "./article"
import { ArticleController } from "./controller"
import { buildQuery } from "./query"
export * from "./article"
export * from "./controller"

export class SqlDraftArticleRepository extends Repository<Article, string, ArticleFilter> implements DraftArticleRepository {
  constructor(db: DB) {
    super(db, "draft_articles", articleModel, buildQuery)
  }
}
export class SqlArticleRepository extends SqlViewRepository<Article, string> implements ArticleRepository {
  constructor(protected db: DB) {
    super(db, "articles", articleModel)
  }
  save(article: Article, tx?: Transaction): Promise<number> {
    const stmt = buildToSave(article, "articles", articleModel)
    const db = tx ? tx : this.db
    return db.execute(stmt.query, stmt.params)
  }
}

export class ArticleUseCase implements ArticleService {
  constructor(
    protected db: DB,
    protected draftRepository: DraftArticleRepository,
    protected repository: ArticleRepository,
    protected historyRepository: HistoryRepository<Article>,
    protected approversPort: ApproversPort,
    protected notificationPort: NotificationPort,
    protected log: Log
  ) {
  }
  search(filter: ArticleFilter, limit: number, page?: number, fields?: string[]): Promise<SearchResult<Article>> {
    return this.draftRepository.search(filter, limit, page, fields)
  }
  loadDraft(id: string): Promise<Article | null> {
    return this.draftRepository.load(id)
  }
  load(id: string): Promise<Article | null> {
    return this.repository.load(id)
  }
  async create(article: Article): Promise<number> {
    article.id = nanoid(10)
    article.slug = slugify(article.title, article.id)
    article.authorId = article.createdBy

    if (article.status === Status.Submitted) {
      article.submittedBy = article.updatedBy
      article.submittedAt = new Date()
    }

    const tx = await this.db.beginTransaction()
    try {
      const res = await this.draftRepository.create(article, tx)

      if (article.status === Status.Submitted) {
        this.notifyApprovers(article.id, article.submittedBy)
      }

      tx.commit()
      return res
    } catch (err) {
      tx.rollback()
      throw tx
    }
  }

  async update(article: Article): Promise<number> {
    const tx = await this.db.beginTransaction()
    try {
      const isExist = await this.repository.exist(article.id, tx)
      if (!isExist) {
        article.slug = slugify(article.title, article.id)
      }
      const existingArticle = await this.draftRepository.load(article.id, tx)
      if (!existingArticle) {
        return 0
      }
      if (!canUpdate(existingArticle.status)) {
        return -1
      }

      if (article.status === Status.Submitted) {
        article.submittedBy = article.updatedBy
        article.submittedAt = new Date()
      }

      const res = await this.draftRepository.update(article, tx)

      if (article.status === Status.Submitted) {
        this.notifyApprovers(article.id, article.submittedBy)
      }

      tx.commit()
      return res
    } catch (err) {
      tx.rollback()
      throw tx
    }
  }
  patch(article: Article): Promise<number> {
    return this.update(article)
  }
  protected async notifyApprovers(id: string, userId: string): Promise<number> {
    const approvers = await this.approversPort.getApprovers()
    const msg = `Please review and approve an article (id: '${id}').`
    const url = `/articles/${id}/approve`
    const notifications: Notification[] = []
    for (const approverId of approvers) {
      const noti = createNotification(userId, approverId, msg, url)
      notifications.push(noti)
    }
    try {
      const res = await this.notificationPort.pushNotifications(notifications)
      return res
    } catch (err) {
      this.log("Cannot notify approvers. Detail error: " + JSON.stringify(err))
      return -1
    }
  }

  async approve(id: string, approvedBy: string): Promise<number> {
    const tx = await this.db.beginTransaction()
    try {
      const article = await this.draftRepository.load(id, tx)
      if (!article) {
        return 0
      }
      if (article.status !== Status.Submitted) {
        return -1
      }
      if (article.submittedBy === approvedBy) {
        return -2
      }
      article.status = Status.Approved
      article.approvedBy = approvedBy
      article.approvedAt = new Date()

      await this.draftRepository.update(article, tx)
      const res = await this.repository.save(article, tx)
      await this.historyRepository.create(id, approvedBy, article, tx)

      const msg = `This article was approved (id: '${id}').`
      this.notifySubmitter(id, approvedBy, article.submittedBy, msg)

      tx.commit()
      return res
    } catch (err) {
      tx.rollback()
      throw tx
    }
  }
  async reject(id: string, rejectedBy: string): Promise<number> {
    const tx = await this.db.beginTransaction()
    try {
      const article = await this.draftRepository.load(id, tx)
      if (!article) {
        return 0
      }
      if (article.status !== Status.Submitted) {
        return -1
      }
      if (article.submittedBy === rejectedBy) {
        return -2
      }

      article.status = Status.Rejected
      article.approvedBy = rejectedBy
      article.approvedAt = new Date()

      const res = await this.draftRepository.update(article, tx)
      await this.historyRepository.create(id, rejectedBy, article, tx)

      const msg = `This article was rejected (id: '${id}').`
      this.notifySubmitter(id, rejectedBy, article.submittedBy, msg)

      tx.commit()
      return res
    } catch (err) {
      tx.rollback()
      throw tx
    }
  }
  protected async notifySubmitter(id: string, userId: string, submitter: string, msg: string): Promise<number> {
    const url = `/articles/${id}`
    const noti = createNotification(userId, submitter, msg, url)
    try {
      const res = await this.notificationPort.push(noti)
      return res
    } catch (err) {
      this.log("Cannot notify submitter. Detail error: " + JSON.stringify(err))
      return -1
    }
  }

  delete(id: string): Promise<number> {
    return this.draftRepository.delete(id)
  }
}

export function useArticleController(db: DB, log: Log): ArticleController {
  const draftRepository = new SqlDraftArticleRepository(db)
  const repository = new SqlArticleRepository(db)
  const historyRepository = new HistoryAdapter<Article>("article", "histories", ignoreFields, "history_id", "entity", "id", "author", "time")
  const approversPort = new ApproversAdapter("article", db)
  const notificationPort = new NotificationAdapter(db, "notifications", "U", "time", "url", "id", "sender", "receiver", "message", "status")
  const service = new ArticleUseCase(db, draftRepository, repository, historyRepository, approversPort, notificationPort, log)
  return new ArticleController(service)
}
