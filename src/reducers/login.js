import { handleActions } from 'redux-actions';
import {
	FETCH_USER,
	FETCH_USER_SUCCESS,
	FETCH_USER_ERROR,
	FETCH_CLASSES,
	FETCH_CLASSES_SUCCESS,
	FETCH_CLASSES_ERROR,
	FETCH_SECTIONS,
	FETCH_SECTIONS_SUCCESS,
	FETCH_SECTIONS_ERROR,
	REGISTER_USER,
	REGISTER_USER_SUCCESS,
	REGISTER_USER_ERROR
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
	}),
	[FETCH_CLASSES]: (state) => ({
		...state,
		classesFetchStatus: ''
	}),
	[FETCH_CLASSES_SUCCESS]: (state, { payload }) => ({
		...state,
		classesFetchStatus: API_SUCCESS,
		classes: payload
	}),
	[FETCH_CLASSES_ERROR]: (state) => ({
		...state,
		classesFetchStatus: API_ERROR,
	}),
	[FETCH_SECTIONS]: (state) => ({
		...state,
		sectionsFetchStatus: ''
	}),
	[FETCH_SECTIONS_SUCCESS]: (state, { payload }) => ({
		...state,
		sectionsFetchStatus: API_SUCCESS,
		sections: payload
	}),
	[FETCH_SECTIONS_ERROR]: (state) => ({
		...state,
		sectionsFetchStatus: API_ERROR,
	}),
	[REGISTER_USER]: (state) => ({
		...state,
		registerUserStatus: ''
	}),
	[REGISTER_USER_SUCCESS]: (state) => ({
		...state,
		registerUserStatus: API_SUCCESS
	}),
	[REGISTER_USER_ERROR]: (state) => ({
		...state,
		registerUserStatus: API_ERROR,
	}),
}, {
	user: {},
	userFetchStatus: '',
	classes:[],
	classesFetchStatus: '',
	sections: [],
	sectionsFetchStatus: '',
	registerUserStatus: ''
});
