'use client'
import React, { useState } from 'react'
import { TourImage } from '@/types/tours'

/**
 * Alternative TourImge component using regular <img> tag
 * Use this for data/stress testing when Next.js Image component has issues
 */
const TourImge = ({ image }: { image: TourImage }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleLoad = () => {
    setIsLoading(false)
    setHasError(false)
  }

  const handleError = () => {
    console.error('Image failed to load:', image.image_url)
    setIsLoading(false)
    setHasError(true)
  }

  return (
    <div className='relative h-48 overflow-hidden rounded-lg group cursor-pointer bg-gray-200'>
      {/* Spinner - shows while loading */}
      {isLoading && !hasError && (
        <div className='absolute inset-0 flex items-center justify-center bg-gray-200 z-10'>
          <div className='animate-spin rounded-full h-10 w-10 border-4 border-gray-300 border-t-blue-600'></div>
        </div>
      )}

      {/* Error State */}
      {hasError && (
        <div className='absolute inset-0 flex flex-col items-center justify-center bg-gray-300 text-gray-600 p-4'>
          <svg
            className='w-12 h-12 mb-2'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
            />
          </svg>
          <span className='text-xs text-center'>Image unavailable</span>
        </div>
      )}

      {/* Regular img tag - more reliable for external URLs during testing */}
      {!hasError && (
        <img
          src={image.image_url}
          alt={image.image_alt || 'Tour image'}
          className='absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110'
          onLoad={handleLoad}
          onError={handleError}
          loading='lazy'
        />
      )}

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
