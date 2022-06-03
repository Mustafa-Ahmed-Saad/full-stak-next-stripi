import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import rootReducer from '.';

const initialState = {};

const middleWares = [logger];

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleWares)));

export default store;
