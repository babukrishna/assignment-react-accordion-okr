import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import Reducers from './reducers';

const store = createStore(Reducers, applyMiddleware(thunk));

ReactDom.render(
  <Provider store={store}><App/></Provider>,
  document.getElementById('root')
)