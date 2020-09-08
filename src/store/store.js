import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// not really sure how this works. Docs say thunk is helpful, but idk what it does
const store = createStore(rootReducer, exampleVideoData, applyMiddleware(thunk));

export default store;