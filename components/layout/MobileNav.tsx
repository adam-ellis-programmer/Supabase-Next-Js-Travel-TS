'use client'
import { FaBarsStaggered } from 'react-icons/fa6'
import React, { useState, useEffect, useEffectEvent } from 'react'
import { FaPlaneDeparture } from 'react-icons/fa'
import { links as devLinks } from '@/dev/DevButtons'
import Link from 'next/link'

import { megaMenuData } from '@/data/navigation'
import AccordionNav from './mobile nav/AccordionNav'
import AdminControls from './mobile nav/AdminControls'

const MobileNav = ({ sortedContinents, sortedTours }) => {
  console.log({
    text: 'test data',
    sortedTours,
    sortedContinents,
  })

  const [isNaveOpen, setIsNaveOpen] = useState(false)
  const handleToggle = () => {
    //...
    console.log('clicked ...')
    setIsNaveOpen(!isNaveOpen)
  }

  useEffect(() => {
    if (isNaveOpen) {
      document.documentElement.classList.add('no-scroll')
    }

    return () => {
      document.documentElement.classList.remove('no-scroll')
    }
  }, [isNaveOpen])

  /**
   * images on top of nav (continents)
   *
   */
  return (
    <div className='block md:hidden'>
      <button onClick={handleToggle} className='cursor-pointer'>
        <FaBarsStaggered className='text-3xl' />
      </button>

      {isNaveOpen && (
        <div className='absolute top-0 bottom-0 left-0 right-0 h-full max-w-[600px] mx-auto z-30 bg-white p-5'>
          {/* header section */}
          <section className=''>
            <div className=' flex justify-between'>
              <div className=' flex'>
                <FaPlaneDeparture className='text-3xl text-blue-400' />
                <h3 className='text-2xl font-bold mx-4'>TravelExplorer</h3>
              </div>
              <button onClick={handleToggle} className='cursor-pointer'>
                <FaBarsStaggered className='text-3xl' />
              </button>
            </div>
          </section>

          {/* countries section (continents) */}
          <div className=' h-full overflow-scroll'>
            <AdminControls />
            <section className=''>
              <p className='text-2xl text-center mb-5'>Choose an Area</p>
              <ul className='grid grid-cols-2 gap-2 '>
                <li className='relative cursor-pointer'>
                  <img
                    src='https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200'
                    className='w-full h-full rounded-lg object-cover'
                    alt='Featured destination'
                  />
                  <div className=' absolute top-0 left-0 w-full h-full bg-[#16225080]'></div>
                  <div className='absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 text-white'>
                    <p className='text-lg text-center font-bold'>Tours in</p>
                    <p className='text-lg text-center font-bold'>Asia</p>
                  </div>
                </li>

                <li className='relative cursor-pointer'>
                  <img
                    src='https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200'
                    className='w-full h-full rounded-lg object-cover'
                    alt='Featured destination'
                  />
                  <div className=' absolute top-0 left-0 w-full h-full bg-[#16225080]'></div>
                  <div className='absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 text-white'>
                    <p className='text-lg text-center font-bold'>Tours in</p>
                    <p className='text-lg text-center font-bold'>Asia</p>
                  </div>
                </li>
                <li className='relative cursor-pointer'>
                  <img
                    src='https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200'
                    className='w-full h-full rounded-lg object-cover'
                    alt='Featured destination'
                  />
                  <div className=' absolute top-0 left-0 w-full h-full bg-[#16225080]'></div>
                  <div className='absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 text-white'>
                    <p className='text-lg text-center font-bold'>Tours in</p>
                    <p className='text-lg text-center font-bold'>Asia</p>
                  </div>
                </li>
                <li className='relative cursor-pointer'>
                  <img
                    src='https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200'
                    className='w-full h-full rounded-lg object-cover'
                    alt='Featured destination'
                  />
                  <div className=' absolute top-0 left-0 w-full h-full bg-[#16225080]'></div>
                  <div className='absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 text-white'>
                    <p className='text-lg text-center font-bold'>Tours in</p>
                    <p className='text-lg text-center font-bold'>Asia</p>
                  </div>
                </li>
                <li className='relative cursor-pointer'>
                  <img
                    src='https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200'
                    className='w-full h-full rounded-lg object-cover'
                    alt='Featured destination'
                  />
                  <div className=' absolute top-0 left-0 w-full h-full bg-[#16225080]'></div>
                  <div className='absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 text-white'>
                    <p className='text-lg text-center font-bold'>Tours in</p>
                    <p className='text-lg text-center font-bold'>Asia</p>
                  </div>
                </li>
                <li className='relative cursor-pointer'>
                  <img
                    src='https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200'
                    className='w-full h-full rounded-lg object-cover'
                    alt='Featured destination'
                  />
                  <div className=' absolute top-0 left-0 w-full h-full bg-[#16225080]'></div>
                  <div className='absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 text-white'>
                    <p className='text-lg text-center font-bold'>Tours in</p>
                    <p className='text-lg text-center font-bold'>Asia</p>
                  </div>
                </li>
              </ul>
            </section>

            <section className='mt-4'>
              <p className='text-center text-2xl my-5'>Browse Our Trips</p>
              <AccordionNav />
            </section>

            <section className='my-5 pb-10'>
                <p className='text-2xl mb-5'>Contact</p>
                <ul>
                  <li>
                    Address: 1 London Road London SE12 12A
                  </li>
                  <li>
                    Phone: 0207 330 987
                  </li>
                  <li>
                    Email: hello@company.com
                  </li>
                </ul>
            </section>
          </div>
        </div>
      )}
    </div>
  )
}

export default MobileNav
