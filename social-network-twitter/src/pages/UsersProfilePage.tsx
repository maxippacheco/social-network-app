import { useState, useEffect } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

import userImage from '../assets/userImage.png';
import banner from '../assets/banner.jpg';

import { NavIcon } from "../components/NavIcon/NavIcon"
import { Navbar } from "../components/navbar/Navbar";
import { Search } from "../components/search/Search";
import { Post } from '../components/posts/Post';

import { RootState } from '../store/store';

import { handleFollowUser } from '../actions/auth';
import { fetchWithoutToken } from '../helpers/fetch';
import { User } from '../interfaces/interfaces';
import { MainLayout } from '../layout/MainLayout';
import { Loader } from '../components/loader/Loader';


export const UsersProfilePage = () => {

  const { username } = useParams();
  const [user, setUser] = useState<User>();


  const getUserByUsername = async() => {
    const resp = await fetchWithoutToken({endpoint: `auth/${username}`, method: 'GET', data: {} });

    if(resp.ok){
      setUser(resp.user);
    }
  }

  // REFACTOR THIS PAGE TO USE IT AS A COMPONENT

  const dispatch = useDispatch();
  const { posts } = useSelector( ( state: RootState) => state.post );
  const user_inSession = useSelector( ( state: RootState) => state.auth );
  const navigate = useNavigate();
  const [ isFollowed, setIsFollowed ] = useState(false);

  const followUser = ( id: string ) => {
    setIsFollowed(true);
    dispatch(handleFollowUser( id ));
  }

  useEffect(() => {
    getUserByUsername();  

  }, []);

  useEffect(() => {
    if( user_inSession.user?.following.includes( user?.id ) ){
      setIsFollowed( true );
    }

  }, []);


  if (!user) {
    return <Loader />
  }


  return (
    <MainLayout>
      <section className="flex flex-col w-full basis-1/2 border-r overflow-auto scrollbar-hide relative">

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
          <img src={ user.img ? user.img : userImage } alt="profile-img" className="h-32 rounded-full" />
        </div>

        <div className='p-5 flex justify-end items-center'>
          <button 
            className={
              isFollowed
              ? `p-3 pr-6 pl-6 bg-sky-500 rounded-full text-white`
              : `p-3 pr-6 pl-6 border-2 border-sky-500 rounded-full text-white`
            }
            // TODO:
            onClick={ () => followUser( user?.id || '' ) }
          >
            {
              isFollowed
              ?
              'Following'
              :
              'Follow'
            }
          </button>
        </div>

        <div className="border-b h-auto pl-5 flex flex-col">
          <span className="text-white text-xl">{ user?.name }</span>
          <span className="text-gray-500">@{ user?.username }</span>
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
        

      </section>
    </MainLayout>
  )
}

