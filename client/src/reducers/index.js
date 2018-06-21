import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth.js';
import user from './user.js';

const rootReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  auth: auth,
  user: user
});

export default rootReducer;
