import React from 'react'
import logo from '../aset/sayoursputih.png'
function Homepage() {
  return (
    <div className='grid grid-cols-10 grid-flow-row-dense'>
      <div className='bg-purple-900/60 min-h-[50px] col-span-2'>
        <div className='logo'>
          <img src={logo} alt="" />
        </div>
      </div>
      <div className='bg-purple-900/60 min-h-[25px] col-span-1'>

      </div>
      <div className='bg-purple-900/60 min-h-[25px] col-span-1'>
      <div>
          <input type="text" className='outline outline-offset-2 outline-1 w-100 h-10 fixed top-10 left-50 px-20 py-5 text-left bg-white-500 text-black' placeholder='Lagi cari apa nih...' />
        </div>
      </div>
      <div className='bg-purple-900/60 col-span-4'>
        
      </div>
      <div className='bg-purple-900/60 min-h-[25px] col-span-2'>

      </div>
      <div className='bg-violet-500 min-h-[50px] w-full'>
        <p className='fixed top-28 left-17 m-auto text-xl font-bold font-Montserrat'>Sayuran Segar</p>
      </div>
    </div>
  );
}

export default Homepage