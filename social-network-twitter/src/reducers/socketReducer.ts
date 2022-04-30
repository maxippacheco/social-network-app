import { io } from "socket.io-client";


interface SocketState{
	socket: null | any;
	// online: boolean;
}

const SocketInitialState = {
	socket: null,
	// online: false,
}


type SocketAction = 
	| { type: 'CONNECT_SOCKET', payload: any }
	| { type: 'DISCONNECT_SOCKET' }

export const socketReducer = ( state: SocketState = SocketInitialState, action: SocketAction ) => { 

	switch (action.type) {
		case 'CONNECT_SOCKET':
			return {
				...state,
				socket: action.payload,
				// online: true,
			}
		
		case 'DISCONNECT_SOCKET':
			return {
				...state,
				socket: null,
				// online: false,
			}

		default: 
			return state;
	}
}