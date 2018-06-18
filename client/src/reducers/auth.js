import {
  CHANGED_AUTH,
  CHANGE_AUTH_ERROR,
  SIGNED_IN,
  SIGN_IN_ERROR
} from '../actions';

const INITIAL_STATE = {
  authenticated: '',
  errorMessage: ''
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGED_AUTH:
      return { ...state, authenticated: action.response.data.token };

    case SIGNED_IN:
      return { ...state, authenticated: action.response.data.token };

    case CHANGE_AUTH_ERROR:
      return { ...state, errorMessage: action.error };

    case SIGN_IN_ERROR:
      return { ...state, errorMessage: action.error };

    default:
      return state;
  }
};

export default authReducer;
