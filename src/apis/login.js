import fetchJson from '../custom-lib/fetch-json';

const BASE_URL = 'http://localhost:5000/users';

export function fetchUser(entity) {
	return fetchJson(`${BASE_URL}/login`, {
		method: 'POST',
		entity: entity.payload
	});
}
