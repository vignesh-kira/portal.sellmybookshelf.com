import queryString from 'query-string';
import fetch from 'isomorphic-fetch';

export default function fetchJson(
	urlRoot, { entity, params = {}, contentType = 'application/json', parseResponse = true, ...options } = {}
) {
	let paramText = queryString.stringify(params);
	paramText = paramText ? `?${paramText}` : '';

	return fetch(`${urlRoot}${paramText}`, {
		body: entity && JSON.stringify(entity),
		credentials: 'same-origin',
		headers: {
			Accept: 'application/json',
			'Content-Type': contentType
		},
		...options
	})
		.then(response => {
			const parse = parseResponse === true
				|| (response.ok ? parseResponse.success : parseResponse.error);
			return parse ?
				response.json().then(
					data => ({ data, response }),
					message => Promise.resolve({ data: { message }, error: true, response })
				) :
				{ response };
		})
		.then(({ data, error, response }) => ({
			data, error: error || !response.ok, response
		}));
}
