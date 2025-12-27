import { Log, Search, UseCase } from "onecore"
import { DB, Repository, SearchBuilder } from "query-core"
import { Article, ArticleFilter, articleModel, ArticleRepository, ArticleService } from "./article"
import { ArticleController } from "./controller"
export * from "./article"
export * from "./controller"

export class SqlArticleRepository extends Repository<Article, string> implements ArticleRepository {
  constructor(db: DB) {
    super(db, "articles", articleModel)
  }
}
export class ArticleUseCase extends UseCase<Article, string, ArticleFilter> implements ArticleService {
  constructor(search: Search<Article, ArticleFilter>, repository: ArticleRepository) {
    super(search, repository)
  }
}

export function useArticleController(log: Log, db: DB): ArticleController {
  const builder = new SearchBuilder<Article, ArticleFilter>(db.query, "articles", articleModel, db.driver)
  const repository = new SqlArticleRepository(db)
  const service = new ArticleUseCase(builder.search, repository)
  return new ArticleController(log, service)
}
