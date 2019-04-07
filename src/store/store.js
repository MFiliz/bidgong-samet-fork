import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';

import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reduxPromiseMiddleware from 'redux-promise-middleware';

const initialState = {
    fetching: false,
    fetched: false,
    result: [],
    user: '',
    error: null
};
const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(
    reduxPromiseMiddleware,thunk,logger
)));

export default store;