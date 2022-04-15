import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import banner from '../assets/banner.jpg';
import userImage from '../assets/userImage.png';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Post } from '../components/posts/Post';
import { MainLayout } from '../layout/MainLayout';
import { Icon } from '../components/NavIcon/Icon';
import { Header } from '../components/Header';


export const ProfilePage = () => {

  // REFACTOR THIS PAGE TO USE IT AS A COMPONENT

  const { user } = useSelector( ( state: RootState) => state.auth );
  const { posts } = useSelector( ( state: RootState) => state.post );




  return (
    <MainLayout>
     <section className="flex flex-col w-full basis-1/2 border-r overflow-auto scrollbar-hide relative">

        {/* topbar */}
        {/* TODO: Do the topbar fixed */}
        <Header text={ user?.name || '' } tweets={'1.238 tweets'} /> 

        {/* banner */}
        <img src={ banner } alt="banner-sn" className="w-full h-52" />

      
        {/* profile img */}
        <div className="absolute top-56 right left-30 ml-4">
          <img src={ userImage } alt="profile-img" className="h-32" />
        </div>

        <div className='p-5 flex justify-end items-center'>
          <button 
            className='p-3 pr-6 pl-6 border-2 border-sky-500 rounded-full text-white hover:bg-sky-500 cursor-pointer hover:text-white'
            // TODO: user put
          >
            {/* TODO: fix this hover */}
            <Icon name={ faUserCircle } size='lg' className='text-sky-500 hover:text-white' /> Edit Profile
          </button>
        </div>

        <div className="border-b h-auto pl-5 flex flex-col">
          <span className="text-white text-xl">{ user?.name }</span>
          <span className="text-gray-500">@{ user?.username }</span>
          <div className="flex flex-row mt-3">
            <div className="text-white">{ user?.following.length } <span className="text-gray-500">following</span></div>
            <div className="text-white ml-3">{ user?.followers.length } <span className="text-gray-500">followers</span></div>
          </div>

          <div className="mt-10 mb-3 flex justify-between">
            <span className='text-white'>Tweets</span>
            <span className='text-white'>Retweeted</span>
            <span className='text-white'>Images and videos</span>
            <span className='mr-4 text-white'>Liked</span>
          </div>

      </div>
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
