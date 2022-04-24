import { User } from '../../interfaces/interfaces';
import { useNavigate } from 'react-router-dom';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '../NavIcon/Icon';
import banner from '../../assets/banner.jpg';
import userImage from '../../assets/userImage.png';
import { Header } from '../Header';

interface Props {
	user: User;
}

export const ProfileCard = ({ user }: Props) => {
 
	const navigate = useNavigate();
	
	return (
		  <>
         <Header text={ user?.name || '' } tweets={'1.238 tweets'} /> 

        {/* banner */}
        <img src={ banner } alt="banner-sn" className="w-full h-52 object-cover" />

      
        {/* profile img */}
        <div className="absolute top-56 right left-30 ml-4">
          <img src={ user?.img ? user.img : userImage } alt="profile-img" className="h-32 rounded-full" />
        </div>

        <div className='p-5 flex justify-end items-center'>
          <button 
            className='p-3 pr-6 pl-6 border-2 border-sky-500 rounded-full text-white hover:text-sky-500 cursor-pointer '
            onClick={ () => navigate('/options') }
          >
            <Icon name={ faUserCircle } size='lg' className='text-sky-500' /> Edit Profile
          </button>
        </div>

        <div className="border-b border-b-slate-700 h-auto pl-5 flex flex-col">
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
		  
		  </>
 
	)	
}
