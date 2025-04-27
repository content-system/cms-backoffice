import { Attributes, Filter, Result, SearchService, TimeRange } from "onecore"

export interface Job {
  id: string
  title?: string
  description?: string
  requirements?: string
  benefit?: string
  publishedAt?: Date
  expiredAt?: Date
  skill?: string[]
  location?: string
  quantity?: number
  applicantCount?: number
  companyId?: string
  status: string

  createdAt?: Date
  createdBy?: string
  updatedAt?: Date
  updatedBy?: string
}
export interface JobFilter extends Filter {
  id?: string
  title?: string
  description?: string
  requirements?: string
  benefit?: string
  publishedAt?: TimeRange
  expiredAt?: TimeRange
  skill?: string[]
  location?: string
  quantity?: number
  applicantCount?: number
  companyId?: string
  status?: string
}

export interface JobRepository {
  load(id: string): Promise<Job | null>
  create(job: Job): Promise<number>
  update(job: Job): Promise<number>
  patch(job: Partial<Job>): Promise<number>
  delete(id: string): Promise<number>
}
export interface JobService extends SearchService<Job, JobFilter> {
  // search(filter: JobFilter, limit: number, page?: number, fields?: string[]): Promise<SearchResult<Job>>
  load(id: string): Promise<Job | null>
  create(job: Job): Promise<Result<Job>>
  update(job: Job): Promise<Result<Job>>
  patch(job: Partial<Job>): Promise<Result<Job>>
  delete(id: string): Promise<number>
}

export const jobModel: Attributes = {
  id: {
    length: 40,
    required: true,
    key: true,
  },
  title: {
    length: 120,
    q: true,
  },
  description: {
    length: 1000,
  },
  requirements: {
    length: 1000,
  },
  benefit: {
    length: 1000,
  },
  publishedAt: {
    column: "published_at",
    type: "datetime",
  },
  expiredAt: {
    column: "expired_at",
    type: "datetime",
  },
  skills: {
    type: "strings",
  },
  position: {
    length: 100,
  },
  location: {
    length: 120,
  },
  quantity: {
    type: "integer",
  },
  applicantCount: {
    column: "applicant_count",
    type: "integer",
  },

  createdBy: {
    column: "created_by",
    noupdate: true,
  },
  createdAt: {
    column: "created_at",
    type: "datetime",
    noupdate: true,
  },
  updatedBy: {
    column: "updated_by",
  },
  updatedAt: {
    column: "updated_at",
    type: "datetime",
  },
}
