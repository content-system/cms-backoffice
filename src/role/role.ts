import { Attributes, Filter, Result, SearchResult } from "onecore"

export interface Role {
  roleId: string
  roleName: string
  status?: string
  remark?: string
  privileges?: string[]

  createdAt?: Date
  createdBy?: string
  updatedAt?: Date
  updatedBy?: string
}
export interface RoleFilter extends Filter {
  roleId?: string
  roleName?: string
  status?: string
  remark?: string
}

export interface RoleRepository {
  all(): Promise<Role[]>
  search(filter: RoleFilter, limit: number, page?: number, fields?: string[]): Promise<SearchResult<Role>>
  load(id: string): Promise<Role | null>
  create(role: Role): Promise<number>
  update(role: Role): Promise<number>
  patch(role: Partial<Role>): Promise<number>
  delete(id: string): Promise<number>
  assign(id: string, users: string[]): Promise<number>
}
export interface RoleService {
  all(): Promise<Role[]>
  search(filter: RoleFilter, limit: number, page?: number, fields?: string[]): Promise<SearchResult<Role>>
  load(id: string): Promise<Role | null>
  create(role: Role): Promise<Result<Role>>
  update(role: Role): Promise<Result<Role>>
  patch(role: Partial<Role>): Promise<Result<Role>>
  delete(id: string): Promise<number>
  assign(id: string, users: string[]): Promise<number>
}

export const roleModel: Attributes = {
  roleId: {
    column: "role_id",
    key: true,
    length: 40,
    q: true,
  },
  roleName: {
    column: "role_name",
    required: true,
    length: 255,
    q: true,
    operator: "like",
  },
  status: {
    length: 1,
    operator: "="
  },
  remark: {
    length: 255,
    q: true,
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

  privileges: {
    type: "strings",
    ignored: true,
  },
}
