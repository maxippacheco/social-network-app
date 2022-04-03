import { AppDispatch } from "../store/store"
import { fetchWithToken } from '../helpers/fetch';
import { PostResponse } from "../interfaces/interfaces";
import { PostAction } from '../reducers/postReducer';


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

export const handleCreatePost = (text: any) => {
	return async( dispatch: AppDispatch | any ) => {
	
		const { ok, post } = await fetchWithToken({ data: {text}, endpoint: 'post', method: 'POST' })

		if ( ok ) {
			dispatch({
				type: 'CREATE_POST',
				payload: post
			});

			dispatch(handleLoadPosts());
		}



	}
}

export const like = () => console.log('like');

export const retweet = () => console.log('retweet');

export const comment = () => console.log('comment');

export const save = () => console.log('save');
