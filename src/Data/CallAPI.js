import axios from "axios";
export const callAPI = () => {
	let baseURL = "https://jsonplaceholder.typicode.com/users";
	return axios.get(baseURL);
};
export const callAPIEdit = (userid) => {
	let baseURL = "https://jsonplaceholder.typicode.com/posts/" + userid;
	return axios.get(baseURL);
};
