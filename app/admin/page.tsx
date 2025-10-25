import React from 'react'
import {
  FaPlus,
  FaComments,
  FaUsers,
  FaMapMarkedAlt,
  FaChartBar,
  FaCog,
  FaArrowRight,
} from 'react-icons/fa'
import Link from 'next/link'
import { MdOutlineMailOutline } from 'react-icons/md'

interface AdminCard {
  title: string
  description: string
  icon: React.ReactNode
  href: string
  color: string
  stats?: string
}

const AdminPage = () => {
  const adminCards: AdminCard[] = [
    {
      title: 'Add New Tour',
      description: 'Create and publish new tour packages',
      icon: <FaPlus />,
      href: '/admin/tours/new',
      color: 'bg-blue-500',
      stats: 'Quick action',
    },
    {
      title: 'Email Sign ups',
      description: 'View and manage email list',
      icon: <MdOutlineMailOutline />,
      href: '/admin/tours/new',
      color: 'bg-blue-400',
      stats: 'Quick action',
    },
    {
      title: 'View All Tours',
      description: 'Manage existing tours and packages',
      icon: <FaMapMarkedAlt />,
      href: '/admin/tours',
      color: 'bg-sky-500',
      stats: '42 active tours',
    },
    {
      title: 'View All Comments',
      description: 'Moderate and manage user reviews',
      icon: <FaComments />,
      href: '/admin/comments',
      color: 'bg-rose-700',
      stats: '156 pending reviews',
    },
    {
      title: 'View All Users',
      description: 'Manage user accounts and permissions',
      icon: <FaUsers />,
      href: '/admin/users',
      color: 'bg-rose-500',
      stats: '1,234 users',
    },
    {
      title: 'Analytics',
      description: 'View bookings and revenue statistics',
      icon: <FaChartBar />,
      href: '/admin/analytics',
      color: 'bg-rose-400',
      stats: 'View insights',
    },
    {
      title: 'Settings',
      description: 'Configure site settings and preferences',
      icon: <FaCog />,
      href: '/admin/settings',
      color: 'bg-gray-500',
      stats: 'System config',
    },
  ]

  return (
    <div className='min-h-[calc(100vh-100px)] bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 py-8'>
        {/* Header */}
        <div className='mb-8'>
          <h1 className='text-4xl font-bold text-gray-800 mb-2'>
            Admin Dashboard
          </h1>
          <p className='text-gray-600'>
            Manage your travel website from one central location
          </p>
        </div>

        {/* Quick Stats Bar */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mb-8'>
          <div className='bg-white rounded-lg shadow p-5 border-l-4 border-blue-500'>
            <p className='text-gray-600 text-sm font-semibold'>
              Total Bookings
            </p>
            <p className='text-3xl font-bold text-gray-800 mt-1'>1,247</p>
            <p className='text-green-600 text-xs mt-1'>↑ 12% from last month</p>
          </div>
          <div className='bg-white rounded-lg shadow p-5 border-l-4 border-green-500'>
            <p className='text-gray-600 text-sm font-semibold'>Revenue</p>
            <p className='text-3xl font-bold text-gray-800 mt-1'>£84.5k</p>
            <p className='text-green-600 text-xs mt-1'>↑ 8% from last month</p>
          </div>
          <div className='bg-white rounded-lg shadow p-5 border-l-4 border-purple-500'>
            <p className='text-gray-600 text-sm font-semibold'>New Reviews</p>
            <p className='text-3xl font-bold text-gray-800 mt-1'>156</p>
            <p className='text-orange-600 text-xs mt-1'>42 pending approval</p>
          </div>
          <div className='bg-white rounded-lg shadow p-5 border-l-4 border-orange-500'>
            <p className='text-gray-600 text-sm font-semibold'>Active Users</p>
            <p className='text-3xl font-bold text-gray-800 mt-1'>1,234</p>
            <p className='text-green-600 text-xs mt-1'>↑ 5% from last month</p>
          </div>
        </div>

        {/* Admin Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {adminCards.map((card, index) => (
            <Link key={index} href={card.href}>
              <div className='bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer border border-gray-200 hover:border-gray-300'>
                <div className={`${card.color} p-6 text-white`}>
                  <div className='flex items-center justify-between mb-3'>
                    <div className='text-4xl opacity-90'>{card.icon}</div>
                    <FaArrowRight className='text-xl opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all' />
                  </div>
                  <h3 className='text-2xl font-bold mb-1'>{card.title}</h3>
                </div>

                <div className='p-6'>
                  <p className='text-gray-600 mb-4'>{card.description}</p>
                  <div className='flex items-center justify-between'>
                    <span className='text-sm font-semibold text-gray-500'>
                      {card.stats}
                    </span>
                    <span className='text-blue-600 font-semibold text-sm group-hover:text-blue-700'>
                      Manage →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Recent Activity Section */}
        <div className='mt-8 bg-white rounded-lg shadow-lg p-6'>
          <h2 className='text-2xl font-bold text-gray-800 mb-4'>
            Recent Activity
          </h2>
          <div className='space-y-3'>
            <div className='flex items-center gap-4 p-3 bg-gray-50 rounded-lg'>
              <div className='bg-blue-100 p-3 rounded-full'>
                <FaPlus className='text-blue-600' />
              </div>
              <div className='flex-1'>
                <p className='font-semibold text-gray-800'>New tour added</p>
                <p className='text-sm text-gray-600'>
                  Amazing Thailand 12 Day Adventure
                </p>
              </div>
              <span className='text-xs text-gray-500'>2 hours ago</span>
            </div>

            <div className='flex items-center gap-4 p-3 bg-gray-50 rounded-lg'>
              <div className='bg-purple-100 p-3 rounded-full'>
                <FaComments className='text-purple-600' />
              </div>
              <div className='flex-1'>
                <p className='font-semibold text-gray-800'>
                  New review received
                </p>
                <p className='text-sm text-gray-600'>
                  5-star review on Vietnam Tour
                </p>
              </div>
              <span className='text-xs text-gray-500'>3 hours ago</span>
            </div>

            <div className='flex items-center gap-4 p-3 bg-gray-50 rounded-lg'>
              <div className='bg-green-100 p-3 rounded-full'>
                <FaUsers className='text-green-600' />
              </div>
              <div className='flex-1'>
                <p className='font-semibold text-gray-800'>
                  New user registered
                </p>
                <p className='text-sm text-gray-600'>john.smith@example.com</p>
              </div>
              <span className='text-xs text-gray-500'>5 hours ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminPage
