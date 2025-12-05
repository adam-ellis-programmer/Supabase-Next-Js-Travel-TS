import React from 'react'
import { TbInfoSquareRounded } from 'react-icons/tb'

const DemoAlert = () => {
  return (
    <div className=' p-8 bg-rose-400 fixed top-3 z-50 left-0 right-0  flex justify-start items-center px-5 w-[98%] max-w-[98%] mx-auto rounded-xl shadow-2xl'>
      <p className='capitalize text-xl text-white flex items-center space-x-3'>
        <TbInfoSquareRounded className='text-5xl' />
        <span>demo user has limited funcionaility</span>
      </p>
    </div>
  )
}

export default DemoAlert
