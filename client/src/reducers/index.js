import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth';
import user from './user';
import message from './message';
import allMessages from './allMessages';

const rootReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  auth: auth,
  user: user,
  userMessages: message,
  allMessages: allMessages
});

export default rootReducer;
