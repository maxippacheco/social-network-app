import { CustomRouteProps } from './PublicRoute';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children, isAuthenticated}: CustomRouteProps) => {
   return ( isAuthenticated  ) ? children : <Navigate to="/auth/login" />;
}
