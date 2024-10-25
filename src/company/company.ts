import { Attributes, Filter, Repository, Service, TimeRange } from "onecore"

export interface Company {
  id: string
  name: string
  slogan?: string
  description?: string
  thumbnail?: string
  coverURL?: string
  status?: string
}

export interface CompanyFilter extends Filter {
  id?: string
  title?: string
  description?: string
  publishedAt?: TimeRange
}

export interface CompanyRepository extends Repository<Company, string> {}
export interface CompanyService extends Service<Company, string, CompanyFilter> {}

export const companyModel: Attributes = {
  id: {
    key: true,
    length: 40,
    required: true,
  },
  author: {
    length: 40,
    required: true,
  },
  title: {
    length: 100,
    required: true,
    q: true,
  },
  description: {
    length: 100,
    required: true,
    q: true,
  },
  publishedAt: {
    column: "published_at",
    type: "datetime",
  },
  coverURL: {
    column: "cover_url",
  },
  name: {
    required: true,
    q: true,
    length: 100,
  },
  content: {
    required: true,
    q: true,
  },
  tags: {},
  type: {},
}
