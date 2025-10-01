import React from 'react'
import LongCard from './cards/LongCard'

const TopSellers = () => {
  return (
    <div className=''>
      <h1 className='capitalize text-3xl text-center my-10'>best sellers</h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-5'>
        <LongCard />
        <LongCard />
        <LongCard />
        <LongCard />
      </div>
    </div>
  )
}

export default TopSellers
