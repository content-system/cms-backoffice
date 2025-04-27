import { Attributes, Filter, Result, SearchService } from "onecore"

export interface Category {
  id: string
  name: string
  resource: string
  path?: string
  icon: string
  sequence: number
  parent: string
  type: string
  status: string
  version?: number

  createdAt?: Date
  createdBy?: string
  updatedAt?: Date
  updatedBy?: string
}
export interface CategoryFilter extends Filter {
  id?: string
  name?: string
  resource?: string
  path?: string
  icon?: string
  sequence?: number
  type?: string
  status?: string[]
}

export interface CategoryRepository {
  load(id: string): Promise<Category | null>
  create(category: Category): Promise<number>
  update(category: Category): Promise<number>
  patch(category: Partial<Category>): Promise<number>
  delete(id: string): Promise<number>
}
export interface CategoryService extends SearchService<Category, CategoryFilter> {
  // search(filter: CategoryFilter, limit: number, page?: number, fields?: string[]): Promise<SearchResult<Category>>
  load(id: string): Promise<Category | null>
  create(category: Category): Promise<Result<Category>>
  update(category: Category): Promise<Result<Category>>
  patch(category: Partial<Category>): Promise<Result<Category>>
  delete(id: string): Promise<number>
}

export const categoryModel: Attributes = {
  id: {
    key: true,
    length: 40,
    required: true,
  },
  name: {
    length: 120,
    required: true,
    q: true,
  },
  status: {},
  path: {
    length: 1200,
    required: true,
    q: true,
  },
  resource: {
    column: "resource_key",
    length: 255,
  },
  icon: {
    length: 255,
    required: true,
  },
  sequence: {
    type: "integer",
  },
  type: {},
  parent: {
    length: 40,
  },
  version: {
    type: "integer",
    version: true,
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
