import React from 'react'
import Link from 'next/link'

interface BookedTourCardProps {
  booking: {
    id: string
    booking_date: string
    guests: number
    total_price: number
    status: string
    tour: {
      id: string
      title: string
      description: string
      price: number
      duration: string
      location: string
      image_url: string
    }
  }
}

const BookedTourCard = ({ booking }: BookedTourCardProps) => {
  const { tour, booking_date, guests, total_price, status } = booking

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'confirmed':
        return 'bg-emerald-100 text-emerald-700'
      case 'pending':
        return 'bg-amber-100 text-amber-700'
      case 'cancelled':
        return 'bg-red-100 text-red-700'
      case 'completed':
        return 'bg-blue-100 text-blue-700'
      default:
        return 'bg-slate-100 text-slate-700'
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <div className='bg-gradient-to-br from-white to-slate-50 rounded-lg border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 group'>
      <div className='flex flex-col sm:flex-row'>
        {/* Tour Image */}
        <div className='relative w-full sm:w-48 h-48 sm:h-auto overflow-hidden'>
          <img
            src={tour.image_url}
            alt={tour.title}
            className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
          />
          <div className='absolute top-3 right-3'>
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                status
              )}`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
          </div>
        </div>

        {/* Tour Details */}
        <div className='flex-1 p-5'>
          <div className='flex flex-col h-full'>
            <div className='flex-1'>
              <Link href={`/tours/${tour.id}`}>
                <h3 className='text-lg font-bold text-slate-800 mb-2 hover:text-blue-600 transition-colors line-clamp-1'>
                  {tour.title}
                </h3>
              </Link>

              <p className='text-sm text-slate-600 mb-3 line-clamp-2'>
                {tour.description}
              </p>

              <div className='flex flex-wrap gap-3 mb-3'>
                <div className='flex items-center text-sm text-slate-600'>
                  <svg
                    className='w-4 h-4 mr-1.5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                  </svg>
                  {tour.location}
                </div>

                <div className='flex items-center text-sm text-slate-600'>
                  <svg
                    className='w-4 h-4 mr-1.5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                  {tour.duration}
                </div>

                <div className='flex items-center text-sm text-slate-600'>
                  <svg
                    className='w-4 h-4 mr-1.5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                    />
                  </svg>
                  {guests} {guests === 1 ? 'guest' : 'guests'}
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className='flex items-center justify-between pt-3 border-t border-slate-200'>
              <div>
                <p className='text-xs text-slate-500 mb-1'>Travel Date</p>
                <p className='text-sm font-semibold text-slate-800'>
                  {formatDate(booking_date)}
                </p>
              </div>
              <div className='text-right'>
                <p className='text-xs text-slate-500 mb-1'>Total Price</p>
                <p className='text-lg font-bold text-blue-600'>
                  ${total_price}
                </p>
              </div>
            </div>

            {/* Action Button */}
            <div className='mt-3'>
              {/* <Link href={`/tours/${tour.id}`}> */}
              <Link href={`/tours/`}>
                <button className='w-full px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-lg font-medium transition-colors text-sm'>
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookedTourCard
