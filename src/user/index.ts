import { Controller } from "express-ext"
import { Log, Manager, Search } from "onecore"
import { DB, Repository, SearchBuilder } from "query-core"
import { User, UserFilter, userModel, UserRepository, UserService } from "./user"
export * from "./user"

export class SqlUserRepository extends Repository<User, string> implements UserRepository {
  constructor(db: DB) {
    super(db, "users", userModel)
  }
}
export class UserManager extends Manager<User, string, UserFilter> implements UserService {
  constructor(search: Search<User, UserFilter>, repository: UserRepository) {
    super(search, repository)
  }
}
export class UserController extends Controller<User, string, UserFilter> {
  constructor(log: Log, service: UserService) {
    super(log, service)
  }
}

export function useUserService(db: DB): UserService {
  const builder = new SearchBuilder<User, UserFilter>(db.query, "users", userModel, db.driver)
  const repository = new SqlUserRepository(db)
  return new UserManager(builder.search, repository)
}
export function useUserController(log: Log, db: DB): UserController {
  return new UserController(log, useUserService(db))
}
