import axios from 'axios';
import {BIDGONG_SERVICE_MAIN_ADDRESS} from '../config/Config';
export const GET_CATEGORY_BY_ID = 'GET_CATEGORY_BY_ID';

export function getCategories(){
	return {
		type: GET_CATEGORY_BY_ID,
		payload: new Promise((resolve, reject) => {
			// setTimeout(function() {
                resolve(axios.get(`${BIDGONG_SERVICE_MAIN_ADDRESS}/api/Categories/GetById`)
                .then(res => res.data.filter(data => data.isActive === true && data.isDeleted === false)))
			// }, 2000);
		  })
	}
}