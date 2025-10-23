import React from 'react'
import BookedTourCard from '@/components/cards/BookedTourCard'
import { createClient } from '@/lib/supabase/server'
import { DatabaseService } from '@/lib/supabase/services/database-service'
import { redirect } from 'next/navigation'
import { Profile } from '@/types/database'
import UserDetailsCard from '@/components/auth/user/UserDetailsCard'
// Mock user data - replace with actual Supabase data later

const cs = ['Thailand', 'Vietnam', 'Australia', 'New Zealand']
const days = [12, 15, 20, 10]
const prices = [1799, 2500, 3500, 2378]

const countryImages = [
  'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80', // Thailand
  'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80', // Vietnam
  'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&q=80', // Australia
  'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800&q=80', // New Zealand
]

const countryDescriptions = [
  'Experience the best of Thailand with visits to Bangkok, Chiang Mai, and the stunning islands of Phuket.',
  'Discover the charm of Vietnam from the bustling streets of Hanoi to the emerald waters of Ha Long Bay and vibrant Ho Chi Minh City.',
  "Explore Australia's iconic landmarks including the Sydney Opera House, Great Barrier Reef, and the rugged beauty of the Outback.",
  "Journey through New Zealand's breathtaking landscapes from the adventure capital of Queenstown to the majestic fjords of Milford Sound.",
]

const dates = [
  '2025-02-6',
  '2025-05-5',
  '2025-07-10',
  '2025-10-15',
  '2025-12-24',
]
// Mock booked tours - replace with actual Supabase query later
const mockBookedTours = Array.from({ length: 4 }, (_, i) => ({
  id: `booking-${i}`,
  booking_date: dates[i],
  guests: 2,
  total_price: prices[i],
  status:
    i === 0
      ? 'confirmed'
      : i === 1
      ? 'pending'
      : i === 2
      ? 'completed'
      : 'confirmed',
  tour: {
    id: `tour-${i}`,
    title: `${days[i]} Day ${cs[i]} Adventure`,
    description: countryDescriptions[i],
    price: 1299,
    duration: `${days[i]} days`,
    location: cs[i],
    image_url: countryImages[i],
  },
}))

const AccountPage = async () => {
  // Get the authenticated user
  const supabase = await createClient()
  // // prettier-ignore
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()
  // comes from supabse auth not our record (update func)
  console.log(user)

  // TypeScript has a feature called control flow narrowing.
  // Add the null check RIGHT HERE, before using user.id
  // This is called a type guard
  if (!user) {
    redirect('/auth/login')
  }

  const profile = await DatabaseService.getByid<Profile>('profiles', user.id)
  console.log('Acc user', profile)

  if (!profile) {
    return <div>Profile not found</div>
  }

  return (
    <div className='min-h-[calc(100vh-100px)] bg-gradient-to-br from-slate-50 to-blue-50 py-8'>
      <div className='max-w-[1200px] mx-auto px-4'>
        {/* Account Header */}
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-slate-800 mb-2'>My Account</h1>
          <p className='text-slate-600'>
            Manage your profile and view your bookings
          </p>
        </div>

        {/* User Details Card */}
        <UserDetailsCard profile={profile} user={user} />

        {/* Booked Tours Section */}
        <div className='bg-white rounded-xl shadow-sm border border-slate-200 p-6'>
          <div className='flex items-center justify-between mb-6'>
            <div>
              <h2 className='text-xl font-semibold text-slate-800'>
                My Bookings
              </h2>
              <p className='text-sm text-slate-600 mt-1'>
                {mockBookedTours.length}{' '}
                {mockBookedTours.length === 1 ? 'tour' : 'tours'} booked
              </p>
            </div>
          </div>

          {mockBookedTours.length > 0 ? (
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
              {mockBookedTours.map((booking) => (
                <BookedTourCard key={booking.id} booking={booking} />
              ))}
            </div>
          ) : (
            <div className='text-center py-12'>
              <div className='inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-4'>
                <svg
                  className='w-8 h-8 text-slate-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
                  />
                </svg>
              </div>
              <h3 className='text-lg font-semibold text-slate-800 mb-2'>
                No bookings yet
              </h3>
              <p className='text-slate-600 mb-6'>
                Start exploring our amazing tours and book your next adventure!
              </p>
              <a
                href='/tours'
                className='inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors'
              >
                Browse Tours
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AccountPage
