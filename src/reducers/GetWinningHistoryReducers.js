import {
    GET_WINNING_HISTORY
} from '../actions/GetWinningHistoryAction';

export default function GetWinningHistoryReducer(state=[] , {
    type,
    payload
}) {
    
    switch (type) {       
        case `${GET_WINNING_HISTORY}_PENDING`:
            return {
                ...state,
                fetching: true,
                fetched: false,
            };
        case `${GET_WINNING_HISTORY}_REJECTED`:
            return {
                ...state,
                fetching: false,
                fetched: false,
                error: payload
            };
        case `${GET_WINNING_HISTORY}_FULFILLED`:
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