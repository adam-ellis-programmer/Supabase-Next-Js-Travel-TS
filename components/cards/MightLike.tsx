import React from 'react'

const MightLike = () => {
  return (
    <div className='grid grid-cols-[150px_1fr] mb-3 shadow-lg'>
      <img
        className='min-h-[100px] w-full rounded-l-sm '
        src='https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg'
        alt=''
      />
      <div className='h-full p-4'>
        <h3>15 Day Vietnam Adventure</h3>
        <p className='mt-2'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur,
          dignissimos.
        </p>
      </div>
    </div>
  )
}

export default MightLike
