import { Icon } from './Icon';
import { NavIconLink } from './NavIconLink';

interface Props {
  children: JSX.Element | JSX.Element[];  

}

// TODO:
export const NavIcon = ({ children }: Props) => {
  return (
   	<div className="text-4xl m-4 p-2 text-white flex flex-row align-middle hover:cursor-pointer hover:bg-slate-700 hover:rounded-full">
       { children }
		</div>
  );
};




NavIcon.Icon = Icon;
NavIcon.Title = NavIconLink;


