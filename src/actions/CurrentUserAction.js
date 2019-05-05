import Cookies from 'universal-cookie';
import CryptoJS from 'crypto-js';
import {ENCRYPT_SECRET_KEY,LOGIN_COOKIE_NAME} from '../config/Config';
export const LOGIN_USER = 'LOGIN_USER';

export function currentUser(){
	const cookies = new Cookies();
	let userInfoCookie = cookies.get(LOGIN_COOKIE_NAME);
	let returnUserInfo = null;
	if(userInfoCookie !== undefined)
	{
		var decryptedBytes = CryptoJS.AES.decrypt(userInfoCookie, ENCRYPT_SECRET_KEY);
		var userInfo= JSON.parse(decryptedBytes.toString(CryptoJS.enc.Utf8));
		returnUserInfo = {
			Session : userInfo.session,
			username : userInfo.username,
			attributes : {
				email : userInfo.email
			},
			userDataKey : userInfo.userDataKey
		}
	}	
	return {
			type: LOGIN_USER,
			payload: new Promise((resolve, reject) => {
				resolve(
					returnUserInfo
					)
			})
		}
}