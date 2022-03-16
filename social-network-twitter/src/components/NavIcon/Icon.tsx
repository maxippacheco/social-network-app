import { useContext } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, SizeProp } from '@fortawesome/fontawesome-svg-core';

import { NavIconContext } from './NavIcon';

interface Props {
  name: IconDefinition;
  size: SizeProp;
  className?: string;
  onClick?: () => void;
}

export const Icon = ({ name, size, className, onClick }: Props) => {

  const { icon } = useContext( NavIconContext );

  return <FontAwesomeIcon icon={ name ? name : icon.name } size={ size ? size : icon.size } className={ className } onClick={ onClick } />
}