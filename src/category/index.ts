import { Controller } from "express-ext"
import { Log, Search, UseCase } from "onecore"
import { DB, Repository, SearchBuilder } from "query-core"
import { Category, CategoryFilter, categoryModel, CategoryRepository, CategoryService } from "./category"
export * from "./category"

export class SqlCategoryRepository extends Repository<Category, string> implements CategoryRepository {
  constructor(db: DB) {
    super(db, "categories", categoryModel)
  }
}
export class CategoryUseCase extends UseCase<Category, string, CategoryFilter> implements CategoryService {
  constructor(search: Search<Category, CategoryFilter>, repository: CategoryRepository) {
    super(search, repository)
  }
}
export class CategoryController extends Controller<Category, string, CategoryFilter> {
  constructor(log: Log, service: CategoryService) {
    super(log, service)
  }
}

export function useCategoryController(log: Log, db: DB): CategoryController {
  const builder = new SearchBuilder<Category, CategoryFilter>(db.query, "categories", categoryModel, db.driver)
  const repository = new SqlCategoryRepository(db)
  const service = new CategoryUseCase(builder.search, repository)
  return new CategoryController(log, service)
}
