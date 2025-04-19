import { Controller } from "express-ext"
import { Log, Search, Manager as UseCase } from "onecore"
import { DB, Repository, SearchBuilder } from "query-core"
import { Company, CompanyFilter, CompanyRepository, CompanyService, companyModel } from "./company"
export * from "./company"

export class SqlCompanyRepository extends Repository<Company, string> implements CompanyRepository {
  constructor(db: DB) {
    super(db, "companies", companyModel)
  }
}
export class CompanyUseCase extends UseCase<Company, string, CompanyFilter> implements CompanyService {
  constructor(search: Search<Company, CompanyFilter>, repository: CompanyRepository) {
    super(search, repository)
  }
}
export class CompanyController extends Controller<Company, string, CompanyFilter> {
  constructor(log: Log, service: CompanyService) {
    super(log, service)
  }
}

export function useCompanyController(log: Log, db: DB): CompanyController {
  const builder = new SearchBuilder<Company, CompanyFilter>(db.query, "companies", companyModel, db.driver)
  const repository = new SqlCompanyRepository(db)
  const service = new CompanyUseCase(builder.search, repository)
  return new CompanyController(log, service)
}
