import { Bookmark } from '../interfaces/interfaces';

interface BookmarkState{
	userBookmarks: Bookmark[] | [];
	currentBookmark: string;
}

const BookMarkInitialState: BookmarkState = {
	userBookmarks: [],
	currentBookmark: '',
	
}

type BookmarkActionType = 
	| { type: '[Bookmark] - GET BOOKMARKS', payload: { userBookmarks: Bookmark[] } }
	| { type: '[Bookmark] - CREATE BOOKMARK', payload: { userBookmarks: Bookmark } }
	| { type : '[Bookmark] - CURRENT BOOKMARK', payload: string }
	| { type: '[Bookmark] - DELETE POST FROM BOOKMARK', payload: { userBookmarks: Bookmark } }
;


export const bookmarkReducer = ( state: BookmarkState = BookMarkInitialState, action: BookmarkActionType ): BookmarkState => {  


 	switch ( action.type ) {  

		case '[Bookmark] - GET BOOKMARKS':
		 	return {
				...state,
				userBookmarks: action.payload.userBookmarks
		 	}
		
		case '[Bookmark] - CREATE BOOKMARK':
			return {
				...state,
				userBookmarks: [...state.userBookmarks, action.payload.userBookmarks]
			}

		case '[Bookmark] - CURRENT BOOKMARK':
			return {
				...state,
				currentBookmark: action.payload
			}

		case '[Bookmark] - DELETE POST FROM BOOKMARK':
			// TODO: Implement
			// const isValid = state.userBookmarks.map( ({ posts }) => posts.map( post => post.id  ).find( () => action.payload.userBookmarks.posts.map( post => post.id ) ) ) ? true : false;
			return {
				...state,
				userBookmarks: state.userBookmarks.map( bookmark => bookmark.id === action.payload.userBookmarks.id ? action.payload.userBookmarks : bookmark )
			}
			
			
	 	default:
		 	return state;
	}
 

}