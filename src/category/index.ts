import { DB } from "onecore"
import { CategoryController } from "./controller"
import { SqlCategoryRepository } from "./repository"
import { CategoryUseCase } from "./service"
export * from "./controller"

export function useCategoryController(db: DB): CategoryController {
  const repository = new SqlCategoryRepository(db)
  const service = new CategoryUseCase(repository)
  return new CategoryController(service)
}
