import { IconDefinition, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { AppDispatch } from '../store/store';

export interface Icons {
	name: IconDefinition;
	titlePath: string;
	titleText: string;
	size?: SizeProp;
	cursor?: string;
	hover: string;
}

export interface PostIcons{
	name: IconDefinition;
	size: SizeProp;
	activeColor: string;
	isActiveColor: boolean;
	className: string;
}

// Generated by https://quicktype.io

export interface RegisterResponse {
	ok:   boolean;
	user: User;
}

export interface LoginResponse {
	ok: boolean;
	userDB: User;
	token: string;
}

export interface LoginWithGoogleResponse {
	ok: boolean;
	user: User;
	token: string;
}

export interface User {
	name:      string;
	username:  string;
	email:     string;
	img?:			string;
	online:    boolean;
	followers: any[];
	following: any[];
	id:        string;
}

// Generated by https://quicktype.io

export interface PostResponse {
	ok:      boolean;
	total:   number;
	posts:    Post[];
}

export interface Post {
	text:      string;
	user_id:   User_ID;
	likes:     any[];
	retweet:   any[];
	comments:  any[];
	createdAt: string;
	id:        string;
	_id?: 		string;	   
}

// Generated by https://quicktype.io

export interface Comment {
	comments: CommentElement[];
}

export interface CommentElement {
	_id:       string;
	text:      string;
	post_id:   string;
	user_id:   User_ID;
	createdAt: string;
	__v:       number;
}

interface User_ID{
	email: string;
	name: string;
	username: string;
	img?: string;
	_id: string;

}

export interface GeneralAuthResponse{
	ok: boolean;
	token: string;
	user: User;
}

export interface UpdateUser{
	email: string;
	name: string;
	password: string;
	img?: string;
}



export interface LoadMessagesResponse {
	ok: boolean;
	messages: Message[];
}
	// Generated by https://quicktype.io
// Generated by https://quicktype.io


export interface Message {
	from:      From;
	to:        From;
	message:   string;
	createdAt: string;
	updatedAt: string;
	id:        string;
}

export enum From {
	The6242791F6Da51478E9B2E894 = "6242791f6da51478e9b2e894",
	The625F1Fb0090279937Cbf45B4 = "625f1fb0090279937cbf45b4",
}

// Generated by https://quicktype.io

export interface BookmarkResponse {
	ok:        boolean;
	message:   string;
	bookmarks: Bookmark[];
}

export interface SingleBookmarkResponse {
	ok:        boolean;
	message:   string;
	bookmark: Bookmark;
}

export interface Bookmark {
	folder:    string;
	userId:    string;
	posts:     Post[] | [];
	createdAt: string;
	id:        string;
}
