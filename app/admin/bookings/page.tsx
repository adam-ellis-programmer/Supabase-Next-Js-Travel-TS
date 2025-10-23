'use client'
import React, { useState } from 'react'

const Bookings = () => {
  const statuses = {
    CONFIRMED: 'confirmed',
    PENDING: 'pending',
    CANCELLED: 'cancelled',
  }

  const testArr = Array.from({ length: 10 }, (_, i) => {
    const statusKeys = Object.keys(statuses)
    const randomStatus = statusKeys[i % 3]

    return {
      bookingId: `BK${1000 + i}`,
      pax: Math.floor(Math.random() * 4) + 1,
      img: `https://images.unsplash.com/photo-${
        1500000000000 + i * 1000000
      }-${i}?w=400&h=300&fit=crop`,
      leadPax: [
        'John Doe',
        'Jane Smith',
        'Mike Johnson',
        'Sarah Williams',
        'David Brown',
      ][i % 5],
      bookedTrips: Math.floor(Math.random() * 3) + 1,
      tripName: [
        'Bali Adventure',
        'Paris City Tour',
        'Safari Experience',
        'Iceland Northern Lights',
        'Tokyo Culture Trip',
      ][i % 5],
      subTotal: 2999 + i * 400,
      tax: 0.1,
      airPortTax: 0.05,
      status: statuses[randomStatus as keyof typeof statuses],
      bookingDate: new Date(2024, 9, i + 1).toLocaleDateString(),
      travelDate: new Date(2025, 0, i + 15).toLocaleDateString(),
    }
  })

  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')

  const filteredBookings = testArr.filter((booking) => {
    const matchesSearch =
      booking.leadPax.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.bookingId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.tripName.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus =
      filterStatus === 'all' || booking.status === filterStatus

    return matchesSearch && matchesStatus
  })

  const getStatusBadge = (status: string) => {
    const statusStyles = {
      confirmed: 'bg-green-100 text-green-800 border-green-200',
      pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      cancelled: 'bg-red-100 text-red-800 border-red-200',
    }

    return (
      <span
        className={`px-3 py-1 rounded-full text-xs font-semibold border ${
          statusStyles[status as keyof typeof statusStyles]
        }`}
      >
        {status.toUpperCase()}
      </span>
    )
  }

  const calculateTotal = (booking: any) => {
    const subtotal = booking.subTotal
    const tax = subtotal * booking.tax
    const airportTax = subtotal * booking.airPortTax
    return subtotal + tax + airportTax
  }

  const stats = {
    total: testArr.length,
    confirmed: testArr.filter((b) => b.status === 'confirmed').length,
    pending: testArr.filter((b) => b.status === 'pending').length,
    cancelled: testArr.filter((b) => b.status === 'cancelled').length,
  }

  return (
    <div className='min-h-[calc(100vh-100px)] bg-gray-50 py-8'>
      <div className='max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <section className='mb-8'>
          <h1 className='text-3xl font-bold text-gray-900 mb-2'>
            Booking Management
          </h1>
          <p className='text-gray-600'>
            Track, search, and manage all travel bookings
          </p>
        </section>

        {/* Stats Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8'>
          <div className='bg-white rounded-lg shadow p-6 border-l-4 border-blue-500'>
            <p className='text-sm text-gray-600 font-medium'>Total Bookings</p>
            <p className='text-3xl font-bold text-gray-900 mt-2'>
              {stats.total}
            </p>
          </div>
          <div className='bg-white rounded-lg shadow p-6 border-l-4 border-green-500'>
            <p className='text-sm text-gray-600 font-medium'>Confirmed</p>
            <p className='text-3xl font-bold text-green-600 mt-2'>
              {stats.confirmed}
            </p>
          </div>
          <div className='bg-white rounded-lg shadow p-6 border-l-4 border-yellow-500'>
            <p className='text-sm text-gray-600 font-medium'>Pending</p>
            <p className='text-3xl font-bold text-yellow-600 mt-2'>
              {stats.pending}
            </p>
          </div>
          <div className='bg-white rounded-lg shadow p-6 border-l-4 border-red-500'>
            <p className='text-sm text-gray-600 font-medium'>Cancelled</p>
            <p className='text-3xl font-bold text-red-600 mt-2'>
              {stats.cancelled}
            </p>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className='bg-white rounded-lg shadow p-6 mb-8'>
          <div className='flex flex-col md:flex-row gap-4'>
            <div className='flex-1'>
              <label
                htmlFor='search'
                className='block text-sm font-medium text-gray-700 mb-2'
              >
                Search Bookings
              </label>
              <input
                id='search'
                type='text'
                placeholder='Search by booking ID, customer name, or trip...'
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className='md:w-64'>
              <label
                htmlFor='filter'
                className='block text-sm font-medium text-gray-700 mb-2'
              >
                Filter by Status
              </label>
              <select
                id='filter'
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value='all'>All Statuses</option>
                <option value='confirmed'>Confirmed</option>
                <option value='pending'>Pending</option>
                <option value='cancelled'>Cancelled</option>
              </select>
            </div>
          </div>
        </div>

        {/* Bookings List */}
        <section>
          <div className='space-y-4'>
            {filteredBookings.length === 0 ? (
              <div className='bg-white rounded-lg shadow p-12 text-center'>
                <p className='text-gray-500 text-lg'>
                  No bookings found matching your criteria
                </p>
              </div>
            ) : (
              filteredBookings.map((booking, i) => (
                <div
                  key={i}
                  className='bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300'
                >
                  <div className='p-6'>
                    <div className='flex flex-col lg:flex-row gap-6'>
                      {/* Trip Image */}
                      <div className='lg:w-48 h-32 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0'>
                        <div className='w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold'>
                          Trip Photo
                        </div>
                      </div>

                      {/* Booking Details */}
                      <div className='flex-1'>
                        <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4'>
                          <div>
                            <h3 className='text-xl font-bold text-gray-900 mb-1'>
                              {booking.tripName}
                            </h3>
                            <p className='text-sm text-gray-600'>
                              Booking ID:{' '}
                              <span className='font-semibold'>
                                {booking.bookingId}
                              </span>
                            </p>
                          </div>
                          <div className='mt-2 sm:mt-0'>
                            {getStatusBadge(booking.status)}
                          </div>
                        </div>

                        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-4'>
                          <div>
                            <p className='text-xs text-gray-500 uppercase font-medium'>
                              Lead Passenger
                            </p>
                            <p className='text-sm font-semibold text-gray-900 mt-1'>
                              {booking.leadPax}
                            </p>
                          </div>
                          <div>
                            <p className='text-xs text-gray-500 uppercase font-medium'>
                              Passengers
                            </p>
                            <p className='text-sm font-semibold text-gray-900 mt-1'>
                              {booking.pax} PAX
                            </p>
                          </div>
                          <div>
                            <p className='text-xs text-gray-500 uppercase font-medium'>
                              Booking Date
                            </p>
                            <p className='text-sm font-semibold text-gray-900 mt-1'>
                              {booking.bookingDate}
                            </p>
                          </div>
                          <div>
                            <p className='text-xs text-gray-500 uppercase font-medium'>
                              Travel Date
                            </p>
                            <p className='text-sm font-semibold text-gray-900 mt-1'>
                              {booking.travelDate}
                            </p>
                          </div>
                        </div>

                        {/* Pricing Breakdown */}
                        <div className='bg-gray-50 rounded-lg p-4'>
                          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-sm'>
                            <div>
                              <p className='text-gray-600'>Subtotal</p>
                              <p className='font-semibold text-gray-900'>
                                ${booking.subTotal.toLocaleString()}
                              </p>
                            </div>
                            <div>
                              <p className='text-gray-600'>
                                Tax ({(booking.tax * 100).toFixed(0)}%)
                              </p>
                              <p className='font-semibold text-gray-900'>
                                ${(booking.subTotal * booking.tax).toFixed(2)}
                              </p>
                            </div>
                            <div>
                              <p className='text-gray-600'>
                                Airport Tax (
                                {(booking.airPortTax * 100).toFixed(0)}%)
                              </p>
                              <p className='font-semibold text-gray-900'>
                                $
                                {(
                                  booking.subTotal * booking.airPortTax
                                ).toFixed(2)}
                              </p>
                            </div>
                            <div>
                              <p className='text-gray-600 font-medium'>Total</p>
                              <p className='font-bold text-blue-600 text-lg'>
                                ${calculateTotal(booking).toLocaleString()}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className='flex flex-wrap gap-2 mt-6 pt-6 border-t border-gray-200'>
                      <button className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm'>
                        View Details
                      </button>
                      {booking.status === 'pending' && (
                        <>
                          <button className='px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium text-sm'>
                            Confirm
                          </button>
                          <button className='px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium text-sm'>
                            Cancel
                          </button>
                        </>
                      )}
                      <button className='px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium text-sm'>
                        Send Email
                      </button>
                      <button className='px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium text-sm'>
                        Print Invoice
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        {/* Results Count */}
        {filteredBookings.length > 0 && (
          <div className='mt-6 text-center text-sm text-gray-600'>
            Showing {filteredBookings.length} of {testArr.length} bookings
          </div>
        )}
      </div>
    </div>
  )
}

export default Bookings
