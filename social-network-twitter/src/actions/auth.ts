import { fetchWithoutToken, fetchWithToken } from '../helpers/fetch';
import { RegisterResponse, LoginResponse, LoginWithGoogleResponse, GeneralAuthResponse, UpdateUser } from '../interfaces/interfaces';
import { AppDispatch } from '../store/store';
// TODO: FIX
import Swal from 'sweetalert2/dist/sweetalert2.all.js';

interface RegisterData{
	username: string;
	name: string;
	email: string;
	password: string;
}

interface LoginData{
	email: string;
	password1: string;
	password2: string;
}

export const handleRegister = ({ username, name, email, password }: RegisterData) => {
	return async( dispatch: AppDispatch ) => {

		try {
			const data = { name, username: username.toLowerCase(), email, password }
			const { user, ok }: RegisterResponse = await fetchWithoutToken({ endpoint: 'auth/register', method: 'POST', data });
			
			dispatch({
				type: 'REGISTER',
				payload: {
					user,
				}
			});

			if (ok) {
				// TODO: login
			}


		} catch (error) {
			console.log(error);
			
			//TODO: handle error
	
		}

	}
}

// TODO: VERIFY TOKEN IN LOCALSTORAGE PLEASEEEE!!


export const handleLogin = ( { email, password1, password2 }: LoginData ) => {
	return async( dispatch: AppDispatch) => {

		const data = { email, password1, password2 };

		try {
			
			const { token , ok, userDB }: LoginResponse = await fetchWithoutToken({ endpoint: 'auth/login', method: 'POST', data });

			dispatch({
				type: 'LOGIN',
				payload: {
					user: userDB,
					token,
				}
			});

			if ( ok ) {
				localStorage.setItem('token', token);	
			}

		} catch (error) {
			console.log(error);
			
			// TODO: handle error

		}


	}

}

export const handleGoogleLogin = ( id_token: string ) => {

	return async( dispatch: AppDispatch ) => {

		try {
			
			const { ok, user, token }: LoginWithGoogleResponse = await fetchWithoutToken({ endpoint: 'auth/login/google', data: {id_token} ,method: 'POST' });

			if( ok ){
				dispatch({
					type: 'GOOGLE_LOGIN',
					payload: {
						user,
						token,
					}
				});

				localStorage.setItem('token', token);	
			}

		} catch (error) {
			console.log(error);
		}

	}


}

export const handleRenewToken = () => {
	return async( dispatch: AppDispatch ) => {
		
		const token = localStorage.getItem('token');

		if( !token ) return;
		
		try {
			
			const { ok, user, token }: GeneralAuthResponse = await fetchWithToken({ endpoint: 'auth/renew', data: {} ,method: 'PUT' });
		
			if( ok ){
					
				dispatch({
					type: 'RENEW_TOKEN',
					payload: {
						user,
						token,
					}
				});

				localStorage.setItem('token', token);	

			}

		} catch (error) {
			console.log(error);
		}


	}
}

export const handleFollowUser = ( id: string ) => {
	return async( dispatch: AppDispatch ) => {

		try {
			const { ok, user_inSession } = await fetchWithToken({ data: {}, endpoint: `follow/${id}`, method: 'POST' });

			const user = user_inSession;
			
			if ( ok ) {
				dispatch({
					type: 'FOLLOW_USER',
					payload: {
						user
					}
				});
				
			}
		} catch (error) {
			console.log(error);
		}
	}
}


export const handleUpdateUser = ( id: string, {email, name, password}: UpdateUser ) => {
	return async( dispatch: AppDispatch ) => {


		try {
			const { ok, user }:GeneralAuthResponse = await fetchWithToken({ data: { email, name, password }, endpoint: `auth/user/${ id }`, method: 'PUT' });

				

			if ( ok ) {
				dispatch({
					type: 'UPDATE_USER',
					payload: {
						user
					}
				});
				
				Swal.fire({
					title: 'Success',
					text: 'Your profile has been updated',
					icon: 'success',
					confirmButtonText: 'Ok'
				});

			}

			console.log(ok);
			
			
		} catch (error) {
			console.log(error);
			
		}
	}
}



export const handleLogout = () => ({
	type: 'LOGOUT'
})