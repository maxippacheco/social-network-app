import { HomePage } from '../pages/HomePage';
import { ProfilePage } from '../pages/ProfilePage';
import { ChatPage } from '../pages/ChatPage';
import { AuthRouter } from './AuthRouter';

type JSXElement = () => JSX.Element;

export interface Route {
	to: string;
	path: string;
	Component: JSXElement; //IF want to add lazy loading LazyExoticComponent<JSXComponent>
	name: string;
	restriction: 'public' | 'private';
}


export const routes: Route[] = [
	{
		to: '/',
		path: '',
		Component: HomePage,
		name: 'Home-Page',
		restriction: 'private'
	},
	{
		to: '/auth/*',
		path: 'auth/*',
		Component: AuthRouter,
		name: 'Login-Page',
		restriction: 'public'

	},
	{
		to: '/profile',
		path: 'profile',
		Component: ProfilePage,
		name: 'Profile-Page',
		restriction: 'private'

	},
	{
		to: '/chat',
		path: 'chat',
		Component: ChatPage,
		name: 'Chat-Page',
		restriction: 'private'

	},
]