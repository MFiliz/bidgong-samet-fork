import axios from 'axios';
export const GET_MATCHES = 'GET_MATCHES';

export function getUsers(){
	return {
		type: "GET_MATCHES",
		payload: new Promise((resolve, reject) => {
			setTimeout(function() {
			  resolve(axios.get('https://jsonplaceholder.typicode.com/users/').then(res => res.data))
			}, 2000);
		  })
	}
}

// const getUsersAction = createAsyncAction(GET_MATCHES, async (url) => {
//   const response = await axios.get(url).then(res=>res.data);
//   return response;
// });

// export function getUsers(){
// 	return getUsersAction('https://jsonplaceholder.typicode.com/users/');
// }
