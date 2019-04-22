import { combineReducers } from 'redux'

import categories from './GetCategoriesReducer';
import matches from './GetMatchesReducer';

export default combineReducers({
    categories,matches
})