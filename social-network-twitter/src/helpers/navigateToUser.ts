import { User } from '../interfaces/interfaces';
import { NavigateFunction } from 'react-router-dom';

	// NAVIGATE TO THE USER PROFILE
export const navigateToUser = ( user: User, username: string, navigate: NavigateFunction ) => { 
	
	if( user?.username === username){
		navigate(`/profile/me`) 
	}else{
		navigate(`/profile/${ username }`) 
	}
			
}