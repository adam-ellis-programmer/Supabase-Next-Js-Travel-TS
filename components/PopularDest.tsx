import React from 'react'
import PopularCard from './cards/PopularCard'

const PopularDest = () => {
  return (
    <section className='mt-5'>
      <h3 className='my-10 capitalize text-3xl text-center'>
        popular destinations
      </h3>
      <div className=' grid md:grid-cols-[repeat(4,minmax(320px,1fr))] md:w-[80%] mx-auto gap-4 '>
        <PopularCard />
        <PopularCard />
        <PopularCard />
        <PopularCard />
        <PopularCard />
        <PopularCard />
        <PopularCard />
        <PopularCard />
      </div>
    </section>
  )
}

export default PopularDest
