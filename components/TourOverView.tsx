import React from 'react'
import {
  FaMapMarkerAlt,
  FaUsers,
  FaClock,
  FaStar,
  FaCheckCircle,
} from 'react-icons/fa'

const TourOverview = () => {
  return (
    <div className='border rounded-lg p-6 max-w-4xl'>
      <h2 className='text-2xl font-bold mb-6'>Tour Overview</h2>

      {/* Quick Info Grid */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 pb-6 border-b'>
        <div className='flex items-center gap-2'>
          <FaClock className='w-5 h-5 text-blue-600' />
          <div>
            <p className='text-sm text-gray-600'>Duration</p>
            <p className='font-semibold'>5 Days</p>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <FaUsers className='w-5 h-5 text-blue-600' />
          <div>
            <p className='text-sm text-gray-600'>Group Size</p>
            <p className='font-semibold'>Max 15</p>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <FaStar className='w-5 h-5 text-blue-600' />
          <div>
            <p className='text-sm text-gray-600'>Difficulty</p>
            <p className='font-semibold'>Moderate</p>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <FaMapMarkerAlt className='w-5 h-5 text-blue-600' />
          <div>
            <p className='text-sm text-gray-600'>Destinations</p>
            <p className='font-semibold'>3 Cities</p>
          </div>
        </div>
      </div>

      {/* Key Points */}
      <div className='mb-8'>
        <h3 className='text-xl font-semibold mb-4'>Key Points</h3>
        <div className='grid md:grid-cols-2 gap-3'>
          <div className='flex items-start gap-2'>
            <FaCheckCircle className='w-5 h-5 text-green-600 mt-0.5 flex-shrink-0' />
            <p className='text-gray-700'>
              Explore historic landmarks and UNESCO World Heritage sites
            </p>
          </div>
          <div className='flex items-start gap-2'>
            <FaCheckCircle className='w-5 h-5 text-green-600 mt-0.5 flex-shrink-0' />
            <p className='text-gray-700'>
              Experience authentic local cuisine with guided food tours
            </p>
          </div>
          <div className='flex items-start gap-2'>
            <FaCheckCircle className='w-5 h-5 text-green-600 mt-0.5 flex-shrink-0' />
            <p className='text-gray-700'>
              Visit traditional markets and artisan workshops
            </p>
          </div>
          <div className='flex items-start gap-2'>
            <FaCheckCircle className='w-5 h-5 text-green-600 mt-0.5 flex-shrink-0' />
            <p className='text-gray-700'>
              Comfortable accommodations in centrally-located hotels
            </p>
          </div>
          <div className='flex items-start gap-2'>
            <FaCheckCircle className='w-5 h-5 text-green-600 mt-0.5 flex-shrink-0' />
            <p className='text-gray-700'>
              Professional English-speaking guide throughout the trip
            </p>
          </div>
          <div className='flex items-start gap-2'>
            <FaCheckCircle className='w-5 h-5 text-green-600 mt-0.5 flex-shrink-0' />
            <p className='text-gray-700'>
              All entrance fees and transportation included
            </p>
          </div>
        </div>
      </div>

      {/* Why Take This Trip */}
      <div className='mb-8 bg-blue-50 p-5 rounded-lg'>
        <h3 className='text-xl font-semibold mb-3'>Why Take This Trip?</h3>
        <p className='text-gray-700 mb-3'>
          This carefully curated journey offers the perfect blend of cultural
          immersion and relaxation. You'll discover hidden gems that most
          tourists miss while traveling with a small, intimate group that allows
          for personalized experiences.
        </p>
        <p className='text-gray-700'>
          Our expert guides bring history to life with captivating stories, and
          we've partnered with local communities to ensure authentic,
          sustainable tourism that benefits everyone. This isn't just
          sightseeing—it's a transformative travel experience.
        </p>
      </div>

      {/* Age Group & Logistics */}
      <div className='grid md:grid-cols-3 gap-6'>
        <div className='bg-gray-50 p-4 rounded-lg'>
          <h3 className='font-semibold mb-2 flex items-center gap-2'>
            <FaUsers className='w-5 h-5 text-blue-600' />
            Age Group
          </h3>
          <p className='text-gray-700'>
            Suitable for ages 18-65. Requires moderate fitness level for walking
            tours.
          </p>
        </div>

        <div className='bg-gray-50 p-4 rounded-lg'>
          <h3 className='font-semibold mb-2 flex items-center gap-2'>
            <FaMapMarkerAlt className='w-5 h-5 text-green-600' />
            Pick-up Point
          </h3>
          <p className='text-gray-700'>
            Downtown Hotel Lobby
            <br />
            123 Main Street
            <br />
            8:00 AM
          </p>
        </div>

        <div className='bg-gray-50 p-4 rounded-lg'>
          <h3 className='font-semibold mb-2 flex items-center gap-2'>
            <FaMapMarkerAlt className='w-5 h-5 text-red-600' />
            Drop-off Point
          </h3>
          <p className='text-gray-700'>
            City Airport Terminal
            <br />
            or Downtown Hotel
            <br />
            6:00 PM (Day 5)
          </p>
        </div>
      </div>
    </div>
  )
}

export default TourOverview
