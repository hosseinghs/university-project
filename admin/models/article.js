import { createObjWithDefaultValues } from '~/utils/general'

export class Article {
  constructor(options) {
    const defaults = {
      name: null,
      categoryId: null,
      author: null,
      createdDate: new Date().toISOString(),
      text: null,
    }
    createObjWithDefaultValues(this, defaults, options)
  }
}
