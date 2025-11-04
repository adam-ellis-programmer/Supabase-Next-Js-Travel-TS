import React from 'react'
import Image from 'next/image'
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
      {/* Background Image - Optimized */}
      <Image
        src='https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg'
        alt='Activities background'
        fill
        className='object-cover object-bottom -z-10'
        sizes='100vw'
        quality={85}
        placeholder='blur'
        blurDataURL='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzljYTNhZiIvPjwvc3ZnPg=='
      />

      <h3 className='text-3xl text-white font-bold text-center my-10'>
        <span className='bg-orange-500 p-2 rounded-md rotate-12'>
          Activities
        </span>
      </h3>

      <div className='w-[55%] mx-auto'>
        <ActivitySwiper data={data} />
      </div>
    </section>
  )
}

export default Activities
