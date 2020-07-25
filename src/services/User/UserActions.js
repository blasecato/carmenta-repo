import { createActions } from 'redux-actions';

export const { user } = createActions({
  user: {
    GET_USER: (email) => ({ email }),
    GET_USER_RESPONSE: (users) => ({ users }),
  }
})