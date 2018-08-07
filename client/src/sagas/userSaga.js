import { takeLatest, put, call, all } from 'redux-saga/effects';
import {
  GET_USER,
  GOT_USER,
  GET_USER_ERROR,
  GOT_SELECTED_PROFILE,
  GET_SELECTED_PROFILE_ERROR
} from '../actions';
import api from '../api';

export function* getUser(token) {
  try {
    const response = yield call(api.getuser, token.payload);
    yield put({ type: GOT_USER, response });
  } catch (error) {
    console.log('error', error);
    yield put({ type: GET_USER_ERROR, error: 'Cannot locate user 411' });
  }
}

export function* getAnyUser(userId) {
  try {
    const response = yield call(api.getAnyUser, userId.payload);
    yield put({ type: GOT_SELECTED_PROFILE, response });
  } catch (error) {
    console.log('error', error);
    yield put({
      type: GET_SELECTED_PROFILE_ERROR,
      error: 'Cannot locate user 411'
    });
  }
}
