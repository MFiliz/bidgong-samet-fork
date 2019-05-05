import axios from 'axios';
import {BIDGONG_SERVICE_MAIN_ADDRESS} from '../config/Config';
export const GET_PLAYER = 'GET_PLAYER';

export function getPlayer(matchId,playerId){
	return {
		type: GET_PLAYER,
		payload: new Promise((resolve, reject) => {
				// resolve(axios.get(`${BIDGONG_SERVICE_MAIN_ADDRESS}/api/Players/GetById`,{
				// 	params: {
				// 		id: playerId
				// 	}
				// })
				resolve(axios.get(`${BIDGONG_SERVICE_MAIN_ADDRESS}/api/Teams/GetActiveMatchByGuid`,{
					params: {
						MatchId: matchId.toUpperCase()
					}
				}) 
				.then(res =>[...res.data.detail.homeTeam.players, ...res.data.detail.guestTeam.players])
				.then(res => res.find(data => data.playerGuid === playerId))
				// .then(res =>res.data)
				)
		  })
	}
}
