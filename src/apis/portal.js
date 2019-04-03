import fetchJson from '../custom-lib/fetch-json';
import md5 from "md5";

const BASE_URL = process.env.REACT_APP_API_URL;
console.log(process.env);

export function fetchUser({payload}) {
	let entity = Object.assign({}, payload);
	entity.password = md5(entity.password);

	return fetchJson(`${BASE_URL}/users/login`, {
		method: 'POST',
		entity
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

export function fetchSubjects() {
	return fetchJson(`${BASE_URL}/subjects`, {
		method: 'GET'
	});
}

export function registerUser({payload}) {
	let registrationFields = Object.assign({}, payload);
	delete registrationFields.confirmpassword;
	registrationFields.password = md5(payload.password);

	return fetchJson(`${BASE_URL}/users/register`, {
		method: 'POST',
		entity: registrationFields
	});
}

export function advertisementFetch({payload : {entity, id}}) {
	return fetchJson(`${BASE_URL}/advertisements/${id}`, {
		method: 'POST',
		entity
	});
}


export function advertisementCreate({payload}) {

	return fetchJson(`${BASE_URL}/advertisements/create`, {
		method: 'POST',
		entity: payload
	});
}


export function advertisementUpdate({payload : {entity, id}}) {
	return fetchJson(`${BASE_URL}/advertisements/update/${id}`, {
		method: 'PUT',
		entity
	});
}
