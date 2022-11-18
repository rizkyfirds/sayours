import React from 'react'

function Transaction() {
  return (
    <div>
        <div className='flex bg-purple-900 py-10'>
          <div className='flex text-white font-bold items-center text-2xl w-90'>
            Order Summary
          </div>
        </div>
        <div>
          <div className='grid grid-rows-4 gap-4 h-screen'>
            <div>
              <div className='flex'>
                <div className='w-2/12'>
                  1
                </div>
                <div className='w-8/12'>
                  2
                </div>
                <div className='w-2/12'>
                  3
                </div>
              </div>
            </div>
            <div>
              2
            </div>
            <div>
              3
            </div>
            <div>
              4
            </div>

          </div>
        </div>
        
    </div>
  )
}

export default Transaction