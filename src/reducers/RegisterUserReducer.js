import {
    REGISTER_USER
} from '../actions/RegisterUserAction';

export default function RegisterUserReducer(state=[] , {
    type,
    payload
}) {
    
    switch (type) {       
        case `${REGISTER_USER}_PENDING`:
            return {
                ...state,
                fetching: true,
                fetched: false,
            };
        case `${REGISTER_USER}_REJECTED`:
            return {
                ...state,
                fetching: false,
                fetched: false,
                error: payload
            };
        case `${REGISTER_USER}_FULFILLED`:
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