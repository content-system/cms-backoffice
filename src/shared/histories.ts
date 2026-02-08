import { DB } from "onecore"

export interface History<T> {
  id: string
  author: string
  time: Date
  data: T
}

export interface HistoriesPort<T> {
  getHistories(id: string): Promise<History<T>[]>
}

export class HistoriesAdapter<T> {
  constructor(protected db: DB,protected type: string) {
    this.getHistories = this.getHistories.bind(this)
  }

  getHistories(id: string): Promise<History<T>[]> {
    const sql = `
      select history_id as id, author, time, data
      from histories
      where id = ${this.db.param(1)} and entity = ${this.db.param(2)}
      order by time desc`
    return this.db.query<History<T>>(sql, [id, this.type])
  }
}
