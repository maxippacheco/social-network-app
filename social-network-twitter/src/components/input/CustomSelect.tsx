import { useField } from "formik";

interface Props{
	label: string;
	name: string;
	placeholder?: string;
	[x: string]: any;
}

export const CustomSelect = ({ label, ...props }: Props) => {

	// Reciben los children tambien
	const [ field, meta ] = useField(props);

  	return (
		<>
			<label htmlFor={ props.id || props.name }>{ label }</label>
			<select { ...field } { ...props } className="form-select appearance-none
                                 block
                                 px-3
                                 py-1.5
                                 text-base
                                 font-normal
                                 text-white
                                 bg-slate-900 bg-clip-padding bg-no-repeat
                                 border border-solid border-gray-300
                                 rounded
                                 transition
                                 ease-in-out
                                 mr-2
                                 focus:text-sky-500 focus:border-sky-600 focus:outline-none" aria-label="Default select example" />
			
			{
				meta.touched && meta.error && (
					<span className="error">{ meta.error }</span>
				)
				// errores
			}
		</>
  	);
};
