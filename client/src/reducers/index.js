import { combineReducers } from 'redux';
import counterReducer from './posts';
import errorReducer from './error';
import loggedReducer from './loggedIn';
import authReducer from './loggedIn';

const rootReducer = combineReducers({
  auth: authReducer,
  counter: counterReducer,
  loggedIn: loggedReducer,
});

export default rootReducer;
