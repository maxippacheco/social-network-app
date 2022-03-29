import { IconDefinition, SizeProp } from '@fortawesome/fontawesome-svg-core';

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

export interface User {
	name:      string;
	username:  string;
	email:     string;
	online:    boolean;
	followers: any[];
	following: any[];
	id:        string;
}
