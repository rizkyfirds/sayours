import React from 'react'
import logo from '../aset/sayoursputih.png'
function Homepage() {
  return (
    <div className='grid grid-cols-5 grid-flow-row-dense'>
      <div className='bg-red-500 min-h-[50px]'>
        <div className='logo'>
          <img src={logo} alt="" />
        </div>
      </div>
      <div className='bg-blue-100 col-span-3'>
        <div>
          <input type="text" className='outline outline-offset-2 outline-1 w-80 h-75 text-left bg-white-500 text-black' placeholder='Lagi cari apa nih...' />
        </div>
      </div>
      <div className='bg-red-100 min-h-[25px] col-span-1'>

      </div>
    </div>
  );
}

export default Homepage