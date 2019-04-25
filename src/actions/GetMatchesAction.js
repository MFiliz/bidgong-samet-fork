import axios from 'axios';
export const GET_MATCHES = 'GET_MATCHES';

export function getMatches(leagueId){
	return {
		type: GET_MATCHES,
		payload: new Promise((resolve, reject) => {
			// setTimeout(function() {
				resolve(axios.get('http://bidgongservices-dev.eu-central-1.elasticbeanstalk.com/api/Teams/GetActiveMatchesByLeagueId',{
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
