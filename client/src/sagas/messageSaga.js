import { takeLatest, put, call, all } from 'redux-saga/effects';
import { SENT_MESSAGE, SEND_MESSAGE_ERROR } from '../actions';
import { GOT_USER_MESSAGES, GET_USER_MESSAGES_ERROR } from '../actions';
import { GOT_ALL_MESSAGES, GET_ALL_MESSAGES_ERROR } from '../actions';
import { DELETED_USER_MESSAGE, DELETED_USER_MESSAGE_ERROR } from '../actions';

import api from '../api';

export function* sendMessage(data) {
  const { payload } = data;
  try {
    const response = yield call(api.sendMessage, payload);
    yield put({ type: SENT_MESSAGE, payload });
  } catch (error) {
    yield put({ type: SEND_MESSAGE_ERROR, error: error.response.data.error });
  }
}

export function* getMessages(data) {
  try {
    const response = yield call(api.getMessages, data.payload, data.auth);
    yield put({ type: GOT_USER_MESSAGES, response });
  } catch (error) {
    yield put({
      type: GET_USER_MESSAGES_ERROR,
      error: error.response.data.error
    });
  }
}

export function* deleteMessage(data) {
  try {
    const response = yield call(api.deleteMessage, data.payload, data.auth);
    yield put({ type: DELETED_USER_MESSAGE, response });
  } catch (error) {
    yield put({
      type: DELETED_USER_MESSAGE_ERROR,
      error: error.response.data.error
    });
  }
}

export function* getAllMessages(data) {
  try {
    const response = yield call(api.getMessages, data.payload, data.auth);
    yield put({ type: GOT_ALL_MESSAGES, response });
  } catch (error) {
    yield put({
      type: GET_ALL_MESSAGES_ERROR,
      error: error.response.data.error
    });
  }
}
