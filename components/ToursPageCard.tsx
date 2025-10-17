// ========== ToursPageCard.tsx ==========
import Link from 'next/link'
import React from 'react'
import { FaStar, FaClock, FaMapMarkerAlt, FaUsers } from 'react-icons/fa'

interface Tour {
  id: number
  name: string
  country: string
  duration: string
  price: number
  rating: number
  reviews: number
  destinations: number
  maxPeople: number
  image: string
  description: string
}

export interface TourImage {
  id: number
  image_url: string
  storage_path: string
  display_order: number
}

interface ToursPageCardProps {
  tour: Tour
  // tour_images?: TourImage[]
}

const ToursPageCard = ({ tour }: ToursPageCardProps) => {
  // console.log(tour)

  return (
    <div className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 mb-4 group'>
      <div className='grid md:grid-cols-[280px_1fr] h-full'>
        {/* Image Section */}
        <div className='relative overflow-hidden h-[200px] md:h-auto'>
          <img
            src={tour.image}
            alt={tour.name}
            className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
          />
          {/* Rating Badge */}
          <div className='absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg'>
            <FaStar className='text-yellow-500' />
            {tour.rating.toFixed(2)}
            <span className='text-gray-500 text-xs ml-1'>({tour.reviews})</span>
          </div>
          {/* Country Badge */}
          <div className='absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg'>
            {tour.country}
          </div>
        </div>

        {/* Content Section */}
        <div className='p-5 flex flex-col justify-between'>
          <div>
            <h3 className='text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors'>
              {tour.name}
            </h3>
            <p className='text-gray-600 text-sm leading-relaxed mb-4'>
              {tour.description}
            </p>

            {/* Quick Info */}
            <div className='flex flex-wrap gap-4 mb-4'>
              <div className='flex items-center gap-2 text-sm text-gray-600'>
                <FaClock className='text-blue-600' />
                <span>{tour.duration}</span>
              </div>
              <div className='flex items-center gap-2 text-sm text-gray-600'>
                <FaMapMarkerAlt className='text-red-600' />
                <span>{tour.destinations} Cities</span>
              </div>
              <div className='flex items-center gap-2 text-sm text-gray-600'>
                <FaUsers className='text-green-600' />
                <span>Max {tour.maxPeople}</span>
              </div>
            </div>
          </div>

          {/* Price and Button */}
          <div className='flex items-center justify-between pt-3 border-t'>
            <div>
              <p className='text-gray-500 text-xs'>From</p>
              <p className='text-rose-600 text-2xl font-bold'>
                £{tour.price.toLocaleString()}
              </p>
              <p className='text-gray-500 text-xs'>per person</p>
            </div>

            <Link
              href={`/tours/${tour.id}`}
              className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl'
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToursPageCard
export type { Tour }
