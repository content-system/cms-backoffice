import { Attribute, Attributes, Log, Search, StringMap } from "onecore"
import { buildMap, buildToInsert, buildToInsertBatch, buildToUpdate, DB, metadata, SearchBuilder, SearchResult, Statement } from "query-core"
import { TemplateMap, useQuery } from "query-mappers"
import { UserController } from "./controller"
import { User, UserFilter, userModel, UserRepository } from "./user"
export * from "./controller"

export function useUserController(log: Log, db: DB, mapper?: TemplateMap): UserController {
  const query = useQuery("user", mapper, userModel, true)
  const builder = new SearchBuilder<User, UserFilter>(db.query, "users", userModel, db.driver, query)
  const service = new SqlUserRepository(builder.search, db)
  return new UserController(log, service)
}

const userRoleModel: Attributes = {
  userId: {
    column: "user_id",
    key: true,
  },
  roleId: {
    column: "role_id",
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
    this.getUsersOfRole = this.getUsersOfRole.bind(this)
    this.search = this.search.bind(this)
    this.all = this.all.bind(this)
    this.load = this.load.bind(this)
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
    const sql = `
      select u.*
      from user_roles ur
        inner join users u on u.user_id = ur.user_id
      where ur.role_id = ${this.db.param(1)}
      order by user_id`
    return this.db.query(sql, [roleId], this.map)
  }
  search(filter: UserFilter, limit: number, page?: number | string, fields?: string[]): Promise<SearchResult<User>> {
    return this.find(filter, limit, page, fields)
  }
  all(): Promise<User[]> {
    return this.db.query("select * from users order by user_id asc", undefined, this.map)
  }
  load(id: string): Promise<User | null> {
    return this.db.query<User>(`select * from users where user_id = ${this.db.param(1)}`, [id], this.map).then((users) => {
      if (!users || users.length === 0) {
        return null
      }
      const user = users[0]
      const sql = `select role_id from user_roles where user_id = ${this.db.param(1)}`
      return this.db.query<UserRole>(sql, [user.userId]).then((roles) => {
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
    stmts.push({ query: `delete from users where user_id = ${this.db.param(1)}`, params: [id] })
    stmts.push({ query: `delete from user_roles where user_id = ${this.db.param(1)}`, params: [id] })
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
