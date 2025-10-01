import React from 'react'
import ReviewCard from './cards/ReviewCard'

const Reviews = () => {
  return (
    <section className='border  mt-10'>
      <h3 className='my-10 text-3xl text-center capitalize'>reviews</h3>
      <div className='md:w-[80%] mx-auto grid md:grid-cols-4 gap-8'>
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </section>
  )
}

export default Reviews
