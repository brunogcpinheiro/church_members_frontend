import axios from "axios";
import { GET_MEMBERS, ADD_MEMBER, DELETE_MEMBER } from "./types";
import { showLoading, hideLoading } from "react-redux-loading-bar";

const api_url = "http://localhost:3001";

export const getMembers = () => dispatch => {
	axios
		.get(`${api_url}/members`)
		.then(res => {
			dispatch(showLoading());
			dispatch({
				type: GET_MEMBERS,
				payload: res.data.docs,
			});
			dispatch(hideLoading());
		})
		.catch(err => console.error("GET MEMBERS", err));
};

export const addMember = newMember => dispatch => {
	axios
		.post(`${api_url}/members`, newMember)
		.then(res => {
			dispatch(showLoading());
			dispatch({
				type: ADD_MEMBER,
				payload: res.data,
			});
			dispatch(hideLoading());
		})
		.catch(err => console.error("ADD MEMBER", err));
};

export const deleteMember = id => dispatch => {
	axios
		.delete(`${api_url}/members/${id}`)
		.then(() => {
			dispatch(showLoading());
			dispatch({
				type: DELETE_MEMBER,
				payload: id,
			});
			dispatch(hideLoading());
		})
		.catch(err => console.error("DELETE MEMBER", err));
};
