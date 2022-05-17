import { User } from "../interfaces/interfaces";

interface ChatState{
	// TODO:
	messages: any[];
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
	| { type: 'SET_MESSAGES', payload: any[] }
	| { type: 'LOAD_ONLINE_USERS', payload: User[] }
	| { type: 'SET_ACTIVE_CHAT', payload: string }
	| { type: 'SET_UID', payload: string }

export const chatReducer = (state: ChatState = ChatInitialState, action: ChatAction) => {

	switch (action.type) {

		case 'LOAD_ONLINE_USERS':
			return {
				...state,
				onlineUsers: action.payload
			}

		default:
			return state;
	}

}