import { useState } from 'react';

export const PreviewImage = ({ file }: { file: File }) => {
  	
	const [preview, setPreview] = useState<string | ArrayBuffer | null>('');

	const reader = new FileReader();

	reader.readAsDataURL(file);
	
	reader.onload = () => {

		setPreview(reader.result);
	}



	return (
		<div>
			<img src={ preview?.toString() } alt="Preview image" className='opacity-100 h-36 w-36 rounded-full absolute mt-20' />
		</div>
  	)
}
