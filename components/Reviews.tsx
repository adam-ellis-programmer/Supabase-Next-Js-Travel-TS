import React from 'react'
import ReviewCard from './cards/ReviewCard'
import ReviewsSlider from './swipers/ReviewsSlider'

export interface Review {
  id: number
  rating: number
  review_text: string
  reviewer_image_url: string
  reviewer_name: string
  reviewer_title: string
  tour_date: string
  tour_name: string
  is_verified: string
  created_at: string
}

export interface ReviewData {
  data: Review[]
}

const Reviews = ({ data }: ReviewData) => {
  // const tempArr = Array.from({ length: 10 }, (_, i) => i)
  return (
    <section className=' mt-10 pb-16'>
      <h3 className='my-10 text-3xl text-center capitalize'>reviews</h3>
      <div className='md:w-[80%] mx-auto '>
        <ReviewsSlider data={data} />
      </div>
    </section>
  )
}

export default Reviews
