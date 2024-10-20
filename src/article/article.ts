import { Attributes, Filter, Repository, Service, TimeRange } from "onecore"

export interface Article {
  id: string
  title: string
  description?: string
  thumbnail?: string
  publishedAt: Date
  tags?: string[]
  type?: string
  content: string
  author?: string
  status?: string
}

export interface ArticleFilter extends Filter {
  id?: string
  title?: string
  description?: string
  publishedAt?: TimeRange
}

export interface ArticleRepository extends Repository<Article, string> {}
export interface ArticleService extends Service<Article, string, ArticleFilter> {}

export const articleModel: Attributes = {
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
    type: "datetime",
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
