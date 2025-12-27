import { Controller } from "express-ext"
import { Log } from "onecore"
import { Category, CategoryFilter, CategoryService } from "./category"

export class CategoryController extends Controller<Category, string, CategoryFilter> {
  constructor(log: Log, service: CategoryService) {
    super(log, service)
  }
}
