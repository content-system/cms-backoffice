import { nanoid } from "nanoid"
import { Log, SearchResult } from "onecore"
import { buildToSave } from "pg-extension"
import { DB, Repository, SqlViewRepository } from "query-core"
import { slugify } from "../common/slug"
import { ApproversAdapter, ApproversPort } from "../shared/approvers"
import { Action, HistoryAdapter, HistoryRepository } from "../shared/history"
import { createNotification, Notification, NotificationAdapter, NotificationPort } from "../shared/notification"
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
  save(article: Article): Promise<number> {
    const stmt = buildToSave(article, "articles", articleModel)
    return this.db.execute(stmt.query, stmt.params)
  }
}
export class ArticleUseCase implements ArticleService {
  constructor(
    protected draftRepository: DraftArticleRepository,
    protected repository: ArticleRepository,
    protected historyPort: HistoryRepository<Article>,
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
    const res = await this.draftRepository.create(article)

    if (article.status === Status.Submitted) {
      this.notifyApprovers(article.id, article.updatedBy)
    }
    return res
  }

  async update(article: Article, ctx?: any): Promise<number> {
    const isExist = await this.repository.exist(article.id)
    if (!isExist) {
      article.slug = slugify(article.title, article.id)
    }
    const existingArticle = await this.draftRepository.load(article.id)
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

    const res = await this.draftRepository.update(article)

    if (article.status === Status.Submitted) {
      this.notifyApprovers(article.id, article.updatedBy)
    }
    return res
  }
  patch(article: Article): Promise<number> {
    return this.update(article)
  }
  protected async notifyApprovers(id: string, userId: string): Promise<number> {
    const approvers = await this.approversPort.getApprovers()
    const msg = "Please review and approve an article"
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
    const article = await this.draftRepository.load(id)
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

    await this.draftRepository.update(article)
    const res = await this.repository.save(article)
    await this.historyPort.create(id, approvedBy, Action.Approve, article)

    const msg = "This article was approved."
    this.notifySubmitter(id, approvedBy, article.submittedBy, msg)

    return res
  }
  async reject(id: string, rejectedBy: string): Promise<number> {
    const article = await this.draftRepository.load(id)
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

    const res = await this.draftRepository.update(article)
    await this.historyPort.create(id, rejectedBy, Action.Reject, article)

    const msg = "This article was rejected."
    this.notifySubmitter(id, rejectedBy, article.submittedBy, msg)

    return res
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
  const historyRepository = new HistoryAdapter<Article>(db, "article", "histories", ["id", "createdBy", "createdAt", "updatedBy", "updatedAt"], "history_id", "entity", "id", "author", "time", "action", "data")
  const approversPort = new ApproversAdapter("article", db)
  const notificationPort = new NotificationAdapter(db, "notifications", "U", "time", "url", "id", "sender", "receiver", "message", "status")
  const service = new ArticleUseCase(draftRepository, repository, historyRepository, approversPort, notificationPort, log)
  return new ArticleController(service)
}
