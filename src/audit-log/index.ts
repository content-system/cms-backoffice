import { SearchController, Search as SearchManager, useSearchController } from "express-ext"
import { Log, Search } from "onecore"
import { DB, SearchBuilder, useGet } from "query-core"
import { AuditLog, AuditLogFilter, auditLogModel } from "./audit-log"

export * from "./audit-log"

export function useAuditLogController(log: Log, db: DB): SearchManager {
  const builder = new SearchBuilder<AuditLog, AuditLogFilter>(db.query, "audit_logs", auditLogModel, db.driver)
  const getAuditLog = useGet<AuditLog, string>(db.query, "audit_logs", auditLogModel, db.param)
  return useSearchController(log, builder.search, getAuditLog, ["status"], ["time"])
  // return new AuditLogController(log, builder.search);
}
export class AuditLogController extends SearchController<AuditLog, AuditLogFilter> {
  constructor(log: Log, find: Search<AuditLog, AuditLogFilter>) {
    super(log, find)
    this.array = ["status"]
    this.dates = ["time"]
  }
}
