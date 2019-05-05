import axios from 'axios';
import {BIDGONG_SERVICE_MAIN_ADDRESS} from '../config/Config';
export const GET_LEAGUES = 'GET_LEAGUES';

export function getLeagues(categoryId){
	return {
		type: GET_LEAGUES,
		payload: new Promise((resolve, reject) => {
			// setTimeout(function() {
					resolve(axios.get(`${BIDGONG_SERVICE_MAIN_ADDRESS}/api/Leagues/GetLeagueByCategoryId`,{
						params: {
							id: categoryId.toUpperCase()
						}
					})
					.then(res => res.data.filter(data => data.isActive === true && data.isDeleted === false))
					)
			// }, 2000);
		  })
	}
}