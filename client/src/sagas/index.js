import { takeLatest, put, call, all } from 'redux-saga/effects';
import { signup, signin, signout } from './authSaga';
import { getUser } from './userSaga';
import { CHANGE_AUTH, CHANGED_AUTH, CHANGE_AUTH_ERROR } from '../actions';
import { SIGN_IN, SIGNED_IN, SIGN_IN_ERROR } from '../actions';
import { SIGN_OUT, SIGNED_OUT, SIGN_OUT_ERROR } from '../actions';
import { GET_USER, GOT_USER, GET_USER_ERROR } from '../actions';

export function* sagas() {
  yield all([
    yield takeLatest(CHANGE_AUTH, signup),
    yield takeLatest(SIGN_IN, signin),
    yield takeLatest(SIGN_OUT, signout),
    yield takeLatest(GET_USER, getUser)
  ]);
}
