import { nanoid } from "nanoid"
import { Log, SearchResult } from "onecore"
import { DB, Repository } from "query-core"
import { slugify } from "../common/slug"
import { Action, HistoryAdapter, HistoryRepository } from "../shared/history"
import { Article, ArticleFilter, articleModel, ArticleRepository, ArticleService, Status } from "./article"
import { ArticleController } from "./controller"
import { buildQuery } from "./query"
export * from "./article"
export * from "./controller"

export class SqlArticleRepository extends Repository<Article, string, ArticleFilter> implements ArticleRepository {
  constructor(db: DB) {
    super(db, "articles", articleModel, buildQuery)
  }
}
export class ArticleUseCase implements ArticleService {
  constructor(protected repository: ArticleRepository, protected historyRepository: HistoryRepository<Article>) {

  }
  search(filter: ArticleFilter, limit: number, page?: number, fields?: string[]): Promise<SearchResult<Article>> {
    return this.repository.search(filter, limit, page, fields)
  }
  load(id: string): Promise<Article | null> {
    return this.repository.load(id)
  }
  async create(article: Article): Promise<number> {
    article.id = nanoid(10)
    article.slug = slugify(article.title, article.id)
    article.authorId = article.createdBy
    article.status = Status.Draft
    const res = await this.repository.create(article)
    await this.historyRepository.create(article.id, article.updatedBy, Action.Create, article)
    return res
  }
  async update(article: Article): Promise<number> {
    const existingArticle = await this.repository.load(article.id)
    if (!existingArticle) {
      return 0
    }
    if (existingArticle.status === Status.Draft) {
      article.slug = slugify(article.title, article.id)
    }
    const res = this.repository.update(article)
    await this.historyRepository.create(article.id, article.updatedBy, Action.Update, article)
    return res
  }
  async patch(article: Partial<Article>): Promise<number> {
    if (article.title && article.title.length > 0) {
      const id = article.id as string
      const existingArticle = await this.repository.load(id)
      if (!existingArticle) {
        return 0
      }
      if (existingArticle.status === Status.Draft) {
        article.slug = slugify(article.title, id)
      }
      return this.repository.patch(article)
    } else {
      delete article.slug
      return this.repository.patch(article)
    }
  }
  delete(id: string): Promise<number> {
    return this.repository.delete(id)
  }
}

export function useArticleController(db: DB, log: Log): ArticleController {
  const repository = new SqlArticleRepository(db)
  const historyRepository = new HistoryAdapter<Article>(db, "article", "histories", "history_id", "entity", "id", "author", "time", "action", "data", ["id", "createdBy", "createdAt", "updatedBy", "updatedAt"])
  const service = new ArticleUseCase(repository, historyRepository)
  return new ArticleController(service, log)
}
