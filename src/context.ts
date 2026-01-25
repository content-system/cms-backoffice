import { AuthenticationController, PrivilegeController } from "authen-express"
import { Authenticator, initializeStatus, PrivilegeRepository, PrivilegesReader, SqlAuthConfig, User, useUserRepository } from "authen-service"
import { compare } from "bcrypt"
import { HealthController, LogController, Logger, Middleware, MiddlewareController, resources, Search, useSearchController } from "express-ext"
import { buildJwtError, generateToken, Payload, verify } from "jsonwebtoken-plus"
import { StringMap } from "onecore"
import { createChecker, DB, SearchBuilder, useGet } from "query-core"
import { TemplateMap } from "query-mappers"
import { Authorize, Authorizer, PrivilegeLoader, useToken } from "security-express"
import { check } from "types-validation"
import { createValidator } from "xvalidators"
import { ArticleController, useArticleController } from "./article"
import { AuditLog, AuditLogFilter, auditLogModel } from "./audit-log"
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
  authentication: AuthenticationController<User, string>
  privilege: PrivilegeController
  role: RoleController
  user: UserController
  auditLog: Search
  category: CategoryController
  content: ContentController
  article: ArticleController
  job: JobController
  contact: ContactController
}
export function useContext(db: DB, logger: Logger, midLogger: Middleware, conf: Config, mapper?: TemplateMap): ApplicationContext {
  const log = new LogController(logger)
  const middleware = new MiddlewareController(midLogger)
  const sqlChecker = createChecker(db)
  const health = new HealthController([sqlChecker])

  const auth = conf.auth
  const privilegeLoader = new PrivilegeLoader(conf.sql.permission, db.query)
  const token = useToken<Payload>(auth.token.secret, verify, buildJwtError, conf.cookie)
  const authorizer = new Authorizer<Payload>(token, privilegeLoader.privilege, buildJwtError, true)

  const status = initializeStatus(auth.status)
  const privilegeRepository = new PrivilegeRepository(db.query, conf.sql.privileges)
  const userRepository = useUserRepository<string, SqlAuthConfig>(db, auth, conf.map)
  const authenticator = new Authenticator(
    status,
    compare,
    generateToken,
    auth.token,
    auth.payload,
    auth.account,
    userRepository,
    privilegeRepository.privileges,
    auth.lockedMinutes,
    auth.maxPasswordFailed,
  )
  const authentication = new AuthenticationController(logger.error, authenticator.authenticate, conf.cookie)
  const privilegesLoader = new PrivilegesReader(db.query, conf.sql.allPrivileges)
  const privilege = new PrivilegeController(logger.error, privilegesLoader.privileges)

  const role = useRoleController(db, logger.error, mapper)
  const user = useUserController(db, logger.error, mapper)

  const builder = new SearchBuilder<AuditLog, AuditLogFilter>(db.query, "audit_logs", auditLogModel, db.driver)
  const getAuditLog = useGet<AuditLog, string>(db.query, "audit_logs", auditLogModel, db.param)
  const auditLog = useSearchController(logger.error, builder.search, getAuditLog, ["status"], ["timestamp"])

  const content = useContentController(db, logger.error)
  const category = useCategoryController(db, logger.error)
  const article = useArticleController(db, logger.error)
  const job = useJobController(db, logger.error)
  const contact = useContactController(db, logger.error)

  return { health, log, middleware, authorize: authorizer.authorize, authentication, privilege, role, user, auditLog, content, category, article, job, contact }
}
