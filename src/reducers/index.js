import counterReducer from './counter';
import loggedReducer from './loggedIn';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  counter: counterReducer,
  loggedIn: loggedReducer,
});

export default rootReducer