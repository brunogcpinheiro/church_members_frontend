import { GET_MEMBERS } from "../actions/types";

const initialState = {
	members: [],
};

export default function member (state = initialState, action) {
	switch (action.type) {
		case GET_MEMBERS:
			return {
				...state,
				members: action.payload,
			};
		default:
			return state;
	}
}
