import { Controller } from "express-ext"
import { Log } from "onecore"
import { Contact, ContactFilter, ContactService } from "./contact"

export class ContactController extends Controller<Contact, string, ContactFilter> {
  constructor(log: Log, service: ContactService) {
    super(log, service)
  }
}
