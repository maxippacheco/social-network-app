import { Header } from "../components/Header"
import { MainLayout } from "../layout/MainLayout"
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { Post as PostInterface } from '../interfaces/interfaces';
import UserImage from '../assets/userImage.png';
import { timeFormat } from '../helpers/timeFormat';
import { Icon } from '../components/NavIcon/Icon';
import { faHeart, faRetweet, faDownload, faComment } from '@fortawesome/free-solid-svg-icons';
import { Post } from "../components/posts/Post";
import { useCommentPost } from '../hooks/useCommentPost';
import { comment } from '../actions/post';
import { Formik, Form, Field } from 'formik';
import { Comment } from "../components/comments/Comment";


export const PostCommentPage = () => {
  	
	const { postId } = useParams();
	const { posts } = useSelector( (state: RootState) => state.post );	
	const dispatch = useDispatch();

	const { isLiked, isRetweeted, likeAndChangeColor, retweetAndChangeColor, post } = useCommentPost();


	return (
		<MainLayout>
			<div className="w-full h-full">
				<Header text="Tweet" />
				<div className="h-2/6 w-full ">

					{
						posts?.map( ( { user_id, id, createdAt, text, likes }: PostInterface ) => (
							( id === postId ) && (
								<>						
									<div className="w-full h-1/4 flex flex-row items-center" key={ id }>
										<img src={ user_id.img ? user_id.img : UserImage } className="w-14 h-16 m-2 ml-5 rounded-full" />
										<div className="flex flex-col ml-1">
											<span className="text-lg text-white">{ user_id.name }</span>
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
											className={`${ isLiked ? 'text-red-500' : 'text-slate-700'} cursor-pointer`} 
											onClick={ likeAndChangeColor } 
											/>
										<Icon 
											size="lg" 
											name={ faRetweet }
											className={`${ isRetweeted ? 'text-green-500' : 'text-slate-700'} cursor-pointer`}
											onClick={ retweetAndChangeColor } 
											/>
										<Icon 
											size="lg" 
											name={ faComment } 
											className="text-slate-700"
										/>
										<Icon 
											size="lg" 
											name={ faDownload } 
											className="text-slate-700"
										/>
									</div>


									{/* Likes retweets and comments quantity */}
									<hr className="ml-4 mr-4 mt-3 bg-slate-700 border-none h-0.5" />

									<div className="ml-5 mr-5 flex flex-row justify-around mt-3 mb-3">

										<span className="text-gray-500">Likes:<span className="text-white"> { post?.likes.length }</span></span>
										<span className="text-gray-500">Retweets:<span className="text-white"> { post?.retweet.length }</span></span>
										<span className="text-gray-500">Comments:<span className="text-white"> { post?.comments.length }</span></span>
									</div>
									
									<hr className="ml-4 mr-4 mt-3 bg-slate-700 border-none h-0.5" />

									{/* Tweet your answer */}
									<Formik
										initialValues={ { comment: '' } }
										onSubmit={ ( values, { resetForm } ) => {
											dispatch( comment( postId,{ text: values.comment }.text ) );
										
											resetForm();
										}}
									>
										{
											() => (
												// ChangeFields
												<Form className="w-full flex justify-between flex-row items-center mt-4">
													<img 
														src={ UserImage } 
														alt="user image" 
														className="h-16 ml-5 mr-5" 
													/>
													
													<Field 
														type="text" className="h-16 flex-grow bg-slate-900 placeholder:text-left placeholder:text-lg focus:outline-none
																					focus:text-white text-gray-500 text-lg" 
														placeholder="Comment the post"
														name="comment"
														autoComplete="off"
													/>
													<button className="mr-5 ml-5 w-24 p-2 bg-sky-500 rounded-lg text-white" type="submit">Answer</button>
												</Form>

											)
										}
									</Formik>

									{/* Comments */}
									<div className="mt-5 border-t border-t-slate-700">
										
										{
											( post?.comments ) &&
												post?.comments.map( comment => (
													<Comment 
														comment={ comment }
														key={ comment.id }
													/>
												))
										}
						
									</div>
								


								</>
							)
						))
					}
				</div>
			</div>
		</MainLayout>	
 	)
}
