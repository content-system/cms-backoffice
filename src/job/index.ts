import { Log, UseCase } from "onecore"
import { DB, Repository } from "query-core"
import { JobController } from "./controller"
import { Job, JobFilter, jobModel, JobRepository, JobService } from "./job"
import { buildQuery } from "./query"
export * from "./controller"
export * from "./job"

export class SqlJobRepository extends Repository<Job, string, JobFilter> implements JobRepository {
  constructor(db: DB) {
    super(db, "jobs", jobModel, buildQuery)
  }
}
export class JobUseCase extends UseCase<Job, string, JobFilter> implements JobService {
  constructor(repository: JobRepository) {
    super(repository)
  }
}

export function useJobController(db: DB, log: Log): JobController {
  const repository = new SqlJobRepository(db)
  const service = new JobUseCase(repository)
  return new JobController(service, log)
}
