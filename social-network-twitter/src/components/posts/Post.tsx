import UserImage from '../../assets/userImage.png';
import { Post as PostInterface } from '../../interfaces/interfaces';
import { Icon } from '../NavIcon/Icon';
import { postIcon } from './postsIcons';
import { timeFormat } from '../../helpers/timeFormat';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { useDispatch, useSelector } from 'react-redux';
import { like, unlike, removeRetweet, retweet } from '../../actions/post';
import { useState } from 'react';
import { RootState } from '../../store/store';


interface PostProps{ 
	post: PostInterface;
	onClick?: () => void;
}



export const Post = ({ post, onClick }: PostProps) => {

	const dispatch = useDispatch();

	const { posts } = useSelector((state: RootState) => state.post);
	const { user } = useSelector((state: RootState) => state.auth);

	const sendAction = ( iconName: string ) => {
		switch ( iconName) {
			case 'heart':
				if( !post.likes.includes( user?.id ) ){
					dispatch( like( post.id ) );
				}else{
					dispatch( unlike( post.id ) );
				}
		
			break;
		
			case 'retweet':
			
				if( !post.retweet.includes( user?.id ) ){
					// TODO:
					dispatch( retweet( post.id ) );
				}else{
					// TODO:
					dispatch( removeRetweet( post.id ) );
				}
			
			break;

			
			default:
				return '';
		}
	}
	
	// TODO: PUT ALL THIS FUNCTIONS IN A HELPERS FILE
	const activeColor = ( iconName: string ) => { 

		switch ( iconName ) {
			case 'heart':
				return post.likes.includes( user?.id ) ? 'text-red-500' : 'text-slate-700';
			
			case 'retweet':
				return post.retweet.includes( user?.id ) ? 'text-green-500' : 'text-slate-700';

			default:
				return 'text-gray-500';
		}

	}
	
	const { username, name } = post.user_id;


  	return (
		// TODO: FIX STYLE
		<section className="h-46 border-b border-b-white flex flex-row p-3 pt-2" onClick={ onClick }>
			<img src={ UserImage } className="w-12 h-14 m-2 mr-3" />

			<div className='w-full'>
				{/* TODO: FIX REALOAD WHEN A USER LIKE A POST */}
				<span className='text-white'>{ name }</span>
				<span className='text-gray-500 pl-0.5'>@{ username }</span>
				
				<p className='pb-2 text-white'>
					{ post.text }
				</p>

				<div className='w-5/6 flex justify-between mt-2 mb-2 '>

					{
						postIcon.map( ({ name, className, size  }) => (
							<Icon 
								onClick={ () => sendAction( name.iconName )}	
								name={ name } 
								// TODO: RENDER THE COLOR INSTANTLY AND NOT DEPENDING ON THE STATE
								className={ `${ className } ${ activeColor( name.iconName ) }` }
								size={ size } 
								key={ name.iconName }
							/>
						))

					}

				</div>

			</div>
				<div className='w-2/4 h-ful flex justify-end'>
					<span className='text-base text-gray-500'>
						{ timeFormat( post.createdAt ) }	
					</span>
				</div>

		</section>
  	)	
}
