import { Message } from '../../interfaces/interfaces';
import { timeFormat } from '../../helpers/timeFormat';

export const IncomingMessage = ({ message }: { message: Message } ) => {
	return (
        <div className="h-28 w-full pl-3 pt-5 pb-3 ">
          <span className='ml-4 text-white bg-purple-600 h-16 w-64 flex items-center rounded-xl rounded-bl-none pl-3'>{ message.message }</span>

          <span className='text-gray-500 text-sm text-bold pl-3'>{ timeFormat( message.createdAt ) }</span>
        </div>
	)
}
