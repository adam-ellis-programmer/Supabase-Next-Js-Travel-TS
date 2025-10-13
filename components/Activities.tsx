import React from 'react'
import ActivityCard from './cards/ActivityCard'
import ActivitySwiper from './swipers/ActivitySwiper'

const Activities = () => {
  return (
    <section className=' '>
      <h3 className='text-3xl text-center my-10'>Activites</h3>
      <div className=' w-[55%] mx-auto '>
        <ActivitySwiper />
      </div>
    </section>
  )
}

export default Activities
