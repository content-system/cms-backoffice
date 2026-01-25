import { Request, Response } from "express"
import { format, fromRequest, handleError, respondError } from "express-ext"
import { isSuccessful, Log } from "onecore"
import { validate } from "xvalidators"
import { getResource } from "../resources"
import { Job, JobFilter, jobModel, JobService } from "./job"

export class JobController {
  constructor(private service: JobService, private log: Log) {
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
      handleError(err, res, this.log)
    }
  }
  async load(req: Request, res: Response) {
    const id = req.params.id as string
    try {
      const job = await this.service.load(id)
      res.status(job ? 200 : 404).json(job).end()
    } catch (err) {
      handleError(err, res, this.log)
    }
  }
  async create(req: Request, res: Response) {
    const userId = res.locals.account.id
    const job: Job = req.body
    job.createdBy = userId
    job.createdAt = new Date()
    job.updatedBy = userId
    job.updatedAt = new Date()
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
      handleError(err, res, this.log)
    }
  }
  async update(req: Request, res: Response) {
    const id = req.params.id as string
    const userId = res.locals.account.id
    const job: Job = req.body
    job.id = id
    job.updatedBy = userId
    job.updatedAt = new Date()
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
      handleError(err, res, this.log)
    }
  }
  async patch(req: Request, res: Response) {
    const id = req.params.id as string
    const userId = res.locals.account.id
    const job: Job = req.body
    job.id = id
    job.updatedBy = userId
    job.updatedAt = new Date()
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
      handleError(err, res, this.log)
    }
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
