import { combineReducers } from 'redux'

import categories from './categoriesReducer';
import matches from './getMatchesReducer';

export default combineReducers({
    categories,matches
})