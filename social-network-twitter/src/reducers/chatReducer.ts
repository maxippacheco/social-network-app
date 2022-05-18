import { User, Message } from '../interfaces/interfaces';

interface ChatState{
	// TODO:
	messages: Message[];
	onlineUsers: User[] | null;
	activeChat: null | string;
	uid: null | string;
}

const ChatInitialState = {
	messages: [],
	onlineUsers: null,
	activeChat: null,
	uid: null
}

type ChatAction = 
	| { type: 'NEW_MESSAGE', payload:{ from: string, to: string } }
	| { type: 'LOAD_ONLINE_USERS', payload: User[] }
	| { type: 'ACTIVE_CHAT', payload: string }
	| { type: 'SET_UID', payload: string }

export const chatReducer = (state: ChatState = ChatInitialState, action: ChatAction) => {

	switch (action.type) {

		case 'LOAD_ONLINE_USERS':
			return {
				...state,
				onlineUsers: action.payload
			}
		
		case 'ACTIVE_CHAT':
			return {
				...state,
				activeChat: action.payload
			}

		case 'NEW_MESSAGE':
			if( state.activeChat === action.payload.from || state.activeChat === action.payload.to ){
				return{
					...state,
					mensajes: [ ...state.messages, action.payload ]
				}
			}else{
				return state;
			}


		default:
			return state;
	}

}