import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { NavIconContext } from './NavIcon';


export const Icon = () => {

  const { icon } = useContext( NavIconContext );

  return <FontAwesomeIcon icon={ icon.name } size={ icon.size } />
}