import { combineReducers } from "redux";
import member from "./member";
import { loadingBarReducer } from "react-redux-loading-bar";

export default combineReducers({
	memberReducer: member,
	loadingBar: loadingBarReducer,
});
