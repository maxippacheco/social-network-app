


interface FetchProps {
	endpoint: string;
	// Tipar con generico
	data: object | null;
	method: 'GET' | 'POST' | 'PUT';

}

const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

export const fetchWithoutToken = async({ endpoint, data, method }: FetchProps ) => {

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


export const fetchWithToken = async({ endpoint, data, method }: FetchProps ) => {
 
	const url = `${ baseUrl }/${ endpoint }`;

	const token = localStorage.getItem('token');

	if( method === 'GET') {

		const resp = await fetch(url, {
			headers: {
				'Content-Type': 'application/json',
				'auth-token': `${ token }`
			}
		});

		return await resp.json();

	}else{

		const resp = await fetch(url, {
			method,
			headers: {
				'Content-Type': 'application/json',
				'auth-token': `${ token }`
			},
			body: JSON.stringify(data)
		});

		return await resp.json();

	}

}