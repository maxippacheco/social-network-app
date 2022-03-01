import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { NavIconContext } from './NavIcon';

interface NavIconLinkProps {
	path?: string; 
	text?: string; 
}

export const NavIconLink = ({ path, text }: NavIconLinkProps) => {
	
	const { icon } = useContext( NavIconContext );
	
	return <Link to={ path ? path : icon.titlePath } className="text-xl ml-2">{ text ? text : icon.titleText }</Link>
}