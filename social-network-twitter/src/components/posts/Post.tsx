import UserImage from '../../assets/userImage.png';
import { Post as PostInterface } from '../../interfaces/interfaces';
import { Icon } from '../NavIcon/Icon';
import { postIcon } from './postsIcons';
import { timeFormat } from '../../helpers/timeFormat';
import { useDispatch, useSelector } from 'react-redux';
import { like, unlike, removeRetweet, retweet } from '../../actions/post';
import { useState, useEffect } from 'react';
import { RootState } from '../../store/store';
import { useNavigate } from 'react-router-dom';


interface PostProps{ 
	post: PostInterface;
	onClick?: () => void;
}



export const Post = ({ post, onClick }: PostProps) => {

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user } = useSelector((state: RootState) => state.auth);

	// PASAR ESTOS ESTADOS A REDUX
	const [isLiked, setLiked] = useState(false);
	const [isRetweeted, setRetweeted] = useState(false);
	
	const { username, name } = post.user_id;


	// VERIFY IF THE POST IS LIKED OR RETWEETED
	useEffect(() => {

		if( post.likes.includes( user?.id )){
			setLiked(true);
		}else{
			setRetweeted( false );
		}

	},	[post]);

	useEffect(() => {
		if( post.retweet.includes( user?.id )){
			setRetweeted(true);			
		}  
	
	}, [post])
	

	// SET THE LIKE OR RETWEET ACTION
	const sendAction = ( iconName: string ) => {

		console.log(iconName);
		

		switch ( iconName ) {
			case 'heart':	
				// TODO: FIX
				setLiked( (isLiked === true) ? false : true );

				if( !isLiked ){
					dispatch( like( post.id ) );
				}else{
					dispatch( unlike( post.id ) );
				}
		
			break;
		
			case 'retweet':	
				// TODO: FIX
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
	// TODO: PUT ALL THIS FUNCTIONS IN A HELPERS FILE
	const activeColor = ( iconName: string ) => { 
		
		if( iconName === 'heart' ){
			return isLiked ? 'text-red-500' : 'text-slate-700';
		}else if ( iconName === 'retweet' ){
			return isRetweeted ? 'text-green-400' : 'text-gray-500';
		}else{
			return '';
		}

		// switch ( iconName ) {
		// 	case 'heart':
		// 		// TODO: FIX
		// 		return isLiked ? 'text-red-500' : 'text-slate-700';

		// 	case 'retweet':				
		// 		return isRetweeted ? 'text-green-500' : 'text-slate-700';

		// 	default:
		// 		return 'text-gray-500';
		// }

	}
	

	// NAVIGATE TO THE USER PROFILE
	const navigateToUser = () => { 
		if( user?.username === username){
			navigate(`/profile/me`) 
		}else{
			navigate(`/profile/${ username }`) 
		}
			
	}

  	return (
		// TODO: FIX STYLE
		<section className="h-46 border-b border-b-white flex flex-row p-3 pt-2">
			<img src={ UserImage } className="w-12 h-14 m-2 mr-3" />

			<div className='w-full '>
				<span className='text-white cursor-pointer' onClick={ navigateToUser }>{ name }</span>
				<span className='text-gray-500 pl-0.5'>@{ username }</span>
				
				<p className='pb-2 text-white cursor-pointer' onClick={ () => navigate(`/${ post.id }/comments`) }>
					{ post.text }
				</p>

				<div className='w-5/6 flex justify-between mt-2 mb-2 cursor-pointer' onClick={ onClick }>

					{
						postIcon.map( ({ name, className, size  }) => (
							<Icon 
								onClick={ () => sendAction( name.iconName ) }	
								name={ name } 
								// TODO: RENDER THE COLOR INSTANTLY AND NOT DEPENDING ON THE STATE
								className={ `${ className } ${ activeColor( name.iconName ) } ` }
								size={ size } 
								key={ name.iconName }
							/>
						))

					}

				</div>

			</div>
				<div className='w-2/4 h-ful flex justify-end cursor-pointer' onClick={ () => navigate(`/${ post.id }/comments`) }>
					<span className='text-base text-gray-500'>
						{ timeFormat( post.createdAt ) }	
					</span>
				</div>

		</section>
  	)	
}
