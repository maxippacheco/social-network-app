import { Formik, Form } from 'formik';
import { Navbar } from '../components/navbar/Navbar'
import { IncomingMessage } from '../components/chat/IncomingMessage'
import { OutgoingMessage } from '../components/chat/OutgoingMessage'
import { SideBarChatItem } from '../components/chat/SideBarChatItem'
import { CustomInput } from '../components/input/CustomInput';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';

export const ChatPage = () => {

  const dispatch = useDispatch()
  const { user } = useSelector((state: RootState) => state.auth);  
  const { socket } = useSelector((state: RootState) => state.socket);
  const { onlineUsers, activeChat, messages } = useSelector((state: RootState) => state.chat);


  if( !user ) return;

  return (
    <>
      <Navbar />

      {/* TODO: CREATE WRAPPER */}
      {/* User List */}
      <section className='basis-1/3 border-r border-r-slate-700 overflow-auto scrollbar-hide'>
        {/* search bar */}
        <div className='w-full h-36 border-b border-b-slate-700'>
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
        {

          onlineUsers?.map( (userOnline) => (
            (userOnline.id !== user.id) && 
            // (userOnline.id !== user?.id && userOnline.followers.includes(user?.id)) &&
              (
                <SideBarChatItem user={ userOnline } key={ userOnline.id } />
              )
          ))
        }
  
      </section>
      
      {/* Chat */}
      <section className='basis-1/2 h-full w-full scrollbar-hide overflow-auto' id='messages'>
        <div className='scrollbar-hide overflow-auto w-full h-full'>

          {
            ( messages.length === 0 ) && (
              <div className='w-full h-full flex items-center justify-center'>
                <h3 className='text-center text-gray-500 text-3xl'>No messages yet</h3>
              </div>
            )
          }

          <div className='w-full relative mb-14'>
            
            {
              messages.map( message => (
                (message.from === user.id) 
                  ? <OutgoingMessage message={ message } key={ message.id } />
                  : <IncomingMessage message={ message } key={ message.id } />
              ))
            }
            
          </div>
          <Formik 
            initialValues={{ message: '' }}
            onSubmit={ (values, { resetForm }) => {  

              if( values.message.length > 0 ){
                socket.emit('new-message', {
                  message: values.message,
                  to: activeChat,
                  from: user.id
                })
  
  
                resetForm();
              }

            }}
          >
            {
              () => (
                <Form 
                  className='h-16 bg-slate-800 absolute bottom-0 flex items-center justify-center' 
                  style={{ width:'37.5%'}}
                >
                  <CustomInput 
                    type='text'
                    name='message'
                    placeholder='Type your message here'	
                    inputClassName='w-3/4 h-1/2 bg-slate-800 focus:outline-none focus:text-white text-gray-400'
                  />

                  <button type='submit' className='ml-5 p-2 pr-4 pl-4 bg-sky-500 text-white rounded-lg'>Send</button>
                </Form>
              )
            }
          </Formik>
          
        </div>

      </section>
      
    </>
  )
}
