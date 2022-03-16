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
		titlePath: '/',
		titleText: "Home",
		size: "xs",
		cursor: "cursor-pointer",
		hover: "bg-slate-700"
	},
	{
		name: faHashtag,
		titlePath: '/',
		titleText: "Explore",
		size: "xs",
		cursor: "cursor-pointer",
		hover: "bg-slate-700"
	},
	{
		name: faBell,
		titlePath: '/',
		titleText: "Notifications",
		size: "xs",
		cursor: "cursor-pointer",
		hover: "bg-slate-700"
	},
	{
		name: faEnvelope,
		titlePath: '/chat',
		titleText: "Messages",
		size: "xs",
		cursor: "cursor-pointer",
		hover: "bg-slate-700"
	},
	{
		name: faBookmark,
		titlePath: '/',
		titleText: "Bookmarks",
		size: "xs",
		cursor: "cursor-pointer",
		hover: "bg-slate-700"
	},
	{
		name: faList,
		titlePath: '/',
		titleText: "More options",
		size: "xs",
		cursor: "cursor-pointer",
		hover: "bg-slate-700"
	},
]
