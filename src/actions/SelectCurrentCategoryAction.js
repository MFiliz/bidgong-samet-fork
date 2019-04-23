import axios from 'axios';
export const SELECT_CURRENT_CATEGORY = 'SELECT_CURRENT_CATEGORY';


export function selectCurrentCategory(selectedCategoryId){
	return {
		type: SELECT_CURRENT_CATEGORY,
		payload: {
			selectedCategoryId: selectedCategoryId
		}
	}
}