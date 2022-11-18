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
            <div className='grid grid-cols-4 gap-5 mt-4 px-10'>
                <div className='flex'>
                  <div className='flex items-center'>
                    <img src={duit} className='' alt="" />
                  </div>
                </div>
                <div className='flex'>
                  <div className='flex items-center w-2/3 text-2xl font-Montserrat m-6 font-bold cols-end'>
                    saldo
                  </div>
                </div>
                <div className='flex w-56'>
                  <div className='flex items-center w-2/3 text-lg font-Montserrat m-4 font-bold cols-end'>
                    Rp. 999.999
                  </div>
                </div>
            </div>
            <div>
              <div className='absolute bottom-0 px-1 bg-gray-400 items-center text-center rounded-xl'>
                <button className='absolute bottom-14 left-48 items-center text-center text-red-500' >Delete Account</button>
              </div>
            </div>
          </div>
          <div className='w-[60rem] h-[34rem] bg-gray-300 rounded-xl bg-cover bg-center relative'>
            <div className='text-2xl font-bold font-Montserrat p-10'>
              Biodata Diri
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className='flex flex-col justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-40 h-40" >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <button className='px-10 text-center bg-gray-100 rounded-2xl mt-10 p-3'>
                  Ubah Foto Profile
                </button> 
              </div>
              <div className='flex flex-col gap-4 justify-start items-start'>
                <div>
                  <div className='font-bold text-black text-xl'>Info Profil</div>
                  <div className='grid grid-cols-2 gap-5'>
                    <div>
                      <div className='font-normal text-black text-l mt-2'>Nama</div>
                      <div className='font-normal text-black text-l mt-2'>Username</div>
                      <div className='font-normal text-black text-l mt-2'>Bio</div>
                    </div>
                    <div>
                      <input type="text" className='text-center mt-2 bg-white-900 text-black rounded-xl' placeholder='Nama' />
                      <input type="text" className='text-center mt-2 bg-white-900 text-black rounded-xl' placeholder='Username' />
                      <input type="text" className='text-center mt-2 bg-white-900 text-black placeholder-white-500 rounded-xl' placeholder='Bio' />
                    </div>
                  </div>
                </div>
                <div>
                  <div className='font-bold text-black text-xl'>Info Pribadi</div>
                  <div className='grid grid-cols-2 gap-5'>
                    <div>
                      <div className='font-normal text-black text-l mt-2'>User ID</div>
                      <div className='font-normal text-black text-l mt-2'>Email</div>
                      <div className='font-normal text-black text-l mt-2'>Nomor HP</div>
                      <div className='font-normal text-black text-l mt-2'>Jenis Kelamin</div>
                      <div className='font-normal text-black text-l mt-2'>Tanggal Lahir</div>
                    </div>
                    <div>
                      <div className='font-normal text-black text-l mt-2'>ID3729847</div>
                      <input type="text" className='text-center mt-2 bg-white-900 text-black rounded-xl' placeholder='Email' />
                      <input type="text" className='text-center mt-2 bg-white-900 text-black rounded-xl' placeholder='Nomor HP' />
                      <div className='grid grid-cols-2'>
                        <label class="flex radio p-2 cursor-pointer">
                          <input class="my-auto transform scale-125" type="radio" name="sfg" />
                          <div class="title px-2">Pria</div>
                        </label>
                        <label class="flex radio p-2 cursor-pointer">
                          <input class="my-auto transform scale-125" type="radio" name="sfg" />
                          <div class="title px-2">Wanita</div>
                        </label>
                      </div>
                      <input type="text" className='text-center mt-2 bg-white-900 text-black rounded-xl' placeholder='Tanggal lahir' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-col gap-4 justify-center items-center'>
                <a href='homepage' className='items-center w-30 bg-fuchsia-900 text-white text-center px-5 py-1 rounded-2xl p-10'>Simpan</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    
  )
}
