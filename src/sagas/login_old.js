import { put, call } from 'redux-saga/effects';
import createActionsWatchers from '../custom-lib/create-actions-watchers';

import {
	fetchUser
} from '../apis/portal';
import {
	fetchUserSuccess,
	fetchUserError
} from '../actions/portal';
import {
	FETCH_USER
} from '../constants/action-types';

export function* fetchUserSaga(payload) {
	try {
		const result = yield call(fetchUser, payload);
		yield put(fetchUserSuccess(result));
	} catch (e) {
		yield put(fetchUserError());
	} finally {
		// DO SOMETHING HERE
	}
}

export default createActionsWatchers({
	[FETCH_USER]: fetchUserSaga,
});
