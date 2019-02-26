import combineWatchers from '../custom-lib/combine-watchers';
import loginWatcher from './login';

export default combineWatchers(
	loginWatcher
);
