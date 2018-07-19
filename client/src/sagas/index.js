import { takeLatest, put, call, all, takeEvery } from 'redux-saga/effects';
import { signup, signin, signout } from './authSaga';
import { getUser } from './userSaga';
import {
  sendMessage,
  getMessages,
  deleteMessage,
  getAllMessages,
  getActiveUserMessages
} from './messageSaga';
import { addFollower, getFollowers } from './followerSaga';
import {
  CHANGE_AUTH,
  SIGN_IN,
  SIGN_OUT,
  GET_USER,
  SEND_MESSAGE,
  GET_USER_MESSAGES,
  GET_ALL_MESSAGES,
  DELETE_USER_MESSAGE,
  GET_ACTIVE_USER_MESSAGES,
  ADD_FOLLOWER,
  GET_FOLLOWERS
} from '../actions';

export function* sagas() {
  yield all([
    yield takeLatest(CHANGE_AUTH, signup),
    yield takeLatest(SIGN_IN, signin),
    yield takeLatest(SIGN_OUT, signout),
    yield takeLatest(GET_USER, getUser),
    yield takeEvery(SEND_MESSAGE, sendMessage),
    yield takeEvery(GET_USER_MESSAGES, getMessages),
    yield takeEvery(GET_ALL_MESSAGES, getAllMessages),
    yield takeEvery(DELETE_USER_MESSAGE, deleteMessage),
    yield takeEvery(GET_ACTIVE_USER_MESSAGES, getActiveUserMessages),
    yield takeEvery(ADD_FOLLOWER, addFollower),
    yield takeEvery(GET_FOLLOWERS, getFollowers)
  ]);
}
