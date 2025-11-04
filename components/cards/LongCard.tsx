import React from 'react'
import { Button } from '../ui/button'
import { FaClock, FaMapMarkerAlt, FaStar, FaUsers } from 'react-icons/fa'
import { TopSellers } from '@/components/TopSellers'
import Link from 'next/link'
import Image from 'next/image'

interface LongCardProps {
  data: TopSellers // Single item, not array
}

const LongCard = ({ data }: LongCardProps) => {
  const {
    best_seller,
    tour_name,
    destinations,
    duration,
    group_size,
    description,
    tags,
    price,
    image,
    id,
  } = data

  const truncate = (text: string) => {
    const length = 110
    if (text.length > length) {
      return text.slice(0, length) + ' .... see more'
    }
    return text
  }

  return (
    <div className='shadow-2xl grid grid-rows-[300px_1fr] md:grid-rows-[200px_1fr] rounded-lg overflow-hidden hover:shadow-3xl transition-shadow duration-300 bg-white'>
      <div className='relative group'>
        <Image
          src={data.image[0]?.image_url}
          alt={data.tour_name}
          fill
          className='object-cover'
          sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw'
          placeholder='blur'
          blurDataURL='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2UyZThlZiIvPjwvc3ZnPg=='
        />
        {/* Overlay badges */}
        {best_seller && (
          <div className='absolute top-3 left-3 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg'>
            Best Seller
          </div>
        )}
        <div className='absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg'>
          <FaStar className='text-yellow-500' />
          4.8
        </div>
      </div>

      <div className='flex flex-col justify-between p-5'>
        <div>
          <div className='flex items-start justify-between gap-2 mb-2'>
            <h2 className='text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors'>
              {tour_name}
            </h2>
          </div>

          {/* Quick info tags */}
          <div className='flex flex-wrap gap-3 mb-3'>
            <div className='flex items-center gap-1 text-sm text-gray-600'>
              <FaClock className='text-blue-600' />
              <span>{duration}</span>
            </div>
            <div className='flex items-center gap-1 text-sm text-gray-600'>
              <FaMapMarkerAlt className='text-red-600' />
              <span>{destinations} Cities</span>
            </div>
            <div className='flex items-center gap-1 text-sm text-gray-600'>
              <FaUsers className='text-green-600' />
              <span>Max {group_size}</span>
            </div>
          </div>

          <p className='text-gray-600 leading-relaxed'>
            {truncate(description)}
          </p>

          {/* Highlights */}
          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.split(',').map((tag, idx) => (
              <span
                key={idx}
                className='bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full border border-blue-200'
              >
                {tag.trim()}
              </span>
            ))}
          </div>
        </div>

        <div className='flex justify-between items-center mt-5 pt-4 border-t'>
          <div>
            <p className='text-gray-500 text-sm'>From</p>
            <p className='text-rose-600 text-3xl font-bold'>
              £{price.toLocaleString()}
            </p>
            <p className='text-gray-500 text-xs'>per person</p>
          </div>
          <Link href={`/tours/${id}`}>
            <Button className='bg-blue-600 hover:bg-blue-700 px-6 py-2 h-auto text-base shadow-lg hover:shadow-xl transition-all'>
              More Info
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LongCard
