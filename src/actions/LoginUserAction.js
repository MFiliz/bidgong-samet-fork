import {Auth} from 'aws-amplify';
import Authentication from '../config/Authentication';
export const LOGIN_USER = 'LOGIN_USER';

const auth = Authentication(Auth);

export function loginUser(userObj){
	return {
		type: LOGIN_USER,
		payload: new Promise((resolve, reject) => {
			resolve(
                auth.signIn(userObj.username, userObj.password)
                .then(res =>  res)
				)
		  })
	}
}