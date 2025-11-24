'use client'
import React, { useState, useEffect } from 'react'
import { FaPlus, FaSearch, FaFilter } from 'react-icons/fa'
import AdminTourCard from '@/components/admin/AdminTourCard'
import Link from 'next/link'
import {
  getToursAdmin,
  deleteTourAdmin,
} from '@/lib/supabase/actions/admin/admin-actions'
import { useRouter } from 'next/navigation'

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
  publish?: boolean
  bestSeller?: boolean
  showCase?: boolean
}

const AdminViewAllTours = () => {
  const router = useRouter()
  const [tours, setTours] = useState<Tour[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [filterCountry, setFilterCountry] = useState('all')

  // Fetch tours on component mount
  useEffect(() => {
    loadTours()
  }, [])

  const loadTours = async () => {
    setLoading(true)
    setError(null)

    const result = await getToursAdmin()
    console.log('result', result)

    if (result.success && result.data) {
      setTours(result.data)
    } else {
      setError(result.error || 'Failed to load tours')
    }

    setLoading(false)
  }

  const handleEdit = (id: number) => {
    console.log('Edit tour:', id)
    // Navigate to edit page
    // window.location.href = `/admin/edit-tour/${id}`
    router.push(`/admin/edit-tour/${id}`)
  }

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this tour?')) {
      return
    }

    const result = await deleteTourAdmin(id)

    if (result.success) {
      // Remove from local state
      setTours(tours.filter((tour) => tour.id !== id))
      alert('Tour deleted successfully')
    } else {
      alert(`Failed to delete tour: ${result.error}`)
    }
  }

  // Filter tours
  const filteredTours = tours.filter((tour) => {
    const matchesSearch =
      tour.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.country.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCountry =
      filterCountry === 'all' ||
      tour.country.toLowerCase() === filterCountry.toLowerCase()
    return matchesSearch && matchesCountry
  })

  // Get unique countries for filter dropdown
  const countries = Array.from(new Set(tours.map((t) => t.country)))

  // Calculate stats
  const activeToursCount = tours.filter((t) => t.publish).length
  const avgRating =
    tours.length > 0
      ? (tours.reduce((sum, t) => sum + t.rating, 0) / tours.length).toFixed(1)
      : '0.0'

  if (loading) {
    return (
      <div className='min-h-[calc(100vh-100px)] bg-gray-50 py-8 flex items-center justify-center'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4'></div>
          <p className='text-gray-600'>Loading tours...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className='min-h-[calc(100vh-100px)] bg-gray-50 py-8 flex items-center justify-center'>
        <div className='text-center'>
          <div className='text-red-600 text-xl mb-4'>⚠️ {error}</div>
          <button
            onClick={loadTours}
            className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg'
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }
  console.log(filteredTours)

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
                {activeToursCount}
              </p>
            </div>
            <div className='bg-white rounded-lg shadow p-4 border-l-4 border-orange-500'>
              <p className='text-gray-600 text-sm font-semibold'>Avg Rating</p>
              <p className='text-3xl font-bold text-gray-800 mt-1'>
                {avgRating}
              </p>
            </div>
            <div className='bg-white rounded-lg shadow p-4 border-l-4 border-purple-500'>
              <p className='text-gray-600 text-sm font-semibold'>Countries</p>
              <p className='text-3xl font-bold text-gray-800 mt-1'>
                {countries.length}
              </p>
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
                    {countries.map((country) => (
                      <option key={country} value={country.toLowerCase()}>
                        {country.charAt(0).toUpperCase() + country.slice(1)}
                      </option>
                    ))}
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
        <div className='grid md:grid-cols-3 gap-5'>
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
            <div className='col-span-3 bg-white rounded-lg shadow-lg p-12 text-center'>
              <FaSearch className='text-6xl text-gray-300 mx-auto mb-4' />
              <h3 className='text-xl font-bold text-gray-800 mb-2'>
                No tours found
              </h3>
              <p className='text-gray-600 mb-6'>
                Try adjusting your search or filter
              </p>
              <Link href='/admin/add-tour'>
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
