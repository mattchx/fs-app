import { combineReducers } from 'redux';
import counterReducer from './posts';
import loggedReducer from './loggedIn';
import authReducer from './loggedIn';

const rootReducer = combineReducers({
  auth: authReducer,
  counter: counterReducer,
  loggedIn: loggedReducer,
});

export default rootReducer;
