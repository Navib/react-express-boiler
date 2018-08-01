import { takeLatest, put, call, all } from 'redux-saga/effects';
import {
  ADDED_FOLLOWER,
  ADD_FOLLOWER_ERROR,
  GOT_FOLLOWERS,
  GET_FOLLOWERS_ERROR,
  GET_WHO_FOLLOWS_USER_ERROR,
  GOT_WHO_FOLLOWS_USER
} from '../actions';

import api from '../api';

export function* addFollower(data) {
  const { payload, auth } = data;
  try {
    const response = yield call(api.addFollower, payload, auth);
    yield put({ type: ADDED_FOLLOWER, response });
  } catch (error) {
    yield put({ type: ADD_FOLLOWER_ERROR, error: error.response.data.error });
  }
}

export function* getFollowers(data) {
  const { payload } = data;
  try {
    const response = yield call(api.getAnyUser, payload);
    yield put({ type: GOT_FOLLOWERS, response });
  } catch (error) {
    console.log('error', error);
    yield put({ type: GET_FOLLOWERS_ERROR, error: 'Cannot GET' });
  }
}

export function* getWhoFollowsUser(data) {
  console.log('saga', data);
  const { payload } = data;
  try {
    const response = yield call(api.getFollowers, payload);
    yield put({ type: GOT_WHO_FOLLOWS_USER, response });
  } catch (error) {
    console.log('error', error);
    yield put({ type: GET_WHO_FOLLOWS_USER_ERROR, error: 'Cannot GET' });
  }
}
