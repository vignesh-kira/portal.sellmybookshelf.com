import { handleActions } from 'redux-actions';
import {
	PROFILE_FETCH,
	PROFILE_FETCH_SUCCESS,
	PROFILE_FETCH_ERROR,
	PROFILE_UPDATE,
	PROFILE_UPDATE_SUCCESS,
	PROFILE_UPDATE_ERROR
} from '../constants/action-types';
import {
	API_SUCCESS,
	API_ERROR
} from '../constants/common';

export default handleActions({
	[PROFILE_FETCH]: (state) => ({
		...state,
		profileFetchStatus: ''
	}),
	[PROFILE_FETCH_SUCCESS]: (state, { payload }) => ({
		...state,
		profileFetchStatus: API_SUCCESS,
		profile: payload
	}),
	[PROFILE_FETCH_ERROR]: (state) => ({
		...state,
		profileFetchStatus: API_ERROR
	}),
	[PROFILE_UPDATE]: (state) => ({
		...state,
		profileUpdateStatus: ''
	}),
	[PROFILE_UPDATE_SUCCESS]: (state, { payload }) => ({
		...state,
		profileUpdateStatus: API_SUCCESS,
		profile: payload
	}),
	[PROFILE_UPDATE_ERROR]: (state) => ({
		...state,
		profileUpdateStatus: API_ERROR
	})
}, {
	profile:{},
	profileFetchStatus: '',
	profileUpdateStatus: '',
});
