import { Statement } from "query-core"
import { JobFilter } from "./job"

export function buildQuery(filter: JobFilter): Statement {
  let query = `select * from jobs`
  const where = []
  const params = []
  let i = 1

  if (filter.skills && filter.skills.length > 0) {
    params.push(filter.skills)
    where.push(`skills && $${i++}`)
  }

  if (filter.publishedAt) {
    if (filter.publishedAt.min) {
      where.push(`published_at >= $${i++}`)
      params.push(filter.publishedAt.min)
    }
    if (filter.publishedAt.max) {
      where.push(`published_at <= $${i++}`)
      params.push(filter.publishedAt.max)
    }
  }

  if (filter.id && filter.id.length > 0) {
    where.push(`id = $${i++}`);
    params.push(filter.id);
  }

  if (filter.q && filter.q.length > 0) {
    const q = "%" + filter.q.replace(/%/g, "\\%").replace(/_/g, "\\_") + "%"
    where.push(`title ilike $${i++}`)
    params.push(q)
  }

  if (where.length > 0) {
    query = query + ` where ` + where.join(` and `)
  }

  return { query, params }
}
