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
  post(app, "/roles/search", readRole, ctx.role.search, secure)
  get(app, "/roles/search", readRole, ctx.role.search, secure)
  get(app, "/roles/:id", readRole, ctx.role.load, secure)
  post(app, "/roles", writeRole, ctx.role.create, secure)
  put(app, "/roles/:id", writeRole, ctx.role.update, secure)
  patch(app, "/roles/:id", writeRole, ctx.role.patch, secure)
  del(app, "/roles/:id", writeRole, ctx.role.delete, secure)

  const readUser = ctx.authorize("user", read)
  const writeUser = ctx.authorize("user", write)
  get(app, "/roles", readUser, ctx.role.all, secure)
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

  const readCategory = ctx.authorize("category", read)
  const writeCategory = ctx.authorize("category", write)
  app.post("/categories/search", readCategory, ctx.category.search)
  app.get("/categories/search", readCategory, ctx.category.search)
  app.get("/categories/:id", readCategory, ctx.category.load)
  app.post("/categories", writeCategory, ctx.category.create)
  app.put("/categories/:id", writeCategory, ctx.category.update)
  app.patch("/categories/:id", writeCategory, ctx.category.patch)
  app.delete("/categories/:id", writeCategory, ctx.category.delete)

  const readContent = ctx.authorize("content", read)
  const writeContent = ctx.authorize("content", write)
  app.post("/contents/search", readContent, ctx.content.search)
  app.get("/contents/search", readContent, ctx.content.search)
  app.get("/contents/:id/:lang", readContent, ctx.content.load)
  app.post("/contents", writeContent, ctx.content.create)
  app.put("/contents/:id/:lang", writeContent, ctx.content.update)
  app.patch("/contents/:id/:lang", writeContent, ctx.content.patch)
  app.delete("/contents/:id/:lang", writeContent, ctx.content.delete)

  const readArticle = ctx.authorize("article", read)
  const writeArticle = ctx.authorize("article", write)
  const checkArticle = check(articleModel)
  app.post("/articles/search", readArticle, ctx.article.search)
  app.get("/articles/search", readArticle, ctx.article.search)
  app.get("/articles/:id", readArticle, ctx.article.load)
  app.post("/articles", writeArticle, checkArticle, ctx.article.create)
  app.put("/articles/:id", writeArticle, checkArticle, ctx.article.update)
  app.patch("/articles/:id", writeArticle, checkArticle, ctx.article.patch)
  app.delete("/articles/:id", writeArticle, ctx.article.delete)

  const readJob = ctx.authorize("job", read)
  const writeJob = ctx.authorize("job", write)
  const checkJob = check(jobModel)
  app.post("/jobs/search", readJob, ctx.job.search)
  app.get("/jobs/search", readJob, ctx.job.search)
  app.get("/jobs/:id", readJob, ctx.job.load)
  app.post("/jobs", writeJob, checkJob, ctx.job.create)
  app.put("/jobs/:id", writeJob, checkJob, ctx.job.update)
  app.patch("/jobs/:id", writeJob, checkJob, ctx.job.patch)
  app.delete("/jobs/:id", writeJob, ctx.job.delete)

  const readContact = ctx.authorize("contact", read)
  const writeContact = ctx.authorize("contact", write)
  const checkContact = check(contactModel)
  app.post("/contacts/search", readContact, ctx.contact.search)
  app.get("/contacts/search", readContact, ctx.contact.search)
  app.get("/contacts/:id", readContact, ctx.contact.load)
  app.post("/contacts", writeContact, checkContact, ctx.contact.create)
  app.put("/contacts/:id", writeContact, checkContact, ctx.contact.update)
  app.patch("/contacts/:id", writeContact, checkContact, ctx.contact.patch)
  app.delete("/contacts/:id", writeContact, ctx.contact.delete)
}
