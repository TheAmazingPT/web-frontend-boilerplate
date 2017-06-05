import {combineReducers} from 'redux';

import app from './client/app';

const reducers = combineReducers(Object.assign({}, (app: app)));

export default (state, action) => {
  return reducers(state, action);
};
