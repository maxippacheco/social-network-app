
interface Props{
    text: string;
}

export const OutgoingMessage = ({ text }: Props) => {
  	return (
         <div className="h-28 w-full pr-3 pt-5 pb-3 flex items-end flex-col">
            <span className='ml-4 text-white bg-sky-600 h-16 w-64 flex items-center rounded-xl rounded-br-none pl-3'>{text}</span>
            <span className='text-gray-500 text-sm text-bold'>17 March 2022</span>
        </div>
	
	)
}
