import { Attributes, Filter, Result, SearchService, TimeRange } from "onecore"

export interface Article {
  id: string
  title: string
  description?: string
  publishedAt: Date
  content: string
  thumbnail?: string
  tags?: string[]
  type?: string
  author?: string
  status?: string

  createdAt?: Date
  createdBy?: string
  updatedAt?: Date
  updatedBy?: string
}
export interface ArticleFilter extends Filter {
  id?: string
  title?: string
  description?: string
  publishedAt?: TimeRange
  tags?: string[]
}

export interface ArticleRepository {
  load(id: string): Promise<Article | null>
  create(article: Article): Promise<number>
  update(article: Article): Promise<number>
  patch(article: Partial<Article>): Promise<number>
  delete(id: string): Promise<number>
}
export interface ArticleService extends SearchService<Article, ArticleFilter> {
  // search(filter: ArticleFilter, limit: number, page?: number, fields?: string[]): Promise<SearchResult<Article>>
  load(id: string): Promise<Article | null>
  create(article: Article): Promise<Result<Article>>
  update(article: Article): Promise<Result<Article>>
  patch(article: Partial<Article>): Promise<Result<Article>>
  delete(id: string): Promise<number>
}

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
    length: 255,
    required: true,
    q: true,
  },
  description: {
    length: 1000,
    required: true,
    q: true,
  },
  publishedAt: {
    column: "published_at",
    type: "datetime",
  },
  content: {
    length: 5000,
    required: true,
  },
  tags: {
    type: "strings",
  },
  type: {},

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
