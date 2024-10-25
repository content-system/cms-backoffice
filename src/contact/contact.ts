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
  submittedAt: Date
  contactedBy: string
  contactedAt: Date
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
    length: 120,
    required: true,
    q: true,
  },
  country: {
    length: 120,
    required: true,
  },
  company: {
    length: 120,
    required: true,
  },
  jobTitle: {
    column: "job_title",
    length: 120,
  },
  email: {
    format: "email",
    length: 120,
    q: true,
  },
  phone: {
    format: "phone",
    length: 20,
  },
  message: {
    length: 1000,
    required: true,
  },
  submittedAt: {
    column: "submitted_at",
    type: "datetime",
  },
  contactedBy: {
    column: "contacted_by",
    length: 120,
  },
  contactedAt: {
    column: "contacted_at",
    type: "datetime",
  },
}
