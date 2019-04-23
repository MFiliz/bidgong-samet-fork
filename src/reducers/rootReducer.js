import { combineReducers } from 'redux'

import categories from './GetCategoriesReducer';
import category from './GetCategoryByIdReducer';
import categorySelection from './SelectCurrentCategoryReducer';
import leagueSelection from './SelectCurrentLeagueReducer';
import matches from './GetMatchesReducer';
import currentMatch from './GetMatchReducer';
import leagues from './GetLeaguesReducer';

export default combineReducers({
    categories,category,categorySelection,matches,currentMatch,leagues,leagueSelection
})