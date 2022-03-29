import { Navigate } from 'react-router-dom';

export interface CustomRouteProps {
	children: JSX.Element;
	isAuthenticated: boolean;
}

export const PublicRoute = ({ children, isAuthenticated }: CustomRouteProps) => {
	return isAuthenticated ? <Navigate to="/" /> : children;
}
