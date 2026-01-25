import { nanoid } from "nanoid";
import { DB } from "onecore";

export class Status {
  static readonly draft = 'D'
  static readonly submitted = 'S'
  static readonly approved = 'A'
}
export class Action {
  static readonly Create = 'create'
  static readonly Update = 'update'
  static readonly Approve = 'approve'
  static readonly Delete = 'delete'
}
export interface HistoryRepository<T> {
  create(id: string, author: string, action: string, data: T, ctx?: any): Promise<number>
}
export class HistoryAdapter<T> implements HistoryRepository<T> {
  constructor(protected db: DB, protected type: string, protected table: string, protected historyId: string, protected entity: string, protected id: string, protected author: string, protected time: string, protected action: string, protected data: string, protected ignoreFields: string[]) {

  }
  async create(id: string, author: string, action: string, data: T, ctx?: any): Promise<number> {
    const historyId = nanoid(10)
    const l = this.ignoreFields.length
    if (l > 0) {
      for (let i = 0; i < l; i++) {
        delete (data as any)[this.ignoreFields[i]]
      }
    }
    const sql = `
      insert into ${this.table} (
        ${this.historyId},
        ${this.entity},
        ${this.id},
        ${this.author},
        ${this.time},
        ${this.action},
        ${this.data}
      ) values (
        ${this.db.param(1)},
        ${this.db.param(2)},
        ${this.db.param(3)},
        ${this.db.param(4)},
        ${this.db.param(5)},
        ${this.db.param(6)},
        ${this.db.param(7)}
      )
    `
    return this.db.exec(sql, [historyId, this.type, id, author, new Date(), action, data])
  }
}
