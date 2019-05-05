import axios from 'axios';
import {BIDGONG_SERVICE_MAIN_ADDRESS} from '../config/Config';
export const GET_CATEGORIES = 'GET_CATEGORIES';

export function getCategories(){
	return {
		type: GET_CATEGORIES,
		payload: new Promise((resolve, reject) => {
			// setTimeout(function() {
			  resolve(axios.get(`${BIDGONG_SERVICE_MAIN_ADDRESS}/api/Categories/GetAll`).then(res => res.data))
			// }, 2000);
		  })
	}
}