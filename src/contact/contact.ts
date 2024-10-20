import { Attributes, Filter, Repository, Service } from "onecore"

export interface Contact {
  id: string
  name: string
  country: string
  company: string
  jobTitle: string
  email: string
  phone: string
  message: string
}
export interface ContactFilter extends Filter {
  id: string
  name: string
  country: string
  company: string
  jobTitle: string
  email: string
  phone: string
}

export interface ContactRepository extends Repository<Contact, string> {}
export interface ContactService extends Service<Contact, string, ContactFilter> {}

export const contactModel: Attributes = {
  id: {
    length: 40,
    required: true,
    key: true,
  },
  name: {
    length: 100,
    required: true,
    q: true,
  },
  jobTitle: {
    length: 20,
    q: true,
  },
  phone: {
    format: "phone",
    length: 14,
  },
  email: {
    format: "email",
    length: 120,
    q: true,
  },
}
