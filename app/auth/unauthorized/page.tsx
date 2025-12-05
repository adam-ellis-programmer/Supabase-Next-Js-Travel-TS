import Link from 'next/link'
import React from 'react'
import { ImBlocked } from 'react-icons/im'
const UnauthorizedPage = () => {
  return (
    <div className='bg-gray-800 h-[calc(100vh-100px)] flex justify-center items-center'>
      <div className='bg-white p-5 rounded-md shadow-2xl outline outline-rose-500 outline-offset-[20px]'>
        <div className='flex justify-center '>
          <ImBlocked  className='text-rose-500 text-5xl'/>
        </div>
        <p className='text-2xl mt-2 text-center'>Blocked!</p>
        <p className='text-3xl'>Unauthorized Access</p>
        <p className='capitalize'>You are not authorized </p>
        <p className='capitalize'> to view this page</p>
        <div className='mt-2'>
          <Link href={`/`} className='bg-green-500 rounded-md '>
            Go Back
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UnauthorizedPage
