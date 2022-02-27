import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { ProfilePage } from '../pages/ProfilePage';
import { ChatPage } from '../pages/ChatPage';

type JSXElement = () => JSX.Element;

interface Route {
	to: string;
	path: string;
	Component: JSXElement; //IF want to add lazy loading LazyExoticComponent<JSXComponent>
	name: string;
}


export const routes: Route[] = [
	{
		to: '/',
		path: '',
		Component: HomePage,
		name: 'Home-Page'
	},
	{
		to: '/login',
		path: 'login',
		Component: LoginPage,
		name: 'Login-Page'
	},
	{
		to: '/profile',
		path: 'profile',
		Component: ProfilePage,
		name: 'Profile-Page'
	},
	{
		to: '/chat',
		path: 'chat',
		Component: ChatPage,
		name: 'Chat-Page'
	},
]