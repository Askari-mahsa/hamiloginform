import axios from "axios";
export const callAPI = () => {
	let baseURL = "https://jsonplaceholder.typicode.com/users";
	return axios.get(baseURL);
};
