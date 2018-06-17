import { CHANGED_AUTH, CHANGE_AUTH_ERROR } from '../actions';

const INITIAL_STATE = {
  authenticated: '',
  errorMessage: ''
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGED_AUTH:
      return { ...state, authenticated: action.response.data.token };

    case CHANGE_AUTH_ERROR:
      return { ...state, errorMessage: action.error };
    default:
      return state;
  }
};

export default authReducer;
