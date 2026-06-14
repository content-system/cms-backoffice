import { DB } from "onecore"
import { ContentController } from "./controller"
import { SqlContentRepository } from "./repository"
import { ContentUseCase } from "./service"
export * from "./controller"

export function useContentController(db: DB): ContentController {
  const repository = new SqlContentRepository(db)
  const service = new ContentUseCase(repository)
  return new ContentController(service)
}
