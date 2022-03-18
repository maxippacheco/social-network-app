import { IncomingMessage } from '../components/chat/IncomingMessage'
import { OutgoingMessage } from '../components/chat/OutgoingMessage'
import { SideBarChatItem } from '../components/chat/SideBarChatItem'
import { Navbar } from '../components/navbar/Navbar'

export const ChatPage = () => {
  return (
    <>
      <Navbar />

      {/* TODO: CREATE WRAPPER */}
      {/* User List */}
      <section className='basis-1/3 border-r overflow-auto scrollbar-hide'>
        {/* search bar */}
        <div className='w-full h-36 border-b'>
          <h3 className='text-white m-3 text-bold'>Messages</h3>
          <div className='w-full flex justify-center'>
            <input 
              type="text" 
              className='
                w-5/6 mt-5 text-gray-500 border border-gray-500 bg-slate-900 p-3 pl-4 rounded-full focus:ring-1 
              focus:border-sky-500 focus:outline-none focus:text-white' 
              placeholder='Search something'
            />

          </div>

        </div>
        <SideBarChatItem /> 
        <SideBarChatItem /> 
        <SideBarChatItem /> 
        <SideBarChatItem /> 
        <SideBarChatItem /> 
        <SideBarChatItem /> 
  
      </section>
      
      {/* Chat */}
      <section className='basis-1/2 border-r h-full w-full scrollbar-hide overflow-auto'>
        <IncomingMessage />
        <OutgoingMessage />
        <IncomingMessage />
        <OutgoingMessage />
        <IncomingMessage />
        <OutgoingMessage />
        <IncomingMessage />
        <OutgoingMessage />
        <IncomingMessage />
        <OutgoingMessage />
        <IncomingMessage />
        <OutgoingMessage />
      </section>

    </>
  )
}
