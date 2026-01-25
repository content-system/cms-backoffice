import { nanoid } from "nanoid"
import { Log, UseCase } from "onecore"
import { DB, Repository, SearchBuilder } from "query-core"
import { slugify } from "../common/slug"
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

export class ArticleUseCase extends UseCase<Article, string, ArticleFilter> implements ArticleService {
  constructor(repository: ArticleRepository) {
    super(repository)
  }
  create(article: Article, ctx?: any): Promise<number> {
    article.id = nanoid(10)
    article.slug = slugify(article.title, article.id)
    article.authorId = article.createdBy
    article.status = Status.Draft
    return this.repository.create(article, ctx)
  }
  async update(article: Article, ctx?: any): Promise<number> {
    const existingArticle = await this.repository.load(article.id)
    if (!existingArticle) {
      return 0
    }
    if (existingArticle.status === Status.Draft) {
      article.slug = slugify(article.title, article.id)
    }
    return this.repository.update(article, ctx)
  }
  async patch(article: Partial<Article>, ctx?: any): Promise<number> {
    if (article.title && article.title.length > 0) {
      const id = article.id as string
      const existingArticle = await this.repository.load(id)
      if (!existingArticle) {
        return 0
      }
      if (existingArticle.status === Status.Draft) {
        article.slug = slugify(article.title, id)
      }
      return this.repository.patch(article, ctx)
    } else {
      delete article.slug
      return this.repository.patch(article, ctx)
    }
  }
}

export function useArticleController(db: DB, log: Log): ArticleController {
  const builder = new SearchBuilder<Article, ArticleFilter>(db.query, "articles", articleModel, db.driver)
  const repository = new SqlArticleRepository(db)
  const service = new ArticleUseCase(repository)
  return new ArticleController(service, log)
}
