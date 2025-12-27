import { Controller } from "express-ext"
import { Log } from "onecore"
import { Article, ArticleFilter, ArticleService } from "./article"

export class ArticleController extends Controller<Article, string, ArticleFilter> {
  constructor(log: Log, service: ArticleService) {
    super(log, service)
  }
}
