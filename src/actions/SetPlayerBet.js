export const GET_PLAYER = 'GET_PLAYER';

export function setPlayerBet(player){
	return {
		type: `${GET_PLAYER}_FULFILLED`,
		payload: player
    }
}