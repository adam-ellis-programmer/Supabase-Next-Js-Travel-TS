import React from 'react'
import ActivityCard from './cards/ActivityCard'

const Activities = () => {
  return (
    <section className=' '>
      <h3 className='text-3xl text-center my-10'>Activites</h3>
      <div className='grid md:grid-cols-3 w-[55%] mx-auto '>
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
      </div>
    </section>
  )
}

export default Activities
