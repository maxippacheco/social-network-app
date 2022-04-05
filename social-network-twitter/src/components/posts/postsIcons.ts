import { faDownload, faRetweet, faComment, faHeart } from '@fortawesome/free-solid-svg-icons';
import { PostIcons } from '../../interfaces/interfaces';

export const postIcon: PostIcons[] = [
	{
		name: faHeart,
		size: 'lg',
		className: 'hover:text-red-500 hover:cursor-pointer',		
		activeColor: 'text-red-500',
		isActiveColor: false
	},
	{
		name: faComment,
		size: 'lg',
		className: 'text-slate-700 hover:text-sky-500 hover:cursor-pointer',	
		activeColor: 'text-sky-500',
		isActiveColor: false
	},
	{
		name: faRetweet,
		size: 'lg',
		className: 'text-slate-700 hover:text-green-500 hover:cursor-pointer',		
		activeColor: 'text-green-500',
		isActiveColor: false
	},
	{
		name: faDownload,
		size: 'lg',
		className: 'text-slate-700 hover:text-sky-500 hover:cursor-pointer',	
		activeColor: 'text-sky-500',
		isActiveColor: false
	},

]