import React from 'react'
import { Navbar } from '../components/navbar/Navbar';
import { Search } from '../components/search/Search';

interface Props{
	children: JSX.Element;
}

export const MainLayout = ({ children }: Props ) => {
  	return (
		<>
			<Navbar />
			
			<section className="basis-1/2  border-r border-r-slate-700 overflow-auto scrollbar-hide">
				{ children }
			</section>

			<Search />
		</>
  	)
}
