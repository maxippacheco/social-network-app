import { Link } from 'react-router-dom';

interface NavIconLinkProps {
	path: string; 
	text: string; 
}

export const NavIconLink = ({ path, text }: NavIconLinkProps) => {
  return <Link to={ path } className="text-xl ml-2">{ text }</Link>
}