import { User } from '../interfaces/interfaces';



// TODO: Revise 
export const getOnlineUsers = (onlineUsers: User[]) => ({
	type: 'LOAD_ONLINE_USERS',
	payload: onlineUsers
});


export const handleActiveChat = (id: string) => ({
	type: 'ACTIVE_CHAT',
	payload: id
})
