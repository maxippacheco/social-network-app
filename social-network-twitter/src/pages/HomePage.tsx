import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWandMagicSparkles, faHome, faBell, faEnvelope, faBookmark, faList, faUser, faCommentDots, faHashtag } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { NavIcon } from "../components/NavIcon/NavIcon"
import { icons } from '../components/NavIcon/icons';


export const HomePage = () => {

  const logo = { name: faGithub, titlePath: '', hover: '', titleText: '' };

  const wrapper = {
    container: `w-screen h-screen bg-slate-900 flex flex-row`,
    navbar__container: `basis-1/3 border-r flex justify-end`,
    navbar__nav: `w-1/2 h-full`,
    navbar__nav_profile_container: `text-xl p-4 w-full m-4 mb-0 text-white flex flex-row align-middle hover:cursor-pointer hover:bg-slate-700 hover:rounded-full`,

    post__container: `basis-1/3  border-r`,
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
    <div className={wrapper.container}>
      
      {/* navbar */}
      <div className={ wrapper.navbar__container }>

        <nav className={ wrapper.navbar__nav }>

          <NavIcon icon={ logo }>
            <NavIcon.Icon />
          </NavIcon>

          {
            icons.map( ( icon, index ) => (
              <NavIcon hover={ icon.hover } cursor={ icon.cursor } icon={ icon } key={ index }>
                <NavIcon.Icon />
                <NavIcon.Title />
              </NavIcon>
            ))
          }

          <div className="h-2/5 w-full flex items-end">
            <div className={ wrapper.navbar__nav_profile_container } >
              <img src="https://www.seekpng.com/png/full/356-3562377_personal-user.png" className={ `${ wrapper.post__avatar_image } m-0` } />            
              
              <div className="flex flex-col ml-3">
                <span className="text-lg">pache</span>
                <span className="text-base text-gray-500">@pachelife</span>
              </div>

              <div className="w-full flex justify-end text-bold text-3xl">
                ...
              </div>

            </div>
          </div>
        </nav>




      </div>
      
      {/* posts */}
      {/* TODO: COMPOUND COMPONENT PATTERN IN ALL OF THESE COMPONENTS */}
      <div className={ wrapper.post__container }>
        {/* TODO: Replace div tags and use instead section, article etc */}
        <div className={ wrapper.post__create_container }>

          <div className={ wrapper.post__create_welcome_container }>

            <h1 className={ wrapper.post__main_title }>Welcome</h1>
            
            <div className={ wrapper.post__create_feature_icon }>
              <FontAwesomeIcon icon={  faWandMagicSparkles } />
            </div>
          
          </div>

          <div className={ wrapper.post__create_avatar_container }>
            <img src="https://www.seekpng.com/png/full/356-3562377_personal-user.png" className={ wrapper.post__avatar_image } />            

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
      
      </div>
      
      {/* searchs & trendings */}
      {/* TODO: */}
      <div className="basis-1/3">2</div>

    </div>
  )
}
