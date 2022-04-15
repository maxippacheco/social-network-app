
import { useNavigate } from 'react-router-dom';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { NavIcon } from '../NavIcon/NavIcon';
import { icons } from '../NavIcon/icons';
import userImage from '../../assets/userImage.png';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export const Navbar = () => {
  
  const navigate = useNavigate();
  const { user } =  useSelector( ( state: RootState) => state.auth );

  const logo = { name: faGithub, titlePath: '', hover: '', titleText: '' };  	
	
  const wrapper = {
		navbar__container: `basis-1/2 border-r border-r-slate-700 flex justify-end`,
    navbar__nav: `w-1/2 h-full`,
    navbar__nav_profile_container: `text-xl p-4 w-full m-4 mb-0 text-white flex flex-row align-middle hover:cursor-pointer hover:bg-slate-700 hover:rounded-full`,
    navbar__nav_profile_row: `flex flex-col ml-3`,
    navbar__nav_profile_options: `w-full flex justify-end text-bold text-3xl`,

    post__avatar_image: `w-12 h-14 m-2`,
	}

  if( !user ) {
    return <h1>User doesnot exist</h1>
  }
  
	
	return (
      <section className={ wrapper.navbar__container }>

        <nav className={ wrapper.navbar__nav }>

          <NavIcon icon={ logo }>
            <NavIcon.Icon name={ logo.name } size="1x" />
          </NavIcon>

          {
            icons.map( ( icon, index ) => (
              <NavIcon 
                hover={ icon.hover } 
                cursor={ icon.cursor } 
                icon={ icon } 
                key={ index }
                onClick={ () => navigate(icon.titlePath)}

              >
                <NavIcon.Icon name={icon.name} size={ "xs" } />
                <NavIcon.Title />
              </NavIcon>
            ))
          }

          <div className="h-2/5 w-full flex items-end">
            <div className={ wrapper.navbar__nav_profile_container } onClick={ () => navigate('/profile/me') }>
              <img src={ userImage } className={ `${ wrapper.post__avatar_image } m-0` } />            
              
              <div className={ wrapper.navbar__nav_profile_row }>
                <span className="text-lg">{ user.name }</span>
                <span className="text-base text-gray-500">@{ user.username }</span>
              </div>

              <div className={ wrapper.navbar__nav_profile_options }>
                ...
              </div>

            </div>
          </div>
        </nav>

      </section>

  )
}
