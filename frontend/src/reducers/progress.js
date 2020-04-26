import {
	GET_PROGRESS,
	ADD_PROGRESS,
	LOGOUT_SUCCESS,
} from '../actions/types.js';

const initialState = {
	someText: 'sample text from progress reducer',
	progress: [],
};

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_PROGRESS:
			return {
				...state,
				progress: action.payload,
			};

		case ADD_PROGRESS:
			return {
				...state,
				progress: [...state.progress, action.payload],
			};
		case LOGOUT_SUCCESS:
			return {
				...state,

				progress: [],
			};
		default:
			return state;
	}
}
