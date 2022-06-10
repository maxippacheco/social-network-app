import { MainLayout } from '../layout/MainLayout';
import { useDispatch, useSelector } from 'react-redux';
import { handleLogout, handleUpdateUser } from '../actions/auth';
import { CustomInput } from '../components/input/CustomInput';
import { Form, Formik } from 'formik';
import { auth_wrapper } from '../styles/auth-styles';
import UserDefault from '../assets/userImage.png';
import { RootState } from '../store/store';
import * as Yup from 'yup';
import { useRef } from 'react';
import { PreviewImage } from '../components/previewImage/PreviewImage';
import { fetchWithToken } from '../helpers/fetch';
import { handleDisconnectSocket } from '../actions/socket';

export const MoreOptionsPage = () => {
  
	const dispatch = useDispatch();
	const { user } = useSelector((state: RootState) => state.auth);

	const cloudURL = import.meta.env.VITE_CLOUDINARY_URL;
	if( typeof cloudURL !== 'string' ) throw new Error('Cloudinary URL is not defined');


	const fileRef = useRef('');

	const logout = () => {
		dispatch( handleLogout() );
		dispatch( handleDisconnectSocket() );

		localStorage.removeItem( 'token' );
	}


	return (
		<MainLayout>
			<div className='mt-5 ml-5'>
				<h1 className='mb-5 text-5xl text-white font-bold'>More options</h1>
				<h2 className='text-white text-3xl'>Edit user</h2>
				<small className='text-gray-600'>It can take a few seconds...</small>

				<Formik
					initialValues={{
						file: null,
						email: `${ user?.email }`,
						name: `${ user?.name }`,
						password: '',
						passwordConfirm: ''
					}}
					onSubmit={ async( {email, password, name, file } ) => {

	 
						if( file ){

							// TODO: FIX
							if( user?.img ){

								const image_deleted = await fetchWithToken({ data: {}, endpoint: `uploads/user/${user?.id}`, method: 'DELETE' });
							
								console.log( image_deleted );
								

							}
						
							const formData = new FormData();
							formData.append('file', file);
							formData.append('upload_preset', 'react-social-network');
							
							fileRef.current = file;
							
							try {
								const resp = await fetch(cloudURL, {
									method: 'POST',
									body: formData
								}).then( resp => resp.json() )
								
								
								dispatch( handleUpdateUser( user?.id || '', { email, name, password, img: resp.secure_url	 } ))							
								
							} catch (error) {
								console.log(error);
								
							}
							
						}


							
						
						
					}}
					validationSchema={ Yup.object().shape({
						'file': Yup.mixed().required('Required'),
						'email': Yup.string().email('Invalid email').required('Required'),
						'name': Yup.string().required('Required'),
						'password': Yup.string().required('Required'),
						'passwordConfirm': Yup.string().required('Required')
					})}
				>
					{
						({ setFieldValue, values }) => (
							<Form className='w-full flex flex-col relative'>
								
								{ values.file && <PreviewImage file={ values.file } /> }

								<label
									className={ `${ auth_wrapper.auth__form_label} mt-0 mb-3` }
								>Change Image:</label>

								<input 
									type="file" 
									name="file"
									className='opacity-0 h-36 w-36 rounded-full absolute mt-20'
									onChange={ (e: React.ChangeEvent<HTMLInputElement> ) => {

										if(!e.currentTarget.files) return;

										setFieldValue('file', e.currentTarget.files[0]);
									}}
								/>

								<img 
									src={ (user?.img) ? user.img : UserDefault } 
									alt="user-image" 
									className={`w-36 h-36 rounded-full`}	
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
							
