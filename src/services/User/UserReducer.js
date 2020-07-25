import { handleActions } from 'redux-actions';

export const INITIAL_STATE = {
  loading: false,
  error: false,
  success: false,
  users:[]
}

const reducer = handleActions({
  user: {
  
    GET_USER: (state, { payload: { } }) => ({ ...state, loading: true }),
    GET_USER_RESPONSE: {
      next(state, { payload: { users } }) {
        return { ...state, users }
      },
      throw(state, action) {
        return { ...state }
      }
    },
  }
},
  INITIAL_STATE
);

export default reducer;