import {  createStore,applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { Reducer } from './Reducer';

var store = createStore(Reducer,applyMiddleware(logger));

export default store