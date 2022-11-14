import React from 'react'

function Login() {
  return (
    <div>
        <div className='flex h-screen'>
            <div className='w-1/2 bg-red-100'>
                <div className='h-96 w-96 bg-red-100 rounded'>
                    asd
                </div>
            </div>
            <div className='w-1/2 bg-primary'>
                <div className='flex h-full'>
                    <div className='m-auto'>
                        <div className='divide-y'>
                            <div>
                                <input type="text" className='text-center bg-primary' placeholder='Email' />
                            </div>
                            <div>
                                <input type="text" className='text-center bg-primary' placeholder='Password' />
                            </div>
                        </div>
                        <div className='mt-10'>
                            <button className='w-full bg-white '>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login