import { createObjWithDefaultValues } from '~/utils/general'

export class Article {
  constructor(options) {
    const defaults = {
      categoryId: null,
      author: null,
      createdDate: null,
      htmlContent: null,
      text: null,
    }
    createObjWithDefaultValues(this, defaults, options)
  }
}

export class Queries {
  constructor(options) {
    const defaults = {
      query: null,
      start: null,
      end: null,
      type: 2,
    }
    createObjWithDefaultValues(this, defaults, options)
  }
}
