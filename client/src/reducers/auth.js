import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return !state;
    default:
      return state;
  }
};

export default authReducer;
