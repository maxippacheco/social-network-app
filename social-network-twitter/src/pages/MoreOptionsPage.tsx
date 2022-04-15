import { MainLayout } from '../layout/MainLayout';
import { useDispatch } from 'react-redux';
import { handleLogout } from '../actions/auth';

export const MoreOptionsPage = () => {
  
	const dispatch = useDispatch();

	const logout = () => {
		dispatch( handleLogout() );

		localStorage.removeItem( 'token' );
	}


	return (
		<MainLayout>
			<div className='mt-5'>
				<button className='ml-5 w-36 bg-red-500 p-3 rounded-full text-white' onClick={ logout }>Logout</button>
			</div>
	 	</MainLayout>
  	)
}
