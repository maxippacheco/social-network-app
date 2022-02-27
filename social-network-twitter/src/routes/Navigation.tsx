import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { routes } from './routes';

export const Navigation = () => {
  return (
	 <BrowserRouter>
	 	<Routes>
			{
				routes.map( ({ path, Component, to}) => (
					<Route path={ path } element={ <Component /> } key={ to } />
				))
			}

			<Route path='/*' element={ <Navigate to={ routes[0].to } replace /> } />
		</Routes>
	 </BrowserRouter>
  )
}
