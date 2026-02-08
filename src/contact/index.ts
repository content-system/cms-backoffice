import { nanoid } from "nanoid"
import { UseCase } from "onecore"
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
    this.create = this.create.bind(this);
  }
  create(contact: Contact): Promise<number> {
    contact.id = nanoid(10)
    contact.submittedAt = new Date()
    return this.repository.create(contact)
  }
}

export function useContactController(db: DB): ContactController {
  const repository = new SqlContactRepository(db)
  const service = new ContactUseCase(repository)
  return new ContactController(service)
}
