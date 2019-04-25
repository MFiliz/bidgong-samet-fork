
export const SELECT_CURRENT_LEAGUE = 'SELECT_CURRENT_LEAGUE';

export function selectCurrentLeague(selectedLeagueId){
	return {
		type: SELECT_CURRENT_LEAGUE,
		payload: {
			selectedLeagueId: selectedLeagueId
		}
	}
}