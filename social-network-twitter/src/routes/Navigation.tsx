import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { routes } from './routes';
import { PublicRoute } from './PublicRoute';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { useEffect } from 'react';
import { handleRenewToken } from '../actions/auth';

export const Navigation = () => {

	const dispatch = useDispatch();

	const wrapper = {
		container: `w-screen h-screen bg-slate-900 flex flex-row`,

	}

	useEffect(() => {
		dispatch( handleRenewToken() );
		
	}, []);
	

	const { isLoggedIn } = useSelector((state: RootState) => state.auth);
	


	return (
    	<div className={wrapper.container}>
			<BrowserRouter>
				
				<Routes>
					{
						routes.map( ({ path, Component, to, restriction}) => (
							
							restriction === 'private' 
								? 
								<Route path={ path } element={ 
									<PrivateRoute isAuthenticated={ isLoggedIn }>
										<Component /> 
									</PrivateRoute>
								} key={ to } />
								: 
								<Route path={ path } element={ 
									<PublicRoute isAuthenticated={ isLoggedIn }>
										<Component /> 
									</PublicRoute>
								} key={ to } />
						))
					}

					<Route path='/*' element={ <Navigate to={ routes[0].to } replace /> } />
				</Routes>
				

			</BrowserRouter>

	 
		</div>
  	)
}
