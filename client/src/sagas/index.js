import { takeLatest, put, call, all } from 'redux-saga/effects';
import { CHANGE_AUTH, CHANGED_AUTH, CHANGE_AUTH_ERROR } from '../actions';
import { SIGN_IN, SIGNED_IN, SIGN_IN_ERROR } from '../actions';
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

function* signin(data) {
  console.log('Signin', data);
  try {
    const response = yield call(api.signin, data);
    yield put({ type: SIGNED_IN, response });
    data.callback();
  } catch (error) {
    console.log('error', error);
    yield put({ type: SIGN_IN_ERROR, error: 'Incorrect email/password' });
  }
}
export function* sagas() {
  yield all([
    yield takeLatest(CHANGE_AUTH, signup),
    yield takeLatest(SIGN_IN, signin)
  ]);
}
