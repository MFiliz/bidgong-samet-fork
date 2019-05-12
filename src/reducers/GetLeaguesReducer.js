import {
    GET_LEAGUES
} from '../actions/GetLeaguesAction';

export default function GetLeaguesReducer(state=[] , {
    type,
    payload
}) {
   
    switch (type) {       
        case `${GET_LEAGUES}_PENDING`:
            return {
                ...state,
                fetching: true,
                fetched: false,
            };
        case `${GET_LEAGUES}_REJECTED`:
            return {
                ...state,
                fetching: false,
                fetched: false,
                error: payload
            };
        case `${GET_LEAGUES}_FULFILLED`:
            return payload.length===0 ? {
                ...state,
                fetching: false,
                fetched: false,
                error:{
                    message: "The league of the selected category was not found",
                    isCustom : true
                }
            } : {
                ...state,
                fetching: false,
                fetched: true,
                result: payload
            };

        default:
            return state;
    }
}