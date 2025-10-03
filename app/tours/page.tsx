'use client'
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import AllToursButton from '@/components/AllToursButton'
import ToursPageCard, { Tour } from '@/components/ToursPageCard'

const AllTours = () => {
  const countries = [
    'all',
    'australia',
    'vietnam',
    'thailand',
    'japan',
    'new zealand',
  ]

  // Static mock tour data - no random generation to avoid hydration errors
  const allTours: Tour[] = [
    {
      id: 1,
      name: 'Amazing Australia 10 Day Adventure',
      country: 'australia',
      duration: '10 Days',
      price: 2000,
      rating: 4.8,
      reviews: 156,
      destinations: 4,
      maxPeople: 15,
      image:
        'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
      description:
        'Discover breathtaking landscapes, immerse yourself in rich culture, and create unforgettable memories on this carefully curated journey.',
    },
    {
      id: 2,
      name: 'Amazing Vietnam 11 Day Adventure',
      country: 'vietnam',
      duration: '11 Days',
      price: 2500,
      rating: 4.9,
      reviews: 203,
      destinations: 5,
      maxPeople: 12,
      image:
        'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
      description:
        'Discover breathtaking landscapes, immerse yourself in rich culture, and create unforgettable memories on this carefully curated journey.',
    },
    {
      id: 3,
      name: 'Amazing Thailand 12 Day Adventure',
      country: 'thailand',
      duration: '12 Days',
      price: 3000,
      rating: 4.7,
      reviews: 128,
      destinations: 6,
      maxPeople: 18,
      image:
        'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
      description:
        'Discover breathtaking landscapes, immerse yourself in rich culture, and create unforgettable memories on this carefully curated journey.',
    },
    {
      id: 4,
      name: 'Amazing Japan 13 Day Adventure',
      country: 'japan',
      duration: '13 Days',
      price: 3500,
      rating: 4.95,
      reviews: 187,
      destinations: 4,
      maxPeople: 14,
      image:
        'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
      description:
        'Discover breathtaking landscapes, immerse yourself in rich culture, and create unforgettable memories on this carefully curated journey.',
    },
    {
      id: 5,
      name: 'Amazing New Zealand 14 Day Adventure',
      country: 'new zealand',
      duration: '14 Days',
      price: 4000,
      rating: 4.85,
      reviews: 145,
      destinations: 5,
      maxPeople: 16,
      image:
        'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
      description:
        'Discover breathtaking landscapes, immerse yourself in rich culture, and create unforgettable memories on this carefully curated journey.',
    },
    {
      id: 6,
      name: 'Amazing Australia 15 Day Adventure',
      country: 'australia',
      duration: '15 Days',
      price: 4500,
      rating: 4.75,
      reviews: 92,
      destinations: 6,
      maxPeople: 20,
      image:
        'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
      description:
        'Discover breathtaking landscapes, immerse yourself in rich culture, and create unforgettable memories on this carefully curated journey.',
    },
    {
      id: 7,
      name: 'Amazing Vietnam 16 Day Adventure',
      country: 'vietnam',
      duration: '16 Days',
      price: 5000,
      rating: 4.88,
      reviews: 211,
      destinations: 4,
      maxPeople: 13,
      image:
        'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
      description:
        'Discover breathtaking landscapes, immerse yourself in rich culture, and create unforgettable memories on this carefully curated journey.',
    },
    {
      id: 8,
      name: 'Amazing Thailand 17 Day Adventure',
      country: 'thailand',
      duration: '17 Days',
      price: 5500,
      rating: 4.82,
      reviews: 167,
      destinations: 5,
      maxPeople: 17,
      image:
        'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
      description:
        'Discover breathtaking landscapes, immerse yourself in rich culture, and create unforgettable memories on this carefully curated journey.',
    },
    {
      id: 9,
      name: 'Amazing Japan 18 Day Adventure',
      country: 'japan',
      duration: '18 Days',
      price: 6000,
      rating: 4.92,
      reviews: 198,
      destinations: 6,
      maxPeople: 19,
      image:
        'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
      description:
        'Discover breathtaking landscapes, immerse yourself in rich culture, and create unforgettable memories on this carefully curated journey.',
    },
    {
      id: 10,
      name: 'Amazing New Zealand 19 Day Adventure',
      country: 'new zealand',
      duration: '19 Days',
      price: 6500,
      rating: 4.79,
      reviews: 134,
      destinations: 4,
      maxPeople: 15,
      image:
        'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
      description:
        'Discover breathtaking landscapes, immerse yourself in rich culture, and create unforgettable memories on this carefully curated journey.',
    },
  ]

  const [selectedCountry, setSelectedCountry] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  // prettier-ignore
  // Filter tours based on selected country and search
  const filteredTours = allTours.filter((tour) => {
    const matchesCountry = selectedCountry === 'all' || tour.country === selectedCountry

    console.log('matches country ', matchesCountry)

    const matchesSearch =
      tour.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.country.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCountry && matchesSearch
  })

  /***********************************************>/
    .filter() goes through every tour in the allTours array
    For each tour, it runs the function inside
    If the function returns true, that tour is included in filteredTours
    If it returns false, that tour is excluded
   ************************************************/

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

export default AllTours
