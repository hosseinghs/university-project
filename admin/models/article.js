import { createObjWithDefaultValues } from '~/utils/general'

export class Article {
  constructor(options) {
    const defaults = {
      name: null,
      categpry: null,
      author: null,
      createdDate: null,
    }
    createObjWithDefaultValues(this, defaults, options)
  }
}
