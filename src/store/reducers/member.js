import { GET_MEMBERS, ADD_MEMBER, DELETE_MEMBER } from "../actions/types";

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
		case ADD_MEMBER:
			return {
				...state,
				members: [ ...state.members, action.payload ],
			};
		case DELETE_MEMBER:
			return {
				...state,
				members: state.members.filter(member => member._id !== action.payload),
			};
		default:
			return state;
	}
}
