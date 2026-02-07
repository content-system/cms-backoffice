import { Request, Response } from "express"
import { format, fromRequest, handleError, isSuccessful, respondError } from "express-ext"
import { validate } from "xvalidators"
import { getResource } from "../resources"
import { Job, JobFilter, jobModel, JobService } from "./job"

export class JobController {
  constructor(private service: JobService) {
    this.search = this.search.bind(this)
    this.load = this.load.bind(this)
    this.create = this.create.bind(this)
    this.update = this.update.bind(this)
    this.patch = this.patch.bind(this)
    this.delete = this.delete.bind(this)
  }
  async search(req: Request, res: Response) {
    const filter = fromRequest<JobFilter>(req, ["status"])
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
  async load(req: Request, res: Response) {
    const id = req.params.id as string
    try {
      const job = await this.service.load(id)
      res.status(job ? 200 : 404).json(job).end()
    } catch (err) {
      handleError(err, res)
    }
  }
  async create(req: Request, res: Response) {
    const userId = res.locals.account.id
    const job: Job = req.body
    job.createdBy = userId
    job.updatedBy = userId
    let language = res.locals.lang || "en"
    const resource = getResource(language)
    const errors = validate<Job>(job, jobModel, resource)
    if (errors.length > 0) {
      return respondError(res, errors)
    }
    try {
      const result = await this.service.create(job)
      const status = isSuccessful(result) ? 201 : 409
      res.status(status).json(job).end()
    } catch (err) {
      handleError(err, res)
    }
  }
  async update(req: Request, res: Response) {
    const id = req.params.id as string
    const userId = res.locals.account.id
    const job: Job = req.body
    job.id = id
    job.updatedBy = userId
    let language = res.locals.lang || "en"
    const resource = getResource(language)
    const errors = validate<Job>(job, jobModel, resource)
    if (errors.length > 0) {
      return respondError(res, errors)
    }
    try {
      const result = await this.service.update(job)
      const status = isSuccessful(result) ? 200 : 410
      res.status(status).json(job).end()
    } catch (err) {
      handleError(err, res)
    }
  }
  async patch(req: Request, res: Response) {
    const id = req.params.id as string
    const userId = res.locals.account.id
    const job: Job = req.body
    job.id = id
    job.updatedBy = userId
    let language = res.locals.lang || "en"
    const resource = getResource(language)
    const errors = validate<Job>(job, jobModel, resource, false, true)
    if (errors.length > 0) {
      return respondError(res, errors)
    }
    try {
      const result = await this.service.update(job)
      const status = isSuccessful(result) ? 200 : 410
      res.status(status).json(job).end()
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
