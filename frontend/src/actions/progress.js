import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';
import { GET_PROGRESS, ADD_PROGRESS } from './types';

//had to add these lines to get DELETE_LEAD to not give a 403 error
//courtesy of https://stackoverflow.com/a/46195212
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
// GET LEADS
export const getProgress = () => (dispatch, getState) => {
	axios
		.get('/api/progress/', tokenConfig(getState))
		.then((res) => {
			dispatch({
				type: GET_PROGRESS,
				payload: res.data,
			});
		})
		.catch((err) =>
			dispatch(returnErrors(err.response.data, err.response.status))
		);
};

// ADD LEAD
export const addProgress = (progress) => (dispatch, getState) => {
	axios
		.post('/api/progress/', progress, tokenConfig(getState))
		.then((res) => {
			dispatch(createMessage({ addProgress: 'Progress Added' }));

			dispatch({
				type: ADD_PROGRESS,
				payload: res.data,
			});
		})
		.catch((err) =>
			dispatch(returnErrors(err.response.data, err.response.status))
		);
};
