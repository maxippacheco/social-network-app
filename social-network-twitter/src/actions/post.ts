import { AppDispatch } from "../store/store"
import { fetchWithToken } from '../helpers/fetch';
import { PostResponse } from "../interfaces/interfaces";


export const handleLoadPosts = () => {
	return async( dispatch: AppDispatch ) => {

		// TODO: Endpoint lmao
		const { ok, posts }: PostResponse = await fetchWithToken({ data: null, endpoint: 'post', method: 'GET' })

		if ( ok ) {
			dispatch({
				type: 'LOAD_POSTS',
				payload: posts
			})		
		}

		console.log(ok);
		

	}
}

