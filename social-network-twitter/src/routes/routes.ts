import { HomePage } from '../pages/HomePage';
import { ProfilePage } from '../pages/ProfilePage';
import { ChatPage } from '../pages/ChatPage';
import { AuthRouter } from './AuthRouter';
import { UsersProfilePage } from '../pages/UsersProfilePage';
import { PostCommentPage } from '../pages/PostCommentPage';

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
		to: '/profile/me',
		path: 'profile/me',
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
	{
		to: '/profile/:username',
		path: 'profile/:username',
		Component: UsersProfilePage,
		name: 'Liked-Page',
		restriction: 'private'
	},
	{
		to: '/:postId/comments',
		path: '/:postId/comments',
		Component: PostCommentPage,
		name: 'Post-Comments-Page',
		restriction: 'private'
	},
]