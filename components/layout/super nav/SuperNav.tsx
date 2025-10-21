'use client'
// components/nav/SuperNav.tsx
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { megaMenuData } from '@/data/navigation'
import DevButtons from '@/dev/DevButtons'
import AdminNavButtons from '@/components/admin/AdminNavButtons'

interface SuperNavProps {
  type: 'tours' | 'destinations'
  sortedContinents: any
  sortedTours: any
}

const SuperNav = ({ type, sortedContinents, sortedTours }: SuperNavProps) => {
  const data = megaMenuData[type]
  const [listedCountries, setListedCountries] = useState(null)
  const [listedTours, setlistedTours] = useState(null)
  const [destImage, setDestImage] = useState(null)
  const [destImageText, setDestImageText] = useState('')
  const [tourImage, settourImage] = useState(null)

  const destinations = Object.values(sortedContinents)
  const tours = Object.values(sortedTours)

  const megaData = {
    destinations,
    tours,
  }

  const navData = megaData[type] as any[]

  // Initialize with first continent's data when component mounts or type changes
  useEffect(() => {
    if (type === 'destinations' && destinations.length > 0) {
      const firstContinent = destinations[0]
      console.log(firstContinent)
      setDestImageText(firstContinent.text)
      const countries = Object.entries(firstContinent.tours)
      setListedCountries(countries)

      // Set initial image from first country's first tour
      if (
        countries.length > 0 &&
        countries[0][1][0]?.tour_images?.[0]?.image_url
      ) {
        setDestImage(countries[0][1][0].tour_images[0].image_url)
      }
    } else if (type === 'tours' && tours.length > 0) {
      // Initialize tours view with first country
      setlistedTours(tours[0])
    }
  }, [type]) // Only depend on type, not navData

  const handleDestMouseEnter = (text, data, index) => {
    // console.log('dest--->:', text)
    setDestImageText(text)
    const countries = Object.entries(data)

    setListedCountries(countries)

    // Update image when hovering over continent
    if (
      countries.length > 0 &&
      countries[0][1][0]?.tour_images?.[0]?.image_url
    ) {
      setDestImage(countries[0][1][0].tour_images[0].image_url)
    }
  }

  const handleToursMouseEnter = (country) => {
    // console.log('country', country)
    setlistedTours(country)
  }

  const handleListedCountriesMouseEnter = (item) => {
    // Update image when hovering over country
    console.log(item)
    setDestImageText(item[0])

    if (item[1][0]?.tour_images?.[3]?.image_url) {
      setDestImage(item[1][0].tour_images[3].image_url)
    } else if (item[1][0]?.tour_images?.[0]?.image_url) {
      // Fallback to first image if index 3 doesn't exist
      setDestImage(item[1][0].tour_images[0].image_url)
    }
  }

  // set showAdmin in local storage!
  // local storage pattern

  return (
    <div className='absolute mt-12 z-30 top-20  left-0 right-0 max-w-[1200px] mx-auto bg-white rounded-2xl p-8 shadow-2xl  border-gray-100'>
      {/* <DevButtons /> */}
      {/* <div className='mb-2 flex justify-start cursor-pointer'>
        <span className='bg-rose-500 text-sm p-1 px-2 rounded-lg text-white'>
          show admin
        </span>
      </div> */}
      <AdminNavButtons />
      <div className='grid grid-cols-12 gap-8'>
        <div className=' col-span-9 '>
          {type === 'destinations' ? (
            // =============================================================================
            // COUNTRIES
            // =============================================================================
            <>
              <div className='grid grid-cols-3 gap-5'>
                <div className=''>
                  {/* <h3 className='caption-top text-center text-2xl mb-5'>
                    continents available
                  </h3> */}
                  <ul>
                    {navData.map((continent, continentIndex) => {
                      // console.log('continent--', continent)

                      const countryNames = Object.keys(continent.tours)
                      return (
                        <li
                          key={continentIndex}
                          className=' bg-slate-700 text-white cursor-pointer mb-[1px] pl-5  rounded-lg  text-lg'
                          onMouseEnter={() =>
                            handleDestMouseEnter(
                              continent.text,
                              continent.tours,
                              continentIndex
                            )
                          }
                        >
                          <Link href={`/country-landing/${continent.slug}`}>
                            <h3>{continent.text}</h3>
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
                <div className=''>
                  {/* <h3 className='caption-top text-center text-2xl mb-5'>
                    countries available
                  </h3> */}
                  <ul>
                    {listedCountries &&
                      listedCountries.map((item, i) => {
                        // console.log(item)
                        return (
                          <li
                            className='bg-slate-700 text-white pl-5  mb-[1px] rounded-lg  text-lg cursor-pointer'
                            key={i}
                            onMouseEnter={() =>
                              handleListedCountriesMouseEnter(item)
                            }
                          >
                            <Link href={`/country-landing/${item[0]}`}>
                              <p>{item[0]}</p>
                            </Link>
                          </li>
                        )
                      })}
                  </ul>
                </div>
                <div className=' relative '>
                  <span className='capitalize absolute right-2 top-2 bg-rose-500 text-white p-1 rounded-lg'>
                    {destImageText}
                  </span>
                  <img
                    src={
                      destImage ||
                      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200'
                    }
                    className='w-full h-[200px] rounded-lg object-cover'
                    alt='Destination preview'
                  />
                </div>
              </div>
            </>
          ) : (
            // =============================================================================
            // TOURS
            // =============================================================================
            <div>
              <div className=' grid grid-cols-12 gap-5'>
                <ul className='grid grid-cols-3  gap-x-2 col-span-7'>
                  {navData.map((country, countryIndex) => {
                    return (
                      <li
                        key={countryIndex}
                        onClick={() => handleToursMouseEnter(country)}
                        className='cursor-pointer inline bg-slate-700 mb-[1px] rounded-lg text-white pl-3'
                      >
                        <h3 className=''>{country.text}</h3>
                      </li>
                    )
                  })}
                </ul>
                <div className=' col-span-5'>
                  {/* <h3 className='text-center '>available tours</h3> */}
                  <ul>
                    {listedTours &&
                      listedTours.tours.map((item, i) => {
                        // console.log('tour-itme--: ', item)

                        return (
                          <li key={i}>
                            <Link
                              className='cursor-pointer bg-slate-700 text-white rounded-lg mb-[1px] px-2 py-1'
                              href={`/tours/${item.id}`}
                            >
                              {item.tour_name}
                            </Link>
                          </li>
                        )
                      })}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className=' col-span-3 relative cursor-pointer'>
          <img
            src='https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200'
            className='w-full h-full rounded-lg object-cover'
            alt='Featured destination'
          />
          <div className='absolute bottom-5 w-full text-white'>
            <p className='text-center  text-2xl font-bold leading-snug text-shadow-md shadow-2xl'>
              book now{' '}
            </p>
            <p className='text-center  text-2xl font-bold leading-snug text-shadow-md shadow-2xl'>
              and pay 50% less{' '}
            </p>
          </div>
          <span className='absolute top-1 right-2 bg-indigo-200 rounded-lg px-[4px] text-sm'>advert</span>
        </div>
      </div>
    </div>
  )
}

export default SuperNav
