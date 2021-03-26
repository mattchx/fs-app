import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from '../actions/types';

import axios from 'axios'

export const userRegistered = (id, token) => {
  return {
    type: REGISTER_SUCCESS,
    payload: {id, token},
  };
};

export const userLoggedIn = (id, token) => {
  return {
    type: LOGIN_SUCCESS,
    payload: {id, token},
  };
};

export const  userRegisterFail = async (data) => {
  return {
    type: REGISTER_FAIL,
    payload: {data}
  };
};

export const  userLoginFail= async (data) => {
    return {
      type: LOGIN_FAIL,
      payload: {data}
    };
  };
