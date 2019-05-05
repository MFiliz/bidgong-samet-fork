import axios from 'axios';
import {BIDGONG_SERVICE_MAIN_ADDRESS} from '../config/Config';
export const GET_MATCHES = 'GET_MATCHES';

export function getMatches(leagueId){
	return {
		type: GET_MATCHES,
		payload: new Promise((resolve, reject) => {
			// setTimeout(function() {
				resolve(axios.get(`${BIDGONG_SERVICE_MAIN_ADDRESS}/api/Teams/GetActiveMatchesByLeagueId`,{
					params: {
						LeagueId: leagueId.toUpperCase()
					}
				})
				.then(res => res.data)
				)
			// }, 2000);
		  })
	}
}
