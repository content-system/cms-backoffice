import { Request, Response } from "express"
import { buildArray, fromRequest, getStatusCode, handleError, isSuccessful } from "express-ext"
import { validate } from "xvalidators"
import { getResource } from "../resources"
import { Content, ContentFilter, contentModel, ContentService } from "./content"

export class ContentController {
  constructor(private service: ContentService) {
    this.search = this.search.bind(this)
    this.load = this.load.bind(this)
    this.create = this.create.bind(this)
    this.update = this.update.bind(this)
    this.patch = this.patch.bind(this)
    this.delete = this.delete.bind(this)
  }
  async search(req: Request, res: Response) {
    const filter = fromRequest<ContentFilter>(req, buildArray(["status"]))
    const { limit, page, fields } = filter
    try {
      const result = await this.service.search(filter, limit, page, fields)
      res.status(200).json(result)
    } catch (err) {
      handleError(err, res)
    }
  }
  async load(req: Request, res: Response) {
    const id = req.params.id
    const lang = req.params.lang
    try {
      const content = await this.service.load(id, lang)
      res.status(content ? 200 : 404).json(content).end()
    } catch (err) {
      handleError(err, res)
    }
  }
  async create(req: Request, res: Response) {
    const content = req.body as Content
    if (!content) {
      res.status(400).json({ error: "content is required" }).end()
      return
    }
    let language = res.locals.lang || "en"
    const resource = getResource(language)
    const errors = validate<Content>(content, contentModel, resource)
    if (errors.length > 0) {
      res.status(getStatusCode(errors)).json(errors).end()
    } else {
      try {
        const result = await this.service.create(content)
        const status = isSuccessful(result) ? 201 : 409
        res.status(status).json(content).end()
      } catch (err) {
        handleError(err, res)
      }
    }
  }
  async update(req: Request, res: Response) {
    const content = req.body as Content
    content.id = req.params.id
    content.lang = req.params.lang
    let language = res.locals.lang || "en"
    const resource = getResource(language)
    const errors = validate<Content>(content, contentModel, resource)
    if (errors.length > 0) {
      res.status(getStatusCode(errors)).json(errors).end()
    } else {
      try {
        const result = await this.service.update(content)
        const status = isSuccessful(result) ? 200 : 410
        res.status(status).json(content).end()
      } catch (err) {
        handleError(err, res)
      }
    }
  }
  async patch(req: Request, res: Response) {
    const content = req.body as Content
    content.id = req.params.id
    content.lang = req.params.lang
    let language = res.locals.lang || "en"
    const resource = getResource(language)
    const errors = validate<Content>(content, contentModel, resource, false, true)
    if (errors.length > 0) {
      res.status(getStatusCode(errors)).json(errors).end()
    } else {
      try {
        const result = await this.service.patch(content)
        const status = isSuccessful(result) ? 200 : 410
        res.status(status).json(content).end()
      } catch (err) {
        handleError(err, res)
      }
    }
  }
  async delete(req: Request, res: Response) {
    const id = req.params.id
    const lang = req.params.lang
    try {
      const result = await this.service.delete(id, lang)
      res.status(result > 0 ? 200 : 410).json(result).end()
    } catch (err) {
      handleError(err, res)
    }
  }
}
