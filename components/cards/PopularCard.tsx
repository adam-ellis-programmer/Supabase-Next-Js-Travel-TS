import React from 'react'

const PopularCard = () => {
  return (
    <div className='h-[300px] relative  rounded-lg grid place-items-center overflow-hidden'>
      <img
        className='w-full h-full'
        src='https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg'
        alt=''
      />

      <div className='absolute bg-[#2e415747] top-0 bottom-0 w-full h-full grid place-items-center'>
        <div>
          <p className='text-3xl text-white'>Thailand</p>
        </div>
      </div>
    </div>
  )
}

export default PopularCard
