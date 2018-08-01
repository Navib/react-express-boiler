import { GOT_USER, GET_USER_ERROR } from '../actions';

const INITIAL_STATE = {
  email: '',
  username: '',
  following: [],
  followers: []
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GOT_USER:
      return {
        ...state,
        email: action.response.data.user.email,
        username: action.response.data.user.username,
        following: action.response.data.user.following,
        followers: action.response.data.user.followers
      };

    case GET_USER_ERROR:
      return { ...state, email: '', username: '', following: [] };

    default:
      return state;
  }
};

export default userReducer;
