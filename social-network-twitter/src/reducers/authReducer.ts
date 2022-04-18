import { User } from "../interfaces/interfaces"

export interface AuthState {
	user: User | null,
	token: string | null,
	checking: boolean,
	// TODO: separate error in other reducer
	error: string | null,
	isLoggedIn: boolean,
	//TODO: admin role 
}

const AuthInitialState: AuthState = {
	user: null,
	token: null,
	checking: false,
	error: null,
	isLoggedIn: false,
}

export type AuthAction = 
	| { type: 'REGISTER', payload: { user: User }}
	| { type: 'LOGIN', payload: { token: string, user: User }}
	| { type: 'GOOGLE_LOGIN', payload: { token: string, user: User }}
	| { type: 'RENEW_TOKEN', payload: { token: string, user: User }}
	| { type: 'FOLLOW_USER', payload: { user: User } }
	| { type: 'LOGOUT' }
	| { type: 'UPDATE_USER', payload: { user: User } }
	| { type: 'UPDATE_USER_IMG', payload: { user: User } }


export const authReducer = ( state: AuthState = AuthInitialState, action: AuthAction ): AuthState => {

	switch (action.type) {

		case 'REGISTER':
			return {
				...state,
				user: action.payload.user,
			}

		case 'RENEW_TOKEN':
		case 'GOOGLE_LOGIN':
		case 'LOGIN':
			return {
				...state,
				user: action.payload.user,
				token: action.payload.token,
				isLoggedIn: true,
				checking: false
			}
		
		case 'UPDATE_USER_IMG':
		case 'UPDATE_USER':
		case 'FOLLOW_USER':
			return {
				...state,
				user: action.payload.user,
			}
			
		
		case 'LOGOUT':
			return {
				...state,
				user: null,
				token: null,
				isLoggedIn: false,
				checking: false
			}

		default:
			return state;
	}

}
