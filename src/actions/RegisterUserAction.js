import {Auth} from 'aws-amplify';
import Authentication from '../config/Authentication';
export const REGISTER_USER = 'REGISTER_USER';

const auth = Authentication(Auth);

export function registerUser(userObj){
	return {
		type: REGISTER_USER,
		payload: new Promise((resolve, reject) => {
			resolve(
                auth.signUp(userObj)
                .then(res =>  res)
				)
		  })
	}
}