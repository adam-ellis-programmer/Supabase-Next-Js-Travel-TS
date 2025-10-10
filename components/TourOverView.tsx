import React from 'react'
import {
  FaMapMarkerAlt,
  FaUsers,
  FaClock,
  FaStar,
  FaCheckCircle,
} from 'react-icons/fa'
import { Tour } from '@/types/tours'

// Add proper typing
interface TourOverviewProps {
  data: Tour
}

const TourOverview = ({ data }: TourOverviewProps) => {
  return (
    <div className='border rounded-lg p-6 max-w-4xl mt-5'>
      <h2 className='text-2xl font-bold mb-6'>Tour Overview</h2>

      {/* Quick Info Grid - NOW USING DATA */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 pb-6 border-b'>
        <div className='flex items-center gap-2'>
          <FaClock className='w-5 h-5 text-blue-600' />
          <div>
            <p className='text-sm text-gray-600'>Duration</p>
            <p className='font-semibold'>{data.duration}</p>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <FaUsers className='w-5 h-5 text-blue-600' />
          <div>
            <p className='text-sm text-gray-600'>Group Size</p>
            <p className='font-semibold'>Max {data.group_size}</p>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <FaStar className='w-5 h-5 text-blue-600' />
          <div>
            <p className='text-sm text-gray-600'>Difficulty</p>
            <p className='font-semibold capitalize'>{data.difficulty}</p>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <FaMapMarkerAlt className='w-5 h-5 text-blue-600' />
          <div>
            <p className='text-sm text-gray-600'>Destinations</p>
            <p className='font-semibold'>{data.destinations} Cities</p>
          </div>
        </div>
      </div>

      {/* Key Points - NOW USING DATA */}
      <div className='mb-8'>
        <h3 className='text-xl font-semibold mb-4'>Key Points</h3>
        <div className='grid md:grid-cols-2 gap-3'>
          {data.key_points?.map((point, index) => (
            <div key={index} className='flex items-start gap-2'>
              <FaCheckCircle className='w-5 h-5 text-green-600 mt-0.5 flex-shrink-0' />
              <p className='text-gray-700'>{point}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Take This Trip - NOW USING DATA */}
      <div className='mb-8 bg-blue-50 p-5 rounded-lg'>
        <h3 className='text-xl font-semibold mb-3'>Why Take This Trip?</h3>
        <p className='text-gray-700'>{data.why_take_trip}</p>
      </div>

      {/* Age Group & Logistics - NOW USING DATA */}
      <div className='grid md:grid-cols-3 gap-6'>
        <div className='bg-gray-50 p-4 rounded-lg'>
          <h3 className='font-semibold mb-2 flex items-center gap-2'>
            <FaUsers className='w-5 h-5 text-blue-600' />
            Age Group
          </h3>
          <p className='text-gray-700'>{data.age_group}</p>
        </div>

        <div className='bg-gray-50 p-4 rounded-lg'>
          <h3 className='font-semibold mb-2 flex items-center gap-2'>
            <FaMapMarkerAlt className='w-5 h-5 text-green-600' />
            Pick-up Point
          </h3>
          <p className='text-gray-700 whitespace-pre-line'>
            {data.pickup_point}
          </p>
        </div>

        <div className='bg-gray-50 p-4 rounded-lg'>
          <h3 className='font-semibold mb-2 flex items-center gap-2'>
            <FaMapMarkerAlt className='w-5 h-5 text-red-600' />
            Drop-off Point
          </h3>
          <p className='text-gray-700 whitespace-pre-line'>
            {data.dropoff_point}
          </p>
        </div>
      </div>
    </div>
  )
}

export default TourOverview
