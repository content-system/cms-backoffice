export class Status {
  static readonly Draft = "D"
  static readonly Submitted = "S"
  static readonly Rejected = "R"
  static readonly Approved = "A"
  static readonly Published = "P"
  static readonly RequestToEdit = "E"
}

export function canUpdate(s?: string): boolean {
  return s!== Status.Submitted && s!== Status.Approved && s!== Status.Published
}
export function canApprove(s?: string): boolean{
  return s === Status.Submitted
}
