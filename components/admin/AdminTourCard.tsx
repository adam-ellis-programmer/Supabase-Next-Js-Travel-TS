import Link from 'next/link'
import { FaBinoculars } from 'react-icons/fa'

import React from 'react'
import {
  FaEdit,
  FaTrash,
  FaStar,
  FaClock,
  FaMapMarkerAlt,
  FaUsers,
} from 'react-icons/fa'
import { TiTick } from 'react-icons/ti'
interface AdminTourCardProps {
  tour: {
    id: number
    name: string
    country: string
    duration: string
    price: number
    rating: number
    destinations: number
    maxPeople: number
    image: string
  }
  onEdit: (id: number) => void
  onDelete: (id: number) => void
}

const AdminTourCard = ({ tour, onEdit, onDelete }: AdminTourCardProps) => {
  return (
    <div className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 h-[200px]'>
      <div className='grid md:grid-cols-[150px_1fr] h-full'>
        {/* Image Section */}
        <div className='relative overflow-hidden h-[140px] md:h-auto'>
          <img
            src={tour.image}
            alt={tour.name}
            className='w-full h-full object-cover'
          />
          {/* Country Badge */}
          <div className='absolute top-2 left-2 bg-blue-400 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg'>
            {tour.country}
          </div>
          {/* Rating */}
          <div className='absolute top-2 right-2 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg'>
            <FaStar className='text-yellow-400 text-xs' />
            {tour.rating}
          </div>
        </div>

        {/* Content Section */}
        <div className='p-3 flex flex-col justify-between'>
          <div>
            <h3 className='text-base font-bold text-gray-800 mb-2'>
              {tour.name}
            </h3>

            {/* Quick Info */}
            <div className='grid grid-cols-2 gap-2 mb-3'>
              <div className='flex items-center gap-1 text-xs text-gray-600'>
                <FaClock className='text-blue-400 flex-shrink-0 text-xs' />
                <span>{tour.duration}</span>
              </div>
              <div className='flex items-center gap-1 text-xs text-gray-600'>
                <FaMapMarkerAlt className='text-red-400 flex-shrink-0 text-xs' />
                <span>{tour.destinations} Cities</span>
              </div>
              <div className='flex items-center gap-1 text-xs text-gray-600'>
                <FaUsers className='text-green-400 flex-shrink-0 text-xs' />
                <span>Max {tour.maxPeople}</span>
              </div>
              <div className='text-xs text-gray-600'>
                <span className='font-bold text-rose-500 text-sm'>
                  £{tour.price.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className='flex gap-2 pt-2 border-t'>
            <button
              onClick={() => onEdit(tour.id)}
              className='flex-1 flex items-center justify-center gap-1 px-2 py-1.5 bg-slate-400 hover:bg-blue-600 text-white rounded text-xs font-semibold transition-colors'
            >
              <FaEdit className='text-xs' />
              Edit
            </button>
            <Link
              href={`/tours/${tour.id}`}
              className='flex-1 flex items-center justify-center gap-1 px-2 py-1.5 bg-blue-400 hover:bg-blue-600 text-white rounded text-xs font-semibold transition-colors'
            >
              <FaBinoculars />
              View
            </Link>
            <button
              onClick={() => onDelete(tour.id)}
              className='flex-1 flex items-center justify-center gap-1 px-2 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded text-xs font-semibold transition-colors'
            >
              <FaTrash className='text-xs' />
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminTourCard
