import ActionTypes from "../users";
import axios from "axios";

export const fetchUsersRequest = () => {
	return {
		type: ActionTypes.FETCH_USERS_REQUEST,
	};
};

export const fetchUsersSucess = (users) => {
	return {
		type: ActionTypes.FETCH_USERS_SUCESS,
		payload: users,
	};
};

export const fetchUsersFailure = (errors) => {
	return {
		type: ActionTypes.FETCH_USERS_FAILURE,
		payload: errors,
	};
};

export const removeUser = (id) => {
	return {
		type: ActionTypes.DELETE_USER,
		payload: id,
	};
};

export const editUser = (id) => {
	return {
		type: ActionTypes.EDIT_USER,
		payload: id,
	};
};

//add function to edit the user info

export const updateUser = (data) => {
	return (dispatch) => {
		axios
			.put(`https://jsonplaceholder.typicode.com/users/${data.id}`, data)
			.then((response) => {
				dispatch(editUser(data.id));
				dispatch(fetchUsers());
			})
			.catch((error) => {
				const errorMsg = error.message;
				dispatch(fetchUsersFailure(errorMsg));
			});
	};
};

// create function to fetch users from api
export const fetchUsers = () => {
	return (dispatch) => {
		dispatch(fetchUsersRequest);
		axios
			.get("https://jsonplaceholder.typicode.com/users")
			.then((response) => {
				const users = response.data;
				console.log(users);
				dispatch(fetchUsersSucess(users));
			})
			.catch((error) => {
				const errorMsg = error.message;
				dispatch(fetchUsersFailure(errorMsg));
			});
	};
};
