const BASE_URL = process.env.REACT_APP_BACKEND_URL;
// const BASE_URL = 'http://localhost:8000';
export async function apiClient(endpoint, { body, ...customConfig } = {}){
	console.log(process.env);
	console.log(BASE_URL);
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
		config.body = await JSON.stringify(body);
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