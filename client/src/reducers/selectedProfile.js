import { GOT_SELECTED_PROFILE, GET_SELECTED_PROFILE_ERROR } from '../actions';

const INITIAL_STATE = {
  email: '',
  username: '',
  following: [],
  followers: []
};

const selectedProfileReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GOT_SELECTED_PROFILE:
      return {
        ...state,
        email: action.response.data.user.email,
        username: action.response.data.user.username,
        following: action.response.data.user.following,
        followers: action.response.data.user.followers
      };

    case GET_SELECTED_PROFILE_ERROR:
      return { ...state, email: '', username: '', following: [] };

    default:
      return state;
  }
};

export default selectedProfileReducer;
