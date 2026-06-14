import { DB } from "onecore"
import { ContactController } from "./controller"
import { SqlContactRepository } from "./repository"
import { ContactUseCase } from "./service"
export * from "./contact"
export * from "./controller"

export function useContactController(db: DB): ContactController {
  const repository = new SqlContactRepository(db)
  const service = new ContactUseCase(repository)
  return new ContactController(service)
}
