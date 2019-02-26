import { call, put, takeEvery } from 'redux-saga/effects'
import {
	fetchUser
} from '../apis/login';
import {
	fetchUserSuccess,
	fetchUserError
} from '../actions/login';
import {
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

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
	yield takeEvery(FETCH_USER, fetchUserSaga);
}


export default mySaga;
