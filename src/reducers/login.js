import { handleActions } from 'redux-actions';
import {
	FETCH_USER,
	FETCH_USER_SUCCESS,
	FETCH_USER_ERROR
} from '../constants/action-types';
import {
	API_SUCCESS,
	API_ERROR
} from '../constants/common';

export default handleActions({
	[FETCH_USER]: (state) => ({
		...state,
		userFetchStatus: ''
	}),
	[FETCH_USER_SUCCESS]: (state, { payload }) => ({
		...state,
		userFetchStatus: API_SUCCESS,
		user: payload
	}),
	[FETCH_USER_ERROR]: (state) => ({
		...state,
		userFetchStatus: API_ERROR,
	})
}, {
	user: {},
	userFetchStatus: ''
});
