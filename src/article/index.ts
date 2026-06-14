import { DB, Log } from "onecore"
import { ApproversAdapter } from "../shared/approvers"
import { HistoryAdapter, ignoreFields } from "../shared/history"
import { NotificationAdapter } from "../shared/notification"
import { Article } from "./article"
import { ArticleController } from "./controller"
import { SqlArticleRepository, SqlDraftArticleRepository } from "./repository"
import { ArticleUseCase } from "./service"
export * from "./article"
export * from "./controller"

export function useArticleController(db: DB, log: Log): ArticleController {
  const draftRepository = new SqlDraftArticleRepository(db)
  const repository = new SqlArticleRepository(db)
  const historyRepository = new HistoryAdapter<Article>(db, "article", "histories", ignoreFields, "history_id", "entity", "id", "author")
  const approversPort = new ApproversAdapter(db, "article")
  const notificationPort = new NotificationAdapter(db, "notifications", "U", "time", "url", "id", "sender", "receiver", "message", "status")
  const service = new ArticleUseCase(db, draftRepository, repository, historyRepository, approversPort, notificationPort, log)
  return new ArticleController(service)
}
