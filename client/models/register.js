import { createObjWithDefaultValues } from '~/utils/general';

export class Login {
  constructor(options) {
    const defaults = {
      phoneNumber: null,
      password: null,
    };
    createObjWithDefaultValues(this, defaults, options);
  }
}

export class User {
  constructor(options) {
    const defaults = {
      firstName: null,
      lastName: null,
      phoneNumber: null,
      email: null,
      birthDate: null,
      JoinedAt: new Date(),
    };
    createObjWithDefaultValues(this, defaults, options);
  }
}
