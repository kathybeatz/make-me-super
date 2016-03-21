import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './App';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import 'jquery';
import 'bootstrap-webpack'

const store = applyMiddleware(thunkMiddleware)(createStore);

render(
  <Provider store={store(rootReducer)}>
  	<App />
  </Provider>,
  document.getElementById('app')
);
