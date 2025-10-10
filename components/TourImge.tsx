// components/TourImge.tsx

import React from 'react'
import { TourImage } from '@/types/tours'

const TourImge = ({ image }: { image: TourImage }) => {
  return (
    <div className='relative h-48 overflow-hidden rounded-lg group cursor-pointer'>
      <img
        className='h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110'
        src={image.image_url}
        alt={image.image_alt || 'Tour image'}
      />
      {image.is_primary && (
        <div className='absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded'>
          Primary
        </div>
      )}
    </div>
  )
}

export default TourImge
