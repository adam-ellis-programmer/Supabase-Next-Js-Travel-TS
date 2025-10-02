import React from 'react'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

const ReviewCard = () => {
  return (
    <div className='shadow-2xl bg-[#305570] rounded-lg overflow-hidden hover:shadow-3xl transition-all duration-300 hover:-translate-y-1'>
      {/* Header with profile */}
      <div className='relative flex justify-center items-center p-8 pb-6'>
        {/* Decorative background */}
        <div className='absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/10 to-transparent'></div>

        {/* Quote icon decoration */}
        <FaQuoteLeft className='absolute top-4 left-4 text-white/10 text-5xl' />

        <div className='relative'>
          <div className='h-[120px] w-[120px] rounded-full bg-gradient-to-br from-rose-400 to-rose-600 p-1 shadow-xl'>
            <div className='h-full w-full rounded-full overflow-hidden border-4 border-white/20'>
              <img
                className='w-full h-full object-cover object-center'
                src='https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/person1.jpg'
                alt='Sarah Smith'
              />
            </div>
          </div>

          {/* Stars positioned near profile */}
          <div className='flex justify-center gap-1 mt-3 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 w-fit mx-auto'>
            <FaStar className='text-lg text-yellow-400' />
            <FaStar className='text-lg text-yellow-400' />
            <FaStar className='text-lg text-yellow-400' />
            <FaStar className='text-lg text-yellow-400' />
            <FaStar className='text-lg text-yellow-400' />
          </div>
        </div>
      </div>

      {/* Name and title */}
      <div className='text-center px-6 pb-3'>
        <h3 className='text-2xl font-bold text-white'>Sarah Smith</h3>
        <p className='text-blue-200 text-sm mt-1'>Verified Traveler</p>
        <p className='text-white/60 text-xs mt-1'>Vietnam Tour • March 2025</p>
      </div>

      {/* Review content */}
      <div className='px-6 pb-8'>
        <div className='bg-white/5 backdrop-blur-sm rounded-lg p-5 border border-white/10'>
          <p className='text-white/90 text-center leading-relaxed italic'>
            "An absolutely incredible experience from start to finish! The tour
            was perfectly organized, our guide was knowledgeable and friendly,
            and every destination exceeded my expectations. The food, culture,
            and landscapes were breathtaking. I can't recommend this enough!"
          </p>
        </div>

        {/* Additional info */}
        <div className='flex justify-center gap-4 mt-4 text-xs text-white/60'>
          <span className='flex items-center gap-1'>
            <span className='w-2 h-2 bg-green-400 rounded-full'></span>
            Verified Purchase
          </span>
          <span>•</span>
          <span>2 weeks ago</span>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
