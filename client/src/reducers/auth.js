import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuth: null,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return { token: localStorage.setItem('token', action.payload.token), isAuth: true, user: action.payload.id };
    case LOGIN_FAIL:
    case REGISTER_FAIL:
      return { token: null, isAuth: false, user: null };
    default:
      return state;
  }
};

export default authReducer;
