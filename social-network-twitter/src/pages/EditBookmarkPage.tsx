import { useParams, useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { Loader } from '../components/loader/Loader';
import { Post } from '../components/posts/Post';
import { Icon } from '../components/NavIcon/Icon';
import { faFolderOpen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useBookmark } from '../hooks/useBookmark';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { handleDeletePostAction } from '../actions/bookmark';
import { RootState } from '../store/store';

export const EditBookmarkPage = () => {
	

	const { id } = useParams();
	const navigate = useNavigate();
	const dispatch: any = useDispatch();
	const { userBookmarks } = useSelector( (state: RootState) => state.bookmarks );
	// const { bookmark } = useBookmark(id || '');

	const [openSelect, setOpenSelect] = useState(false);
	const [postToDelete, setPostToDelete] = useState<string>('');

	const switchSelect = () => setOpenSelect(!openSelect);

	const selectPostToDelete = (id: string) => setPostToDelete( id );
	

	const handleDeletePosts = (bookmarkId: string) => {
		dispatch(handleDeletePostAction(bookmarkId, postToDelete));
	}



	// if( !bookmark ) return <Loader/>;


	return (
		userBookmarks.map( bookmark => (
			bookmark.id === id && 
			<div className='w-full h-full flex justify-center items-center' key={ bookmark.id }>
				<div className='w-2/4 h-full border-r border-r-gray-600'>
					<h1 className='text-5xl text-white font-bold text-center mt-2'>Edit bookmark</h1>
					<div className='flex justify-center mt-5'>
						<span className='bg-gray-600 p-5 rounded-full'>
							<Icon name={faFolderOpen} size="4x" className='text-white' />
						</span>
					</div>

					<h3 className='text-white text-center my-5 text-3xl'>{bookmark.folder}</h3>

					<div className='w-full flex justify-center'>
						{
							openSelect && (
								<button 
									className='bg-red-600 flex items-center p-2 text-white rounded-lg hover:bg-red-500'
									onClick={ () => handleDeletePosts( bookmark.id ) }
								>Delete These posts <Icon name={faTrash} size="2x" className='text-white pl-0.5' /> </button>
							)
						}
					</div>

				</div>
				
				<div className='w-2/3 h-full overflow-auto scrollbar-hide'>
					
						<div className='flex justify-around mt-3'>
							<button 
								className='py-2 w-56 bg-gray-500 text-white cursor-pointer hover:bg-gray-600 rounded-md'
								onClick={ switchSelect }
							>Select</button>
							<button 
								className='py-2 w-56 bg-gray-500 text-white cursor-pointer hover:bg-gray-600 rounded-md'
								onClick={ () => navigate('/bookmarks') }
							>Go back</button>	
						</div>

						<h3 className='text-3xl text-white font-bold text-left pl-5 pt-5 pb-6 border-b border-b-gray-600'>Your posts in this bookmark: </h3>

						{
							bookmark.posts?.map(post => (
								<div className='flex flex-row' key={ post._id }>
									
									{
										openSelect && (
											<div className=' flex items-center p-2.5 border-r border-r-gray-600 border-b border-b-gray-600'>
												<input 
													type="checkbox" 
													className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 
																	dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
													onClick={ () => selectPostToDelete( post._id || '' ) }
												/>													
											</div>
										)
									}

									<div className='flex-grow'>
										<Post post={ post } key={ post.id }  />
									</div>
								</div>
							))
						}
				</div>
			</div>
		))
	)
}
