import React from 'react'
import { FaStar, FaClock, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa'

const MightLike = () => {
  return (
    <div className='grid grid-cols-[180px_1fr] mb-4 shadow-lg rounded-lg overflow-hidden bg-white hover:shadow-xl transition-all duration-300 group cursor-pointer'>
      <div className='relative overflow-hidden'>
        <img
          className='h-full w-full object-cover group-hover:scale-110 transition-transform duration-500'
          src='https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg'
          alt='15 Day Vietnam Adventure'
        />
        {/* Rating badge */}
        <div className='absolute top-2 left-2 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-md'>
          <FaStar className='text-yellow-500 text-xs' />
          4.9
        </div>
      </div>

      <div className='p-4 flex flex-col justify-between'>
        <div>
          <h3 className='text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors'>
            15 Day Vietnam Adventure
          </h3>
          <p className='text-gray-600 text-sm leading-relaxed mb-3'>
            Experience the best of Vietnam from bustling cities to serene
            countryside. Discover culture, cuisine, and stunning landscapes.
          </p>
        </div>

        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-3 text-xs text-gray-500'>
            <span className='flex items-center gap-1'>
              <FaClock className='text-blue-600' />
              15 Days
            </span>
            <span className='flex items-center gap-1'>
              <FaMapMarkerAlt className='text-red-600' />5 Cities
            </span>
          </div>

          <div className='flex items-center gap-2'>
            <span className='text-rose-600 font-bold text-lg'>£2,800</span>
            <FaArrowRight className='text-blue-600 group-hover:translate-x-1 transition-transform' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MightLike
