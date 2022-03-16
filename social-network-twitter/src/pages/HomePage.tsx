import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import UserImage from '../assets/userImage.png';
import { Navbar } from "../components/navbar/Navbar";
import { Search } from "../components/search/Search";
import { Post } from "../components/posts/Post";

export const HomePage = () => {

  

  const wrapper = {
    container: `w-screen h-screen bg-slate-900 flex flex-row`,

    post__container: `basis-1/2  border-r overflow-auto scrollbar-hide`,
    post__main_title: `m-2 text-lg text-white`,
    post__avatar_image: `w-12 h-14 m-2`,
    
    post__create_container: `w-full h-1/5 border-b`,
    post__create_welcome_container: `flex justify-between w-full`,
    post__create_feature_icon: `m-2 text-lg text-sky-500`,
    post__create_avatar_container: `w-full flex flex-row`,
    post__create_input: `resize-none w-full mr-4 focus:outline-none bg-slate-900 text-white mt-4 placeholder:text-gray-500 text-lg overflow-hidden`,
    post__create_submit_container: `w-full flex justify-between`,
    post__create_submit_button: `mt-2 mr-2 w-2/12 pt-1 pb-1 bg-sky-600 rounded text-base text-white hover:cursor-pointer hover:bg-sky-800`,


  }

  return (
    // container
    // <div className={wrapper.container}>
      <>
        <Navbar />      
        
        <section className={ wrapper.post__container }>
          <div className={ wrapper.post__create_container }>

            <div className={ wrapper.post__create_welcome_container }>

              <h1 className={ wrapper.post__main_title }>Welcome</h1>
              
              <div className={ wrapper.post__create_feature_icon }>
                <FontAwesomeIcon icon={  faWandMagicSparkles } />
              </div>
            
            </div>

            <div className={ wrapper.post__create_avatar_container }>
              <img src={ UserImage } className={ wrapper.post__avatar_image } />            

              <textarea 
                className={ wrapper.post__create_input }
                placeholder="What's happening?"
                maxLength={280}
              ></textarea>
            </div>

            <div className={ wrapper.post__create_submit_container }>
              <div className={ wrapper.post__create_feature_icon }>
                🌎Privacity & settings
              </div>
              <button className={ wrapper.post__create_submit_button }>Tweet</button>
            </div>
          </div>

          {/* TODO: SCROLL */}
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        
        </section>

        <Search />
      
      </>


    // </div>
  )
}
