import { Post } from '../interfaces/interfaces';

interface PostState {
	posts: null | Post[];
}

const PostInitialState: PostState = {
	posts: null,
}

export type PostAction = 
	| { type: 'LOAD_POSTS', payload: Post[] }
	| { type: 'CREATE_POST', payload: Post }


export const postReducer = ( initialState: PostState = PostInitialState, action: PostAction ) => {

	switch (action.type) {
		case 'LOAD_POSTS':
			return{
				...initialState,
				posts: action.payload
			};
	
		default:
			return initialState;
	}

}