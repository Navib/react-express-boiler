import { takeLatest, put, call, all, takeEvery } from 'redux-saga/effects';
import { signup, signin, signout } from './authSaga';
import { getUser } from './userSaga';
import { sendMessage, getMessages } from './messageSaga';
import { CHANGE_AUTH } from '../actions';
import { SIGN_IN } from '../actions';
import { SIGN_OUT } from '../actions';
import { GET_USER } from '../actions';
import { SEND_MESSAGE } from '../actions';
import { GET_USER_MESSAGES } from '../actions';

export function* sagas() {
  yield all([
    yield takeLatest(CHANGE_AUTH, signup),
    yield takeLatest(SIGN_IN, signin),
    yield takeLatest(SIGN_OUT, signout),
    yield takeLatest(GET_USER, getUser),
    yield takeEvery(SEND_MESSAGE, sendMessage),
    yield takeEvery(GET_USER_MESSAGES, getMessages)
  ]);
}
