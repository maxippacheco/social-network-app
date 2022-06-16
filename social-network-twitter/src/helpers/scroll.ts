import { animateScroll } from 'react-scroll';


// TODO: try to work this shit
export const scrollToBottom = ( id: string ) => {

	animateScroll.scrollToBottom({
		containerId: id,
		duration: 0
	});

}

export const scrollToBottomAnimated = ( id: string ) => {

	animateScroll.scrollToBottom({
		containerId: id,
		duration: 250
	});
	
}
