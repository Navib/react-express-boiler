import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth';
import user from './user';
import message from './message';
import allMessages from './allMessages';
import activeProfile from './activeProfile';

const rootReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  auth: auth,
  user: user,
  userMessages: message,
  allMessages: allMessages,
  activeProfile: activeProfile
});

export default rootReducer;
