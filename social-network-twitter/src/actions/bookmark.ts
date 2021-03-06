import { AppDispatch } from '../store/store';
import { BookmarkResponse, SingleBookmarkResponse } from '../interfaces/interfaces';
import { fetchWithoutToken, fetchWithToken } from '../helpers/fetch';
import Swal from 'sweetalert2';


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


export const handleChangeCurrentBookmark = ( bookmarkId: string ) => ({
	type: '[Bookmark] - CURRENT BOOKMARK',
	payload: bookmarkId
})


export const handleDeletePostAction = (bookmarkId: string, postId: string) => {
	return async( dispatch: AppDispatch ) => {


		if( !bookmarkId ){
			Swal.fire('Error', 'You must select a bookmark', 'error');
		};
		
		try {
			const { ok, bookmark }: SingleBookmarkResponse = await fetchWithToken({ data: {}, endpoint: `bookmarks/${bookmarkId}/${postId}`, method: 'DELETE' });
	
			if( ok ){
				dispatch({
					type: '[Bookmark] - DELETE POST FROM BOOKMARK',
					payload: {
						userBookmarks: bookmark
					}
				})
			}
		}catch (error) {
			console.log(error);
		}
	}
}


export const handleSavePostAction = ( bookmarkId: string, postId: string ) => {

	return async( dispatch: AppDispatch ) => {

		if( !bookmarkId ){
			Swal.fire('Error', 'You must select a bookmark', 'error');
		};

		try {
			const { ok, bookmark }: SingleBookmarkResponse = await fetchWithToken({ data: {}, endpoint: `bookmarks/${bookmarkId}/${postId}`, method: 'POST' });
	
			console.log(bookmark);
			

			if( ok ){
				dispatch({
					type: '[Bookmark] - SAVE POST FROM BOOKMARK',
					payload: {
						userBookmarks: bookmark
					}
				})
			}
		}catch (error) {
			console.log(error);
		}
	}

}