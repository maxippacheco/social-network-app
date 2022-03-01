import { faList, faBookmark, faEnvelope, faBell, faHashtag, faHome } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition, SizeProp } from '@fortawesome/fontawesome-svg-core';


export interface Icons {
	name: IconDefinition;
	titlePath: string;
	titleText: string;
	size?: SizeProp;
	cursor?: string;
	hover: string;
}

export const icons: Icons[] = [
	{
		name: faHome,		
		titlePath: '/login',
		titleText: "Home",
		size: "xs",
		cursor: "cursor-pointer",
		hover: "bg-slate-700"
	},
	{
		name: faHashtag,
		titlePath: '/login',
		titleText: "Explore",
		size: "xs",
		cursor: "cursor-pointer",
		hover: "bg-slate-700"
	},
	{
		name: faBell,
		titlePath: '/login',
		titleText: "Notifications",
		size: "xs",
		cursor: "cursor-pointer",
		hover: "bg-slate-700"
	},
	{
		name: faEnvelope,
		titlePath: '/login',
		titleText: "Messages",
		size: "xs",
		cursor: "cursor-pointer",
		hover: "bg-slate-700"
	},
	{
		name: faBookmark,
		titlePath: '/login',
		titleText: "Bookmarks",
		size: "xs",
		cursor: "cursor-pointer",
		hover: "bg-slate-700"
	},
	{
		name: faList,
		titlePath: '/login',
		titleText: "More options",
		size: "xs",
		cursor: "cursor-pointer",
		hover: "bg-slate-700"
	},
]