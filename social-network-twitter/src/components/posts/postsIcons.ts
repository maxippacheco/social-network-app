import { faDownload, faRetweet, faComment, faHeart } from '@fortawesome/free-solid-svg-icons';
import { PostIcons } from '../../interfaces/interfaces';
import { like, comment, retweet, save } from '../../actions/post';


export const postIcon: PostIcons[] = [
	{
		name: faHeart,
		size: 'lg',
		className: 'text-slate-700 hover:text-red-500 hover:cursor-pointer',		
		activeColor: 'text-red-500',
		function: like
	},
	{
		name: faComment,
		size: 'lg',
		className: 'text-slate-700 hover:text-sky-500 hover:cursor-pointer',	
		activeColor: 'text-sky-500',
		function: comment
	},
	{
		name: faRetweet,
		size: 'lg',
		className: 'text-slate-700 hover:text-green-500 hover:cursor-pointer',		
		activeColor: 'text-green-500',
		function: retweet

	},
	{
		name: faDownload,
		size: 'lg',
		className: 'text-slate-700 hover:text-sky-500 hover:cursor-pointer',	
		activeColor: 'text-sky-500',
		function: save
	},

]