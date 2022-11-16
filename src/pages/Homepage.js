import React from 'react'
import logo from '../aset/sayoursputih.png'
function Homepage() {
  return (
    <div className='grid grid-cols-5 gap-x-2 gap-y-2 grid-flow-row-dense'>
      <div className='bg-red-500 min-h-[50px]'>
        <div className='logo'>
          <img src={logo} alt="" />
        </div>
      </div>
      
    </div>
  );
}

export default Homepage