import {
    SEND_PAYMENT
} from '../actions/SendPaymentAction';

export default function SendPaymentReducer(state=null , {
    type,
    payload
}) {
    
    switch (type) {       
        case `${SEND_PAYMENT}_PENDING`:
            return {
                ...state,
                fetching: true,
                fetched: false,
            };
        case `${SEND_PAYMENT}_REJECTED`:
            return {
                ...state,
                fetching: false,
                fetched: false,
                error: payload
            };
        case `${SEND_PAYMENT}_FULFILLED`:
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