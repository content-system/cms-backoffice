import { Request, Response } from "express"
import { Controller, handleError } from "express-ext"
import { Role, RoleFilter, RoleService } from "./role"

export class RoleController extends Controller<Role, string, RoleFilter> {
  constructor(log: (msg: any, ctx?: any) => void, private roleService: RoleService) {
    super(log, roleService)
    this.array = ["status"]
    this.all = this.all.bind(this)
    this.assign = this.assign.bind(this)
  }
  all(req: Request, res: Response) {
    this.roleService
      .all()
      .then((roles) => res.status(200).json(roles))
      .catch((err) => handleError(err, res, this.log))
  }
  assign(req: Request, res: Response) {
    const id = req.params.id
    const users: string[] = req.body
    if (!Array.isArray(users)) {
      res.status(400).end(`'Body must be an array`)
    } else {
      this.roleService
        .assign(id, users)
        .then((r) => res.status(200).json(r))
        .catch((err) => handleError(err, res, this.log))
    }
  }
}
