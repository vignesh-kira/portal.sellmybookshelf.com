import combineWatchers from '../custom-lib/combine-watchers';
import loginWatcher from './login_old';

export default combineWatchers(
	loginWatcher
);
