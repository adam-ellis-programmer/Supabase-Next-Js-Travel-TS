import React from 'react'
import ActivityCard from './cards/ActivityCard'
import ActivitySwiper from './swipers/ActivitySwiper'

const Activities = () => {
  return (
    <section className='pb-14 bg-gray-400/50 mt-5 relative overflow-hidden'>
      <img
        className='absolute top-0 left-0 bottom-0 right-0 w-full h-full object-cover object-bottom -z-10'
        src='https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg'
        alt=''
      />
      <h3 className='text-3xl text-center my-10'>Activites</h3>
      <div className='w-[55%] mx-auto'>
        <ActivitySwiper />
      </div>
    </section>
  )
}

export default Activities
