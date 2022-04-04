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
	| { type: 'LIKE', payload: Post }
	| { type: 'UNLIKE', payload: Post }
	| { type: 'RETWEET', payload: Post }
	| { type: 'REMOVE_RETWEET', payload: Post }


export const postReducer = ( initialState: PostState = PostInitialState, action: PostAction ) => {

	switch (action.type) {
		case 'LOAD_POSTS':
			return{
				...initialState,
				posts: action.payload
			};
		case 'CREATE_POST':
			return{
				...initialState,
				// TODO: FIX
				posts: [action.payload, ...initialState.posts]
			};

			case 'RETWEET':
			case 'REMOVE_RETWEET':
			case 'LIKE':
			case 'UNLIKE':
				if( !initialState.posts ) return initialState;
				return{
					...initialState,
					posts: initialState.posts.map( post => {
						if ( post.id === action.payload.id ) {
							return action.payload;
						}
						return post;
					})
				}
		
		default:
			return initialState;
	}

}