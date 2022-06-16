import { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { like, unlike, retweet, removeRetweet } from '../actions/post';
import { Post } from '../interfaces/interfaces';
import { RootState } from '../store/store';
import { handleDeletePostAction, handleSavePostAction } from '../actions/bookmark';

export const usePost = ( post: Post ) => {

	const [isLiked, setLiked] = useState(false);
	const [isRetweeted, setRetweeted] = useState(false);
	const [isSave, setSave] = useState(false);

	const dispatch = useDispatch();
	const { user } = useSelector((state: RootState) => state.auth);
	const { currentBookmark, userBookmarks } = useSelector((state: RootState) => state.bookmarks);


	const sendAction = ( iconName: string ) => {

		console.log(iconName);
		

		switch ( iconName ) {
			case 'heart':	
				setLiked( (isLiked === true) ? false : true );

				if( !isLiked ){
					dispatch( like( post.id ) );
				}else{
					dispatch( unlike( post.id ) );
				}
		
			break;
		
			case 'retweet':	
				setRetweeted( (isRetweeted === true) ? false : true );
				
				if(!isRetweeted){
					dispatch( retweet( post.id || '') );
			
				}else{
					
					dispatch( removeRetweet( post.id || '') );
				}
			break;

			case 'download':
				setSave(!isSave);

				console.log(isSave);
				

				if(!isSave){
					dispatch( handleSavePostAction( currentBookmark, post.id  ));
				}else{
					dispatch( handleDeletePostAction( currentBookmark, post.id ) );
				}
				break;
			
			default:
				return '';
		}
	}
	
	// ACTIVE THE COLOR
	const activeColor = ( iconName: string ) => { 
		
		if( iconName === 'heart' ){
			return isLiked ? 'text-red-500' : 'text-slate-700';
		}else if ( iconName === 'retweet' ){
			return isRetweeted ? 'text-green-400' : 'text-gray-500';
		}else if( iconName === 'download'){
			return isSave ? 'text-sky-500' : 'text-gray-500';
		}else{
			return '';
		}

	}

	useEffect(() => {

		if(!post.likes) return;

		if( post?.likes.find( item => item === user?.id ) ){
			setLiked(true);
		}else{
			setLiked( false );
		}

	},	[post]);

	useEffect(() => {

		if( !post.retweet ) return;

		if( post?.retweet.find( item => item === user?.id ) ){
			setRetweeted(true);			
		}  
	
	}, [post]);

	useEffect(() => {
		// userBookmarks.map( bookmark => bookmark.posts.filter( item => item._id === post.id )  )
		
		if( userBookmarks.find( item => item.posts.find( postB => postB._id === post.id ) ) ||  userBookmarks.find( item => item.posts.find( postB => postB._id === post._id ) )){
			console.log(post);
			setSave(true);
		}else{
			setSave(false);
		}
		
		
	}, [userBookmarks])


	return {
		isLiked,
		isRetweeted,
		sendAction,
		activeColor

	}
	



}
