import { Attributes, Filter, Result, SearchResult, TimeRange } from "onecore"

export interface Job {
  id: string
  title: string
  description: string
  publishedAt?: Date
  expiredAt?: Date
  position?: string
  quantity?: number
  location?: string
  applicantCount?: number
  skills?: string[]
  minSalary?: number
  maxSalary?: number
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
  skills?: string[]
  location?: string
  quantity?: number
  applicantCount?: number
  companyId?: string
  status?: string
}

export interface JobRepository {
  search(filter: JobFilter, limit: number, page?: number, fields?: string[]): Promise<SearchResult<Job>>
  load(id: string): Promise<Job | null>
  create(job: Job): Promise<number>
  update(job: Job): Promise<number>
  patch(job: Partial<Job>): Promise<number>
  delete(id: string): Promise<number>
}
export interface JobService {
  search(filter: JobFilter, limit: number, page?: number, fields?: string[]): Promise<SearchResult<Job>>
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
    length: 300,
    q: true,
  },
  description: {
    length: 9800,
  },
  publishedAt: {
    column: "published_at",
    type: "datetime",
  },
  expiredAt: {
    column: "expired_at",
    type: "datetime",
  },
  position: {
    length: 100,
  },
  quantity: {
    type: "integer",
    min: 1,
  },
  location: {
    length: 120,
  },
  applicantCount: {
    column: "applicant_count",
    type: "integer",
  },
  skills: {
    type: "strings",
  },
  minSalary: {
    column: "min_salary",
    type: "integer",
  },
  maxSalary: {
    column: "max_salary",
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
