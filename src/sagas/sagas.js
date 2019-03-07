import { call, put, takeEvery } from 'redux-saga/effects'
import {
	fetchUser,
	fetchClasses,
	fetchSections
} from '../apis/login';
import {
	fetchUserSuccess,
	fetchUserError,
	fetchClassesSuccess,
	fetchClassesError,
	fetchSectionsSuccess,
	fetchSectionsError
} from '../actions/login';
import {
	FETCH_CLASSES,
	FETCH_SECTIONS,
	FETCH_USER
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
/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
	yield takeEvery(FETCH_USER, fetchUserSaga);
	yield takeEvery(FETCH_CLASSES, fetchClassesSaga);
	yield takeEvery(FETCH_SECTIONS, fetchSectionsSaga);
}


export default mySaga;
