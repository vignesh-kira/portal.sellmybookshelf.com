import fetchJson from '../custom-lib/fetch-json';

const BASE_URL = 'http://localhost:5000';

export function fetchUser(entity) {
	return fetchJson(`${BASE_URL}/users/login`, {
		method: 'POST',
		entity: entity.payload
	});
}

export function fetchClasses() {
	return fetchJson(`${BASE_URL}/classes`, {
		method: 'GET'
	});
}

export function fetchSections() {
	return fetchJson(`${BASE_URL}/sections`, {
		method: 'GET'
	});
}

export function registerUser(entity) {
	return fetchJson(`${BASE_URL}/users/register`, {
		method: 'POST',
		entity: entity.payload
	});
}

