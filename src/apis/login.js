import fetchJson from '../custom-lib/fetch-json';

const BASE_URL = 'http://localhost:5000/users';

export function fetchUser() {

	return fetchJson(`${BASE_URL}`, {
		method: 'GET'
	});
}
