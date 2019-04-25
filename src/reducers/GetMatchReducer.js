import {
    GET_CURRENT_MATCH
} from '../actions/GetMatchAction';

export default function GetMatchReducer(state=[] , {
    type,
    payload
}) {
    
    switch (type) {       
        case `${GET_CURRENT_MATCH}_PENDING`:
            return {
                ...state,
                fetching: true,
                fetched: false,
            };
        case `${GET_CURRENT_MATCH}_REJECTED`:
            return {
                ...state,
                fetching: false,
                fetched: false,
                error: payload
            };
        case `${GET_CURRENT_MATCH}_FULFILLED`:
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