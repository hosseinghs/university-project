import { createObjWithDefaultValues } from '~/models/general'

export class Signup {
  constructor(options) {
    const defaults = {
      FirstName: null,
      LastName: null,
      UserName: null,
      Password: null,
    }
    createObjWithDefaultValues(this, defaults, options)
  }
}

export class Login {
  constructor(options) {
    const defaults = {
      UserName: null,
      Password: null,
    }
    createObjWithDefaultValues(this, defaults, options)
  }
}
