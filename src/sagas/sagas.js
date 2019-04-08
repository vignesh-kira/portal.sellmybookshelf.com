import { call, put, takeEvery } from 'redux-saga/effects'
import {
	fetchUser,
	fetchClasses,
	fetchSections,
	registerUser,
	fetchSubjects,
	advertisementCreate,
	advertisementUpdate,
	advertisementFetch,
	advertisementsListFetch,
	advertisementView,
	profileFetch,
	profileUpdate
} from '../apis/portal';
import {
	fetchUserSuccess,
	fetchUserError,
	fetchClassesSuccess,
	fetchClassesError,
	fetchSectionsSuccess,
	fetchSectionsError,
	registerUserSuccess,
	registerUserError,
	fetchSubjectsSuccess,
	fetchSubjectsError,
	advertisementCreateSuccess,
	advertisementCreateError,
	advertisementUpdateSuccess,
	advertisementUpdateError,
	advertisementFetchSuccess,
	advertisementFetchError,
	advertisementsListFetchSuccess,
	advertisementsListFetchError,
	advertisementViewSuccess,
	advertisementViewError,
	profileFetchSuccess,
	profileFetchError,
	profileUpdateSuccess,
	profileUpdateError
} from '../actions/portal';
import {
	FETCH_CLASSES,
	FETCH_SECTIONS,
	FETCH_SUBJECTS,
	FETCH_USER,
	REGISTER_USER,
	ADVERTISEMENT_CREATE,
	ADVERTISEMENT_UPDATE,
	ADVERTISEMENT_FETCH,
	ADVERTISEMENTS_LIST_FETCH,
	ADVERTISEMENT_VIEW,
	PROFILE_FETCH,
	PROFILE_UPDATE
} from '../constants/action-types';

export function* fetchUserSaga(payload) {
	try {
		const result = yield call(fetchUser, payload);
		if(!result.error){
			yield put(fetchUserSuccess(result.data));
		}else{
			yield put(fetchUserError());
		}

	} catch (e) {
		yield put(fetchUserError());
	}
}

export function* fetchClassesSaga(payload) {
	try {
		const result = yield call(fetchClasses, payload);
		if(!result.error){
			yield put(fetchClassesSuccess(result.data));
		}else{
			yield put(fetchClassesError());
		}

	} catch (e) {
		yield put(fetchClassesError());
	}
}

export function* fetchSectionsSaga(payload) {
	try {
		const result = yield call(fetchSections, payload);
		if(!result.error){
			yield put(fetchSectionsSuccess(result.data));
		}else{
			yield put(fetchSectionsError());
		}

	} catch (e) {
		yield put(fetchSectionsError());
	}
}

export function* registerUserSaga(payload) {
	try {
		const result = yield call(registerUser, payload);
		if(!result.error){
			yield put(registerUserSuccess(result.data));
		}else{
			yield put(registerUserError());
		}

	} catch (e) {
		yield put(registerUserError());
	}
}

export function* fetchSubjectsSaga(payload) {
	try {
		const result = yield call(fetchSubjects, payload);
		if(!result.error){
			yield put(fetchSubjectsSuccess(result.data));
		}else{
			yield put(fetchSubjectsError());
		}
	} catch (e) {
		yield put(fetchSubjectsError());
	}
}

export function* advertisementCreateSaga(payload) {
	try {
		const result = yield call(advertisementCreate, payload);
		if(!result.error){
			yield put(advertisementCreateSuccess(result.data));
		}else{
			yield put(advertisementCreateError());
		}
	} catch (e) {
		yield put(advertisementCreateError());
	}
}

export function* advertisementUpdateSaga(payload) {
	try {
		const result = yield call(advertisementUpdate, payload);
		if(!result.error){
			yield put(advertisementUpdateSuccess(result.data));
		}else{
			yield put(advertisementUpdateError());
		}
	} catch (e) {
		yield put(advertisementUpdateError());
	}
}

export function* advertisementFetchSaga(payload) {
	try {
		const result = yield call(advertisementFetch, payload);
		if(!result.error){
			yield put(advertisementFetchSuccess(result.data));
		}else{
			yield put(advertisementFetchError());
		}
	} catch (e) {
		yield put(advertisementFetchError());
	}
}

export function* advertisementsListFetchSaga(payload) {
	try {
		const result = yield call(advertisementsListFetch, payload);
		if(!result.error){
			yield put(advertisementsListFetchSuccess(result.data));
		}else{
			yield put(advertisementsListFetchError());
		}
	} catch (e) {
		yield put(advertisementsListFetchError());
	}
}

export function* advertisementViewSaga(payload) {
	try {
		const result = yield call(advertisementView, payload);
		if(!result.error){
			yield put(advertisementViewSuccess(result.data));
		}else{
			yield put(advertisementViewError());
		}
	} catch (e) {
		yield put(advertisementViewError());
	}
}


export function* profileFetchSaga(payload) {
	try {
		const result = yield call(profileFetch, payload);
		if(!result.error){
			yield put(profileFetchSuccess(result.data));
		}else{
			yield put(profileFetchError());
		}
	} catch (e) {
		yield put(profileFetchError());
	}
}

export function* profileUpdateSaga(payload) {
	try {
		const result = yield call(profileUpdate, payload);
		if(!result.error){
			yield put(profileUpdateSuccess(result.data));
		}else{
			yield put(profileUpdateError());
		}
	} catch (e) {
		yield put(profileUpdateError());
	}
}

function* mySaga() {
	yield takeEvery(FETCH_USER, fetchUserSaga);
	yield takeEvery(FETCH_CLASSES, fetchClassesSaga);
	yield takeEvery(FETCH_SECTIONS, fetchSectionsSaga);
	yield takeEvery(REGISTER_USER, registerUserSaga);
	yield takeEvery(FETCH_SUBJECTS, fetchSubjectsSaga);
	yield takeEvery(ADVERTISEMENT_CREATE, advertisementCreateSaga);
	yield takeEvery(ADVERTISEMENT_UPDATE, advertisementUpdateSaga);
	yield takeEvery(ADVERTISEMENT_FETCH, advertisementFetchSaga);
	yield takeEvery(ADVERTISEMENTS_LIST_FETCH, advertisementsListFetchSaga);
	yield takeEvery(ADVERTISEMENT_VIEW, advertisementViewSaga);
	yield takeEvery(PROFILE_FETCH, profileFetchSaga);
	yield takeEvery(PROFILE_UPDATE, profileUpdateSaga);
}

export default mySaga;
