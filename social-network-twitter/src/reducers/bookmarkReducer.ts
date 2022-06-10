import { Bookmark } from '../interfaces/interfaces';

interface BookmarkState{
	userBookmarks: Bookmark[] | [];
}

const BookMarkInitialState: BookmarkState = {
	userBookmarks: []
}

type BookmarkActionType = 
	| { type: '[Bookmark] - GET BOOKMARKS', payload: { userBookmarks: Bookmark[] } }
	| { type: '[Bookmark] - CREATE BOOKMARK', payload: { userBookmarks: Bookmark } }
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
			
	 	default:
		 	return state;
	}
 

}