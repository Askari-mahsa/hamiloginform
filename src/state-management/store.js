import { combineReducers } from "redux";
import { useReducer } from "../state-management/reducers/UserReducer";

const rootReducer = combineReducers({
	users: useReducer,
});
export default rootReducer;
