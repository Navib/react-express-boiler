import { GOT_USER, GET_USER_ERROR } from '../actions';

const INITIAL_STATE = {
  email: '',
  userName: ''
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GOT_USER:
      console.log(action.response.data.user);
      return { ...state, email: action.response.data.user.email };

    case GET_USER_ERROR:
      return { ...state, email: '' };

    default:
      return state;
  }
};

export default userReducer;
