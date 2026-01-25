import { Request, Response } from "express"
import { create, format, fromRequest, handleError, respondError, update } from "express-ext"
import { Log } from "onecore"
import { validate } from "xvalidators"
import { getResource } from "../resources"
import { Article, ArticleFilter, articleModel, ArticleService } from "./article"

export class ArticleController {
  constructor(private service: ArticleService, private log: Log) {
    this.search = this.search.bind(this)
    this.load = this.load.bind(this)
    this.create = this.create.bind(this)
    this.update = this.update.bind(this)
    this.patch = this.patch.bind(this)
    this.delete = this.delete.bind(this)
  }
  async search(req: Request, res: Response) {
    const filter = fromRequest<ArticleFilter>(req, ["status"])
    format(filter, ["publishedAt"])
    if (!filter.sort) {
      filter.sort = "-publishedAt"
    }
    filter.authorId = res.locals.userId
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
      const article = await this.service.load(id)
      res.status(article ? 200 : 404).json(article).end()
    } catch (err) {
      handleError(err, res, this.log)
    }
  }
  create(req: Request, res: Response) {
    const userId = res.locals.account.id
    const article: Article = req.body
    article.createdBy = userId
    article.createdAt = new Date()
    article.updatedBy = userId
    article.updatedAt = new Date()
    let language = res.locals.lang || "en"
    const resource = getResource(language)
    const errors = validate<Article>(article, articleModel, resource)
    if (errors.length > 0) {
      return respondError(res, errors)
    }
    create<Article>(res, article, this.service.create, this.log)
  }
  update(req: Request, res: Response) {
    const id = req.params.id as string
    const userId = res.locals.account.id
    const article: Article = req.body
    article.id = id
    article.updatedBy = userId
    article.updatedAt = new Date()
    let language = res.locals.lang || "en"
    const resource = getResource(language)
    const errors = validate<Article>(article, articleModel, resource)
    if (errors.length > 0) {
      return respondError(res, errors)
    }
    update<Article>(res, article, this.service.update, this.log)
  }
  patch(req: Request, res: Response) {
    const id = req.params.id as string
    const userId = res.locals.account.id
    const article: Article = req.body
    article.id = id
    article.updatedBy = userId
    article.updatedAt = new Date()
    let language = res.locals.lang || "en"
    const resource = getResource(language)
    const errors = validate<Article>(article, articleModel, resource, false, true)
    if (errors.length > 0) {
      return respondError(res, errors)
    }
    update<Article>(res, article, this.service.patch, this.log)
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
