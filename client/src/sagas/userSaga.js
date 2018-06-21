import { takeLatest, put, call, all } from 'redux-saga/effects';
import { GET_USER, GOT_USER, GET_USER_ERROR } from '../actions';
import api from '../api';

export function* getUser(token) {
  try {
    console.log('saga', token.payload);
    const response = yield call(api.getuser, token.payload);
    yield put({ type: GOT_USER, response });
  } catch (error) {
    console.log('error', error);
    yield put({ type: GET_USER_ERROR, error: 'Cannot locate user 411' });
  }
}
