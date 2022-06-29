import { useParams } from 'react-router-dom';
import { useState, useEffect, Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { like, unlike, retweet, removeRetweet } from '../actions/post';
import { Post as PostInterface } from '../interfaces/interfaces';
import { RootState, AppDispatch } from '../store/store';

export const useCommentPost = () => {

	const { postId } = useParams();
	const dispatch:any = useDispatch();
	const { posts } = useSelector( (state: RootState) => state.post );	
	const { user } = useSelector( (state: RootState) => state.auth );	


	const [ isLiked, setLiked ] = useState( false );
	const [ isRetweeted, setRetweeted ] = useState( false );

	const likeAndChangeColor = () => {

		setLiked( (isLiked === true) ? false : true );
		

		if(!isLiked){
			dispatch( like( postId || '') );
	
		}else{
			
			dispatch( unlike( postId || '') );
		}
		
	}

	const retweetAndChangeColor = () => {
		setRetweeted( (isRetweeted === true) ? false : true );
		

		if(!isRetweeted){
			dispatch( retweet( postId || '') );
	
		}else{
			
			dispatch( removeRetweet( postId || '') );
		}

	}

	const post = posts?.find( (post: PostInterface) => post.id === postId );

	useEffect(() => {
		
		if( post?.likes.includes( user?.id ) ){
			setLiked( true );
		}

	}, [post]);

	useEffect(() => {
		
		if( post?.retweet.includes( user?.id ) ){
			setRetweeted( true );
		}

	}, [post]);

	return{
		isLiked,
		isRetweeted,
		likeAndChangeColor,
		retweetAndChangeColor,
		setLiked,
		setRetweeted,
		post
	}

}