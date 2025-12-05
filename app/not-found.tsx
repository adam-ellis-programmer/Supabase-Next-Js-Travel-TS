import Link from 'next/link'
import React from 'react'
import { TbError404 } from 'react-icons/tb'

const NotFound = () => {
  return (
    <div className='min-h-[calc(100vh-100px)] flex justify-center items-center bg-[#2e5068]'>
      <div className='bg-white p-10 rounded-lg  shadow-2xl'>
        <div className='flex justify-center items-center'>
          <TbError404 className='text-5xl' />
        </div>
        <h1 className='text-2xl text-center'>Opps!</h1>
        <p className='text-2xl text-center'> That Page is not found</p>

        <div className='mt-5'>
          <Link href={`/`} className='bg-rose-400 p-1 px-2 rounded-md'>
            back home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
