import { DB, UseCase } from "onecore"
import { Category, CategoryFilter, CategoryRepository, CategoryService } from "./category"
import { CategoryController } from "./controller"
import { SqlCategoryRepository } from "./repository"

export * from "./controller"

export class CategoryUseCase extends UseCase<Category, string, CategoryFilter> implements CategoryService {
  constructor(repository: CategoryRepository) {
    super(repository)
  }
}

export function useCategoryController(db: DB): CategoryController {
  const repository = new SqlCategoryRepository(db)
  const service = new CategoryUseCase(repository)
  return new CategoryController(service)
}
