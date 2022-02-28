import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { Link } from "react-router-dom"
import { NavIcon } from "../components/NavIcon/NavIcon"


export const HomePage = () => {

  // TODO:
  const wrapper = {
    container: `w-screen h-screen bg-slate-900 flex flex-row`,
    navbar__container: `basis-1/3 border-r flex justify-end`,
    navbar__nav: `w-1/2 h-full`,
    

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
      {/* TODO: */}
      <div className={ wrapper.navbar__container }>

        <nav className={ wrapper.navbar__nav }>

          {/* TODO: improve functionallity */}
          <NavIcon>
            <NavIcon.Icon name={ faGithub } />
            <NavIcon.Title path="/login" text="Idk it must be my jewer" />
          </NavIcon>

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
              // cols={30} 
              // rows={10}
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
