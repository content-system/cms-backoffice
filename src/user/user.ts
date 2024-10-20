import { Attributes, DateRange, Filter, Repository, Service } from "onecore"

export interface UserFilter extends Filter {
  id: string
  username: string
  email?: string
  phone?: string
  dateOfBirth?: Date | DateRange
}
export interface User {
  id: string
  username: string
  email?: string
  phone?: string
  dateOfBirth?: Date
}
export interface UserRepository extends Repository<User, string> {}
export interface UserService extends Service<User, string, UserFilter> {}

export const userModel: Attributes = {
  id: {
    key: true,
    length: 40,
  },
  username: {
    required: true,
    length: 255,
  },
  email: {
    format: "email",
    required: true,
    length: 120,
  },
  phone: {
    format: "phone",
    required: true,
    length: 14,
  },
  dateOfBirth: {
    column: "date_of_birth",
    type: "datetime",
  },
}
