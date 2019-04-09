import { handleActions } from 'redux-actions';
import {
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
	ADVERTISEMENT_FETCH_MYADS,
	ADVERTISEMENT_FETCH_MYADS_SUCCESS,
	ADVERTISEMENT_FETCH_MYADS_ERROR, GLOBAL_ALERT_TURN_OFF
} from '../constants/action-types';
import {
	API_SUCCESS,
	API_ERROR
} from '../constants/common';

export default handleActions({
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
		advertisement: payload,
		advertisementAlert: true
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
	}),
	[ADVERTISEMENT_FETCH_MYADS]: (state) => ({
		...state,
		advertisementMyadsFetchStatus: ''
	}),
	[ADVERTISEMENT_FETCH_MYADS_SUCCESS]: (state, { payload }) => ({
		...state,
		advertisementMyadsFetchStatus: API_SUCCESS,
		advertisementMyads: payload
	}),
	[ADVERTISEMENT_FETCH_MYADS_ERROR]: (state, { payload }) => ({
		...state,
		advertisementMyadsFetchStatus: API_ERROR,
		advertisement: payload
	}),
	[GLOBAL_ALERT_TURN_OFF]: (state) => ({
		...state,
		advertisementAlert: false
	})
}, {
	advertisement: {},
	advertisementCreateStatus: '',
	advertisementUpdateStatus: '',
	advertisementFetchStatus: '',
	advertisementsList: [],
	advertisementsListFetchStatus: '',
	advertisementViewStatus: '',
	advertisementMyads: [],
	advertisementMyadsFetchStatus: '',
	advertisementAlert: false
});
