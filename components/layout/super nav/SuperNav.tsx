// components/nav/SuperNav.tsx
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { megaMenuData } from '@/data/navigation'

interface SuperNavProps {
  type: 'tours' | 'destinations'
}

const SuperNav = ({ type }: SuperNavProps) => {
  const data = megaMenuData[type]

  return (
    <div className='absolute mt-12 z-10  left-0 right-0 max-w-[1200px] mx-auto bg-white rounded-2xl p-8 shadow-2xl border border-gray-100'>
      <div className='grid grid-cols-12 gap-8'>
        {/* Left side - Links */}
        <div className='col-span-8 grid grid-cols-2 gap-6'>
          {data.categories.map((category, index) => (
            <div key={index}>
              <h3 className='font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider'>
                {category.region}
              </h3>
              <ul className='space-y-2'>
                {category.destinations.map((destination) => (
                  <li key={destination.slug}>
                    <Link
                      href={`/${type}/${destination.slug}`}
                      className='text-gray-600 hover:text-blue-600 transition-colors text-sm'
                    >
                      {destination.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Right side - Featured Image */}
        <div className='col-span-4'>
          <Link href={data.featured.link} className='block group'>
            <div className='relative h-[300px] rounded-lg overflow-hidden'>
              <Image
                src={data.featured.image}
                alt={data.featured.title}
                fill
                className='object-cover group-hover:scale-105 transition-transform duration-300'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent' />
              <div className='absolute bottom-0 left-0 right-0 p-5 text-white'>
                <h4 className='font-bold text-xl mb-1'>
                  {data.featured.title}
                </h4>
                <p className='text-sm text-gray-200'>
                  {data.featured.subtitle}
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SuperNav
