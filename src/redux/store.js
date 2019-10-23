import {createStore} from 'redux';
import combineReducers from './reducers.js';

// import promiseMiddleware from './middleware/promiseMiddleware'

let store = createStore(combineReducers);

export default store;