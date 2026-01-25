import { Request, Response } from "express"
import { create, fromRequest, handleError, respondError, update } from "express-ext"
import { Log } from "onecore"
import { validate } from "xvalidators"
import { getResource } from "../resources"
import { Category, CategoryFilter, categoryModel, CategoryService } from "./category"

export class CategoryController {
  constructor(private service: CategoryService, private log: Log) {
    this.search = this.search.bind(this)
    this.load = this.load.bind(this)
    this.create = this.create.bind(this)
    this.update = this.update.bind(this)
    this.patch = this.patch.bind(this)
    this.delete = this.delete.bind(this)
  }
  async search(req: Request, res: Response) {
    const filter = fromRequest<CategoryFilter>(req, ["status"])
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
      const category = await this.service.load(id)
      res.status(category ? 200 : 404).json(category).end()
    } catch (err) {
      handleError(err, res, this.log)
    }
  }
  create(req: Request, res: Response) {
    const userId = res.locals.account.id
    const category: Category = req.body
    category.createdBy = userId
    category.createdAt = new Date()
    category.updatedBy = userId
    category.updatedAt = new Date()
    let language = res.locals.lang || "en"
    const resource = getResource(language)
    const errors = validate<Category>(category, categoryModel, resource)
    if (errors.length > 0) {
      return respondError(res, errors)
    }
    create<Category>(res, category, this.service.create, this.log)
  }
  update(req: Request, res: Response) {
    const id = req.params.id as string
    const userId = res.locals.account.id
    const category: Category = req.body
    category.id = id
    category.updatedBy = userId
    category.updatedAt = new Date()
    let language = res.locals.lang || "en"
    const resource = getResource(language)
    const errors = validate<Category>(category, categoryModel, resource)
    if (errors.length > 0) {
      return respondError(res, errors)
    }
    update<Category>(res, category, this.service.update, this.log)
  }
  patch(req: Request, res: Response) {
    const id = req.params.id as string
    const userId = res.locals.account.id
    const category: Category = req.body
    category.id = id
    category.updatedBy = userId
    category.updatedAt = new Date()
    let language = res.locals.lang || "en"
    const resource = getResource(language)
    const errors = validate<Category>(category, categoryModel, resource, false, true)
    if (errors.length > 0) {
      return respondError(res, errors)
    }
    update<Category>(res, category, this.service.patch, this.log)
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
