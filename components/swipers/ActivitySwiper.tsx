'use client'
import React from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import ActivityCard from '../cards/ActivityCard'
const testArr = Array.from({ length: 15 }, (_, i) => i)
const ActivitySwiper = () => {
  return (
    <div className='w-full px-4 '>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={24} // ✅ Reduced from 50
        slidesPerView={1} // Shows 3 cards
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {testArr.map((item, i) => {
          return (
            <SwiperSlide>
              <ActivityCard />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default ActivitySwiper
