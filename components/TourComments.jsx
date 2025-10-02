import React from 'react'
import TourComment from './TourComment'

const TourComments = () => {
  return (
    <div className='mt-5'>
      <h3 className='text-3xl text-center'>Scroll The Comments</h3>
      <ul className=' shadow-lg h-[400px] overflow-scroll'>
        <TourComment />
        <TourComment />
        <TourComment />
        <TourComment />
        <div className='flex justify-center my-4'>
          <button className='capitalize text-center bg-blue-500 text-2xl text-white p-3 rounded-lg'>Show more reviews</button>
        </div>
      </ul>
    </div>
  )
}

export default TourComments
