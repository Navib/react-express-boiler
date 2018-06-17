import { takeLatest, put, call } from 'redux-saga/effects';
import { CHANGE_AUTH, CHANGED_AUTH, CHANGE_AUTH_ERROR } from '../actions';
import api from '../api';

function* signup(data) {
  try {
    const response = yield call(api.signup, data);
    yield put({ type: CHANGED_AUTH, response });
    data.callback();
  } catch (error) {
    console.log('error', error);
    yield put({ type: CHANGE_AUTH_ERROR, error: 'Enter a unique email' });
  }
}
export function* sagas() {
  yield takeLatest(CHANGE_AUTH, signup);
}
