import { Request, Response } from "express"
import { Controller, handleError, queryParam } from "express-ext"
import { Attribute, Attributes, Log, Search, StringMap } from "onecore"
import {
  buildMap,
  buildToDelete,
  buildToInsert,
  buildToInsertBatch,
  buildToUpdate,
  DB,
  metadata,
  SearchBuilder,
  SearchResult,
  select,
  Statement,
} from "query-core"
import { TemplateMap, useQuery } from "query-mappers"
import { User, UserFilter, userModel, UserRepository, UserService } from "./user"

export * from "./user"

export function useUserService(db: DB, mapper?: TemplateMap): UserService {
  const query = useQuery("user", mapper, userModel, true)
  const builder = new SearchBuilder<User, UserFilter>(db.query, "users", userModel, db.driver, query)
  return new SqlUserRepository(builder.search, db)
}
export function useUserController(log: Log, db: DB, mapper?: TemplateMap): UserController {
  return new UserController(log, useUserService(db, mapper))
}

export class UserController extends Controller<User, string, UserFilter> {
  constructor(log: Log, private userService: UserService) {
    super(log, userService)
    this.array = ["status"]
    this.all = this.all.bind(this)
    this.getUsersOfRole = this.getUsersOfRole.bind(this)
  }
  all(req: Request, res: Response) {
    const v = req.query["roleId"]
    if (v && v.toString().length > 0) {
      this.userService
        .getUsersOfRole(v.toString())
        .then((users) => res.status(200).json(users))
        .catch((err) => handleError(err, res, this.log))
    } else {
      if (this.userService.all) {
        this.userService
          .all()
          .then((users) => res.status(200).json(users))
          .catch((err) => handleError(err, res, this.log))
      } else {
        res.status(400).end("roleId is required")
      }
    }
  }
  getUsersOfRole(req: Request, res: Response) {
    const id = queryParam(req, res, "roleId")
    if (id) {
      this.userService
        .getUsersOfRole(id)
        .then((users) => res.status(200).json(users))
        .catch((err) => handleError(err, res, this.log))
    }
  }
}

const userRoleModel: Attributes = {
  userId: {
    key: true,
  },
  roleId: {
    key: true,
  },
}
interface UserRole {
  userId?: string
  roleId: string
}
export class SqlUserRepository implements UserRepository {
  constructor(private find: Search<User, UserFilter>, private db: DB) {
    this.attributes = userModel
    const meta = metadata(userModel)
    this.primaryKeys = meta.keys
    this.search = this.search.bind(this)
    this.all = this.all.bind(this)
    this.create = this.create.bind(this)
    this.update = this.update.bind(this)
    this.patch = this.patch.bind(this)
    this.delete = this.delete.bind(this)
    this.map = buildMap(userModel)
  }
  map?: StringMap
  primaryKeys: Attribute[]
  attributes: Attributes

  getUsersOfRole(roleId: string): Promise<User[]> {
    if (!roleId || roleId.length === 0) {
      return Promise.resolve([])
    }
    const q = `
      select u.*
      from user_roles ur
        inner join users u on u.user_id = ur.user_id
      where ur.role_id = ${this.db.param(1)}
      order by user_id`
    return this.db.query(q, [roleId], this.map)
  }
  search(s: UserFilter, limit?: number, offset?: number | string, fields?: string[]): Promise<SearchResult<User>> {
    return this.find(s, limit, offset, fields)
  }
  all(): Promise<User[]> {
    return this.db.query("select * from users order by user_id asc", undefined, this.map)
  }
  load(id: string): Promise<User | null> {
    const stmt = select(id, "users", this.primaryKeys, this.db.param)
    if (!stmt) {
      return Promise.resolve(null)
    }
    return this.db.query<User>(stmt.query, stmt.params, this.map).then((users) => {
      if (!users || users.length === 0) {
        return null
      }
      const user = users[0]
      const q = `select role_id from user_roles where user_id = ${this.db.param(1)}`
      return this.db.query<UserRole>(q, [user.userId]).then((roles) => {
        if (roles && roles.length > 0) {
          user.roles = roles.map((i) => i.roleId)
        }
        return user
      })
    })
  }
  create(user: User): Promise<number> {
    const stmts: Statement[] = []
    const stmt = buildToInsert(user, "users", userModel, this.db.param)
    if (!stmt) {
      return Promise.resolve(-1)
    }
    stmts.push(stmt)
    insertUserRoles(stmts, user.userId, user.roles, this.db.param)
    return this.db.execBatch(stmts)
  }
  update(user: User): Promise<number> {
    const stmts: Statement[] = []
    const stmt = buildToUpdate(user, "users", userModel, this.db.param)
    if (!stmt) {
      return Promise.resolve(-1)
    }
    const query = `delete from user_roles where user_id = ${this.db.param(1)}`
    stmts.push({ query, params: [user.userId] })
    insertUserRoles(stmts, user.userId, user.roles, this.db.param)
    return this.db.exec(stmt.query, stmt.params)
  }
  patch(user: User): Promise<number> {
    return this.update(user)
  }
  delete(id: string): Promise<number> {
    const stmts: Statement[] = []
    const query = `delete from user_roles where user_id = ${this.db.param(1)}`
    stmts.push({ query, params: [id] })
    const stmt = buildToDelete(id, "users", this.primaryKeys, this.db.param)
    if (!stmt) {
      return Promise.resolve(-1)
    }
    stmts.push(stmt)
    return this.db.execBatch(stmts)
  }
}

function insertUserRoles(stmts: Statement[], userId: string, roles: string[] | undefined, param: (i: number) => string): Statement[] {
  if (roles && roles.length > 0) {
    const userRoles = roles.map<UserRole>((i) => {
      const userRole: UserRole = { userId, roleId: i }
      return userRole
    })
    const stmt = buildToInsertBatch(userRoles, "user_roles", userRoleModel, param)
    if (stmt) {
      stmts.push(stmt)
    }
  }
  return stmts
}
