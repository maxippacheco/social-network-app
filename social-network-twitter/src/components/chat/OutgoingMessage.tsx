import { Message } from '../../interfaces/interfaces';
import { timeFormat } from '../../helpers/timeFormat';

interface Props{
    message: Message;
}

export const OutgoingMessage = ({ message }: Props) => {
  	return (
         <div className="h-28 w-full pr-3 pt-5 pb-3 flex items-end flex-col">
            <span className='ml-4 text-white bg-sky-600 h-16 w-64 flex items-center rounded-xl rounded-br-none pl-3'>{message.message}</span>
            <span className='text-gray-500 text-sm text-bold'>{ timeFormat(message.createdAt )}</span>
        </div>
	
	)
}
