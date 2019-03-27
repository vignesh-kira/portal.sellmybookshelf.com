import { call, put, takeEvery } from 'redux-saga/effects'
import {
	fetchUser,
	fetchClasses,
	fetchSections,
	registerUser,
	fetchSubjects,
	advertisementCreate
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
	fetchSubjectsError, advertisementCreateSuccess, advertisementCreateError
} from '../actions/portal';
import {
	ADVERTISEMENT_CREATE,
	FETCH_CLASSES,
	FETCH_SECTIONS, FETCH_SUBJECTS,
	FETCH_USER,
	REGISTER_USER
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

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
	yield takeEvery(FETCH_USER, fetchUserSaga);
	yield takeEvery(FETCH_CLASSES, fetchClassesSaga);
	yield takeEvery(FETCH_SECTIONS, fetchSectionsSaga);
	yield takeEvery(REGISTER_USER, registerUserSaga);
	yield takeEvery(FETCH_SUBJECTS, fetchSubjectsSaga);
	yield takeEvery(ADVERTISEMENT_CREATE, advertisementCreateSaga);
}


export default mySaga;
