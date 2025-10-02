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
      </ul>
    </div>
  )
}

export default TourComments
