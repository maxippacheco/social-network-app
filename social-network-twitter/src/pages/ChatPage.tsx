import { Formik, Form } from 'formik';
import { Navbar } from '../components/navbar/Navbar'
import { IncomingMessage } from '../components/chat/IncomingMessage'
import { OutgoingMessage } from '../components/chat/OutgoingMessage'
import { SideBarChatItem } from '../components/chat/SideBarChatItem'
import { CustomInput } from '../components/input/CustomInput';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const ChatPage = () => {
  
  const { user } = useSelector((state: RootState) => state.auth);  


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
          user?.following.map( (user) => (
            <SideBarChatItem user={ user } />
          ))
        }
  
      </section>
      
      {/* Chat */}
      <section className='basis-1/2 h-full w-full scrollbar-hide overflow-auto'>
        <div className='scrollbar-hide overflow-auto w-full h-full'>
          <div className='w-full relative mb-14'>
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
            
          </div>
          <Formik 
            initialValues={{ message: '' }}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
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
