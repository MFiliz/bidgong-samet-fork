import {
    GET_PLAYER
} from '../actions/GetPlayerAction';

export default function GetMatchReducer(state=[] , {
    type,
    payload
}) {
    
    switch (type) {       
        case `${GET_PLAYER}_PENDING`:
            return {
                ...state,
                fetching: true,
                fetched: false,
            };
        case `${GET_PLAYER}_REJECTED`:
            return {
                ...state,
                fetching: false,
                fetched: false,
                error: payload
            };
        case `${GET_PLAYER}_FULFILLED`:
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