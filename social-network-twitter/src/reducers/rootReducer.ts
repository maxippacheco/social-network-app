import { combineReducers } from "redux";
import { authReducer } from './authReducer';
import { postReducer } from './postReducer';
import { socketReducer } from "./socketReducer";
import { chatReducer } from './chatReducer';
import { bookmarkReducer } from './bookmarkReducer';


export const rootReducer = combineReducers({
	auth: authReducer,
	post: postReducer,
	socket: socketReducer,
	chat: chatReducer,
	bookmarks: bookmarkReducer
});