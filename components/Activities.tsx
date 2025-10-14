import React from 'react'
import ActivityCard from './cards/ActivityCard'
import ActivitySwiper from './swipers/ActivitySwiper'
export interface ActivitiesTS {
  id: string
  category: string
  color_hex: string
  emoji: string
  fitness_level: string
  icon_name: string
  image_url: string
  name: string
}

export interface ActivitesData {
  data: ActivitiesTS[]
}
const Activities = ({ data }: ActivitesData) => {
  return (
    <section className='pb-14 bg-gray-400/50 mt-5 relative overflow-hidden'>
      <img
        className='absolute top-0 left-0 bottom-0 right-0 w-full h-full object-cover object-bottom -z-10'
        src='https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg'
        alt=''
      />
      <h3 className='text-3xl text-white font-bold text-center my-10'>
        <span className='bg-orange-500 p-2 rounded-md rotate-12'>
          Activites
        </span>
      </h3>
      <div className='w-[55%] mx-auto'>
        <ActivitySwiper data={data} />
      </div>
    </section>
  )
}

export default Activities
