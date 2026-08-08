import { Authenticator, initializeStatus, PrivilegeRepository, PrivilegesReader, SqlAuthConfig, Token, User, useUserRepository } from "authen-service"
import { AuthenticationController, PrivilegeController } from "authentication-express"
import { compare, hash } from "bcryptjs"
import { TokenController } from "express-jsonwebtoken"
import { HealthController, LogController, resources } from "express-web-kit"
import { Logger, updateLogger } from "logger-core"
import { Middleware, MiddlewareController } from "middleware-logging"
import { StringMap } from "onecore"
import { Authorize, Authorizer, PrivilegeLoader } from "security-express"
import { createChecker, DB } from "sql-core"
import { check } from "types-validation"
import { createValidator } from "validation-core"
import { ArticleController, useArticleController } from "./article"
import { AuditLogController, useAuditLogController } from "./audit-log"
import { CategoryController, useCategoryController } from "./category"
import { ContactController, useContactController } from "./contact"
import { ContentController, useContentController } from "./content"
import { JobController, useJobController } from "./job"
import { RoleController, useRoleController } from "./role"
import { UserController, useUserController } from "./user"

resources.createValidator = createValidator
resources.check = check

export interface Config {
  cookie?: boolean
  token: Token
  rememberToken: Token
  payload: StringMap
  auth: SqlAuthConfig
  map: StringMap
  sql: {
    allPrivileges: string
    privileges: string
    permission: string
  }
}

export interface ApplicationContext {
  health: HealthController
  log: LogController
  middleware: MiddlewareController
  authorize: Authorize
  authentication: AuthenticationController<User>
  privilege: PrivilegeController
  token: TokenController
  role: RoleController
  user: UserController
  auditLog: AuditLogController
  category: CategoryController
  content: ContentController
  article: ArticleController
  job: JobController
  contact: ContactController
}

export class Comparator {
  constructor(saltOrRounds?: string | number) {
    this.saltOrRounds = saltOrRounds ? saltOrRounds : 10
    this.compare = this.compare.bind(this)
    this.hash = this.hash.bind(this)
  }
  saltOrRounds: string | number
  compare(data: string, encrypted: string): Promise<boolean> {
    return compare(data, encrypted)
  }
  hash(data: string): Promise<string> {
    return hash(data, this.saltOrRounds)
  }
}

export function useContext(db: DB, logger: Logger, midLogger: Middleware, cfg: Config): ApplicationContext {
  const log = new LogController(logger, updateLogger)
  const middleware = new MiddlewareController(midLogger)
  const sqlChecker = createChecker(db)
  const health = new HealthController([sqlChecker])

  const auth = cfg.auth
  const privilegeLoader = new PrivilegeLoader(cfg.sql.permission, db.query)
  const authorizer = new Authorizer(privilegeLoader.privilege, logger.error, true, "userId", "permissions")

  const status = initializeStatus(auth.status)
  const privilegeRepository = new PrivilegeRepository(db.query, cfg.sql.privileges)
  const userRepository = useUserRepository<string, SqlAuthConfig>(db, auth, cfg.map)
  const authenticator = new Authenticator(
    status,
    compare,
    auth.account,
    userRepository,
    privilegeRepository.privileges,
    auth.lockedMinutes,
    auth.maxPasswordFailed,
  )
  const authentication = new AuthenticationController(
    authenticator.authenticate,
    logger.error,
    "access_token",
    cfg.token.secret,
    cfg.token.expires,
    "strict",
    cfg.payload,
    "remember_token",
    cfg.rememberToken.secret,
    cfg.rememberToken.expires,
    cfg.cookie,
  )
  const privilegesLoader = new PrivilegesReader(db.query, cfg.sql.allPrivileges)
  const privilege = new PrivilegeController(privilegesLoader.privileges, logger.error)
  const tokenController = new TokenController("token", cfg.token.secret, cfg.token.expires, "strict", "remember", cfg.rememberToken.secret, logger.error)

  const role = useRoleController(db)
  const user = useUserController(db)
  const auditLog = useAuditLogController(db)

  const category = useCategoryController(db)
  const content = useContentController(db)
  const article = useArticleController(db, logger.error)
  const job = useJobController(db)
  const contact = useContactController(db)

  return {
    health,
    log,
    middleware,
    authorize: authorizer.authorize,
    authentication,
    privilege,
    token: tokenController,
    role,
    user,
    auditLog,
    category,
    content,
    article,
    job,
    contact,
  }
}
