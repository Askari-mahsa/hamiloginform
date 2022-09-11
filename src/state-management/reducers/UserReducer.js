import ActionTypes from "../acitons/users";

// initialize state
const initialState = {
	loading: false,
	users: [],
	error: "",
	editing: false,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.FETCH_USERS_REQUEST:
			return {
				...state,
				loading: true,
			};

		case ActionTypes.FETCH_USERS_SUCESS:
			return {
				...state,
				loading: false,
				users: action.payload,
				error: "",
			};
		case ActionTypes.FETCH_USERS_FAILURE:
			return {
				loading: false,
				users: [],
				error: action.payload,
			};

		case ActionTypes.EDIT_USER:
			return {
				...state,
				users: state.users.map((user) =>
					user.id === action.payload
						? {
								...user,
								editing: !user.editing,
						  }
						: user
				),
			};

		default:
			return state;
	}
};

export default reducer;
