import {
    GET_MATCHES
} from '../actions/GetMatchesAction';

export default function GetMatchesReducer(state=[] , {
    type,
    payload
}) {
    switch (type) {       
        case `${GET_MATCHES}_PENDING`:
            return {
                ...state,
                fetching: true
            };
        case `${GET_MATCHES}_REJECTED`:
            return {
                ...state,
                fetching: false,
                error: payload
            };
        case `${GET_MATCHES}_FULFILLED`:
            return {
                ...state,
                fetching: false,
                fetched: true,
                result: payload,
                user: 'ilhannn'
            };
        default:
            return state;
    }
}