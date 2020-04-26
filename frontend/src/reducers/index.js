import { combineReducers } from 'redux';
import leads from './leads';
import progress from './progress';
import errors from './errors';
import messages from './messages';
import auth from './auth';

export default combineReducers({
	progress,
	leads,
	errors,
	messages,
	auth,
});
