import { auth_wrapper } from '../../styles/auth-styles';
import { ErrorMessage, useField } from 'formik';

interface CustomInputProps {
	label: string;
	type: 'text'|'email'|'password';
	name: string;
	[key: string]: any;	
}

export const CustomInput = ({ label, ...props}: CustomInputProps ) => {

	const [ field ] = useField( props );

  	return (
		<>
   		<label className={ auth_wrapper.auth__form_label } htmlFor={ props.name || props.id /* id = key */ }>{ label }</label>
      	<input className={ auth_wrapper.auth__form_input } { ...props } { ...field } />
   		<ErrorMessage name={ props.name } className='w-2/3 text-left text-lg text-red-500' component='span'  />
		</>

				
	)
}
