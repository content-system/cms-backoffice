import { Attributes, Filter, Result, SearchResult } from "onecore"

export interface Role {
  roleId: string
  roleName: string
  status?: string
  remark?: string
  privileges?: string[]
}
export interface RoleFilter extends Filter {
  roleId?: string
  roleName?: string
  status?: string
  remark?: string
}

export interface RoleService {
  all(): Promise<Role[]>
  search(filter: RoleFilter, limit: number, page?: number | string, fields?: string[]): Promise<SearchResult<Role>>
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
    match: "prefix",
  },
  status: {
    match: "equal",
    length: 1,
  },
  remark: {
    length: 255,
    q: true,
  },
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
  privileges: {
    type: "strings",
    ignored: true,
  },
}
