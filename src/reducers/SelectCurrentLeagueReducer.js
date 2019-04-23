import {
    SELECT_CURRENT_LEAGUE
} from '../actions/SelectCurrentLeagueAction';

export default function SelectCurrentLeagueReducer(state = [], { type, payload }) {
	switch(type){
		case SELECT_CURRENT_LEAGUE:
            return {
                ...state,
                selectedLEAGUE : payload.selectedLeagueId
            };
		default:
			return state;
	}
}