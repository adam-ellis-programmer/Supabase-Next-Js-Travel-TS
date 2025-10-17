'use client'
import React from 'react'
import ReviewCard from '../cards/ReviewCard'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ReviewData } from '../Reviews'

const ReviewsSlider = ({ data }: ReviewData) => {
  // const tempArr = Array.from({ length: 7 }, (_, i) => i)
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
      breakpoints={{
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
    >
      {data.map((item, i) => {
        return (
          <SwiperSlide>
            <ReviewCard key={i} item={item} />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default ReviewsSlider
