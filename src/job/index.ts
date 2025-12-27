import { Log, Search, UseCase } from "onecore"
import { DB, Repository, SearchBuilder } from "query-core"
import { JobController } from "./controller"
import { Job, JobFilter, jobModel, JobRepository, JobService } from "./job"
export * from "./controller"

export class SqlJobRepository extends Repository<Job, string> implements JobRepository {
  constructor(db: DB) {
    super(db, "jobs", jobModel)
  }
}
export class JobUseCase extends UseCase<Job, string, JobFilter> implements JobService {
  constructor(search: Search<Job, JobFilter>, repository: JobRepository) {
    super(search, repository)
  }
}

export function useJobController(log: Log, db: DB): JobController {
  const builder = new SearchBuilder<Job, JobFilter>(db.query, "jobs", jobModel, db.driver)
  const repository = new SqlJobRepository(db)
  const service = new JobUseCase(builder.search, repository)
  return new JobController(log, service)
}
