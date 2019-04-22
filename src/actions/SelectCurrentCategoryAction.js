import axios from 'axios';
export const SELECT_CURRENT_CATEGORY = 'SELECT_CURRENT_CATEGORY';

export function getCategories(selectedCategory){
	return {
		type: SELECT_CURRENT_CATEGORY,
		payload: new Promise((resolve, reject) => {
			setTimeout(function() {
			  resolve(selectedCategory)
			}, 2000);
		  })
	}
}