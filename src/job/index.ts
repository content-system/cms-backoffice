import { nanoid } from "nanoid"
import { SearchResult } from "onecore"
import { DB, Repository } from "query-core"
import { slugify } from "../common/slug"
import { JobController } from "./controller"
import { Job, JobFilter, jobModel, JobRepository, JobService, Status } from "./job"
import { buildQuery } from "./query"
export * from "./controller"
export * from "./job"

export class SqlJobRepository extends Repository<Job, string, JobFilter> implements JobRepository {
  constructor(db: DB) {
    super(db, "jobs", jobModel, buildQuery)
  }
}
export class JobUseCase implements JobService {
  constructor(protected repository: JobRepository) {
  }
  search(filter: JobFilter, limit: number, page?: number, fields?: string[]): Promise<SearchResult<Job>> {
    return this.repository.search(filter, limit, page, fields)
  }
  load(id: string): Promise<Job | null> {
    return this.repository.load(id)
  }
  create(job: Job): Promise<number> {
    job.id = nanoid(10)
    job.slug = slugify(job.title, job.id)
    job.status = Status.Draft
    return this.repository.create(job)
  }
  async update(job: Job): Promise<number> {
    const existingJob = await this.repository.load(job.id)
    if (!existingJob) {
      return 0
    }
    existingJob.status = Status.Draft
    if (existingJob.status === Status.Draft) {
      job.slug = slugify(job.title, job.id)
    }
    return this.repository.update(job)
  }
  async patch(job: Partial<Job>): Promise<number> {
    if (job.title && job.title.length > 0) {
      const id = job.id as string
      const existingJob = await this.repository.load(id)
      if (!existingJob) {
        return 0
      }
      if (existingJob.status === Status.Draft) {
        job.slug = slugify(job.title, id)
      }
      return this.repository.patch(job)
    } else {
      delete job.slug
      return this.repository.patch(job)
    }
  }
  delete(id: string): Promise<number> {
    return this.repository.delete(id)
  }
}

export function useJobController(db: DB): JobController {
  const repository = new SqlJobRepository(db)
  const service = new JobUseCase(repository)
  return new JobController(service)
}
