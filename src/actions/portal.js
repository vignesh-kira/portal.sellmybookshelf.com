import { createAction } from 'redux-actions';
import * as actions from '../constants/action-types';

export const globalAlertTurnOff = createAction(actions.GLOBAL_ALERT_TURN_OFF);

export const fetchUser = createAction(actions.FETCH_USER);
export const fetchUserSuccess = createAction(actions.FETCH_USER_SUCCESS);
export const fetchUserError = createAction(actions.FETCH_USER_ERROR);

export const fetchClasses = createAction(actions.FETCH_CLASSES);
export const fetchClassesSuccess = createAction(actions.FETCH_CLASSES_SUCCESS);
export const fetchClassesError = createAction(actions.FETCH_CLASSES_ERROR);

export const fetchSections = createAction(actions.FETCH_SECTIONS);
export const fetchSectionsSuccess = createAction(actions.FETCH_SECTIONS_SUCCESS);
export const fetchSectionsError = createAction(actions.FETCH_SECTIONS_ERROR);

export const registerUser = createAction(actions.REGISTER_USER);
export const registerUserSuccess = createAction(actions.REGISTER_USER_SUCCESS);
export const registerUserError = createAction(actions.REGISTER_USER_ERROR);

export const fetchSubjects = createAction(actions.FETCH_SUBJECTS);
export const fetchSubjectsSuccess = createAction(actions.FETCH_SUBJECTS_SUCCESS);
export const fetchSubjectsError = createAction(actions.FETCH_SUBJECTS_ERROR);

export const advertisementFetch = createAction(actions.ADVERTISEMENT_FETCH);
export const advertisementFetchSuccess = createAction(actions.ADVERTISEMENT_FETCH_SUCCESS);
export const advertisementFetchError = createAction(actions.ADVERTISEMENT_FETCH_ERROR);

export const advertisementCreate = createAction(actions.ADVERTISEMENT_CREATE);
export const advertisementCreateSuccess = createAction(actions.ADVERTISEMENT_CREATE_SUCCESS);
export const advertisementCreateError = createAction(actions.ADVERTISEMENT_CREATE_ERROR);

export const advertisementUpdate = createAction(actions.ADVERTISEMENT_UPDATE);
export const advertisementUpdateSuccess = createAction(actions.ADVERTISEMENT_UPDATE_SUCCESS);
export const advertisementUpdateError = createAction(actions.ADVERTISEMENT_UPDATE_ERROR);

export const advertisementsListFetch = createAction(actions.ADVERTISEMENTS_LIST_FETCH);
export const advertisementsListFetchSuccess = createAction(actions.ADVERTISEMENTS_LIST_FETCH_SUCCESS);
export const advertisementsListFetchError = createAction(actions.ADVERTISEMENTS_LIST_FETCH_ERROR);

export const advertisementView = createAction(actions.ADVERTISEMENT_VIEW);
export const advertisementViewSuccess = createAction(actions.ADVERTISEMENT_VIEW_SUCCESS);
export const advertisementViewError = createAction(actions.ADVERTISEMENT_VIEW_ERROR);

export const profileFetch = createAction(actions.PROFILE_FETCH);
export const profileFetchSuccess = createAction(actions.PROFILE_FETCH_SUCCESS);
export const profileFetchError = createAction(actions.PROFILE_FETCH_ERROR);

export const profileUpdate = createAction(actions.PROFILE_UPDATE);
export const profileUpdateSuccess = createAction(actions.PROFILE_UPDATE_SUCCESS);
export const profileUpdateError = createAction(actions.PROFILE_UPDATE_ERROR);

export const advertisementFetchMyads = createAction(actions.ADVERTISEMENT_FETCH_MYADS);
export const advertisementFetchMyadsSuccess = createAction(actions.ADVERTISEMENT_FETCH_MYADS_SUCCESS);
export const advertisementFetchMyadsError = createAction(actions.ADVERTISEMENT_FETCH_MYADS_ERROR);

export const advertisementDelete = createAction(actions.ADVERTISEMENT_DELETE);
export const advertisementDeleteSuccess = createAction(actions.ADVERTISEMENT_DELETE_SUCCESS);
export const advertisementDeleteError = createAction(actions.ADVERTISEMENT_DELETE_ERROR);
