import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';



//Action increment
const increment = () => {
  return { type: 'INCREMENT' };
};
const decrement = () => {
  return { type: 'DECREMENT' };
};

// Reducer
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state + 1;
    default:
      return state;
  }
};

// Store
let store = createStore(counter, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//Display it in the console
store.subscribe(()=> console.log(store))

// Dispatch
store.dispatch(increment())
store.dispatch(increment())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
