import { DELETE_POST, ADD_POST, GET_POSTS } from './types';

export const deletePost = (id) => {
  return {
    type: DELETE_POST,
    payload: id,
  };
};

export const addPost = (text) => {
  return {
    type: ADD_POST,
    payload: text,
  };
};

export const getPosts = () => {
  return {
    type: GET_POSTS,
  };
};
