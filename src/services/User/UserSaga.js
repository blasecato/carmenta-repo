import { put, takeLatest, all } from 'redux-saga/effects';
import { push } from 'react-router-redux'
import Api from '../../common/api'
import { user } from "./UserActions"

function* getUser({ payload }) {
    console.log("payadfsa",payload)
    const response = yield Api.get(`/persona/getUser/${payload.email}`)
    if (response.ok) {
      yield put(user.getUserResponse(response.payload));
    } else {
      const err = new TypeError('ERROR_GET_PERSON')
      yield put(user.getUserResponse(err))
    }
}

function* ActionWatcher() {
  yield takeLatest(user.getUser, getUser)
}

export default function* rootSaga() {
  yield all([
    ActionWatcher(),
  ]);
}