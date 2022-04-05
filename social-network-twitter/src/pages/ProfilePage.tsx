import { useNavigate } from 'react-router-dom';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { NavIcon } from "../components/NavIcon/NavIcon"
import banner from '../assets/banner.jpg';
import userImage from '../assets/userImage.png';
import { Navbar } from "../components/navbar/Navbar";
import { Search } from "../components/search/Search";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { Post } from '../components/posts/Post';
import { handleFollowUser } from '../actions/auth';


export const ProfilePage = () => {

  const dispatch = useDispatch();
  const { user } = useSelector( ( state: RootState) => state.auth );
  const { posts } = useSelector( ( state: RootState) => state.post );
  const navigate = useNavigate();

  const followUser = ( id: string ) => {
    dispatch(handleFollowUser( id ));  
  }

  return (
    <>
      {/* TODO: CREATE WRAPPER */}
      <Navbar />
      <div className="flex flex-col w-full basis-1/2 border-r overflow-auto scrollbar-hide relative">

        {/* topbar */}
        {/* TODO: Do the topbar fixed */}
        <header className="w-full h-12 flex items-center mt-2 mb-2">
          <NavIcon.Icon name={ faArrowLeft } size="lg" className="text-white m-7 hover:cursor-pointer" onClick={ () => navigate('/') } />
          
          <div className="flex flex-col">
            <h3 className="text-white ml-2">{ user?.name }</h3>
            <span className="text-gray-500">1.238 tweets</span>
          </div>
          

        </header>

        {/* banner */}
        <img src={ banner } alt="banner-sn" className="w-full h-52" />

      
        {/* profile img */}
        <div className="absolute top-56 right left-30 ml-4">
          <img src={ userImage } alt="profile-img" className="h-32" />
        </div>

        <div className='p-5 flex justify-end items-center'>
          <button 
            className='p-3 pr-6 pl-6 border-2 border-sky-500 rounded-full text-white'
            // TODO:
            // onClick={ () => followUser( user?.id || '' ) }
          >
            Follow
            {/* {
              user?.following
            } */}
          </button>
        </div>

        <div className="border-b h-auto pl-5 flex flex-col">
          <span className="text-white text-xl">{ user?.name }</span>
          <span className="text-gray-500">{ user?.username }</span>
          <div className="flex flex-row mt-3">
            <div className="text-white">255 <span className="text-gray-500">following</span></div>
            <div className="text-white ml-3">265 <span className="text-gray-500">followers</span></div>
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

      </div>
      {/* <div className='bg-red-600'>

      </div> */}
      <Search />
    </>
  )
}
