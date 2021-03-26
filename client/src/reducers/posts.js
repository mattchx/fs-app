//import {addPost, deletePost, getPosts } from '../actions/posts'
import { ADD_POST, DELETE_POST, GET_POSTS } from '../actions/types';

const initialState = {
  userId: null,
  posts: [{ postId: 0, text: 'Welcome!' }],
};

const postsReducer = (state, action) => {
  let postId = 1;
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, { postId: postId++, text: action.payload }],
      };
    case DELETE_POST:
        return {
            ...state,
            posts: [state.posts.filter(post => post.postId !== action.payload)]
          };
    default:
      return state;
  }
};

export default postsReducer;
