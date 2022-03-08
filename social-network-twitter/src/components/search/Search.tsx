import React from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { NavIcon } from '../NavIcon/NavIcon';

export const Search = () => {
	
	const wrapper = {
		trendings__container: `basis-1/2`,
		trendings__search_container: `ml-4 mt-3 flex items-center`,
		trendings__search_icon: `bg-gray-800 p-3 text-gray-600 font-normal pr-0 rounded-tl-lg rounded-bl-lg`,
		trendings__search_input: `p-2.5 w-1/2 bg-gray-800 placeholder:text-gray-600 rounded-tr-lg rounded-br-lg focus:outline-none text-white`

	}
	
	return (
		<>
			<section className={ wrapper.trendings__container }>
				<div className={ wrapper.trendings__search_container }>
					<NavIcon.Icon name={ faSearch } size='lg' className={ wrapper.trendings__search_icon } />
					<input type="text" className={ wrapper.trendings__search_input } placeholder="Search something" />
				</div>
			</section>   
		</>
	)
}
