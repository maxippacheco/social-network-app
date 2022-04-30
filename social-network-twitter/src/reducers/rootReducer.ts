import { combineReducers } from "redux";
import { authReducer } from './authReducer';
import { postReducer } from './postReducer';
import { socketReducer } from "./socketReducer";


export const rootReducer = combineReducers({
	auth: authReducer,
	post: postReducer,
	socket: socketReducer
});