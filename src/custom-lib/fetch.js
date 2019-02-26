import fetch from 'isomorphic-fetch';
import { stringify, parse } from 'query-string';

export const RESPONSE = Symbol('ParsedResponse.response');

export const parseResponse = (data, response) => Object
	.defineProperty(Object(data), RESPONSE, { value: response });

export const extendResponse = (response) => Object.assign(response, {
	getContentType() {
		if (!this.headers.has('Content-Type')) return {};
		const contentType = this.headers.get('Content-Type').split(';').map(e => e.trim());
		const mediaType = contentType.shift();
		return { mediaType, ...parse(contentType.join('&')) };
	},
	isOfMediaType(...types) {
		return types.some(type => (this.getContentType().mediaType || '').includes(type));
	}
});

export const createParser = (method, Builder, mediaType) => {
	function parser(resp) {
		if (!resp.isOfMediaType(mediaType)) {
			return this.call(Promise, parseResponse(new Builder(), resp));
		} return method.call(resp).then(parsed => this.call(Promise, parseResponse(parsed, resp)));
	}
	return [parser.bind(Promise.resolve), parser.bind(Promise.reject)];
};

export const extendPromise = (promise) => {
	const createParser = module.exports.createParser; // For mocking purposes
	return Object.assign(promise, {
		json() { return this.then(...createParser(Response.prototype.json, Object, 'application/json')); },
		text() { return this.then(...createParser(Response.prototype.text, String, 'text/plain')); },
		blob() { return this.then(...createParser(Response.prototype.blob, Blob, 'application/octet-stream')); },
		arrayBuffer() { return this.then(...createParser(Response.prototype.arrayBuffer, ArrayBuffer, 'application/octet-stream')); }
	});
};

export default (url, {
	method = 'GET', credentials = 'same-origin', params, headers: baseHeader = {}, body: baseBody, ...otherOptions
} = {}) => {
	try {
		const searchParams = stringify(params);
		const headers = new Headers(baseHeader);
		const body = !headers.has('Content-Type') ? JSON.stringify(baseBody) : baseBody;
		if (!headers.has('Accept')) headers.set('Accept', 'application/json');
		if (!headers.has('Content-Type')) headers.set('Content-Type', 'application/json');
		return extendPromise(fetch(`${url}${searchParams && `?${searchParams}`}`, { method, credentials, body, headers, ...otherOptions })
			.then(extendResponse).then(response => (response.ok ? response : Promise.reject(response)))
		);
	} catch (e) {
		const rejection = Promise.reject(e);
		return Object.assign(rejection, {
			json: Promise.prototype.then.bind(rejection),
			text: Promise.prototype.then.bind(rejection),
			blob: Promise.prototype.then.bind(rejection),
			arrayBuffer: Promise.prototype.then.bind(rejection)
		});
	}
};
