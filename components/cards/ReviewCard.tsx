import React from 'react'
import { FaStar } from 'react-icons/fa'
const ReviewCard = () => {
  return (
    <div className='shadow-2xl grid  bg-[#305570] rounded-lg'>
      <div className=' flex justify-center items-center p-5'>
        <div>
          <div className='h-[150px] w-[150px] rounded-full bg-rose-400 overflow-hidden'>
            <img
              className='w-full h-full object-cover object-center '
              src='https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/person1.jpg'
              alt=''
            />
          </div>
          <p className='text-center text-2xl mt-5 text-white'>Sarah Smith</p>
        </div>
      </div>
      <div className='min-h-[130px]'>
        <p className='text-center text-white text-md'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
          deserunt ex aut praesentium fugiat quas minus asperiores quos? Aperiam
          quidem nisi soluta et! Totam facere nostrum placeat beatae, mollitia
          optio!
        </p>

        <div className='flex justify-center p-10'>
          <FaStar className='text-4xl text-rose-600' />
          <FaStar className='text-4xl text-rose-600' />
          <FaStar className='text-4xl text-rose-600' />
          <FaStar className='text-4xl text-rose-600' />
          <FaStar className='text-4xl text-rose-600' />
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
