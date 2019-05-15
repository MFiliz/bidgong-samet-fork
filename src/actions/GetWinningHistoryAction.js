import axios from 'axios';
import {BIDGONG_SERVICE_MAIN_ADDRESS} from '../config/Config';
export const GET_WINNING_HISTORY = 'GET_WINNING_HISTORY';

export function GetWinningHistory(userMail){
	return {
		type: GET_WINNING_HISTORY,
		payload: new Promise((resolve, reject) => {
				resolve(axios.get(`${BIDGONG_SERVICE_MAIN_ADDRESS}/api/Bet/GetWinningHistory`,{
					params: {
						userMail: userMail
					}
				})
				.then(res => res.data)
				)
		  })
	}
}
