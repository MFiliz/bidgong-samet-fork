import {
    GET_CATEGORY_BY_ID
} from '../actions/GetCategoryByIdAction';

export default function GetCategoryByIdReducer(state=[] , {
    type,
    payload
}) {
    switch (type) {       
        case `${GET_CATEGORY_BY_ID}_PENDING`:
            return {
                ...state,
                fetching: true,
                fetched: false,
            };
        case `${GET_CATEGORY_BY_ID}_REJECTED`:
            return {
                ...state,
                fetching: false,
                fetched: false,
                error: payload
            };
        case `${GET_CATEGORY_BY_ID}_FULFILLED`:
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