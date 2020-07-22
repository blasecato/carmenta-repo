import { createActions } from 'redux-actions';

export const { auth } = createActions({
  AUTH: {
    LOGIN: (email, password) => ({ email, password }),
    LOGIN_RESPONSE: (token) => ({ token }),

    GET_USER: (email) => ({ email }),
    GET_USER_RESPONSE: (user) => ({ user }),

    SIGNUP: (data) => ({ data }),
    SIGNUP_RESPONSE: (success) => ({ success }),

    SIGNUP_BENEFICIARY: (data) => ({ data }),
    SIGNUP_BENEFICIARY_RESPONSE: (success) => ({ success }),

    LOGOUT: () => ({}),
  }
})