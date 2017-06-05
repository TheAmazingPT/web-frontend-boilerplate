import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {Router, Route} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import reducers from './reducers/client';

import Home from './containers/home.jsx';

const middlewares = [thunk];
const store = createStore(reducers);
const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route exact path="/" component={Home} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
