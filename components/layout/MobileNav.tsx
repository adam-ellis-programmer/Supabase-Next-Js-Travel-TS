'use client'
import { FaBarsStaggered } from 'react-icons/fa6'
import React, { useState, useEffect, memo } from 'react'
import { FaPlaneDeparture } from 'react-icons/fa'
import Link from 'next/link'

import AccordionNav from './mobile nav/AccordionNav'
import AdminControls from './mobile nav/AdminControls'
import { getSlug } from '../utils/regex'
import MyAccount from '../buttons/MyAccount'
import { useAuthAdmin } from '@/contexts/AuthContext'
import { NavigationProps } from '@/types/navigation'

const MobileNav = ({ sortedContinents, sortedTours }: NavigationProps) => {
  const { user, loading } = useAuthAdmin()
  const [isNaveOpen, setIsNaveOpen] = useState(false)

  const handleToggle = () => {
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

  // Handle screen resize and remove scroll lock on md+ screens
  useEffect(() => {
    const handleResize = () => {
      console.log('resize ran')
      // md breakpoint for Tailwind (768px)
      if (window.innerWidth >= 768) {
        document.documentElement.classList.remove('no-scroll')
        setIsNaveOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const continentData = Object.entries(sortedContinents)

  return (
    <div className='block md:hidden'>
      <button onClick={handleToggle} className='cursor-pointer'>
        <FaBarsStaggered className='text-3xl' />
      </button>

      {isNaveOpen && (
        <div className='absolute top-0 bottom-0 left-0 right-0 h-full max-w-[600px] mx-auto z-[1000] bg-white p-5'>
          {/* header section */}
          <section className=' pb-5'>
            <div className=' flex justify-between'>
              <Link onClick={handleToggle} href={`/`} className=' flex'>
                <FaPlaneDeparture className='text-3xl text-blue-400' />
                <h3 className='text-2xl font-bold mx-4'>TravelExplorer</h3>
              </Link>
              <button onClick={handleToggle} className='cursor-pointer'>
                <FaBarsStaggered className='text-3xl' />
              </button>
            </div>
          </section>

          {/* countries section (continents) */}
          <div className=' h-full overflow-scroll'>
            {user && <AdminControls handleToggle={handleToggle} />}
            <section className=''>
              <p className='text-2xl text-center mb-5'>Choose an Area</p>
              <ul className='grid grid-cols-2 gap-2 '>
                {continentData.map((item, i) => {
                  const [continentName, continentDetails] = item
                  return (
                    <li
                      className='relative '
                      key={i}
                      onClick={() => {
                        setIsNaveOpen(false)
                      }}
                    >
                      <Link href={`/country-landing/${getSlug(continentName)}`}>
                        <img
                          src={continentDetails.img}
                          className='w-full h-full rounded-lg object-cover'
                          alt='Featured destination'
                        />
                        <div className=' absolute top-0 left-0 w-full h-full bg-[#16225080] rounded-lg'></div>
                        <div className='absolute top-0 bottom-0 left-0 right-0 text-white flex justify-center items-center flex-col'>
                          <p className='text-lg text-center font-bold'>
                            Tours in
                          </p>
                          <p className='text-lg text-center font-bold inline-block'>
                            {continentName}
                          </p>
                        </div>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </section>

            <section className='mt-4'>
              <p className='text-center text-2xl my-5'>Browse Our Trips</p>
              <AccordionNav
                sortedTours={sortedTours}
                setIsNaveOpen={setIsNaveOpen}
              />
            </section>

            <section className='my-5 pb-10'>
              <p className='text-2xl mb-5'>Contact</p>
              <ul>
                <li>Address: 1 London Road London SE12 12A</li>
                <li>Phone: 0207 330 987</li>
                <li>Email: hello@company.com</li>
                {user && (
                  <li className='mt-5 space-x-3'>
                    <MyAccount mobile={true} setIsNaveOpen={setIsNaveOpen} />
                  </li>
                )}
              </ul>
            </section>
          </div>
        </div>
      )}
    </div>
  )
}

export default memo(MobileNav)
