import UserImage from '../../assets/userImage.png';
import { User } from '../../interfaces/interfaces';

export const SideBarChatItem = ({ user }: { user: User }) => {
  
  
  return (
    <div className='w-full h-28 flex flex-row items-center hover:bg-slate-700 hover:cursor-pointer'>
      <div className='relative'>
        <img src={ user.img ? user.img : UserImage } className="h-20 ml-3 rounded-full" alt="user" />
        {
          ( user.online ) && (
            <span className='bg-green-500 h-5 w-5 absolute bottom-0 right-2 rounded-full' />
          )
        }
      </div>
      
      <div className='h-full flex flex-col mt-7 w-2/3'>
        <div className='flex flex-row ml-2'>
          <h4 className='align-top mr-1 text-white'>{ user.name }</h4>
          <span className='text-gray-500'>@{ user.username }</span>
        </div>

        <span className='ml-3 text-gray-500'>youu asshole</span>
      </div>

      <div className="h-full alignt-top mt-7 text-gray-500">17 feb</div>
    </div>
	)
}
