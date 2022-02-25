import { createObjWithDefaultValues } from '~/utils/general'
export class Login {
  constructor(options) {
    const defaults = {
      userName: null,
      password: null,
    }
    createObjWithDefaultValues(this, defaults, options)
  }
}
