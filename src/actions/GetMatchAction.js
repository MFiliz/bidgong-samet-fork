import axios from 'axios';
export const GET_CURRENT_MATCH = 'GET_CURRENT_MATCH';

export function getMatch(matchId){
	return {
		type: GET_CURRENT_MATCH,
		payload: new Promise((resolve, reject) => {
			// setTimeout(function() {
				resolve(axios.get('http://bidgongservices-dev.eu-central-1.elasticbeanstalk.com/api/Teams/GetActiveMatchByGuid',{
					params: {
						MatchId: matchId
					}
				})
				.then(res => res.data)
				)
			// }, 2000);
		  })
	}
}
