import loginBg from '../assets/loginBg.jpg';


export const LoginPage = () => {    

  // TODO:
  const wrapper = {


  };

  return (
	  <div className="w-full flex flex-row">
      <img src={ loginBg } className="h-full w-1/2" />

      <div className='w-1/2 h-full flex justify-center items-center'>
        <div className='h-2/3 w-2/3 rounded-lg'>
          <h1 className='text-center text-5xl text-white mt-2'>Login</h1>
          <form className='flex items-center flex-col'>
            <label className='w-2/3 mt-10 text-xl text-white'>Name:</label>
            <input type="text" className='w-2/3 mt-2 p-6 bg-slate-900 border text-gray-500 focus:text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500' />
            <button type="submit" className='mt-10 w-3/5 p-3 rounded-lg bg-sky-500 text-white text-xl hover:bg-sky-600'>Submit</button>
          </form>
        </div>

      </div>
    </div>
  )
}
