import { createContext } from 'react';
import { Icon } from './Icon';
import { NavIconLink } from './NavIconLink';
import { Icons } from '../../interfaces/interfaces';

interface Props {
  children?: JSX.Element | JSX.Element[];
  icon: Icons;
  hover?: string;
  cursor?: string;
  onClick?: () => void;
}


export const NavIconContext = createContext({} as Props);
const { Provider } = NavIconContext;


export const NavIcon = ({ children, hover, cursor, icon, onClick }: Props) => {
  return (
   	
    <Provider value={{
      icon
    }}>
      <div 
        className={`text-4xl m-4 xl:p-4 sm:p-2.5 text-white flex flex-row items-center hover:${ cursor } hover:${ hover } hover:rounded-full`}
        onClick={ onClick }
      >
        { children }
      </div>
    </Provider> 
  );
};
// bg-slate-700

NavIcon.Icon = Icon;
NavIcon.Title = NavIconLink;


