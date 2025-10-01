import React from 'react'
import { Button } from '../ui/button'

const LongCard = () => {
  return (
    <div className='shadow-2xl grid grid-rows-[300px_1fr] md:grid-rows-[200px_1fr]  rounded-b'>
      <div className=''>
        <img
          src='https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg'
          alt=''
          className='rounded-t object-cover object-bottom h-full w-full'
        />
      </div>

      <div className=' flex flex-col justify-between p-4'>
        <h2 className='text-2xl'> Vietnam 12 days</h2>
        <p className='mt-3'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere illum
          autem aliquam eveniet rerum nulla tempora cupiditate ipsum aut id!
        </p>

        <div className='flex justify-between items-center mt-4 '>
          <p className='text-rose-600 text-2xl'>£3000</p>
          <Button className=''>more info</Button>
        </div>
      </div>
    </div>
  )
}

export default LongCard
