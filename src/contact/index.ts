import { Log, UseCase } from "onecore"
import { DB, Repository } from "query-core"
import { Contact, ContactFilter, contactModel, ContactRepository, ContactService } from "./contact"
import { ContactController } from "./controller"
export * from "./contact"
export * from "./controller"

export class SqlContactRepository extends Repository<Contact, string, ContactFilter> implements ContactRepository {
  constructor(db: DB) {
    super(db, "contacts", contactModel)
  }
}
export class ContactUseCase extends UseCase<Contact, string, ContactFilter> implements ContactService {
  constructor(repository: ContactRepository) {
    super(repository)
  }
}

export function useContactController(db: DB, log: Log): ContactController {
  const repository = new SqlContactRepository(db)
  const service = new ContactUseCase(repository)
  return new ContactController(service, log)
}
