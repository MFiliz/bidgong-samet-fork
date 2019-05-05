import {LOGIN_USER} from '../actions/LoginUserAction';

export default function LoginUserReducer(state=[] , {
    type,
    payload
}) {
    
    switch (type) {       
        case `${LOGIN_USER}_PENDING`:
            return {
                ...state,
                fetching: true,
                fetched: false,
            };
        case `${LOGIN_USER}_REJECTED`:
            return {
                ...state,
                fetching: false,
                fetched: false,
                error: payload
            };
        case `${LOGIN_USER}_FULFILLED`:
            return {
                ...state,
                fetching: false,
                fetched: true,
                userInfo : typeof(payload) === "undefined" ? null : {
                    session : payload.Session,
                    username : payload.username,
                    //email :"test@test.com",
                     email : payload.attributes.email,
                     userDataKey : payload.userDataKey
                },
                userLoggedIn :typeof(payload) === "undefined" ? false : true
            };
        default:
            return state;
    }
}