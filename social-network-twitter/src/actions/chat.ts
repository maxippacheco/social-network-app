import { Message, User, LoadMessagesResponse } from '../interfaces/interfaces';
import { AppDispatch } from '../store/store';
import { fetchWithToken } from '../helpers/fetch';



// TODO: Revise 
export const getOnlineUsers = (onlineUsers: User[]) => ({
	type: 'LOAD_ONLINE_USERS',
	payload: onlineUsers
});


export const handleActiveChat = (id: string) => ({
	type: 'ACTIVE_CHAT',
	payload: id
})


export const getMessages = (userId: string) => {
	return async( dispatch: AppDispatch ) => {

		try {
			// TODO: Revise types
			const { ok, messages }: LoadMessagesResponse = await fetchWithToken({ data: null, endpoint: `messages/${ userId}` , method: 'GET' });
		
			if( ok ){
				
				dispatch({
					type: 'LOAD_MESSAGES',
					payload: messages
				});
			}

			console.log(messages);
			
			
		
		} catch (error) {
			console.log(error);
			
		}






	}
}