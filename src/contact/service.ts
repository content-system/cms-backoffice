import { nanoid } from "nanoid"
import { DB, UseCase } from "onecore"
import { Contact, ContactFilter, ContactRepository, ContactService } from "./contact"
import { ContactController } from "./controller"
import { SqlContactRepository } from "./repository"
export * from "./contact"
export * from "./controller"

export class ContactUseCase extends UseCase<Contact, string, ContactFilter> implements ContactService {
  constructor(repository: ContactRepository) {
    super(repository)
    this.create = this.create.bind(this)
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
