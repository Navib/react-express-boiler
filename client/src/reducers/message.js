import { SENT_MESSAGE, SEND_MESSAGE_ERROR } from '../actions';

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

    default:
      return state;
  }
};

export default MessageReducer;
