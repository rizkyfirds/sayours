import React from 'react'
import logo from '../aset/sayoursputih.png'
import duit from '../aset/saldo.png'

export default function EditProfile() {
  return (
    <div>
      <div className='flex bg-purple-900 py-2'>
        <div>
          <img src={logo} className='w-72' alt="" />
        </div>
      </div>
      <div className='flex bg-primary h-screen'>
        <div className="grid grid-cols-3 gap-5 mt-5 px-10">
          <div className='w-[28rem] h-[34rem] bg-gray-300 rounded-xl bg-cover bg-center relative'>
            <div className='flex items-center m-10'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-24 h-24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div className=' text-4xl font-Montserrat m-6 font-bold'>
                Lele Terbang
              </div>
            </div>
              <div className='grid grid-cols-3 gap-5 mt-4 px-10'>
                <div>
                  <div className='cols-3'>
                    <img src={duit} className='w-12' alt="" />
                  </div>
                  <div className=' w-2/3 text-2xl font-Montserrat m-6 font-bold cols-end'>
                    saldo
                  </div>
                </div>

            </div>
          </div>
          <div className='w-[60rem] h-[34rem] bg-gray-300 rounded-xl bg-cover bg-center relative'>
          </div>
        </div>

      </div>
    </div>
    
  )
}
