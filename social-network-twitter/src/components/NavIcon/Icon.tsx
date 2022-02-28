import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export const Icon = ({ name }: { name: IconProp }) => {
  return <FontAwesomeIcon icon={ name } />
}