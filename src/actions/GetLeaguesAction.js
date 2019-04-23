import axios from 'axios';
export const GET_LEAGUES = 'GET_LEAGUES';

export function getLeagues(categoryId){
	return {
		type: GET_LEAGUES,
		payload: new Promise((resolve, reject) => {
			setTimeout(function() {
					resolve(axios.get('http://bidgongservices-dev.eu-central-1.elasticbeanstalk.com/api/Categories/GetById',{
						params: {
							id: categoryId.toUpperCase()
						}
					})
					.then(res => res.data.leagues.filter(data => data.isActive === true && data.isDeleted === false)))
			}, 2000);
		  })
	}
}