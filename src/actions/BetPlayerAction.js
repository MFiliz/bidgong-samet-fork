import axios from 'axios';
import {BIDGONG_SERVICE_MAIN_ADDRESS} from '../config/Config';
export const BET_PLAYER = 'BET_PLAYER';

export function betPlayer(betInfo){
	return {
		type: BET_PLAYER,
		payload: new Promise((resolve, reject) => {
			// setTimeout(function() {
				resolve(axios.post(`${BIDGONG_SERVICE_MAIN_ADDRESS}/api/Bet/Bet`,betInfo)
				.then(res => res.data)
				)
			// }, 2000);
		  })
	}
}
