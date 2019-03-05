import axios from "axios";
import { GET_MEMBERS } from "./types";

const api_url = "http://localhost:3001";

export const getMembers = () => dispatch => {
	axios
		.get(`${api_url}/members/`)
		.then(res => {
			dispatch({
				type: GET_MEMBERS,
				payload: res.data.docs,
			});
		})
		.catch(err => console.error("GET MEMBERS", err));
};
