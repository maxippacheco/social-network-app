import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { like, unlike, retweet, removeRetweet } from '../actions/post';
import { Post } from '../interfaces/interfaces';
import { RootState } from '../store/store';

export const usePost = ( post: Post ) => {

	const [isLiked, setLiked] = useState(false);
	const [isRetweeted, setRetweeted] = useState(false);

	const dispatch = useDispatch();
	const { user } = useSelector((state: RootState) => state.auth);


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
				
				console.log(isRetweeted);
				

				if(!isRetweeted){
					dispatch( retweet( post.id || '') );
			
				}else{
					
					dispatch( removeRetweet( post.id || '') );
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
	
	}, [post])

	return {
		isLiked,
		isRetweeted,
		sendAction,
		activeColor

	}
	



}
