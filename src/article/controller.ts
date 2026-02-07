import { Request, Response } from "express"
import { format, fromRequest, handleError, isSuccessful, respondError } from "express-ext"
import { validate } from "xvalidators"
import { getResource } from "../resources"
import { Status } from "../shared/status"
import { Article, ArticleFilter, articleModel, ArticleService } from "./article"

export class ArticleController {
  constructor(private service: ArticleService) {
    this.search = this.search.bind(this)
    this.loadDraft = this.loadDraft.bind(this)
    this.load = this.load.bind(this)
    this.create = this.create.bind(this)
    this.update = this.update.bind(this)
    this.patch = this.patch.bind(this)
    this.approve = this.approve.bind(this)
    this.reject = this.reject.bind(this)
    this.delete = this.delete.bind(this)
  }
  async search(req: Request, res: Response) {
    const filter = fromRequest<ArticleFilter>(req, ["status"])
    format(filter, ["publishedAt"])
    if (!filter.sort) {
      filter.sort = "-publishedAt"
    }
    const { limit, page, fields } = filter
    try {
      const result = await this.service.search(filter, limit, page, fields)
      res.status(200).json(result)
    } catch (err) {
      handleError(err, res)
    }
  }
  async loadDraft(req: Request, res: Response) {
    const id = req.params.id as string
    try {
      const article = await this.service.loadDraft(id)
      res.status(article ? 200 : 404).json(article).end()
    } catch (err) {
      handleError(err, res)
    }
  }
  async load(req: Request, res: Response) {
    const id = req.params.id as string
    try {
      const article = await this.service.load(id)
      res.status(article ? 200 : 404).json(article).end()
    } catch (err) {
      handleError(err, res)
    }
  }
  async create(req: Request, res: Response) {
    const userId = res.locals.account.id
    const article: Article = req.body
    article.createdBy = userId
    article.updatedBy = userId
    if (article.status === Status.Submitted) {
      let language = res.locals.lang || "en"
      const resource = getResource(language)
      const errors = validate<Article>(article, articleModel, resource)
      if (errors.length > 0) {
        return respondError(res, errors)
      }
    }
    try {
      const result = await this.service.create(article)
      const status = isSuccessful(result) ? 201 : 409
      res.status(status).json(article).end()
    } catch (err) {
      handleError(err, res)
    }
  }
  async update(req: Request, res: Response) {
    const id = req.params.id as string
    const userId = res.locals.account.id
    const article: Article = req.body
    article.id = id
    article.updatedBy = userId
    if (article.status === Status.Submitted) {
      let language = res.locals.lang || "en"
      const resource = getResource(language)
      const errors = validate<Article>(article, articleModel, resource)
      if (errors.length > 0) {
        return respondError(res, errors)
      }
    }
    try {
      const result = await this.service.update(article)
      if (isSuccessful(result)) {
        res.status(200).json(result).end()
      } else if (result === 0) {
        res.status(410).json(result).end()
      } else {
        res.status(400).json(result).end()
      }
    } catch (err) {
      handleError(err, res)
    }
  }
  async patch(req: Request, res: Response) {
    const id = req.params.id as string
    const userId = res.locals.account.id
    const article: Article = req.body
    article.id = id
    article.updatedBy = userId
    if (article.status === Status.Submitted) {
      let language = res.locals.lang || "en"
      const resource = getResource(language)
      const errors = validate<Article>(article, articleModel, resource, false, true)
      if (errors.length > 0) {
        return respondError(res, errors)
      }
    }
    try {
      const result = await this.service.patch(article)
      if (isSuccessful(result)) {
        res.status(200).json(result).end()
      } else if (result === 0) {
        res.status(410).json(result).end()
      } else {
        res.status(400).json(result).end()
      }
    } catch (err) {
      handleError(err, res)
    }
  }

  async approve(req: Request, res: Response) {
    const id = req.params.id as string
    const userId = res.locals.account.id
    try {
      const result = await this.service.approve(id, userId)
      if (isSuccessful(result)) {
        res.status(200).json(result).end()
      } else if (result === 0) {
        res.status(410).json(result).end()
      } else {
        res.status(409).json(result).end()
      }
    } catch (err) {
      handleError(err, res)
    }
  }
  async reject(req: Request, res: Response) {
    const id = req.params.id as string
    const userId = res.locals.account.id
    try {
      const result = await this.service.reject(id, userId)
      if (isSuccessful(result)) {
        res.status(200).json(result).end()
      } else if (result === 0) {
        res.status(410).json(result).end()
      } else {
        res.status(409).json(result).end()
      }
    } catch (err) {
      handleError(err, res)
    }
  }

  async delete(req: Request, res: Response) {
    const id = req.params.id as string
    try {
      const result = await this.service.delete(id)
      res.status(result > 0 ? 200 : 410).json(result).end()
    } catch (err) {
      handleError(err, res)
    }
  }
}
