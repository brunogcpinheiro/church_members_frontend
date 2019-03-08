import axios from "axios";
import { GET_MEMBERS, ADD_MEMBER, DELETE_MEMBER } from "./types";

const api_url = "http://localhost:3001";

export const getMembers = () => dispatch => {
	axios
		.get(`${api_url}/members`)
		.then(res => {
			dispatch({
				type: GET_MEMBERS,
				payload: res.data.docs,
			});
		})
		.catch(err => console.error("GET MEMBERS", err));
};

export const addMember = newMember => dispatch => {
	axios
		.post(`${api_url}/members`, newMember)
		.then(res => {
			dispatch({
				type: ADD_MEMBER,
				payload: res.data,
			});
		})
		.catch(err => console.error("ADD MEMBER", err));
};

export const deleteMember = id => dispatch => {
	axios
		.delete(`${api_url}/members/${id}`)
		.then(() => {
			dispatch({
				type: DELETE_MEMBER,
				payload: id,
			});
		})
		.catch(err => console.error("DELETE MEMBER", err));
};
