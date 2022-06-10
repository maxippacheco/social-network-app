import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { routes } from './routes';
import { PublicRoute } from './PublicRoute';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { useEffect } from 'react';
import { handleRenewToken } from '../actions/auth';
import { handleConnectSocket, handleDisconnectSocket } from '../actions/socket';
import { handleCleanPost } from '../actions/post';
import { User } from '../interfaces/interfaces';
import { getOnlineUsers } from '../actions/chat';
import { scrollToBottomAnimated } from '../helpers/scroll';
import { animateScroll } from 'react-scroll';

export const Navigation = () => {

	const dispatch = useDispatch();

	const wrapper = {
		container: `w-screen h-screen bg-slate-900 flex flex-row`,

	}
	
	
	const { isLoggedIn } = useSelector((state: RootState) => state.auth);
	const { socket } = useSelector((state: RootState) => state.socket);
	

	// TODO: put these effects in a separate file
	useEffect(() => {
		dispatch( handleRenewToken() );	
	}, [dispatch]);
	
	useEffect(() => {
		if( isLoggedIn ) {
			dispatch( handleConnectSocket() )
		}
	}, [dispatch, isLoggedIn])
	

	useEffect(() => {
		if( !isLoggedIn ) {
			dispatch( handleDisconnectSocket() );
		}
	  
	}, [dispatch, isLoggedIn])

	useEffect(() => {
		if( !isLoggedIn ){
			dispatch( handleCleanPost() );
		}
	}, [dispatch]);

  useEffect(() => {
		socket?.on('users-online', (onlineUsers: User[]) => {
      
      dispatch(getOnlineUsers(onlineUsers));
      
    })
		
  }, [socket, dispatch]);
	
	useEffect(() => {
		socket?.on('new-message', (message: any) => {

			dispatch({
				type: 'NEW_MESSAGE',
				payload: message
			})
			
			scrollToBottomAnimated('messages');
		})
	}, [socket])

	
	


	return (
    	<div className={wrapper.container} id="main">
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
