import { Header } from "../components/Header"
import { MainLayout } from "../layout/MainLayout"
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Post } from '../interfaces/interfaces';


export const PostCommentPage = () => {
  	
	const { postId } = useParams();
	const { posts } = useSelector( (state: RootState) => state.post );	
	

	return (
		<MainLayout>
			<div className="w-full h-full">
				<div className="h-2/6 w-full">
					<Header text="Tweet" />

					{
						posts?.map( ( post: Post ) => (
							(post.id === postId) && (
								<div>
									{/* TODO: style */}
									{ post.text }
								</div>
							)
						))
					}
				</div>
			</div>
		</MainLayout>	
 	)
}
