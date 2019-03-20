import fetchJson from '../custom-lib/fetch-json';
import md5 from "md5";

const BASE_URL = 'http://api.sellmybookshelf.com/';

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

export function registerUser({payload}) {
	let registrationFields = Object.assign({}, payload);
	delete registrationFields.confirmpassword;
	registrationFields.password = md5(payload.password);

	return fetchJson(`${BASE_URL}/users/register`, {
		method: 'POST',
		entity: payload
	});
}

