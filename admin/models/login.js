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

export class Admin {
  constructor(options) {
    const defaults = {
      id: null,
      firstName: null,
      lastName: null,
      phoneNumber: null,
    }
    createObjWithDefaultValues(this, defaults, options)
  }
}
