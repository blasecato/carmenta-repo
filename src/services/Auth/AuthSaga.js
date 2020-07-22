import { put, takeLatest, all } from 'redux-saga/effects';
import { push } from 'react-router-redux'
import Api from '../../common/api'
import { auth } from "./AuthActions"

function* login({ payload }) {
  const { email, password } = payload
  const response = yield Api.post("/auth/login", { email, password })
  if (response.ok) {
    
    localStorage.setItem('token', response.payload.payload);
    yield put(auth.loginResponse(response.payload.payload));
  } else {
    const err = new TypeError('ERROR_LOGIN')
    yield put(auth.loginResponse(err))
  }
}

function* signup({ payload }) {
  const { data } = payload
  const response = yield Api.post('/auth/signup', data);
  if (response.ok) {
    yield put(auth.signupResponse(response.ok));
  } else {
    const err = new TypeError('ERROR_LOGIN')
    yield put(auth.signupResponse(err))
  }
}

function* getUser({ payload }) {
    const response = yield Api.get(`/persona/getUser/${payload.email}`)
    if (response.ok) {
      yield put(auth.getUserResponse(response.payload));
    } else {
      const err = new TypeError('ERROR_GET_PERSON')
      yield put(auth.getUserResponse(err))
    }
}

function* logout() {
  localStorage.removeItem('token');
}

function* ActionWatcher() {
  yield takeLatest(auth.login, login)
  yield takeLatest(auth.signup, signup)
  yield takeLatest(auth.getUser, getUser)
  yield takeLatest(auth.logout, logout)
}

export default function* rootSaga() {
  yield all([
    ActionWatcher(),
  ]);
}