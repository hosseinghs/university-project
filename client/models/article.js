import { createObjWithDefaultValues } from '~/utils/general';

export class Article {
  constructor(options) {
    const defaults = {
      id: null,
      author: null,
      categoryId: null,
      date: null,
      isPublished: true,
      text: null,
      title: null,
    };
    createObjWithDefaultValues(this, defaults, options);
  }
}
