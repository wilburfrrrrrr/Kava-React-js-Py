const BASE_URL = process.env.BACKEND_URL;

export async function apiClient(endpoint, { body, ...customConfig } = {}){
	const headers = { 'Content-Type': 'application/json' };

	const config = {
		method: body ? 'POST' : 'GET',
		...customConfig,
		headers: {
			...headers,
			...customConfig.headers,
		},
	};

	if(body){
		config.body = JSON.stringify(body);
	}

	try {
		const response = await fetch(`${BASE_URL}/${endpoint}`, config);
		const data = await response.json();

		if(response.ok){
			return data;
		}

		throw new Error(data.message);
	} catch (error) {
		return Promise.reject(error.message);
	}
}