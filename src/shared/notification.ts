import { nanoid } from "nanoid"
import { DB, Statement } from "onecore"

export interface Notification {
  id?: string
  sender: string
  receiver: string
  url?: string
  message: string
}

export function createNotification(sender: string, receiver: string, message: string, url?: string): Notification {
  const notification: Notification = { sender, receiver, message, url }
  return notification
}
export interface NotificationPort {
  push(notification: Notification): Promise<number>
  pushNotifications(notifications: Notification[]): Promise<number>
}
export class NotificationAdapter {
  constructor(protected db: DB, protected table: string, protected id: string, protected sender: string, protected receiver: string, protected message: string, protected time: string, protected status: string, protected url: string, unread?: string) {
    this.unread = unread && unread.length > 0 ? unread : "U"
  }
  protected unread: string

  push(noti: Notification): Promise<number> {
    noti.id = nanoid(10)
    const sql = `
      insert into ${this.table} (
        ${this.id},
        ${this.sender},
        ${this.receiver},
        ${this.message},
        ${this.time},
        ${this.url},
        ${this.status}
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
    return this.db.exec(sql, [noti.id, noti.sender, noti.receiver, noti.message, new Date(), noti.url, this.unread])
  }
  pushNotifications(notifications: Notification[]): Promise<number> {
    const query = `
      insert into ${this.table} (
        ${this.id},
        ${this.sender},
        ${this.receiver},
        ${this.message},
        ${this.time},
        ${this.url},
        ${this.status}
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
    const now = new Date()
    const statements: Statement[] = []
    for (let noti of notifications) {
      noti.id = nanoid(10)
      const statement: Statement = { query, params: [noti.id, noti.sender, noti.receiver, noti.message, now, noti.url, this.unread] }
      statements.push(statement)
    }
    return this.db.execBatch(statements)
  }
}