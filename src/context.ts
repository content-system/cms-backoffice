import { HealthController, LogController, Logger, Middleware, MiddlewareController, resources } from "express-ext"
import { createChecker, DB } from "query-core"
import { check } from "types-validation"
import { createValidator } from "xvalidators"
import { UserController, useUserController } from "./user"

resources.createValidator = createValidator
resources.check = check

export interface ApplicationContext {
  health: HealthController
  log: LogController
  middleware: MiddlewareController
  user: UserController
}
export function useContext(db: DB, logger: Logger, midLogger: Middleware): ApplicationContext {
  const log = new LogController(logger)
  const middleware = new MiddlewareController(midLogger)
  const sqlChecker = createChecker(db)
  const health = new HealthController([sqlChecker])

  const user = useUserController(logger.error, db)

  return { health, log, middleware, user }
}
