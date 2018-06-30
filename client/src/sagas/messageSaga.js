import { takeLatest, put, call, all } from 'redux-saga/effects';
import { SENT_MESSAGE, SEND_MESSAGE_ERROR } from '../actions';
import { GOT_USER_MESSAGES, GET_USER_MESSAGES_ERROR } from '../actions';

import api from '../api';

export function* sendMessage(data) {
  const { payload } = data;
  try {
    const response = yield call(api.sendMessage, payload);
    yield put({ type: SENT_MESSAGE, payload });
  } catch (error) {
    console.log('signup error', error.response.data.error);
    yield put({ type: SEND_MESSAGE_ERROR, error: error.response.data.error });
  }
}

export function* getMessages(data) {
  try {
    const response = yield call(api.getMessages, data.payload, data.auth);
    yield put({ type: GOT_USER_MESSAGES, response });
  } catch (error) {
    console.log('get message error', error.response.data.error);
    yield put({
      type: GET_USER_MESSAGES_ERROR,
      error: error.response.data.error
    });
  }
}
