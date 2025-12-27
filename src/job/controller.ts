import { Controller } from "express-ext"
import { Log } from "onecore"
import { Job, JobFilter, JobService } from "./job"
export * from "./job"

export class JobController extends Controller<Job, string, JobFilter> {
  constructor(log: Log, service: JobService) {
    super(log, service)
  }
}
