import {
    BET_PLAYER
} from '../actions/BetPlayerAction';

export default function BetPlayerReducer(state=[] , {
    type,
    payload
}) {
    switch (type) {       
        case `${BET_PLAYER}_PENDING`:
            return {
                ...state,
                fetching: true,
                fetched: false,
            };
        case `${BET_PLAYER}_REJECTED`:
            return {
                ...state,
                fetching: false,
                fetched: false,
                error: payload
            };
        case `${BET_PLAYER}_FULFILLED`:
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