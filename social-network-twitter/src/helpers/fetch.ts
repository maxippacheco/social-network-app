


interface FetchWithoutToken {
	endpoint: string;
	// Tipar con generico
	data: object;
	method: 'GET' | 'POST' | 'PUT';

}

const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

export const fetchWithoutToken = async({ endpoint, data, method }: FetchWithoutToken ) => {

	const url = `${ baseUrl }/${ endpoint }`;

	if( method === 'GET') {

		const resp = await fetch(url);

		return await resp.json();

	}else{

		const resp = await fetch(url, {
			method,
			// Especify the content type in the header that is JSON
			headers:{
				'Content-Type': 'application/json'
			},
			// Convert the data to JSON
			body: JSON.stringify(data)
		});

		return await resp.json();

	}

}