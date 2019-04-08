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
	REGISTER_USER_ERROR,
	FETCH_SUBJECTS,
	FETCH_SUBJECTS_SUCCESS,
	FETCH_SUBJECTS_ERROR,
	ADVERTISEMENT_CREATE,
	ADVERTISEMENT_CREATE_SUCCESS,
	ADVERTISEMENT_CREATE_ERROR,
	ADVERTISEMENT_UPDATE,
	ADVERTISEMENT_UPDATE_SUCCESS,
	ADVERTISEMENT_UPDATE_ERROR,
	ADVERTISEMENT_FETCH,
	ADVERTISEMENT_FETCH_SUCCESS,
	ADVERTISEMENT_FETCH_ERROR,
	ADVERTISEMENTS_LIST_FETCH,
	ADVERTISEMENTS_LIST_FETCH_SUCCESS,
	ADVERTISEMENTS_LIST_FETCH_ERROR,
	ADVERTISEMENT_VIEW,
	ADVERTISEMENT_VIEW_SUCCESS,
	ADVERTISEMENT_VIEW_ERROR,
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
	[REGISTER_USER_SUCCESS]: (state, { payload }) => ({
		...state,
		registerUserStatus: API_SUCCESS,
		user: payload
	}),
	[REGISTER_USER_ERROR]: (state) => ({
		...state,
		registerUserStatus: API_ERROR
	}),
	[FETCH_SUBJECTS]: (state) => ({
		...state,
		subjectsFetchStatus: ''
	}),
	[FETCH_SUBJECTS_SUCCESS]: (state, { payload }) => ({
		...state,
		subjectsFetchStatus: API_SUCCESS,
		subjects: payload
	}),
	[FETCH_SUBJECTS_ERROR]: (state) => ({
		...state,
		subjectsFetchStatus: API_ERROR
	}),
	[ADVERTISEMENT_CREATE]: (state) => ({
		...state,
		advertisementCreateStatus: ''
	}),
	[ADVERTISEMENT_CREATE_SUCCESS]: (state, { payload }) => ({
		...state,
		advertisementCreateStatus: API_SUCCESS,
		advertisement: payload
	}),
	[ADVERTISEMENT_CREATE_ERROR]: (state) => ({
		...state,
		advertisementCreateStatus: API_ERROR
	}),
	[ADVERTISEMENT_UPDATE]: (state) => ({
		...state,
		advertisementUpdateStatus: ''
	}),
	[ADVERTISEMENT_UPDATE_SUCCESS]: (state, { payload }) => ({
		...state,
		advertisementUpdateStatus: API_SUCCESS,
		advertisement: payload
	}),
	[ADVERTISEMENT_UPDATE_ERROR]: (state) => ({
		...state,
		advertisementUpdateStatus: API_ERROR
	}),
	[ADVERTISEMENT_FETCH]: (state) => ({
		...state,
		advertisementFetchStatus: ''
	}),
	[ADVERTISEMENT_FETCH_SUCCESS]: (state, { payload }) => ({
		...state,
		advertisementFetchStatus: API_SUCCESS,
		advertisement: payload
	}),
	[ADVERTISEMENT_FETCH_ERROR]: (state) => ({
		...state,
		advertisementFetchStatus: API_ERROR
	}),
	[ADVERTISEMENTS_LIST_FETCH]: (state) => ({
		...state,
		advertisementsListFetchStatus: ''
	}),
	[ADVERTISEMENTS_LIST_FETCH_SUCCESS]: (state, { payload }) => ({
		...state,
		advertisementsListFetchStatus: API_SUCCESS,
		advertisementsList: payload
	}),
	[ADVERTISEMENTS_LIST_FETCH_ERROR]: (state) => ({
		...state,
		advertisementsListFetchStatus: API_ERROR
	}),
	[ADVERTISEMENTS_LIST_FETCH]: (state) => ({
		...state,
		advertisementsListFetchStatus: ''
	}),
	[ADVERTISEMENTS_LIST_FETCH_SUCCESS]: (state, { payload }) => ({
		...state,
		advertisementsListFetchStatus: API_SUCCESS,
		advertisementsList: payload
	}),
	[ADVERTISEMENTS_LIST_FETCH_ERROR]: (state) => ({
		...state,
		advertisementsListFetchStatus: API_ERROR
	}),
	[ADVERTISEMENT_VIEW]: (state) => ({
		...state,
		advertisementViewStatus: ''
	}),
	[ADVERTISEMENT_VIEW_SUCCESS]: (state, { payload }) => ({
		...state,
		advertisementViewStatus: API_SUCCESS,
		advertisement: payload
	}),
	[ADVERTISEMENT_VIEW_ERROR]: (state) => ({
		...state,
		advertisementViewStatus: API_ERROR
	})
}, {
	user: {},
	userFetchStatus: '',
	classes:[],
	classesFetchStatus: '',
	sections: [],
	sectionsFetchStatus: '',
	registerUserStatus: '',
	subjects: [],
	subjectsFetchStatus: '',
	advertisement: {},
	advertisementCreateStatus: '',
	advertisementUpdateStatus: '',
	advertisementFetchStatus: '',
	advertisementsList: [],
	advertisementsListFetchStatus: '',
	advertisementViewStatus: '',
});
