import UserImage from '../../assets/userImage.png';
import { Post as PostInterface } from '../../interfaces/interfaces';
import { Icon } from '../NavIcon/Icon';
import { postIcon } from './postsIcons';


interface PostProps{ 
	post: PostInterface
}



export const Post = ({ post }: PostProps) => {


	const { username, name } = post.user_id;

  	return (
		// TODO: FIX STYLE
		<section className="h-46 border-b border-b-white flex flex-row p-3 pt-2">
			<img src={ UserImage } className="w-12 h-14 m-2 mr-3" />

			<div className='w-full'>
				<span className='text-white'>{ name }</span>
				<span className='text-gray-500 pl-0.5'>@{ username }</span>
				
				<p className='pb-2 text-white'>
					{ post.text }
				</p>

				<div className='w-3/4 flex justify-between mt-2 mb-2 '>
					
					{
						postIcon.map( ({ name, className, size, activeColor  }) => (
							<Icon 
								name={ name } 
								className={ `${ className } ` } 
								size={ size } 
								key={ name.iconName }
							/>
						))
					}

				</div>

			</div>
				<div className='w-1/4 h-ful flex'>
				</div>

		</section>
  	)	
}
