import { User } from '../interfaces/interfaces';



// TODO: Revise 
export const getOnlineUsers = (onlineUsers: User[]) => ({
	type: 'LOAD_ONLINE_USERS',
	payload: onlineUsers
})