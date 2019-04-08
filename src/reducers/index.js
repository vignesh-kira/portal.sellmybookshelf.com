import { combineReducers } from 'redux';
import common from './common';
import advertisement from './advertisement';
import profile from './profile';

export default combineReducers({
	common,
	advertisement,
	profile
});
