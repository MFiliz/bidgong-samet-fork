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
                fetching: true,
                fetched: false,
            };
        case `${GET_MATCHES}_REJECTED`:
            return {
                ...state,
                fetching: false,
                fetched: false,
                error: payload
            };
        case `${GET_MATCHES}_FULFILLED`:
            
            return payload.length===0 ? {
                ...state,
                fetching: false,
                fetched: false,
                error:{
                    message: "The active matches of the selected league was not found",
                    isCustom : true
                }
            }:{
                ...state,
                fetching: false,
                fetched: true,
                result: payload
            };
        default:
            return state;
    }
}