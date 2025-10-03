'use client'
import React, { useState } from 'react'
import { FaPlus, FaSearch, FaFilter } from 'react-icons/fa'
import AdminTourCard from '@/components/admin/AdminTourCard'
import Link from 'next/link'

interface Tour {
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

const AdminViewAllTours = () => {
  // Mock data - replace with real data from database
  const [tours, setTours] = useState<Tour[]>([
    {
      id: 1,
      name: 'Amazing Vietnam 10 Day Adventure',
      country: 'vietnam',
      duration: '10 Days',
      price: 2500,
      rating: 4.8,
      destinations: 5,
      maxPeople: 15,
      image:
        'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
    },
    {
      id: 2,
      name: 'Thailand Beach & Culture Tour',
      country: 'thailand',
      duration: '8 Days',
      price: 1800,
      rating: 4.7,
      destinations: 4,
      maxPeople: 12,
      image:
        'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
    },
    {
      id: 3,
      name: 'Japan Cultural Experience',
      country: 'japan',
      duration: '12 Days',
      price: 3500,
      rating: 4.9,
      destinations: 6,
      maxPeople: 10,
      image:
        'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
    },
    {
      id: 4,
      name: 'Australian Outback Adventure',
      country: 'australia',
      duration: '14 Days',
      price: 4200,
      rating: 4.6,
      destinations: 7,
      maxPeople: 16,
      image:
        'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
    },
  ])

  const [searchQuery, setSearchQuery] = useState('')
  const [filterCountry, setFilterCountry] = useState('all')

  const handleEdit = (id: number) => {
    console.log('Edit tour:', id)
    // Navigate to edit page or open modal
  }

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this tour?')) {
      setTours(tours.filter((tour) => tour.id !== id))
      console.log('Deleted tour:', id)
    }
  }

  // Filter tours
  const filteredTours = tours.filter((tour) => {
    const matchesSearch =
      tour.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.country.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCountry =
      filterCountry === 'all' || tour.country === filterCountry
    return matchesSearch && matchesCountry
  })

  return (
    <div className='min-h-[calc(100vh-100px)] bg-gray-50 py-8'>
      <div className='max-w-7xl mx-auto px-4'>
        {/* Header */}
        <div className='mb-8'>
          <div className='flex items-center justify-between mb-4'>
            <div>
              <h1 className='text-4xl font-bold text-gray-800 mb-2'>
                All Tours
              </h1>
              <p className='text-gray-600'>Manage your tour packages</p>
            </div>
            <Link href='/admin/add-tour'>
              <button className='flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg'>
                <FaPlus />
                Add New Tour
              </button>
            </Link>
          </div>

          {/* Stats Bar */}
          <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mb-6'>
            <div className='bg-white rounded-lg shadow p-4 border-l-4 border-blue-500'>
              <p className='text-gray-600 text-sm font-semibold'>Total Tours</p>
              <p className='text-3xl font-bold text-gray-800 mt-1'>
                {tours.length}
              </p>
            </div>
            <div className='bg-white rounded-lg shadow p-4 border-l-4 border-green-500'>
              <p className='text-gray-600 text-sm font-semibold'>
                Active Tours
              </p>
              <p className='text-3xl font-bold text-gray-800 mt-1'>
                {tours.length}
              </p>
            </div>
            <div className='bg-white rounded-lg shadow p-4 border-l-4 border-orange-500'>
              <p className='text-gray-600 text-sm font-semibold'>Avg Rating</p>
              <p className='text-3xl font-bold text-gray-800 mt-1'>4.8</p>
            </div>
            <div className='bg-white rounded-lg shadow p-4 border-l-4 border-purple-500'>
              <p className='text-gray-600 text-sm font-semibold'>Countries</p>
              <p className='text-3xl font-bold text-gray-800 mt-1'>4</p>
            </div>
          </div>

          {/* Search and Filter Bar */}
          <div className='bg-white rounded-lg shadow-lg p-4 mb-6'>
            <div className='flex flex-col md:flex-row gap-4'>
              {/* Search */}
              <div className='flex-1 relative'>
                <FaSearch className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400' />
                <input
                  type='text'
                  placeholder='Search tours by name or country...'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className='w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </div>

              {/* Filter */}
              <div className='md:w-64'>
                <div className='relative'>
                  <FaFilter className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400' />
                  <select
                    value={filterCountry}
                    onChange={(e) => setFilterCountry(e.target.value)}
                    className='w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white'
                  >
                    <option value='all'>All Countries</option>
                    <option value='vietnam'>Vietnam</option>
                    <option value='thailand'>Thailand</option>
                    <option value='japan'>Japan</option>
                    <option value='australia'>Australia</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className='mt-3 text-sm text-gray-600'>
              Showing{' '}
              <span className='font-bold text-blue-600'>
                {filteredTours.length}
              </span>{' '}
              of {tours.length} tours
            </div>
          </div>
        </div>

        {/* Tours Grid */}
        {/* space-y-4 */}
        <div className=' grid md:grid-cols-3  gap-5'>
          {filteredTours.length > 0 ? (
            filteredTours.map((tour) => (
              <AdminTourCard
                key={tour.id}
                tour={tour}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))
          ) : (
            <div className='bg-white rounded-lg shadow-lg p-12 text-center'>
              <FaSearch className='text-6xl text-gray-300 mx-auto mb-4' />
              <h3 className='text-xl font-bold text-gray-800 mb-2'>
                No tours found
              </h3>
              <p className='text-gray-600 mb-6'>
                Try adjusting your search or filter
              </p>
              <Link href='/admin/tours/new'>
                <button className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors'>
                  Add Your First Tour
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminViewAllTours
