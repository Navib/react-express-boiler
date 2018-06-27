import { takeLatest, put, call, all } from 'redux-saga/effects';
import { SENT_MESSAGE, SEND_MESSAGE_ERROR } from '../actions';

import api from '../api';

export function* sendMessage(data) {
  const { payload } = data;
  try {
    yield put({ type: SENT_MESSAGE, payload });
  } catch (error) {
    console.log('signup error', error.response.data.error);
    yield put({ type: SEND_MESSAGE_ERROR, error: error.response.data.error });
  }
}
