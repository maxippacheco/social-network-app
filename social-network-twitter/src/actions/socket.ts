import { io } from "socket.io-client";
import { AppDispatch } from "../store/store"


export const handleConnectSocket = () => {

	return ( dispatch: AppDispatch ) => {
		const token = localStorage.getItem("token");

		if (!token) return;

		const socket = io(`https://twitter-clone-mp.herokuapp.com/api`, {
			query: {
				token
			},
			transports: ["websocket"]

		});

		dispatch({
			type: 'CONNECT_SOCKET',
			payload: {
				socket
			},
		});
	};
}

export const handleDisconnectSocket = () => ({
	type: 'DISCONNECT_SOCKET'
})