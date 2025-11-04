import React from 'react'
import Image from 'next/image'
import { Popular } from '../PopularDest'

interface popularData {
  item: Popular
}

const PopularCard = ({ item }: popularData) => {
  const { img_url, country_name, flag_emoji } = item

  return (
    <div className='h-[300px] relative rounded-lg overflow-hidden'>
      {/* Image with lazy loading */}
      <Image
        src={img_url}
        alt={`${country_name} destination`}
        fill
        className='object-cover'
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 320px'
        placeholder='blur'
        blurDataURL='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2UyZThlZiIvPjwvc3ZnPg=='
      />

      {/* Overlay */}
      <div className='absolute inset-0 bg-[#2e415785] grid place-items-center z-10'>
        <div>
          <p className='text-3xl text-white font-semibold'>{country_name}</p>
        </div>
      </div>

      {/* Flag emoji */}
      <span className='absolute right-2 bottom-2 z-20 text-4xl'>
        {flag_emoji}
      </span>
    </div>
  )
}

export default PopularCard
