import {
  SENT_MESSAGE,
  SEND_MESSAGE_ERROR,
  GOT_USER_MESSAGES,
  GET_USER_MESSAGES_ERROR,
  DELETED_USER_MESSAGE,
  DELETED_USER_MESSAGE_ERROR
} from '../actions';

const INITIAL_STATE = {
  messages: []
};

const MessageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SENT_MESSAGE:
      return {
        ...state,
        messages: [
          {
            message: action.payload.body,
            sentBy: action.payload.sentBy,
            messageSent: action.payload.timeSent,
            messageId: action.payload.messageId
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

    case DELETED_USER_MESSAGE:
      const messageId = action.response.data.deleted.messageId;
      return {
        ...state,
        messages: state.messages.filter(
          message => message.messageId !== messageId
        ),
        ...state.messages
      };

    case DELETED_USER_MESSAGE_ERROR:
      return { ...state, errorMessage: 'error deleted' };

    default:
      return state;
  }
};

export default MessageReducer;
