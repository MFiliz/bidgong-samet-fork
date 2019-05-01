import {
    GET_CATEGORIES
} from '../actions/GetCategoriesAction';

import {
    SELECT_CURRENT_CATEGORY
} from '../actions/SelectCurrentCategoryAction';

export default function GetCategoriesReducer(state=[] , {
    type,
    payload
}) {
    switch (type) {       
        case `${GET_CATEGORIES}_PENDING`:
            return {
                ...state,
                fetching: true,
                fetched: false,
            };
        case `${GET_CATEGORIES}_REJECTED`:
            return {
                ...state,
                fetching: false,
                fetched: false,
                error: payload
            };
        case `${GET_CATEGORIES}_FULFILLED`:        
            return {
                ...state,
                fetching: false,
                fetched: true,
                result: payload
            };
        default:
            return state;
    }
}