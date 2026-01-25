import { Request, Response } from "express"
import { fromRequest, handleError, respondError } from "express-ext"
import { isSuccessful, Log } from "onecore"
import { validate } from "xvalidators"
import { getResource } from "../resources"
import { Role, RoleFilter, roleModel, RoleService } from "./role"

export class RoleController {
  constructor(private service: RoleService, private log: Log) {
    this.all = this.all.bind(this)
    this.search = this.search.bind(this)
    this.load = this.load.bind(this)
    this.create = this.create.bind(this)
    this.update = this.update.bind(this)
    this.patch = this.patch.bind(this)
    this.delete = this.delete.bind(this)
    this.assign = this.assign.bind(this)
  }
  all(req: Request, res: Response) {
    this.service
      .all()
      .then((roles) => res.status(200).json(roles))
      .catch((err) => handleError(err, res, this.log))
  }
  async search(req: Request, res: Response) {
      const filter = fromRequest<RoleFilter>(req, ["status"])
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
        const role = await this.service.load(id)
        res.status(role ? 200 : 404).json(role).end()
      } catch (err) {
        handleError(err, res, this.log)
      }
    }
    async create(req: Request, res: Response) {
      const userId = res.locals.account.id
      const role: Role = req.body
      role.createdBy = userId
      role.createdAt = new Date()
      role.updatedBy = userId
      role.updatedAt = new Date()
      let language = res.locals.lang || "en"
      const resource = getResource(language)
      const errors = validate<Role>(role, roleModel, resource)
      if (errors.length > 0) {
        return respondError(res, errors)
      }
      try {
        const result = await this.service.create(role)
        const status = isSuccessful(result) ? 201 : 409
        res.status(status).json(role).end()
      } catch (err) {
        handleError(err, res, this.log)
      }
    }
    async update(req: Request, res: Response) {
      const id = req.params.id as string
      const userId = res.locals.account.id
      const role: Role = req.body
      role.roleId = id
      role.updatedBy = userId
      role.updatedAt = new Date()
      let language = res.locals.lang || "en"
      const resource = getResource(language)
      const errors = validate<Role>(role, roleModel, resource)
      if (errors.length > 0) {
        return respondError(res, errors)
      }
      try {
        const result = await this.service.update(role)
        const status = isSuccessful(result) ? 200 : 410
        res.status(status).json(role).end()
      } catch (err) {
        handleError(err, res, this.log)
      }
    }
    async patch(req: Request, res: Response) {
      const id = req.params.id as string
      const userId = res.locals.account.id
      const role: Role = req.body
      role.roleId = id
      role.updatedBy = userId
      role.updatedAt = new Date()
      let language = res.locals.lang || "en"
      const resource = getResource(language)
      const errors = validate<Role>(role, roleModel, resource, false, true)
      if (errors.length > 0) {
        return respondError(res, errors)
      }
      try {
        const result = await this.service.update(role)
        const status = isSuccessful(result) ? 200 : 410
        res.status(status).json(role).end()
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
  assign(req: Request, res: Response) {
    const id = req.params.id
    const users: string[] = req.body
    if (!Array.isArray(users)) {
      res.status(400).end(`'Body must be an array`)
    } else {
      this.service
        .assign(id, users)
        .then((r) => res.status(200).json(r))
        .catch((err) => handleError(err, res, this.log))
    }
  }
}
