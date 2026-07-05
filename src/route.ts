import { Application, NextFunction, Request, Response } from "express"
import { check } from "express-core-web"
import { sign, verify } from "jsonwebtoken"
import multer from "multer"
import { read, write } from "security-express"
import { articleModel } from "./article"
import { contactModel } from "./contact"
import { ApplicationContext } from "./context"
import { jobModel } from "./job"

export const approve = 8

export class TokenVerifier {
  protected username: string
  protected payloadUsername: string
  constructor(
    protected account: string,
    protected userId: string,
    protected payloadId: string,
    protected token: string,
    protected secret: string,
    protected expiresIn: number,
    protected remember: string,
    protected rememberSecret: string,
    username?: string,
    payloadUsername?: string,
  ) {
    this.username = username ? username : "username"
    this.payloadUsername = payloadUsername ? payloadUsername : "username"
    this.verify = this.verify.bind(this)
  }

  verify(req: Request, res: Response, next: NextFunction) {
    let token: string | undefined
    let remember: string | undefined
    if (req.cookies) {
      token = req.cookies[this.token]
      remember = req.cookies[this.remember]
    }
    if (!token) {
      if (!remember) {
        next()
      } else {
        verify(remember, this.rememberSecret, (err2: any, decoded2: any) => {
          if (err2) {
            next()
          } else {
            removeJWTFields(decoded2)
            const newToken = sign(decoded2, this.secret, { expiresIn: this.expiresIn })
            res.cookie(this.token, newToken, { httpOnly: true, secure: true, sameSite: "lax", maxAge: this.expiresIn })
            res.locals[this.account] = decoded2
            res.locals[this.userId] = decoded2[this.payloadId]
            if (decoded2[this.username]) {
              res.locals[this.username] = decoded2[this.payloadUsername]
            }
            next()
          }
        })
      }
    } else {
      verify(token, this.secret, (err: any, decoded: any) => {
        if (err) {
          if (!remember) {
            next()
          } else {
            verify(remember, this.rememberSecret, (err2: any, decoded2: any) => {
              if (err2) {
                next()
              } else {
                removeJWTFields(decoded2)
                const newToken = sign(decoded2, this.secret, { expiresIn: this.expiresIn })
                res.cookie(this.token, newToken, { httpOnly: true, secure: true, sameSite: "lax", maxAge: this.expiresIn })
                res.locals[this.account] = decoded2
                res.locals[this.userId] = decoded2[this.payloadId]
                if (decoded2[this.username]) {
                  res.locals[this.username] = decoded2[this.payloadUsername]
                }
                next()
              }
            })
          }
        } else {
          removeJWTFields(decoded)
          res.locals[this.account] = decoded
          res.locals[this.userId] = decoded[this.payloadId]
          if (decoded[this.username]) {
            res.locals[this.username] = decoded[this.payloadUsername]
          }
          next()
        }
      })
    }
  }
}
function removeJWTFields(obj: any) {
  delete obj.iat
  delete obj.exp
}

export function route(app: Application, ctx: ApplicationContext, secure?: boolean): void {
  const parser = multer()
  app.get("/health", ctx.health.check)
  app.patch("/log", ctx.log.config)
  app.patch("/middleware", ctx.middleware.config)
  app.post("/authenticate", parser.none(), ctx.authentication.authenticate)

  const readRole = ctx.authorize("role", read)
  const writeRole = ctx.authorize("role", write)
  app.get("/privileges", readRole, ctx.privilege.all)
  app.put("/roles/:id/assign", writeRole, ctx.role.assign)
  app.post("/roles/search", readRole, ctx.role.search)
  app.get("/roles/search", readRole, ctx.role.search)
  app.get("/roles/:id", readRole, ctx.role.load)
  app.post("/roles", writeRole, ctx.role.create)
  app.put("/roles/:id", writeRole, ctx.role.update)
  app.patch("/roles/:id", writeRole, ctx.role.patch)
  app.delete("/roles/:id", writeRole, ctx.role.delete)

  const readUser = ctx.authorize("user", read)
  const writeUser = ctx.authorize("user", write)
  app.get("/roles", readUser, ctx.role.all)
  app.get("/users", readUser, ctx.user.getUsersOfRole)
  app.post("/users/search", readUser, ctx.user.search)
  app.get("/users/search", readUser, ctx.user.search)
  app.get("/users/:id", readUser, ctx.user.load)
  app.post("/users", writeUser, ctx.user.create)
  app.put("/users/:id", writeUser, ctx.user.update)
  app.patch("/users/:id", writeUser, ctx.user.patch)
  app.delete("/users/:id", writeUser, ctx.user.delete)

  const readAuditLog = ctx.authorize("audit_log", read)
  app.get("/audit-logs", readAuditLog, ctx.auditLog.search)
  app.post("/audit-logs/search", readAuditLog, ctx.auditLog.search)
  app.get("/audit-logs/search", readAuditLog, ctx.auditLog.search)
  app.get("/audit-logs/:id", readAuditLog, ctx.auditLog.load)

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
  const approveArticle = ctx.authorize("article", approve)
  const checkArticle = check(articleModel)
  app.get("/articles", readArticle, ctx.article.search)
  app.get("/articles/search", readArticle, ctx.article.search)
  app.post("/articles/search", readArticle, ctx.article.search)
  app.get("/articles/:id/draft", readArticle, ctx.article.loadDraft)
  app.get("/articles/:id", readArticle, ctx.article.load)
  app.get("/articles/:id/history", readArticle, ctx.article.getHistories)
  app.post("/articles", writeArticle, checkArticle, ctx.article.create)
  app.put("/articles/:id", writeArticle, checkArticle, ctx.article.update)
  app.patch("/articles/:id", writeArticle, checkArticle, ctx.article.patch)
  app.patch("/articles/:id/approve", approveArticle, ctx.article.approve)
  app.patch("/articles/:id/reject", approveArticle, ctx.article.reject)
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
