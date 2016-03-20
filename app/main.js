import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Character from './Character';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';

const store = applyMiddleware(thunkMiddleware)(createStore);

render(
  <Provider store={store(rootReducer)}>
  	<Character />
  </Provider>,
  document.getElementById('app')
);
