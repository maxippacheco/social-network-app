import { fetchWithoutToken, fetchWithToken } from '../helpers/fetch';
import { RegisterResponse, LoginResponse, LoginWithGoogleResponse } from '../interfaces/interfaces';
import { AppDispatch } from '../store/store';

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