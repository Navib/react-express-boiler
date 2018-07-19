import {
  GOT_ACTIVE_USER_MESSAGES,
  GET_ACTIVE_USER_MESSAGES_ERROR
} from '../actions';

const INITIAL_STATE = {
  username: null,
  messages: [],
  following: []
};

const activeProfile = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GOT_ACTIVE_USER_MESSAGES:
      console.log(action);
      return {
        ...state,
        username: action.response.data.messages[0].sentBy,
        messages: action.response.data.messages,
        following: action.response.data.following
      };

    case GET_ACTIVE_USER_MESSAGES_ERROR:
      return { ...state, message: [] };

    default:
      return state;
  }
};

export default activeProfile;
