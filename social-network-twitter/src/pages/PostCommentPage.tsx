import { Header } from "../components/Header"
import { MainLayout } from "../layout/MainLayout"
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { Post } from '../interfaces/interfaces';
import UserImage from '../assets/userImage.png';
import { timeFormat } from '../helpers/timeFormat';
import { Icon } from '../components/NavIcon/Icon';
import { faHeart, faRetweet, faDownload, faComment } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { like, unlike, retweet, removeRetweet } from '../actions/post';


export const PostCommentPage = () => {
  	
	const { postId } = useParams();
	const { posts } = useSelector( (state: RootState) => state.post );	
	const { user } = useSelector( (state: RootState) => state.auth );	
	const dispatch = useDispatch();
	
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


	const post = posts?.find( (post: Post) => post.id === postId );

	useEffect(() => {
		
		if( post.likes.includes( user?.id ) ){
			setLiked( true );
		}

	}, [post])

	useEffect(() => {
		
		if( post.retweet.includes( user?.id ) ){
			setRetweeted( true );
		}

	}, [post])



	return (
		<MainLayout>
			<div className="w-full h-full">
				<Header text="Tweet" />
				<div className="h-2/6 w-full ">

					{
						posts?.map( ( { user_id, id, createdAt, text, likes }: Post ) => (
							( id === postId ) && (
								<>						
									<div className="w-full h-1/4 flex flex-row items-center">
										<img src={ user_id.img ? user_id.img : UserImage } className="w-14 h-16 m-2 ml-5 rounded-full" />
										<div className="flex flex-col ml-1">
											<span className="text-xl text-white">{ user_id.name }</span>
											<span className="text-gray-500">@{ user_id.username }</span>
										</div>

										<div className="text-3xl w-4/5 h-full flex justify-end items-center mb-5 mr-5 text-gray-500">...</div>			
									</div>

									<p className="ml-5 mr-5 mt-5 text-2xl text-white">{ text }</p>
									<div className="ml-5 mr-5 text-gray mt-2 text-base text-gray-500">{timeFormat( createdAt ) }</div>

									<div className="w-full flex justify-around mt-5">
										{/* <span>{ likes.length }</span> */}
										<Icon 
											size="lg" 
											name={ faHeart } 
											className={`${ isLiked ? 'text-red-500' : 'text-gray-500'} cursor-pointer`} 
											onClick={ likeAndChangeColor } 
											/>
										<Icon 
											size="lg" 
											name={ faRetweet }
											className={`${ isRetweeted ? 'text-green-500' : 'text-gray-500'} cursor-pointer`}
											onClick={ retweetAndChangeColor } 
											/>
										<Icon size="lg" name={ faComment } />
										<Icon size="lg" name={ faDownload } />
									</div>


									{/* Likes retweets and comments quantity */}
									<hr className="ml-4 mr-4 mt-3 bg-slate-700 border-none h-0.5" />

									<div className="ml-5 mr-5 flex flex-row justify-around mt-3 mb-3">

										<span className="text-gray-500">Likes:<span className="text-white"> { post.likes.length }</span></span>
										<span className="text-gray-500">Retweets:<span className="text-white"> { post.retweet.length }</span></span>
										<span className="text-gray-500">Comments:<span className="text-white"> { post.comments.length }</span></span>
									</div>
									
									<hr className="ml-4 mr-4 mt-3 bg-slate-700 border-none h-0.5" />

									{/* Tweet your answer */}
								</>
							)
						))
					}
				</div>
			</div>
		</MainLayout>	
 	)
}
