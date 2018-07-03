import { GOT_ALL_MESSAGES, GET_ALL_MESSAGES_ERROR } from '../actions';

const INITIAL_STATE = {
  messages: []
};

const AllMessagesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GOT_ALL_MESSAGES:
      return {
        ...state,
        messages: action.response.data.messages
      };

    case GET_ALL_MESSAGES_ERROR:
      return { ...state, message: [] };

    default:
      return state;
  }
};

export default AllMessagesReducer;
