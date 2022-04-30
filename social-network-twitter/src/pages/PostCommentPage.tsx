import { Header } from "../components/Header"
import { MainLayout } from "../layout/MainLayout"
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { Post as PostInterface } from '../interfaces/interfaces';
import UserImage from '../assets/userImage.png';
import { comment } from '../actions/post';
import { Formik, Form, Field } from 'formik';
import { Comment } from "../components/comments/Comment";
import { useState } from 'react';
import { Loader } from "../components/loader/Loader";
import { PostComment } from '../components/posts/PostComment';


export const PostCommentPage = () => {
  	
	const { postId } = useParams();
	const { posts } = useSelector( (state: RootState) => state.post );	
	const { user } = useSelector( (state: RootState) => state.auth );
	const dispatch: any = useDispatch();


	const [loading, setLoading] = useState(false);

	if( !posts ){
		return <Loader />
	}

	return (
		<MainLayout>
			<div className="w-full h-full">
				<Header text="Tweet" />
				<div className="h-2/6 w-full ">

					{
						posts?.map( ( post: PostInterface ) => (
							( post.id === postId ) && (
								<>						
									<PostComment postMap={ post } key={ post.id } />
									{/* Tweet your answer */}
									<Formik
										initialValues={ { comment: '' } }
										onSubmit={ ( values, { resetForm } ) => {

											setLoading(true);

											dispatch( comment( postId,{ text: values.comment }.text ) ).then( () => {
												setLoading(false);																								
											});
											
											resetForm();
										}}
									>
										{
											({}) => (
												// ChangeFields
												<Form className={`w-full flex justify-between flex-row items-center mt-4 ${ loading ? 'opacity-20' : 'opacity-100'}`}>
													<img 
														src={ user?.img ? user?.img : UserImage  } 
														alt="user image" 
														className="h-16 ml-5 mr-5 rounded-full" 
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
												
												post.comments.map( comment => (
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
