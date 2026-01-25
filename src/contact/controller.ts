import { Request, Response } from "express"
import { create, format, fromRequest, handleError, respondError, update } from "express-ext"
import { Log } from "onecore"
import { validate } from "xvalidators"
import { getResource } from "../resources"
import { Contact, ContactFilter, contactModel, ContactService } from "./contact"

export class ContactController {
  constructor(private service: ContactService, private log: Log) {
    this.search = this.search.bind(this)
    this.load = this.load.bind(this)
    this.create = this.create.bind(this)
    this.update = this.update.bind(this)
    this.patch = this.patch.bind(this)
    this.delete = this.delete.bind(this)
  }
  async search(req: Request, res: Response) {
    const filter = fromRequest<ContactFilter>(req, ["status"])
    format(filter, ["publishedAt"])
    if (!filter.sort) {
      filter.sort = "-publishedAt"
    }
    const { limit, page, fields } = filter
    try {
      const result = await this.service.search(filter, limit, page, fields)
      res.status(200).json(result)
    } catch (err) {
      handleError(err, res, this.log)
    }
  }
  async load(req: Request, res: Response) {
    const id = req.params.id as string
    try {
      const contact = await this.service.load(id)
      res.status(contact ? 200 : 404).json(contact).end()
    } catch (err) {
      handleError(err, res, this.log)
    }
  }
  create(req: Request, res: Response) {
    const contact: Contact = req.body
    let language = res.locals.lang || "en"
    const resource = getResource(language)
    const errors = validate<Contact>(contact, contactModel, resource)
    if (errors.length > 0) {
      return respondError(res, errors)
    }
    create<Contact>(res, contact, this.service.create, this.log)
  }
  update(req: Request, res: Response) {
    const id = req.params.id as string
    const contact: Contact = req.body
    contact.id = id
    let language = res.locals.lang || "en"
    const resource = getResource(language)
    const errors = validate<Contact>(contact, contactModel, resource)
    if (errors.length > 0) {
      return respondError(res, errors)
    }
    update<Contact>(res, contact, this.service.update, this.log)
  }
  patch(req: Request, res: Response) {
    const id = req.params.id as string
    const contact: Contact = req.body
    contact.id = id
    let language = res.locals.lang || "en"
    const resource = getResource(language)
    const errors = validate<Contact>(contact, contactModel, resource, false, true)
    if (errors.length > 0) {
      return respondError(res, errors)
    }
    update<Contact>(res, contact, this.service.patch, this.log)
  }
  async delete(req: Request, res: Response) {
    const id = req.params.id as string
    try {
      const result = await this.service.delete(id)
      res.status(result > 0 ? 200 : 410).json(result).end()
    } catch (err) {
      handleError(err, res, this.log)
    }
  }
}
