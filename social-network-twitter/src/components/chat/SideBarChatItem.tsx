import UserImage from '../../assets/userImage.png';

export const SideBarChatItem = () => {
  	return (
      <div className='w-full h-28 flex flex-row items-center hover:bg-slate-700 hover:cursor-pointer'>
          <img src={ UserImage } className="h-20 ml-3 rounded-full" alt="user" />
          
          <div className='h-full flex flex-col mt-7 w-2/3'>
            <div className='flex flex-row ml-2'>
              <h4 className='align-top mr-1 text-white'>maxi</h4>
              <span className='text-gray-500'>@pachelife</span>
            </div>

            <span className='ml-3 text-gray-500'>youu asshole</span>
          </div>

          <div className="h-full alignt-top mt-7 text-gray-500">17 feb</div>
        </div>
	)
}
