import React from 'react'
import logo from '../aset/SaYours-1 (1).png'

function Register() {
  return (
    <div>
        <div className='flex h-screen'>
            <div className='w-1/2 bg-primary'>
                <div className='logo'>
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className='w-1/2 bg-primary'>
                <div className='flex h-full'>
                    <div className='m-auto px-24 py-40 bg-violet-100/10 rounded-lg'>
                        <div className='p-10'>
                            <div>
                              <p className='fixed top-40 right-80 text-center text-4xl underline underline-offset-2 text-white font-Montserrat'>
                                Register
                              </p>
                              <p className='fixed top-48 right-80 m-2 text-center text-sm text-white '>
                                SaYours Account
                              </p>
                            </div>
                            <div>
                                <input type="text" className=' px-10 text-center bg-violet-100/10 rounded-lg m-2 text-white' placeholder='First Name' />
                            </div>
                            <div>
                                <input type="text" className='px-10 text-center bg-violet-100/10 rounded-lg m-2 text-white' placeholder='Last Name' />
                            </div>
                            <div>
                                <input type="text" className='px-10 text-center bg-violet-100/10 rounded-lg m-2 text-white' placeholder='Email Address' />
                            </div>
                            <div>
                                <input type="password" className='px-10 text-center bg-violet-100/10 rounded-lg m-2 text-white' placeholder='Password' />
                            </div>
                        </div>
                        <div className='mt-10 pt-8'>
                            <a href = 'homepage' className='fixed bottom-44 right-64 w-64 bg-fuchsia-900 text-white text-center px-5 py-1 rounded-xl p-10'>Register</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register