import { Navbar } from '../components/navbar/Navbar'

export const ChatPage = () => {
  return (
    <>
      <Navbar />

      {/* User List */}
      <section className='basis-1/3 border-r'>


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
      
      
      </section>
      
      {/* Chat */}
      <section className='basis-1/2 border-r'>
        hello
      </section>

    </>
  )
}
