import TourAccordion from '@/components/Accordion'
import MightLike from '@/components/cards/MightLike'
import TourHeader from '@/components/TourHeader'
import TourImge from '@/components/TourImge'
import React from 'react'
import TourComments from '@/components/TourComments'
import BookingCalender from '@/components/BookingCalender'

const tempArr = Array.from({ length: 12 }, (_, i) => {
  return { item: i }
})
const TourPage = () => {
  return (
    <div className='min-h-[calc(100vh-120px)] '>
      {/* hero */}
      <div className='h-[400px] relative mb-7'>
        <img
          className='h-full w-full object-cover object-center'
          src='https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg'
          alt=''
        />
        <div className='absolute top-0 left-0 w-full h-full bg-[#2c4e6160] flex items-center'>
          <div className='text-white p-8'>
            <p className='text-4xl'>12 Day</p>
            <p className='text-4xl'>Thai Adventure</p>
          </div>
        </div>
      </div>

      <div className='md:grid grid-cols-3 md:w-[90%] mx-auto  gap-5'>
        <div className=''>
          <TourHeader text={`Itiniary`} classes='text-2xl text-center' />
          <div className='mt-4'>
            {tempArr.map((item, i) => {
              return <TourAccordion i={i} key={i} />
            })}
          </div>
        </div>
        <div className=''>
          <TourHeader text={`Images`} classes='text-2xl text-center ' />
          <div className='grid grid-cols-2 gap-4 mt-5'>
            <TourImge />
            <TourImge />
            <TourImge />
            <TourImge />
            <TourImge />
            <TourImge />
          </div>
          <TourComments />
        </div>
        <div className=''>
          <TourHeader text={`Booking`} classes='text-2xl text-center' />
          <div className=''>
            <BookingCalender />
          </div>
          <div className=''>
            <h2 className='text-center text-2xl my-10'>
              {' '}
              Tours you might like
            </h2>
            <MightLike />
            <MightLike />
            <MightLike />
            <MightLike />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TourPage
