import { Request, Response } from "express"
import { Controller, handleError, queryParam } from "express-ext"
import { Log } from "onecore"
import { User, UserFilter, UserService } from "./user"

export class UserController extends Controller<User, string, UserFilter> {
  constructor(public service: UserService, log: Log) {
    super(log, service)
    this.array = ["status"]
    this.all = this.all.bind(this)
    this.getUsersOfRole = this.getUsersOfRole.bind(this)
  }
  async all(req: Request, res: Response) {
    const v = req.query["roleId"]
    try {
      if (v && v.toString().length > 0) {
        const users = await this.service.getUsersOfRole(v.toString())
        res.status(200).json(users).end()
      } else {
        const users = await this.service.all()
        res.status(200).json(users).end()
      }
    } catch (err) {
      handleError(err, res, this.log)
    }
  }
  async getUsersOfRole(req: Request, res: Response) {
    const id = queryParam(req, res, "roleId")
    if (id) {
      try {
        const users = await this.service.getUsersOfRole(id)
        res.status(200).json(users).end()
      } catch (err) {
        handleError(err, res, this.log)
      }
    }
  }
}
