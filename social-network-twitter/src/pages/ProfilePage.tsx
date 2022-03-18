import { useNavigate } from 'react-router-dom';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { NavIcon } from "../components/NavIcon/NavIcon"
import banner from '../assets/banner.jpg';
import userImage from '../assets/userImage.png';
import { Navbar } from "../components/navbar/Navbar";
import { Search } from "../components/search/Search";


export const ProfilePage = () => {

  const navigate = useNavigate();

  return (
    <>
      {/* TODO: CREATE WRAPPER */}
      <Navbar />
      <div className="flex flex-col w-full basis-1/2 border-r">

        {/* topbar */}
        <header className="w-full h-12 flex items-center mt-2 mb-2">
          <NavIcon.Icon name={ faArrowLeft } size="lg" className="text-white m-7 hover:cursor-pointer" onClick={ () => navigate('/') } />
          
          <div className="flex flex-col">
            <h3 className="text-white ml-2">maxi</h3>
            <span className="text-gray-500">1.238 tweets</span>
          </div>
          

        </header>

        {/* banner */}
        <img src={ banner } alt="banner-sn" className="w-full h-52" />

      
        {/* profile img */}
        <div className="absolute top-56 right left-1/3 ml-4">
          <img src={ userImage } alt="profile-img" className="h-32" />

        </div>

        <div className="border-b h-56 pt-24 pl-5 flex flex-col">
          <span className="text-white text-xl">maxi</span>
          <span className="text-gray-500">@pachelife</span>
          <div className="flex flex-row mt-3">
            <div className="text-white">255 <span className="text-gray-500">following</span></div>
            <div className="text-white ml-3">265 <span className="text-gray-500">followers</span></div>
          </div>
      </div>


      </div>
      <Search />
    </>
  )
}
