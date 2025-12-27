import { Request, Response } from "express"
import { buildArray, fromRequest, getStatusCode, handleError, resources } from "express-ext"
import { Log } from "onecore"
import { validate } from "xvalidators"
import { getResource } from "../resources"
import { Content, ContentFilter, contentModel, ContentService } from "./content"

export class ContentController {
  constructor(private log: Log, private service: ContentService) {
    this.search = this.search.bind(this)
    this.load = this.load.bind(this)
    this.create = this.create.bind(this)
    this.update = this.update.bind(this)
    this.patch = this.patch.bind(this)
    this.delete = this.delete.bind(this)
  }
  search(req: Request, res: Response) {
    const filter = fromRequest<ContentFilter>(req, buildArray(["status"], resources.fields))
    const page = getPage(filter.page)
    const limit = getLimit(filter.limit)
    this.service
      .search(filter, limit, page, filter.fields)
      .then((result) => res.status(200).json(result).end())
      .catch((err) => handleError(err, res, this.log))
  }
  load(req: Request, res: Response) {
    const id = req.params.id
    const lang = req.params.lang
    this.service
      .load(id, lang)
      .then((content) => {
        if (!content) {
          res.status(404).end()
        } else {
          res.status(200).json(content).end()
        }
      })
      .catch((err) => handleError(err, res, this.log))
  }
  create(req: Request, res: Response) {
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
      this.service
        .create(content)
        .then((result) => {
          if (result === 0) {
            res.status(409).end()
          } else {
            res.status(201).json(content).end()
          }
        })
        .catch((err) => handleError(err, res, this.log))
    }
  }
  update(req: Request, res: Response) {
    const content = req.body as Content
    content.id = req.params.id
    content.lang = req.params.lang
    let language = res.locals.lang || "en"
    const resource = getResource(language)
    const errors = validate<Content>(content, contentModel, resource)
    if (errors.length > 0) {
      res.status(getStatusCode(errors)).json(errors).end()
    } else {
      this.service
        .update(content)
        .then((result) => {
          if (result === 0) {
            res.status(410).end()
          } else {
            res.status(200).json(content).end()
          }
        })
        .catch((err) => handleError(err, res, this.log))
    }
  }
  patch(req: Request, res: Response) {
    const content = req.body as Content
    content.id = req.params.id
    content.lang = req.params.lang
    let language = res.locals.lang || "en"
    const resource = getResource(language)
    const errors = validate<Content>(content, contentModel, resource, false, true)
    if (errors.length > 0) {
      res.status(getStatusCode(errors)).json(errors).end()
    } else {
      this.service
        .patch(content)
        .then((result) => {
          if (result === 0) {
            res.status(410).end()
          } else {
            res.status(200).json(content).end()
          }
        })
        .catch((err) => handleError(err, res, this.log))
    }
  }
  delete(req: Request, res: Response) {
    const id = req.params.id
    const lang = req.params.lang
    this.service
      .delete(id, lang)
      .then((result) => {
        if (result === 0) {
          res.status(410).end()
        } else {
          res.status(200).json(result).end()
        }
      })
      .catch((err) => handleError(err, res, this.log))
  }
}

function getPage(page?: number | string): number {
  if (page) {
    if (typeof page === "string" && !isNaN(page as any)) {
      const p = parseInt(page, 10)
      if (p < 1) {
        return 1
      }
      return p
    } else {
      return (page as number) < 1 ? 1 : (page as number)
    }
  }
  return 1
}
function getLimit(limit?: number | string): number {
  if (limit) {
    if (typeof limit === "string" && !isNaN(limit as any)) {
      const p = parseInt(limit, 10)
      if (p < 1) {
        return resources.defaultLimit
      }
      return p
    } else {
      return (limit as number) > 0 ? (limit as number) : resources.defaultLimit
    }
  }
  return resources.defaultLimit
}
