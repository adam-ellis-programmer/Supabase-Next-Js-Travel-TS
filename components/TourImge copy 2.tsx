'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { TourImage } from '@/types/tours'

const TourImge = ({ image }: { image: TourImage }) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className='relative h-48 overflow-hidden rounded-lg group cursor-pointer'>
      {/* Spinner - shows while loading */}
      {isLoading && (
        <div className='absolute inset-0 flex items-center justify-center bg-gray-200 z-10'>
          <div className='animate-spin rounded-full h-10 w-10 border-4 border-gray-300 border-t-blue-600'></div>
        </div>
      )}

      {/* Image */}
      <Image
        src={image.image_url}
        alt={image.image_alt || 'Tour image'}
        fill
        className='object-cover object-center transition-transform duration-300 group-hover:scale-110'
        sizes='(max-width: 768px) 50vw, 25vw'
        onLoad={() => setIsLoading(false)}
      />

      {/* Primary badge */}
      {image.is_primary && (
        <div className='absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded z-20'>
          Primary
        </div>
      )}
    </div>
  )
}

export default TourImge
