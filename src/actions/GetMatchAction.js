import axios from 'axios';
import {BIDGONG_SERVICE_MAIN_ADDRESS} from '../config/Config';
export const GET_CURRENT_MATCH = 'GET_CURRENT_MATCH';

export function getMatch(matchId){
	return {
		type: GET_CURRENT_MATCH,
		payload: new Promise((resolve, reject) => {
			// setTimeout(function() {
				resolve(axios.get(`${BIDGONG_SERVICE_MAIN_ADDRESS}/api/Teams/GetActiveMatchByGuid`,{
					params: {
						MatchId: matchId.toUpperCase()
					}
				}) 
				.then(res => res.data)
				)
			// }, 2000);
		  })
	}
}
