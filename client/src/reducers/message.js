import {
  SENT_MESSAGE,
  SEND_MESSAGE_ERROR,
  GOT_USER_MESSAGES,
  GET_USER_MESSAGES_ERROR
} from '../actions';

const INITIAL_STATE = {
  messages: []
};

const MessageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SENT_MESSAGE:
      console.log(action.payload.timeSent);
      return {
        ...state,
        messages: [
          {
            body: action.payload.body,
            sentBy: action.payload.sentBy,
            timeSent: action.payload.timeSent
          },
          ...state.messages
        ]
      };

    case SEND_MESSAGE_ERROR:
      return { ...state, messages: [] };

    case GOT_USER_MESSAGES:
      return {
        ...state,
        messages: action.response.data.messages
      };

    case GET_USER_MESSAGES_ERROR:
      return { ...state, message: [] };
    default:
      return state;
  }
};

export default MessageReducer;
