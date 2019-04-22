import {
    GET_CATEGORIES
} from '../actions/GetCategoriesAction';

export default function GetCategoriesReducer(state=[] , {
    type,
    payload
}) {
    
    switch (type) {       
        case `${GET_CATEGORIES}_PENDING`:
            return {
                ...state,
                fetching: true
            };
        case `${GET_CATEGORIES}_REJECTED`:
            return {
                ...state,
                fetching: false,
                error: payload
            };
        case `${GET_CATEGORIES}_FULFILLED`:
        // console.log("CATEGORİES");
        // console.log(payload);
        // console.log("CATEGORİES");
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