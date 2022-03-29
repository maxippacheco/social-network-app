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
	| { type: 'register', payload: { user: User }}
	| { type: 'login', payload: { token: string, user: User }}
	| { type: 'logout' }


export const authReducer = ( state: AuthState = AuthInitialState, action: AuthAction ): AuthState => {

	switch (action.type) {

		case 'register':
			return {
				...state,
				user: action.payload.user,
			}

		case 'login':
			return {
				...state,
				user: action.payload.user,
				token: action.payload.token,
				isLoggedIn: true,
				checking: false
			}
		
		default:
			return state;
	}

}
