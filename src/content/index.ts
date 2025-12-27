import { Log, Result, Search, SearchResult, StringMap } from "onecore"
import { buildMap, buildToInsert, buildToUpdate, DB, SearchBuilder } from "query-core"
import { Content, ContentFilter, contentModel, ContentRepository, ContentService } from "./content"
import { ContentController } from "./controller"
export * from "./controller"

export class SqlContentRepository implements ContentRepository {
  constructor(protected db: DB) {
    this.map = buildMap(contentModel)
  }
  map: StringMap
  load(id: string, lang: string): Promise<Content | null> {
    return this.db.query<Content>("select * from contents where id = $1 and lang = $2", [id, lang], this.map).then((contents) => {
      return !contents || contents.length === 0 ? null : contents[0]
    })
  }
  create(content: Content): Promise<number> {
    const stmt = buildToInsert(content, "contents", contentModel, this.db.param)
    if (!stmt) {
      return Promise.resolve(-1)
    }
    return this.db.exec(stmt.query, stmt.params)
  }
  update(content: Content): Promise<number> {
    const stmt = buildToUpdate(content, "contents", contentModel, this.db.param)
    if (!stmt) {
      return Promise.resolve(-1)
    }
    return this.db.exec(stmt.query, stmt.params)
  }
  patch(content: Partial<Content>): Promise<number> {
    return this.update(content as Content)
  }
  delete(id: string, lang: string): Promise<number> {
    return this.db.exec("delete from contents where id = $1 and lang = $2", [id, lang])
  }
}

export class ContentUseCase implements ContentService {
  constructor(private find: Search<Content, ContentFilter>, private repository: ContentRepository) {}
  search(filter: ContentFilter, limit: number, page?: number, fields?: string[]): Promise<SearchResult<Content>> {
    return this.find(filter, limit, page, fields)
  }
  load(id: string, lang: string): Promise<Content | null> {
    return this.repository.load(id, lang)
  }
  create(content: Content): Promise<Result<Content>> {
    return this.repository.create(content)
  }
  update(content: Content): Promise<Result<Content>> {
    return this.repository.update(content)
  }
  patch(content: Partial<Content>): Promise<Result<Content>> {
    return this.repository.patch(content)
  }
  delete(id: string, lang: string): Promise<number> {
    return this.repository.delete(id, lang)
  }
}

export function useContentController(log: Log, db: DB): ContentController {
  const builder = new SearchBuilder<Content, ContentFilter>(db.query, "contents", contentModel, db.driver)
  const repository = new SqlContentRepository(db)
  const service = new ContentUseCase(builder.search, repository)
  return new ContentController(log, service)
}
