import React from 'react'

const Hero = () => {
  return (
    <div className='h-[500px] relative'>
      <img
        className='w-full object-cover object-center h-[500px]'
        src='https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg'
        alt=''
      />

      <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-[#47566d7b]'>
        <div>
          <h1 className='capitalize text-5xl text-white '>
            tours and adventure
          </h1>
          <p className='text-3xl text-white text-center capitalize'>awaits</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
