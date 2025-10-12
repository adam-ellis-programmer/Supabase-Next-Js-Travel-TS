import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import PrintButton from '@/components/PrintButtons'

const BookingConfirmationPage = async () => {
  // Get authenticated user
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  // Fetch latest booking or get from query params
  // TODO: Implement booking confirmation logic

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50'>
      <div className='max-w-2xl w-full bg-white rounded-lg shadow-lg p-8'>
        <div className='text-center'>
          <div className='mb-4'>
            <svg
              className='mx-auto h-16 w-16 text-green-500'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </div>
          <h1 className='text-3xl font-bold text-gray-900 mb-2'>
            Booking Confirmed!
          </h1>
          <p className='text-gray-600 mb-6'>
            Your booking has been successfully confirmed. We've sent a
            confirmation email to your registered email address.
          </p>

          <div className='bg-gray-50 rounded-lg p-6 mb-6 text-left'>
            <h2 className='font-semibold text-gray-900 mb-4'>
              Booking Details
            </h2>
            {/* Add booking details here */}
            <div className='space-y-2 text-sm text-gray-600'>
              <div className='flex justify-between'>
                <span>Booking Reference:</span>
                <span className='font-semibold text-gray-900'>#BK123456</span>
              </div>
              <div className='flex justify-between'>
                <span>Tour:</span>
                <span className='font-semibold text-gray-900'>
                  Vietnam 10 Day Adventure
                </span>
              </div>
              <div className='flex justify-between'>
                <span>Date:</span>
                <span className='font-semibold text-gray-900'>
                  March 15, 2025
                </span>
              </div>
              <div className='flex justify-between'>
                <span>Travelers:</span>
                <span className='font-semibold text-gray-900'>2 adults</span>
              </div>
              <div className='flex justify-between border-t pt-2 mt-2'>
                <span>Total Paid:</span>
                <span className='font-bold text-gray-900 text-lg'>
                  £5,500.00
                </span>
              </div>
            </div>
          </div>

          <div className='flex gap-4 justify-center'>
            <PrintButton />
            <Link
              href='/tours'
              className='px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'
            >
              Browse More Tours
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingConfirmationPage
