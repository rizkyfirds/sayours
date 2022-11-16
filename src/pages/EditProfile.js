import React from 'react'
import logo from '../aset/sayoursputih.png'

function EditProfile() {
  return (
    <div>
      <div className='flex h-screen'>
        <div className='h-1/4 w-full bg-purple-900/60'>
          <div className='logo h-36 w-44'>
          <img src={logo} alt="" />
        </div>
        <div className='h-screen w-full px-96 bg-primary'>
          <div className=' fixed top-280 left-20 bottom-14 px-36 py-56 bg-violet-100/50 rounded-lg'>
            <p className='fixed top-64 m-auto text-xl font-bold font-Montserrat'>Lele Terbang</p>
            <p className='fixed top-96 left-40 m-auto text-lg font-bold font-Montserrat'>Saldo: Rp67.999</p>
          </div>
          <div className=' fixed top-280 right-20 bottom-14 w-2/3 py-56 bg-violet-100/50 rounded-lg'>

          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default EditProfile