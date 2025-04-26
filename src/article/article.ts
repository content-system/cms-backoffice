import { Attributes, Filter, Result, SearchService, TimeRange } from "onecore"

export interface Article {
  id: string
  title: string
  description?: string
  content: string
  thumbnail?: string
  publishedAt: Date
  tags?: string[]
  type?: string
  authorId?: string
  status?: string
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
  thumbnail: {},
  highThumbnail: {
    column: "high_thumbnail",
  },
  tags: {
    type: "strings",
  },
  /*
  author: {
    length: 40,
  },
  */
  type: {},
  status: {},
}
