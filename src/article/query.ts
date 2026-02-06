import { param } from "pg-extension"
import { buildSort, Statement } from "query-core"
import { ArticleFilter, articleModel } from "./article"

export function buildQuery(filter: ArticleFilter): Statement {
  let query = `select * from draft_articles `
  const where = []
  const params = []
  let i = 1

  if (filter.id && filter.id.length > 0) {
    where.push(`id = ${param(i++)}`)
    params.push(filter.id)
  }

  if (filter.authorId && filter.authorId.length > 0) {
    params.push(filter.authorId)
    where.push(`author_id = ${param(i++)}`)
  }

  if (filter.tags && filter.tags.length > 0) {
    params.push(filter.tags)
    where.push(`tags && ${param(i++)}`)
  }

  if (filter.publishedAt) {
    if (filter.publishedAt.min) {
      where.push(`published_at >= ${param(i++)}`)
      params.push(filter.publishedAt.min)
    }
    if (filter.publishedAt.max) {
      where.push(`published_at <= ${param(i++)}`)
      params.push(filter.publishedAt.max)
    }
  }

  if (filter.status && filter.status.length > 0) {
    const arr: string[] = []
    for (const status of filter.status) {
      params.push(status)
      arr.push(`${param(i++)}`)
    }
    where.push(`status in (${arr.join(",")})`)
  }

  if (filter.q && filter.q.length > 0) {
    const q = "%" + filter.q.replace(/%/g, "\\%").replace(/_/g, "\\_") + "%"
    where.push(`(title ilike ${param(i++)} or description ilike ${param(i++)})`)
    params.push(q)
  }

  if (where.length > 0) {
    query = query + ` where ` + where.join(` and `)
  }
  const orderBy = buildSort(filter.sort, articleModel)
  if (orderBy.length > 0) {
    query = query + ` order by ${orderBy}`
  }
  return { query, params }
}
