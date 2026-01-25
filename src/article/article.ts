import { Attributes, Filter, Result, SearchResult, TimeRange } from "onecore"

export interface Article {
  id: string
  slug: string
  title: string
  description?: string
  content: string
  publishedAt?: Date
  tags?: string[]
  thumbnail?: string
  highThumbnail?: string
  authorId?: string
  status?: string

  createdBy?: string
  createdAt?: Date
  updatedBy: string
  updatedAt?: Date
}
export interface ArticleFilter extends Filter {
  id?: string
  slug?: string
  title?: string
  description?: string
  status?: string
  publishedAt: TimeRange
  tags?: string[]
  authorId?: string
  userId?: string
  isSaved?: boolean
}

export interface ArticleRepository {
  search(filter: ArticleFilter, limit: number, page?: number, fields?: string[]): Promise<SearchResult<Article>>
  load(id: string): Promise<Article | null>
  create(article: Article): Promise<number>
  update(article: Article): Promise<number>
  patch(article: Partial<Article>): Promise<number>
  delete(id: string): Promise<number>
}
export interface ArticleService {
  search(filter: ArticleFilter, limit: number, page?: number, fields?: string[]): Promise<SearchResult<Article>>
  load(id: string): Promise<Article | null>
  create(article: Article): Promise<Result<Article>>
  update(article: Article): Promise<Result<Article>>
  patch(article: Partial<Article>): Promise<Result<Article>>
  delete(id: string): Promise<number>
}

export class Status {
  static readonly Draft = 'D'
  static readonly Submitted = 'S'
  static readonly Approved = 'A'
}

export const articleModel: Attributes = {
  id: {
    key: true,
    length: 40,
  },
  slug: {
    length: 150,
  },
  title: {
    length: 255,
    required: true,
    q: true,
  },
  description: {
    length: 1200,
    required: true,
    q: true,
  },
  publishedAt: {
    column: "published_at",
    type: "datetime",
  },
  content: {
    length: 9500,
    required: true,
  },
  tags: {
    type: "strings",
  },
  thumbnail: {
    length: 400,
  },
  highThumbnail: {
    column: "high_thumbnail",
    length: 400,
  },
  authorId: {
    column: "author_id",
    length: 400,
    noupdate: true,
  },
  status: {
    length: 1,
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
