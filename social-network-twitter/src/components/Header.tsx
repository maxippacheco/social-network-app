import { NavIcon } from './NavIcon/NavIcon';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export const Header = ({ text, tweets }: { text: string; tweets?: string; }) => {
 
	const navigate = useNavigate();
	
	return (
      <header className="w-full h-12 flex items-center mt-2 mb-2">
			{/* TODO: Scroll to especific post you saw */}
	       <NavIcon.Icon name={ faArrowLeft } size="lg" className="text-white m-7 hover:cursor-pointer" onClick={ () => {navigate('/') } } />
          
			<div className="flex flex-col">
				<h4 className="text-white ml-2 text-lg">{ text }</h4>
				<span className="text-gray-500">{ tweets }</span>
			</div>
			

      </header>

 	)
}
