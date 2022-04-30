import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Post } from '../components/posts/Post';
import { MainLayout } from '../layout/MainLayout';
import { ProfileCard } from "../components/profile/ProfileCard";


export const ProfilePage = () => {

  // REFACTOR THIS PAGE TO USE IT AS A COMPONENT

  const { user } = useSelector( ( state: RootState) => state.auth );
  const { posts } = useSelector( ( state: RootState) => state.post );

  // if( !user ) return;

  return (
    <MainLayout>
     <section className="flex flex-col w-full basis-1/ overflow-auto scrollbar-hide relative">

        {/* topbar */}
        {/* TODO: Do the topbar fixed */}
        <ProfileCard user={ user! } />

        <div>
          {
          
            posts?.map( ( post ) => {
              // 1er condicion Si el post es de el usuario actual
              if( post.user_id._id === user?.id || post.retweet.includes( user?.id ) ) {
                return <Post key={ post.id } post={ post } />
              }
            })
          }
            
        </div>

      </section>
   </MainLayout>
  )
}
