import _ from 'lodash';
import {
  ADDED_FOLLOWER,
  ADD_FOLLOWER_ERROR,
  GOT_FOLLOWERS,
  GET_FOLLOWERS_ERROR
} from '../actions';

const INITIAL_STATE = [];

const followerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADDED_FOLLOWER:
      return _.uniqBy([...state, action.response.data], 'email');
      break;
    case ADD_FOLLOWER_ERROR:
      return;
      [...state];

    case GOT_FOLLOWERS:
      return action.response.data.user.following;

    case GET_FOLLOWERS_ERROR:
      return;
      [...state];

    default:
      return state;
  }
};

export default followerReducer;
