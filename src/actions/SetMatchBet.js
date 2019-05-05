export const GET_CURRENT_MATCH = 'GET_CURRENT_MATCH';

export function setMatchBet(match){
	return {
		type: `${GET_CURRENT_MATCH}_FULFILLED`,
		payload: match
    }
}