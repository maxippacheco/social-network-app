import { AppDispatch } from '../store/store';
import { BookmarkResponse, SingleBookmarkResponse } from '../interfaces/interfaces';
import { fetchWithoutToken, fetchWithToken } from '../helpers/fetch';


export const getBookmarks = (userId: string) => {

	return async(dispatch: AppDispatch) => {

		try {
			const { ok, bookmarks }:BookmarkResponse = await fetchWithoutToken({ data: null, endpoint: 'bookmarks', method: 'GET' });
			
			if( ok ){
				dispatch({
					type: '[Bookmark] - GET BOOKMARKS',
					payload: {
						userBookmarks: bookmarks.filter( bookmark => bookmark.userId === userId )
					}
				});
			}
			

		} catch (error) {
			console.log(error);
			
		}

	}

}


export const handleCreateBookmark = ( name: string ) => {
	return async( dispatch: AppDispatch ) => {

		try {
			const { ok, bookmark }: SingleBookmarkResponse = await fetchWithToken({ data: { folder: name }, endpoint: 'bookmarks', method: 'POST' });
	
			if( ok ){
				dispatch({
					type: '[Bookmark] - CREATE BOOKMARK',
					payload: {
						userBookmarks: bookmark
					}
				});
			}
			
		} catch (error) {
			console.log(error);
			
		}

	}
}