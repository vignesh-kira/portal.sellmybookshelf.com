import { createAction } from 'redux-actions';
import * as actions from '../constants/action-types';

export const fetchUser = createAction(actions.FETCH_USER);
export const fetchUserSuccess = createAction(actions.FETCH_USER_SUCCESS);
export const fetchUserError = createAction(actions.FETCH_USER_ERROR);

