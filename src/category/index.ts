import { Log, UseCase } from "onecore"
import { DB, Repository } from "query-core"
import { Category, CategoryFilter, categoryModel, CategoryRepository, CategoryService } from "./category"
import { CategoryController } from "./controller"

export * from "./controller"

export class SqlCategoryRepository extends Repository<Category, string, CategoryFilter> implements CategoryRepository {
  constructor(db: DB) {
    super(db, "categories", categoryModel)
  }
}
export class CategoryUseCase extends UseCase<Category, string, CategoryFilter> implements CategoryService {
  constructor(repository: CategoryRepository) {
    super(repository)
  }
}

export function useCategoryController(db: DB, log: Log): CategoryController {
  const repository = new SqlCategoryRepository(db)
  const service = new CategoryUseCase(repository)
  return new CategoryController(service, log)
}
