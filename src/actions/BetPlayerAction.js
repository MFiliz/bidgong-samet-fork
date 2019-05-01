import axios from 'axios';
export const BET_PLAYER = 'BET_PLAYER';

export function betPlayer(betInfo){
	return {
		type: BET_PLAYER,
		payload: new Promise((resolve, reject) => {
			// setTimeout(function() {
				resolve(axios.post('http://bidgongservices-dev.eu-central-1.elasticbeanstalk.com/api/Bet/Bet',betInfo)
				.then(res => res.data)
				)
			// }, 2000);
		  })
	}
}
