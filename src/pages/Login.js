import React from 'react'
import logo from '../aset/SaYours-1 (1).png'
function Login() {
  return (
    <div>
        <div className='flex h-screen'>
            <div className='w-1/2 bg-primary'>
                <div className='logo'>
                    <img src={logo} alt="" />
                </div>
                <div className='text-center mt-2'>
                    <a href="" className='fixed bottom-36 left-80 text-center underline italic text-white'>Sign Up</a>
                 </div>
            </div>
            <div className='w-1/2 bg-primary'>
                <div className='flex h-full'>
                    <div className='m-auto px-24 py-40 bg-violet-100/10 rounded-lg'>
                        <div className='divide-y p-10'>
                            <div>
                                <input type="text" className=' px-10 text-center bg-transparent text-white' placeholder='Email' />
                            </div>
                            <div>
                                <input type="text" className='px-10 text-center bg-transparent text-white' placeholder='Password' />
                            </div>
                        </div>
                        <div className='mt-10 pt-8'>
                            <button className='fixed bottom-44 right-64 w-64 bg-fuchsia-900 text-white px-5 py-1 rounded bold p-10'>Login</button>
                            <div className='text-center mt-2'>
                                <a href="" className='fixed bottom-36 right-80 underline italic text-white'>Forgot The Password</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login