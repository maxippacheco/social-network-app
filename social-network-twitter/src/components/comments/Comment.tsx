import { timeFormat } from '../../helpers/timeFormat';
import UserImage from '../../assets/userImage.png';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { CommentElement } from '../../interfaces/interfaces';
import { navigateToUser } from '../../helpers/navigateToUser';
import { Loader } from '../loader/Loader';

export const Comment = ({ comment }: { comment: CommentElement }) => {

	const navigate = useNavigate();

	const { user } = useSelector((state: RootState) => state.auth);

	
	if( !comment.user_id ){
		return <Loader />
	}

	const { username, name } = comment?.user_id;
	
	
  	return (
				<section className="h-46 border-b border-b-slate-700 flex flex-row p-3 pt-2">
					<img src={ comment.user_id.img ? comment.user_id.img : UserImage } className="w-14 h-14 rounded-full m-2 mr-3" />

					<div className='w-full '>
						<span className='text-white cursor-pointer' onClick={ () => navigateToUser( user!, username, navigate ) }>{ name }</span>
						<span className='text-gray-500 pl-0.5'>@{ username }</span>
						
						<p className='pb-2 text-white cursor-pointer' onClick={ () => navigate(`/${ comment._id }/comments`) }>
							{ comment.text }
						</p>

					</div>
						<div className='w-2/4 h-ful flex justify-end cursor-pointer'>
							<span className='text-base text-gray-500'>
								{ timeFormat( comment.createdAt ) }	
							</span>
						</div>

				</section>
  	)	
}
