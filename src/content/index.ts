import { Request, Response } from "express"
import { buildArray, fromRequest, getStatusCode, handleError, resources } from "express-ext"
import { Attribute, Log, Result, Search, SearchResult, StringMap } from "onecore"
import { buildMap, buildToInsert, buildToUpdate, DB, metadata, SearchBuilder } from "query-core"
import { validate } from "xvalidators"
import { getResource } from "../resources"
import { Content, ContentFilter, contentModel, ContentRepository, ContentService } from "./content"
export * from "./content"

export class SqlContentRepository implements ContentRepository {
  constructor(protected db: DB) {
    const meta = metadata(contentModel)
    this.primaryKeys = meta.keys
    this.map = buildMap(contentModel)
  }
  map?: StringMap
  primaryKeys: Attribute[]
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

export class ContentController {
  constructor(private log: Log, private service: ContentService) {
    this.search = this.search.bind(this)
    this.load = this.load.bind(this)
    this.create = this.create.bind(this)
    this.update = this.update.bind(this)
    this.patch = this.patch.bind(this)
    this.delete = this.delete.bind(this)
  }
  search(req: Request, res: Response) {
    const filter = fromRequest<ContentFilter>(req, buildArray(["status"], resources.fields))
    const page = getPage(filter.page)
    const limit = getLimit(filter.limit)
    this.service
      .search(filter, limit, page, filter.fields)
      .then((result) => res.status(200).json(result).end())
      .catch((err) => handleError(err, res, this.log))
  }
  load(req: Request, res: Response) {
    const id = req.params["id"]
    const lang = req.params["lang"]
    if (!id || !lang) {
      res.status(400).json({ error: "id and lang are required" }).end()
      return
    }
    this.service
      .load(id, lang)
      .then((content) => {
        if (!content) {
          res.status(404).end()
        } else {
          res.status(200).json(content).end()
        }
      })
      .catch((err) => handleError(err, res, this.log))
  }
  create(req: Request, res: Response) {
    const content = req.body as Content
    if (!content) {
      res.status(400).json({ error: "content is required" }).end()
      return
    }
    let language = res.locals.lang || "en"
    const resource = getResource(language)
    const errors = validate<Content>(content, contentModel, resource)
    if (errors.length > 0) {
      res.status(getStatusCode(errors)).json(errors).end()
    } else {
      this.service
        .create(content)
        .then((result) => {
          if (result === 0) {
            res.status(409).end()
          } else {
            res.status(201).json(content).end()
          }
        })
        .catch((err) => handleError(err, res, this.log))
    }
  }
  update(req: Request, res: Response) {
    const id = req.params["id"]
    const lang = req.params["lang"]
    if (!id || !lang) {
      res.status(400).json({ error: "id and lang are required" }).end()
      return
    }
    const content = req.body as Content
    if (!content) {
      res.status(400).json({ error: "content is required" }).end()
      return
    }
    content.id = id
    content.lang = lang
    let language = res.locals.lang || "en"
    const resource = getResource(language)
    const errors = validate<Content>(content, contentModel, resource)
    if (errors.length > 0) {
      res.status(getStatusCode(errors)).json(errors).end()
    } else {
      this.service
        .update(content)
        .then((result) => {
          if (result === 0) {
            res.status(410).end()
          } else {
            res.status(200).json(content).end()
          }
        })
        .catch((err) => handleError(err, res, this.log))
    }
  }
  patch(req: Request, res: Response) {
    const id = req.params["id"]
    const lang = req.params["lang"]
    if (!id || !lang) {
      res.status(400).json({ error: "id and lang are required" }).end()
      return
    }
    const content = req.body as Content
    if (!content) {
      res.status(400).json({ error: "content is required" }).end()
      return
    }
    content.id = id
    content.lang = lang
    let language = res.locals.lang || "en"
    const resource = getResource(language)
    const errors = validate<Content>(content, contentModel, resource, false, true)
    if (errors.length > 0) {
      res.status(getStatusCode(errors)).json(errors).end()
    } else {
      this.service
        .patch(content)
        .then((result) => {
          if (result === 0) {
            res.status(410).end()
          } else {
            res.status(200).json(content).end()
          }
        })
        .catch((err) => handleError(err, res, this.log))
    }
  }
  delete(req: Request, res: Response) {
    const id = req.params["id"]
    const lang = req.params["lang"]
    if (!id || !lang) {
      res.status(400).json({ error: "id and lang are required" }).end()
      return
    }
    this.service
      .delete(id, lang)
      .then((result) => {
        if (result === 0) {
          res.status(410).end()
        } else {
          res.status(200).json(result).end()
        }
      })
      .catch((err) => handleError(err, res, this.log))
  }
}

function getPage(page?: number | string): number {
  if (page) {
    if (typeof page === "string" && !isNaN(page as any)) {
      const p = parseInt(page, 10)
      if (p < 1) {
        return 1
      }
      return p
    } else {
      return (page as number) < 1 ? 1 : (page as number)
    }
  }
  return 1
}
function getLimit(limit?: number | string): number {
  if (limit) {
    if (typeof limit === "string" && !isNaN(limit as any)) {
      const p = parseInt(limit, 10)
      if (p < 1) {
        return resources.defaultLimit
      }
      return p
    } else {
      return (limit as number) > 0 ? (limit as number) : resources.defaultLimit
    }
  }
  return resources.defaultLimit
}
export function useContentController(log: Log, db: DB): ContentController {
  const builder = new SearchBuilder<Content, ContentFilter>(db.query, "contents", contentModel, db.driver)
  const repository = new SqlContentRepository(db)
  const service = new ContentUseCase(builder.search, repository)
  return new ContentController(log, service)
}
