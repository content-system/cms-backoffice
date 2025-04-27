import { Attributes, Filter, Result, SearchResult } from "onecore"

export interface User {
  userId: string
  username: string
  email?: string
  phone?: string
  dateOfBirth?: Date
  roles?: string[]

  createdAt?: Date
  createdBy?: string
  updatedAt?: Date
  updatedBy?: string
}
export interface UserFilter extends Filter {
  id?: string
  username?: string
  email?: string
  phone?: string
  status?: string
  gender?: string
  title?: string
  position?: string
}

export interface UserRepository {
  all(): Promise<User[]>
  getUsersOfRole(roleId: string): Promise<User[]>
  search(filter: UserFilter, limit: number, page?: number | string, fields?: string[], ctx?: any): Promise<SearchResult<User>>
  load(id: string): Promise<User | null>
  create(user: User): Promise<number>
  update(user: User): Promise<number>
  patch(user: Partial<User>): Promise<number>
  delete(id: string): Promise<number>
}
export interface UserService {
  all(): Promise<User[]>
  getUsersOfRole(roleId: string): Promise<User[]>
  search(filter: UserFilter, limit: number, page?: number | string, fields?: string[], ctx?: any): Promise<SearchResult<User>>
  load(id: string): Promise<User | null>
  create(user: User): Promise<Result<User>>
  update(user: User): Promise<Result<User>>
  patch(user: Partial<User>): Promise<Result<User>>
  delete(id: string): Promise<number>
}

export const userModel: Attributes = {
  userId: {
    column: "user_id",
    key: true,
    match: "equal",
    length: 40,
  },
  username: {
    required: true,
    length: 255,
    q: true,
    match: "prefix",
  },
  email: {
    format: "email",
    required: true,
    length: 120,
    q: true,
  },
  displayName: {
    column: "display_name",
    length: 120,
    q: true,
  },
  status: {
    match: "equal",
    length: 1,
  },
  gender: {
    length: 1,
  },
  phone: {
    format: "phone",
    required: true,
    length: 14,
  },
  title: {
    length: 10,
  },
  position: {
    length: 10,
  },
  imageURL: {
    column: "image_url",
    length: 255,
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

  roles: {
    type: "strings",
    ignored: true,
  },
}
