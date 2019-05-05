import {
    SET_WINNER
} from '../actions/WinnerAction';

export default function WinnerReducer(state=null , {
    type,
    payload
}) {
    
    switch (type) {       
        case `${SET_WINNER}_PENDING`:
            return {
                ...state,
                fetching: true,
                fetched: false,
            };
        case `${SET_WINNER}_REJECTED`:
            return {
                ...state,
                fetching: false,
                fetched: false,
                error: payload
            };
        case `${SET_WINNER}_FULFILLED`:
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