import { merge } from "config-plus"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import express, { json } from "express"
import { AuthenticationVerifier } from "express-jsonwebtoken"
import { allow, resources } from "express-web-kit"
import http from "http"
import { createLogger, updateLog } from "logger-core"
import { MiddlewareLogger } from "middleware-logging"
import { Pool } from "pg"
import { PoolManager } from "postgres-kit"
import { config, environments } from "./config"
import { useContext } from "./context"
import { route } from "./route"

const logger = createLogger(config.log)

dotenv.config()
const cfg = merge(config, process.env, environments, process.env.ENV)
updateLog(logger, cfg.log)

const app = express()
resources.log = logger.error

const middleware = new MiddlewareLogger(logger.info, cfg.middleware)
app.use(allow(cfg.allow), json())

const verifier = new AuthenticationVerifier(
  cfg.middleware.skips,
  logger.error,
  "account",
  "userId",
  "id",
  "access_token",
  cfg.token.secret,
  cfg.token.expires,
  "strict",
  "remember_token",
  cfg.rememberToken.secret,
  "username",
)
app.use(cookieParser(), verifier.verify)

const pool = new Pool(cfg.db)
const db = new PoolManager(pool)
const ctx = useContext(db, logger, middleware, cfg)
route(app, ctx)
http.createServer(app).listen(cfg.port, () => {
  console.log("Start server at port " + cfg.port)
})
