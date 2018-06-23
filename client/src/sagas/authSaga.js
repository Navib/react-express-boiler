import { takeLatest, put, call, all } from 'redux-saga/effects';
import { CHANGE_AUTH, CHANGED_AUTH, CHANGE_AUTH_ERROR } from '../actions';
import { SIGN_IN, SIGNED_IN, SIGN_IN_ERROR } from '../actions';
import { SIGN_OUT, SIGNED_OUT, SIGN_OUT_ERROR } from '../actions';
import api from '../api';

export function* signup(data) {
  try {
    const response = yield call(api.signup, data);
    yield put({ type: CHANGED_AUTH, response });
    localStorage.setItem('token', response.data.token);
    data.callback();
  } catch (error) {
    console.log('signup error', error.response.data.error);
    yield put({ type: CHANGE_AUTH_ERROR, error: error.response.data.error });
  }
}

export function* signin(data) {
  try {
    const response = yield call(api.signin, data);
    yield put({ type: SIGNED_IN, response });
    localStorage.setItem('token', response.data.token);
    data.callback();
  } catch (error) {
    yield put({ type: SIGN_IN_ERROR, error: error.response.data.error });
  }
}

export function* signout() {
  try {
    yield put({ type: SIGNED_OUT, payload: '' });
    localStorage.removeItem('token');
  } catch (error) {
    yield put({ type: SIGN_OUT_ERROR, error: 'isses logging out' });
  }
}
