import React from 'react'

function LoginPage() {
  return (
    <div className='mt-[150px] items-center w-[100%] h-[100%] flex flex-col'>
      <div className='font-sans font-bold text-[38px]'>Log In to your account</div>
      <div className='mt-8 w-[100%]  items-center justify-center flex flex-col'>
          <div className='w-[100%] flex items-center flex-col'>
            <input className='border-black border-2 rounded-md w-[20%] text-[16px] py-2 px-3 min-w-[300px]' placeholder='Enter username'></input>
          </div>
          <div className='w-[100%] flex items-center flex-col'>
            <input type='password' className='mt-2 border-black border-2 rounded-md w-[20%] text-[16px] py-2 px-3 min-w-[300px]' placeholder='Enter password'></input>
          </div>
          <button className='w-[20%] bg-black mt-4 py-2 px-3 rounded-md text-white min-w-[300px]'>
            Login
          </button>
    </div>
    </div>
  )
}

export default LoginPage;