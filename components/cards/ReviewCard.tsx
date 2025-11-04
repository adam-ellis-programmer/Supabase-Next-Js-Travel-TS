'use client'
import React from 'react'
import Image from 'next/image'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import { Review } from '../Reviews'

interface ReviewItem {
  item: Review
}

// Helper functions
const getRelativeTime = (dateString: string) => {
  const date = new Date(dateString)
  const now = new Date()
  const diffInMs = now.getTime() - date.getTime()
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24))

  if (diffInDays === 0) return 'Today'
  if (diffInDays === 1) return '1 day ago'
  if (diffInDays < 7) return `${diffInDays} days ago`
  if (diffInDays < 30) {
    const weeks = Math.floor(diffInDays / 7)
    return weeks === 1 ? '1 week ago' : `${weeks} weeks ago`
  }
  if (diffInDays < 365) {
    const months = Math.floor(diffInDays / 30)
    return months === 1 ? '1 month ago' : `${months} months ago`
  }
  const years = Math.floor(diffInDays / 365)
  return years === 1 ? '1 year ago' : `${years} years ago`
}

const formatTourDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
}

const ReviewCard = ({ item }: ReviewItem) => {
  // Generate star array based on rating
  const stars = Array.from({ length: 5 }, (_, i) => i < item.rating)

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
            {/* OPTIMIZED IMAGE */}
            <div className='h-full w-full rounded-full overflow-hidden border-4 border-white/20 relative'>
              <Image
                src={item.reviewer_image_url}
                alt={item.reviewer_name}
                fill
                className='object-cover object-center'
                sizes='120px'
                placeholder='blur'
                blurDataURL='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI2MCIgY3k9IjYwIiByPSI2MCIgZmlsbD0iI2U1ZTdlYiIvPjwvc3ZnPg=='
              />
            </div>
          </div>

          {/* Stars positioned near profile - dynamic based on rating */}
          <div className='flex justify-center gap-1 mt-3 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 w-fit mx-auto'>
            {stars.map((filled, index) => (
              <FaStar
                key={index}
                className={`text-lg ${
                  filled ? 'text-yellow-400' : 'text-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Name and title */}
      <div className='text-center px-6 pb-3'>
        <h3 className='text-2xl font-bold text-white'>{item.reviewer_name}</h3>
        <p className='text-blue-200 text-sm mt-1'>{item.reviewer_title}</p>
        <p className='text-white/60 text-xs mt-1'>
          {item.tour_name} • {formatTourDate(item.tour_date)}
        </p>
      </div>

      {/* Review content */}
      <div className='px-6 pb-8'>
        <div className='bg-white/5 backdrop-blur-sm rounded-lg p-5 border border-white/10'>
          <p className='text-white/90 text-center leading-relaxed italic'>
            "{item.review_text}"
          </p>
        </div>

        {/* Additional info */}
        <div className='flex justify-center gap-4 mt-4 text-xs text-white/60'>
          {item.is_verified && (
            <>
              <span className='flex items-center gap-1'>
                <span className='w-2 h-2 bg-green-400 rounded-full'></span>
                Verified Purchase
              </span>
              <span>-</span>
            </>
          )}
          <span>{getRelativeTime(item.created_at)}</span>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
