import { createObjWithDefaultValues } from '~/utils/general'

export class Article {
  constructor(options) {
    const defaults = {
      categoryId: null,
      author: null,
      createdDate: new Date().toISOString(),
      htmlContent: null,
      text: null,
    }
    createObjWithDefaultValues(this, defaults, options)
  }
}

export class Queries {
  constructor(options) {
    const defaults = {
      query: true,
      start: null,
      end: null,
    }
    createObjWithDefaultValues(this, defaults, options)
  }
}
