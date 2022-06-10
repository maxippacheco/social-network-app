import { animateScroll } from 'react-scroll';


// TODO: try to work this shit
export const scrollToBottom = ( id: string ) => {

	setTimeout(() => {
		animateScroll.scrollToBottom({
			containerId: id,
			duration: 0
		});
	}, 10);

	console.log('called');
	
}

export const scrollToBottomAnimated = ( id: string ) => {

	setTimeout(() => {
		animateScroll.scrollToBottom({
			containerId: id,
			duration: 250
		});
	}, 10);
	
}
