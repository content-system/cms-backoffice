import { Attributes, Filter, Result, SearchService, TimeRange } from "onecore"

export interface Content {
  id: string
  lang: string
  title: string
  body: string
  publishedAt?: Date
  tags?: string[]
  status?: string
  version?: number
}

export interface ContentFilter extends Filter {
  id?: string
  lang?: string
  title?: string
  body?: string
  publishedAt?: TimeRange
  tags?: string[]
  status: string[]
}

export interface ContentRepository {
  load(id: string, lang: string): Promise<Content | null>
  create(obj: Content): Promise<number>
  update(obj: Content): Promise<number>
  patch(obj: Partial<Content>): Promise<number>
  delete(id: string, lang: string): Promise<number>
}
export interface ContentService extends SearchService<Content, ContentFilter> {
  load(id: string, lang: string): Promise<Content | null>
  create(obj: Content): Promise<Result<Content>>
  update(obj: Content): Promise<Result<Content>>
  patch(obj: Partial<Content>): Promise<Result<Content>>
  delete(id: string, lang: string): Promise<number>
}

export const contentModel: Attributes = {
  id: {
    key: true,
    length: 40,
    required: true,
  },
  lang: {
    key: true,
    length: 40,
    required: true,
  },
  title: {
    length: 255,
    required: true,
    q: true,
  },
  body: {
    length: 9000,
    required: true,
  },
  publishedAt: {
    column: "published_at",
    type: "datetime",
  },
  tags: {
    type: "strings",
  },
  type: {},
  status: {},
  createdBy: {
    column: "created_by",
  },
  createdAt: {
    column: "created_at",
    type: "datetime",
  },
  updatedBy: {
    column: "updated_by",
  },
  updatedAt: {
    column: "updated_at",
    type: "datetime",
  },
  version: {
    type: "integer",
    version: true,
  },
}
