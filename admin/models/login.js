import { createObjWithDefaultValues } from '~/utils/general'
export class Login {
  constructor(options) {
    const defaults = {
      phoneNumber: null,
      password: null,
    }
    createObjWithDefaultValues(this, defaults, options)
  }
}
