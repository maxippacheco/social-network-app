import { AppDispatch } from "../store/store"
import { fetchWithToken } from '../helpers/fetch';
import { Post, PostResponse } from "../interfaces/interfaces";
import { Dispatch } from "react";


export const handleLoadPosts = () => {
	return async( dispatch: AppDispatch ) => {

		const { ok, posts }: PostResponse = await fetchWithToken({ data: null, endpoint: 'post', method: 'GET' })

		if ( ok ) {
			dispatch({
				type: 'LOAD_POSTS',
				// sorting by timestamp
				payload: posts
			})		
		}
	}
}

export const handleCreatePost = ( text: string ) => {
	// TODO: remove any and fix reload of posts 
	return async( dispatch: AppDispatch | Dispatch<any> ) => {
		
		try {
			const { ok, post } = await fetchWithToken({ data: { text }, endpoint: 'post', method: 'POST' })
	
			if ( ok ) {
				dispatch({
					type: 'CREATE_POST',
					payload: post
				});

				// dispatch( handleLoadPosts() );
	
			}
			
		} catch (error) {
			console.log(typeof text);
			
		}



	}
}

export const like = ( id: string ) => {

	return async(dispatch: AppDispatch ) => {
		const resp = await fetchWithToken({ data: {}, endpoint: `post/like/${ id }`, method: 'PUT' })

		if ( resp.ok ) {
			dispatch({
				type: 'LIKE',
				payload: resp.post
			})

			console.log(resp);
			

		}
	}

}

export const unlike = ( id: string ) => {

	return async(dispatch: AppDispatch ) => {
		const resp = await fetchWithToken({ data: {}, endpoint: `post/like/remove/${ id }`, method: 'PUT' })

		if ( resp.ok ) {
			dispatch({
				type: 'UNLIKE',
				payload: resp.post
			})

		}
	}


}

export const retweet = ( id: string ) => {
	return async( dispatch: AppDispatch) => {
	
		const resp = await fetchWithToken({ data: {} , endpoint: `post/retweet/${ id }`, method: 'PUT' })
		console.log(resp);
		

		if ( resp.ok ) {
			dispatch({
				type: 'RETWEET',
				payload: resp.post
			})

		}
	}
}

export const removeRetweet = ( id: string ) => {
	return async( dispatch: AppDispatch) => {
		const resp = await fetchWithToken({ data: {}, endpoint: `post/retweet/remove/${ id }`, method: 'PUT' })

		if ( resp.ok ) {
			dispatch({
				type: 'REMOVE_RETWEET',
				payload: resp.post
			})

		}
	}
} 


export const comment = ( id: string, text: string ) => {
	return async( dispatch: AppDispatch) => {
		
		try {
			const resp = await fetchWithToken({ data: { text }, endpoint: `post/comment/${ id }`, method: 'POST' })
			
			
			if ( resp.ok ) {
			
				dispatch({
					type: 'COMMENT_POST',
					payload: resp.post
				})
	
				// TODO: fix reload of posts
				// dispatch( handleLoadPosts() )
			}
			
		} catch (error) {
			console.log(error);
			
		}

	}
} 

export const save = () => console.log('save');
