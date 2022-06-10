import { SingleBookmarkResponse, Bookmark } from '../interfaces/interfaces';
import { fetchWithoutToken } from '../helpers/fetch';
import { useEffect, useState } from 'react';

export const useBookmark = (id: string) => {
	
	const [bookmark, setBookmark] = useState<Bookmark>();

	
	const getBookmarkById	= async( id: string ) => {
		const { bookmark }: SingleBookmarkResponse = await fetchWithoutToken({ data: null , endpoint: `bookmarks/${id}`, method: 'GET' });
		
		setBookmark(bookmark);
	}

	useEffect(() => {
		getBookmarkById(id);
	}, []);
	

	return {
		bookmark,
		getBookmarkById
	}
}