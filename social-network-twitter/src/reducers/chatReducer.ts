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
	| { type: 'NEW_MESSAGE', payload: Message }
	| { type: 'LOAD_ONLINE_USERS', payload: User[] }
	| { type: 'ACTIVE_CHAT', payload: string }
	| { type: 'LOAD_MESSAGES', payload: Message[] }
	// TODO: clean state

export const chatReducer = (state: ChatState = ChatInitialState, action: ChatAction): ChatState => {

	switch (action.type) {

		case 'LOAD_ONLINE_USERS':
			return {
				...state,
				onlineUsers: action.payload
			}
		
		case 'ACTIVE_CHAT':
			
   		if( state.activeChat === action.payload ) return state;
			return {
				...state,
				activeChat: action.payload
			}

		case 'NEW_MESSAGE':
			if( state.activeChat === action.payload.from || state.activeChat === action.payload.to ){
				return{
					...state,
					messages: [ ...state.messages, action.payload ]
				}
			}else{
				return state;
			}

		case 'LOAD_MESSAGES':
			return {
				...state,
				messages: [...action.payload]
			}
			

		default:
			return state;
	}

}