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
                    <a href="register" className='fixed bottom-36 left-80 text-center underline italic text-white'>Sign Up</a>
                </div>
            </div>
            <div className='w-1/2 bg-primary'>
                <div className='flex h-full'>
                    <div className='m-auto px-24 py-40 bg-violet-100/10 rounded-lg'>
                        <div>
                            <div>
                                <input type="text" className='px-10 text-center bg-violet-100/10 text-white rounded-xl' placeholder='Username' />
                            </div>
                            <div>
                                <input type="password" className='px-10 text-center bg-violet-100/10 text-white rounded-xl mt-2' placeholder='Password' />
                            </div>
                        </div>
                        <div className='mt-10 pt-8'>
                            <a href='homepage' className='fixed bottom-44 right-64 w-64 bg-fuchsia-900 text-white text-center px-5 py-1 rounded bold p-10'>Login</a>
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