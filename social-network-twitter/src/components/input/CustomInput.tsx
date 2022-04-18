import { ErrorMessage, useField } from 'formik';

interface CustomInputProps {
	label?: string;
	type: 'text'|'email'|'password'| 'file';
	name: string;
	[key: string]: any;	
	inputClassName?: string;
	labelClassName?: string;
}

export const CustomInput = ({ label, inputClassName, labelClassName, ...props}: CustomInputProps ) => {

	const [ field ] = useField( props );

  	return (
		<>
   		<label className={ labelClassName  } htmlFor={ props.name || props.id /* id = key */ }>{ label }</label>
      	<input className={ inputClassName } { ...props } { ...field } />
   		<ErrorMessage name={ props.name } className='w-2/3 text-left text-lg text-red-500' component='span'  />
		</>

				
	)
}

// auth_wrapper.auth__form_input
// auth_wrapper.auth__form_label