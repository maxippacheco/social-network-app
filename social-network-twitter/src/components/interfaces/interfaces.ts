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