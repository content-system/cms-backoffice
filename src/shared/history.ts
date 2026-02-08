import { nanoid } from "nanoid";
import { Transaction } from "onecore";

export class Action {
  static readonly Create = "create"
  static readonly Update = "update"
  static readonly Approve = "approve"
  static readonly Reject = "reject"
  static readonly Delete = "delete"
}
export const ignoreFields = ["id", "createdBy", "createdAt", "updatedBy", "updatedAt", "approvedAt"]

export interface HistoryRepository<T> {
  create(id: string, author: string, data: T, tx: Transaction): Promise<number>
}

export class HistoryAdapter<T> implements HistoryRepository<T> {
  protected ignoreFields: string[]
  protected historyId: string
  protected entity: string
  protected id: string
  protected author: string
  protected time: string
  protected data: string
  constructor(protected type: string, protected table: string, ignoreFields?: string[], historyId?: string, entity?: string, id?: string, author?: string, time?: string, data?: string) {
    this.ignoreFields = ignoreFields || []
    this.historyId = historyId || "history_id"
    this.entity = entity || "entity"
    this.id = id || "id"
    this.author = author || "author"
    this.time = time || "time"
    this.data = data || "data"
  }
  create(id: string, author: string, data: T, tx: Transaction): Promise<number> {
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
        ${tx.param(1)},
        ${tx.param(2)},
        ${tx.param(3)},
        ${tx.param(4)},
        ${tx.param(5)},
        ${tx.param(6)}
      )`
    return tx.execute(sql, [historyId, this.type, id, author, new Date(), cloneObj])
  }
}
