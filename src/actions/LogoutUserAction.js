import Cookies from 'universal-cookie';
import {LOGIN_COOKIE_NAME} from '../config/Config';
export const LOGIN_USER = 'LOGIN_USER';

export function logoutUser(){
	const cookies = new Cookies();
	cookies.remove(LOGIN_COOKIE_NAME);
	let returnUserInfo = null;	
	return {
			type: LOGIN_USER,
			payload: new Promise((resolve, reject) => {
				resolve(
					returnUserInfo
					)
			})
		}
}