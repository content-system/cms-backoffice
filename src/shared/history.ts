import { nanoid } from "nanoid";
import { DB, HistoryRepository } from "onecore";

export class Action {
  static readonly Create = "create"
  static readonly Update = "update"
  static readonly Approve = "approve"
  static readonly Reject = "reject"
  static readonly Delete = "delete"
}
export const ignoreFields = ["id", "createdBy", "createdAt", "updatedBy", "updatedAt", "approvedAt"]

export class HistoryAdapter<T> implements HistoryRepository<T> {
  protected ignoreFields: string[]
  protected historyId: string
  protected entity: string
  protected id: string
  protected author: string
  protected time: string
  protected data: string
  constructor(protected db: DB, protected type: string, protected table: string, ignoreFields?: string[], historyId?: string, entity?: string, id?: string, author?: string, time?: string, data?: string) {
    this.ignoreFields = ignoreFields || []
    this.historyId = historyId || "history_id"
    this.entity = entity || "entity"
    this.id = id || "id"
    this.author = author || "author"
    this.time = time || "time"
    this.data = data || "data"
  }
  async create(id: string, author: string, data: T, ctx?: any): Promise<number> {
    const historyId = nanoid(10)
    const l = this.ignoreFields.length
    const cloneObj: any = { ...data }
    if (l > 0) {
      for (let i = 0; i < l; i++) {
        delete cloneObj[this.ignoreFields[i]]
      }
    }
    const sql = `
      insert into ${this.table} (
        ${this.historyId},
        ${this.entity},
        ${this.id},
        ${this.author},
        ${this.time},
        ${this.data}
      ) values (
        ${this.db.param(1)},
        ${this.db.param(2)},
        ${this.db.param(3)},
        ${this.db.param(4)},
        ${this.db.param(5)},
        ${this.db.param(6)}
      )`
    return this.db.execute(sql, [historyId, this.type, id, author, new Date(), cloneObj])
  }
}
