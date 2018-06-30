import { GOT_USER, GET_USER_ERROR } from '../actions';

const INITIAL_STATE = {
  email: '',
  username: ''
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GOT_USER:
      return {
        ...state,
        email: action.response.data.user.email,
        username: action.response.data.user.username
      };

    case GET_USER_ERROR:
      return { ...state, email: '', username: '' };

    default:
      return state;
  }
};

export default userReducer;
