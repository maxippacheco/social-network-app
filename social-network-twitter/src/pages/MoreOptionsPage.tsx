import { MainLayout } from '../layout/MainLayout';
import { useDispatch, useSelector } from 'react-redux';
import { handleLogout, handleUpdateUser } from '../actions/auth';
import { CustomInput } from '../components/input/CustomInput';
import { Form, Formik } from 'formik';
import { auth_wrapper } from '../styles/auth-styles';
import UserDefault from '../assets/userImage.png';
import { RootState } from '../store/store';

export const MoreOptionsPage = () => {
  
	const dispatch = useDispatch();
	const { user } = useSelector((state: RootState) => state.auth);

	const logout = () => {
		dispatch( handleLogout() );

		localStorage.removeItem( 'token' );
	}


	return (
		<MainLayout>
			<div className='mt-5 ml-5'>
				<h1 className='mb-5 text-5xl text-white font-bold'>More options</h1>
				<h2 className='text-white mb-4 text-3xl'>Edit user</h2>

				<Formik
					initialValues={{
						img: null,
						name: '',
						email: '',
						password: '',
						passwordConfirm: ''
					}}
					onSubmit={ async( {email, password, name } ) => {

						if( !email ){
							email = user?.email || '';
						}else if( !name ){
							name = user?.name || '';
						}


						dispatch( handleUpdateUser( user?.id || '', { email, name, password } ) )						
					
						
					}}
				>
					{
						() => (
							<Form className='w-full flex flex-col'>
								
								<CustomInput 
									type='file'
									label='Change Image:' 
									name='img'
									inputClassName='opacity-0 h-36 w-32 rounded-full absolute'
									labelClassName={ `${ auth_wrapper.auth__form_label} mt-0 mb-3` }
								/>

								<img 
									src={ (user?.img) ? user.img : UserDefault } 
									alt="user-image" 
									className={`${ user?.img ? 'w-36 h-36' : 'w-32 h-36' } rounded-full`}	
								/>

								
								<CustomInput 
									type='text' 
									label='Name:' 
									name='name' 
									inputClassName={ `${ auth_wrapper.auth__form_input } p-3` }
									labelClassName={ auth_wrapper.auth__form_label }
								/>
								
								<CustomInput 
									type='email'
									label='Email:' 
									name='email' 
									inputClassName={ `${ auth_wrapper.auth__form_input } p-3` }
									labelClassName={ auth_wrapper.auth__form_label }

								/>
										
								<CustomInput 
									type='password' 
									label='Change Password:' 
									name='password' 
									inputClassName={ `${ auth_wrapper.auth__form_input } p-3` }
									labelClassName={ auth_wrapper.auth__form_label }

								/>
								
								<CustomInput 
									type='password' 
									label='Confirm Password:' 
									name='passwordConfirm' 
									inputClassName={ `${ auth_wrapper.auth__form_input } p-3 mb-6` }
									labelClassName={ auth_wrapper.auth__form_label }

								/>

								<button type='submit' className='w-36 bg-sky-500 p-3 rounded-full text-white mb-4'>Change User</button>
							</Form>
						)
					}
				</Formik>

					<h4  className='mt-3 mb-6 ml-0 text-white text-3xl'>Other option:</h4>

				<button className='w-36 bg-red-500 p-3 rounded-full text-white mb-4' onClick={ logout }>Logout</button>
			</div>
	 	</MainLayout>
  	)
}
