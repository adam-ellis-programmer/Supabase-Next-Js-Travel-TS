import React from 'react'
import { Button } from '../ui/button'
import { FaClock, FaMapMarkerAlt, FaStar, FaUsers } from 'react-icons/fa'
import { TopSellers } from '@/components/TopSellers'

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
        <img
          src={image[0]?.image_url}
          alt={tour_name}
          className='object-cover object-bottom h-full w-full group-hover:scale-105 transition-transform duration-500'
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
          <Button className='bg-blue-600 hover:bg-blue-700 px-6 py-2 h-auto text-base shadow-lg hover:shadow-xl transition-all'>
            More Info
          </Button>
        </div>
      </div>
    </div>
  )
}

export default LongCard
