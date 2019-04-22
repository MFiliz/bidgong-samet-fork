import axios from 'axios';
export const GET_CATEGORIES = 'GET_CATEGORIES';

export function getCategories(){
	return {
		type: GET_CATEGORIES,
		payload: new Promise((resolve, reject) => {
			setTimeout(function() {
			  resolve(axios.get('http://bidgongservices-dev.eu-central-1.elasticbeanstalk.com/api/Categories/GetAll').then(res => res.data))
			}, 2000);
		  })
	}
}