import { RootState } from '../../store/store';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Post as PostInterface } from '../../interfaces/interfaces';
import { Icon } from '../NavIcon/Icon';
import { postIcon } from './postsIcons';
import { timeFormat } from '../../helpers/timeFormat';
import { usePost } from '../../hooks/usePost';

import UserImage from '../../assets/userImage.png';

interface PostProps{ 
	post: PostInterface;
	onClick?: () => void;
}



export const Post = ({ post, onClick }: PostProps) => {

		const navigate = useNavigate();

		const { user } = useSelector((state: RootState) => state.auth);
		const { activeColor, sendAction } = usePost(post);

		
		const { username, name } = post?.user_id;
		


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
			<section className="h-46 border-b border-b-slate-700 flex flex-row p-3 pt-2">
				<img 
					src={ (post.user_id.img ) ? post.user_id.img : UserImage } 
					className={`${(post.user_id.img) } m-2 mr-3 rounded-full w-14 h-14`}
				
				/>

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
