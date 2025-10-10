'use client'
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import AllToursButton from '@/components/AllToursButton'
import ToursPageCard, { Tour } from '@/components/ToursPageCard'

interface ToursPageClientProps {
  initialTours: Tour[]
}

export default function ToursPageClient({
  initialTours,
}: ToursPageClientProps) {
  //   console.log(initialTours)

  const countries = [
    'all',
    'australia',
    'vietnam',
    'thailand',
    'japan',
    'new zealand',
  ]

  const [selectedCountry, setSelectedCountry] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  // Filter tours based on selected country and search
  const filteredTours = initialTours.filter((tour) => {
    const matchesCountry =
      selectedCountry === 'all' || tour.country === selectedCountry
    const matchesSearch =
      tour.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.country.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCountry && matchesSearch
  })

  return (
    <div className='min-h-[calc(100vh-100px)] max-w-[1400px] mx-auto px-4 py-8'>
      {/* Header */}
      <div className='mb-8'>
        <h1 className='text-4xl font-bold text-gray-800 mb-2'>
          Explore Our Tours
        </h1>
        <p className='text-gray-600'>
          Discover amazing destinations around the world
        </p>
      </div>

      {/* Search Bar */}
      <div className='mb-6'>
        <div className='relative max-w-xl'>
          <FaSearch className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400' />
          <input
            type='text'
            placeholder='Search tours by name or country...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm'
          />
        </div>
      </div>

      <div className='grid lg:grid-cols-[280px_1fr] gap-6'>
        {/* Sidebar - Filters */}
        <div>
          <div className='bg-white rounded-lg shadow-lg p-5 sticky top-4'>
            <h2 className='text-lg font-bold text-gray-800 mb-4 pb-3 border-b'>
              Filter by Country
            </h2>
            <div className='space-y-1'>
              {countries.map((country) => (
                <AllToursButton
                  key={country}
                  country={country}
                  isActive={selectedCountry === country}
                  onClick={() => setSelectedCountry(country)}
                />
              ))}
            </div>

            {/* Results count */}
            <div className='mt-6 pt-4 border-t'>
              <p className='text-sm text-gray-600'>
                <span className='font-bold text-blue-600'>
                  {filteredTours.length}
                </span>{' '}
                tours found
              </p>
            </div>
          </div>
        </div>

        {/* Main Content - Tours */}
        <div>
          {filteredTours.length > 0 ? (
            filteredTours.map((tour) => (
              <ToursPageCard key={tour.id} tour={tour} />
            ))
          ) : (
            <div className='bg-white rounded-lg shadow-lg p-12 text-center'>
              <FaSearch className='text-6xl text-gray-300 mx-auto mb-4' />
              <h3 className='text-xl font-bold text-gray-800 mb-2'>
                No tours found
              </h3>
              <p className='text-gray-600'>
                Try adjusting your filters or search terms
              </p>
            </div>
          )}
          <div className='flex justify-center mt-6'>
            <button className='bg-blue-500 hover:bg-blue-600 text-white text-xl px-8 py-3 rounded-xl w-60 capitalize transition-colors shadow-lg'>
              show more
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
