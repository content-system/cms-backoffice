import { Application } from "express"
import { check } from "express-ext"
import multer from "multer"
import { del, get, patch, post, put, read, write } from "security-express"
import { articleModel } from "./article"
import { contactModel } from "./contact"
import { ApplicationContext } from "./context"
import { jobModel } from "./job"

export function route(app: Application, ctx: ApplicationContext, secure?: boolean): void {
  const parser = multer()
  app.get("/health", ctx.health.check)
  app.patch("/log", ctx.log.config)
  app.patch("/middleware", ctx.middleware.config)
  app.post("/authenticate", parser.none(), ctx.authentication.authenticate)

  const readRole = ctx.authorize("role", read)
  const writeRole = ctx.authorize("role", write)
  get(app, "/privileges", readRole, ctx.privilege.all, secure)
  put(app, "/roles/:id/assign", writeRole, ctx.role.assign, secure)
  get(app, "/roles", readRole, ctx.role.search, secure)
  post(app, "/roles/search", readRole, ctx.role.search, secure)
  get(app, "/roles/search", readRole, ctx.role.search, secure)
  get(app, "/roles/:id", readRole, ctx.role.load, secure)
  post(app, "/roles", writeRole, ctx.role.create, secure)
  put(app, "/roles/:id", writeRole, ctx.role.update, secure)
  patch(app, "/roles/:id", writeRole, ctx.role.patch, secure)
  del(app, "/roles/:id", writeRole, ctx.role.delete, secure)

  const readUser = ctx.authorize("user", read)
  const writeUser = ctx.authorize("user", write)
  get(app, "/users", readUser, ctx.user.all, secure)
  post(app, "/users/search", readUser, ctx.user.search, secure)
  get(app, "/users/search", readUser, ctx.user.search, secure)
  get(app, "/users/:id", readUser, ctx.user.load, secure)
  post(app, "/users", writeUser, ctx.user.create, secure)
  put(app, "/users/:id", writeUser, ctx.user.update, secure)
  patch(app, "/users/:id", writeUser, ctx.user.patch, secure)
  del(app, "/users/:id", writeUser, ctx.user.delete, secure)

  const readAuditLog = ctx.authorize("audit_log", read)
  get(app, "/audit-logs", readAuditLog, ctx.auditLog.search, secure)
  get(app, "/audit-logs/search", readAuditLog, ctx.auditLog.search, secure)
  post(app, "/audit-logs/search", readAuditLog, ctx.auditLog.search, secure)
  get(app, "/audit-logs/:id", readAuditLog, ctx.auditLog.load, secure)

  const checkArticle = check(articleModel)
  app.post("/articles/search", ctx.article.search)
  app.get("/articles/search", ctx.article.search)
  app.get("/articles/:id", ctx.article.load)
  app.post("/articles", checkArticle, ctx.article.create)
  app.put("/articles/:id", checkArticle, ctx.article.update)
  app.patch("/articles/:id", checkArticle, ctx.article.patch)
  app.delete("/articles/:id", ctx.article.delete)

  const checkJob = check(jobModel)
  app.post("/jobs/search", ctx.job.search)
  app.get("/jobs/search", ctx.job.search)
  app.get("/jobs/:id", ctx.job.load)
  app.post("/jobs", checkJob, ctx.job.create)
  app.put("/jobs/:id", checkJob, ctx.job.update)
  app.patch("/jobs/:id", checkJob, ctx.job.patch)
  app.delete("/jobs/:id", ctx.job.delete)

  const checkContact = check(contactModel)
  app.post("/contacts/search", ctx.contact.search)
  app.get("/contacts/search", ctx.contact.search)
  app.get("/contacts/:id", ctx.contact.load)
  app.post("/contacts", checkContact, ctx.contact.create)
  app.put("/contacts/:id", checkContact, ctx.contact.update)
  app.patch("/contacts/:id", checkContact, ctx.contact.patch)
  app.delete("/contacts/:id", ctx.contact.delete)
}
