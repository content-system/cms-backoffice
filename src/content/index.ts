import { SearchWriter } from "onecore"
import { DB } from "sql-core"
import { Content, ContentFilter, ContentRepository, ContentService } from "./content"
import { ContentController } from "./controller"
import { SqlContentRepository } from "./repository"
export * from "./controller"

export class ContentUseCase extends SearchWriter<Content, ContentFilter> implements ContentService {
  constructor(protected repository: ContentRepository) {
    super(repository)
  }
  load(id: string, lang: string): Promise<Content | null> {
    return this.repository.load(id, lang)
  }
  delete(id: string, lang: string): Promise<number> {
    return this.repository.delete(id, lang)
  }
}

export function useContentController(db: DB): ContentController {
  const repository = new SqlContentRepository(db)
  const service = new ContentUseCase(repository)
  return new ContentController(service)
}
