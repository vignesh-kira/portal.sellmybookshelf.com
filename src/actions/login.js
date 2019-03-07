import { createAction } from 'redux-actions';
import * as actions from '../constants/action-types';

export const fetchUser = createAction(actions.FETCH_USER);
export const fetchUserSuccess = createAction(actions.FETCH_USER_SUCCESS);
export const fetchUserError = createAction(actions.FETCH_USER_ERROR);

export const fetchClasses = createAction(actions.FETCH_CLASSES);
export const fetchClassesSuccess = createAction(actions.FETCH_CLASSES_SUCCESS);
export const fetchClassesError = createAction(actions.FETCH_CLASSES_ERROR);

export const fetchSections = createAction(actions.FETCH_SECTIONS);
export const fetchSectionsSuccess = createAction(actions.FETCH_SECTIONS_SUCCESS);
export const fetchSectionsError = createAction(actions.FETCH_SECTIONS_ERROR);
