import { combineReducers } from "redux";
import { authReducer } from './authReducer';
import { postReducer } from './postReducer';
import { socketReducer } from "./socketReducer";
import { chatReducer } from './chatReducer';


export const rootReducer = combineReducers({
	auth: authReducer,
	post: postReducer,
	socket: socketReducer,
	chat: chatReducer
});