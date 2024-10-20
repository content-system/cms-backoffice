import { Application } from "express"
import { check } from "express-ext"
import { articleModel } from "./article"
import { contactModel } from "./contact"
import { ApplicationContext } from "./context"
import { jobModel } from "./job"
import { userModel } from "./user"

export function route(app: Application, ctx: ApplicationContext): void {
  app.get("/health", ctx.health.check)
  app.patch("/log", ctx.log.config)
  app.patch("/middleware", ctx.middleware.config)

  const checkUser = check(userModel)
  app.post("/users/search", ctx.user.search)
  app.get("/users/search", ctx.user.search)
  app.get("/users/:id", ctx.user.load)
  app.post("/users", checkUser, ctx.user.create)
  app.put("/users/:id", checkUser, ctx.user.update)
  app.patch("/users/:id", checkUser, ctx.user.patch)
  app.delete("/users/:id", ctx.user.delete)

  const checkArticle = check(articleModel)
  app.post("/news/search", ctx.article.search)
  app.get("/news/search", ctx.article.search)
  app.get("/news/:id", ctx.article.load)
  app.post("/news", checkArticle, ctx.article.create)
  app.put("/news/:id", checkArticle, ctx.article.update)
  app.patch("/news/:id", checkArticle, ctx.article.patch)
  app.delete("/news/:id", ctx.article.delete)

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
