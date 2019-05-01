import axios from 'axios';
export const GET_PLAYER = 'GET_PLAYER';

export function getPlayer(playerId){
	return {
		type: GET_PLAYER,
		payload: new Promise((resolve, reject) => {
				resolve(axios.get('http://bidgongservices-dev.eu-central-1.elasticbeanstalk.com/api/Players/GetById',{
					params: {
						id: playerId
					}
				})
				.then(res => res.data)
				)
		  })
	}
}
