'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import AdminNavButtons from '@/components/admin/AdminNavButtons'
import MyAccount from '@/components/buttons/MyAccount'
import { MdAdminPanelSettings } from 'react-icons/md'
import AuthCheck from '@/components/spinners/AuthCheck'
import { useAuthAdmin } from '@/contexts/AuthContext'

import {
  SuperNavProps,
  ToursByContinent,
  Tour,
  ToursByCountryData,
} from '@/types/navigation'

// Define separate types for destinations and tours
type DestinationItem = {
  name: string
  tours: { [country: string]: Tour[] }
  count: number
  text: string
  slug: string
  img: string
}

type TourItem = {
  name: string
  tours: Tour[]
  text: string
  count: number
}

const SuperNav = ({ type, sortedContinents, sortedTours }: SuperNavProps) => {
  // console.log('sortedContinents: ', sortedContinents)

  const {
    isLoggedIn,
    user,
    profile,
    isAdmin,
    loading: authLoading,
  } = useAuthAdmin()
  console.log('isLoggedIn', isLoggedIn)

  const [listedCountries, setListedCountries] = useState<
    [string, Tour[]][] | null
  >(null)
  const [listedTours, setlistedTours] = useState<TourItem | null>(null)
  const [destImage, setDestImage] = useState<string | null>(null)
  const [destImageText, setDestImageText] = useState('')
  const [showAdminButtons, setshowAdminButtons] = useState(false)
  const [imagesPreloaded, setImagesPreloaded] = useState(false)

  // Create properly typed arrays
  const destinations: DestinationItem[] = Object.entries(sortedContinents).map(
    ([key, value]) => ({
      ...value,
      name: key,
    })
  )

  const tours: TourItem[] = Object.entries(sortedTours).map(([key, value]) => ({
    ...value,
    name: key,
  }))

  // Preload all destination images
  useEffect(() => {
    if (type === 'destinations' && destinations.length > 0) {
      const imagesToPreload: string[] = []

      // Collect all unique image URLs
      destinations.forEach((continent) => {
        Object.values(continent.tours).forEach((countryTours) => {
          countryTours.forEach((tour) => {
            if (tour.tour_images?.[0]?.image_url) {
              imagesToPreload.push(tour.tour_images[0].image_url)
            }
          })
        })
      })
      // console.log('imagesToPreload', imagesToPreload)

      // Preload images
      const preloadImages = async () => {
        const promises = imagesToPreload.map((src) => {
          return new Promise((resolve, reject) => {
            // console.log('resolve: ', resolve)

            const img = new Image()
            img.src = src
            img.onload = resolve
            img.onerror = reject
          })
        })

        try {
          await Promise.all(promises)
          setImagesPreloaded(true)
          // console.log('promises-->', promises)
        } catch (error) {
          console.error('Error preloading images:', error)
          setImagesPreloaded(true) // Still set to true to not block UI
        }
      }

      preloadImages()
    }
  }, [type, destinations])

  // Initialize with first continent's data when component mounts or type changes
  useEffect(() => {
    if (type === 'destinations' && destinations.length > 0) {
      const firstContinent = destinations[0]
      setDestImageText(firstContinent.text)
      const countries = Object.entries(firstContinent.tours)
      // console.log('countries---->', countries)
      setListedCountries(countries)

      if (
        countries.length > 0 &&
        countries[0][1][0]?.tour_images?.[0]?.image_url
      ) {
        setDestImage(countries[0][1][0].tour_images[0].image_url)
      }
    } else if (type === 'tours' && tours.length > 0) {
      setlistedTours(tours[0])
    }
  }, [type, destinations.length, tours.length])

  // Hide admin buttons when user logs out
  useEffect(() => {
    if (!user) {
      setshowAdminButtons(false)
    }
  }, [user])

  const handleDestMouseEnter = (
    text: string,
    data: { [country: string]: Tour[] }
  ) => {
    setDestImageText(text)
    const countries = Object.entries(data)
    setListedCountries(countries)

    if (
      countries.length > 0 &&
      countries[0][1][0]?.tour_images?.[0]?.image_url
    ) {
      setDestImage(countries[0][1][0].tour_images[0].image_url)
    }
  }

  const handleToursMouseEnter = (country: TourItem) => {
    setlistedTours(country)
  }

  const handleListedCountriesMouseEnter = (item: [string, Tour[]]) => {
    setDestImageText(item[0])
    if (item[1][0]?.tour_images?.[0]?.image_url) {
      setDestImage(item[1][0].tour_images[0].image_url)
    } else if (item[1][0]?.tour_images?.[0]?.image_url) {
      setDestImage(item[1][0].tour_images[0].image_url)
    }
  }
  // console.log('listed countries: ', listedCountries)

  return (
    <div className='absolute mt-12 z-[1000] top-20  left-0 right-0 max-w-[1200px] mx-auto bg-white rounded-2xl p-8 shadow-2xl  border-gray-100'>
      <h4 className='text-center capitalize text-xl mb-4 font-bold'>
        choose a {type.slice(0, -1)}
      </h4>
      {/* <p>all tours</p> */}

      {authLoading && <AuthCheck />}
      {user && (
        <>
          {!showAdminButtons && (
            <div className='mb-2 flex justify-start  space-x-2'>
              <MyAccount />

              {isAdmin && (
                <span
                  onClick={() => {
                    setshowAdminButtons(!showAdminButtons)
                  }}
                  className='cursor-pointer capitalize bg-slate-600 text-sm p-1 px-2 rounded-lg text-white inline-flex items-center'
                >
                  <MdAdminPanelSettings className='mr-2' />
                  admin quick links
                </span>
              )}
            </div>
          )}
          {showAdminButtons && (
            <AdminNavButtons
              showAdminButtons={showAdminButtons}
              setshowAdminButtons={setshowAdminButtons}
            />
          )}
        </>
      )}

      <div className='grid grid-cols-12 gap-8'>
        <div className=' col-span-9 '>
          {type === 'destinations' ? (
            <>
              <div className='grid grid-cols-3 gap-5'>
                <div className=''>
                  <ul>
                    {destinations.map((continent, continentIndex) => {
                      return (
                        <li
                          key={continentIndex}
                          className=' bg-slate-700 text-white cursor-pointer mb-[1px] pl-5  rounded-lg  text-lg'
                          onMouseEnter={() =>
                            handleDestMouseEnter(
                              continent.text,
                              continent.tours
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
                  <ul>
                    {listedCountries &&
                      listedCountries.map((item, i) => {
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
                {/* ----- transition to add ------- */}
                <div className='relative'>
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
                {/* ----- transition to add ------- */}
              </div>
            </>
          ) : (
            <div>
              <div className=' grid grid-cols-12 gap-5'>
                <ul className='grid grid-cols-3  gap-x-2 col-span-7'>
                  {tours.map((country, countryIndex) => {
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
                  <ul>
                    {listedTours &&
                      listedTours.tours.map((item, i) => {
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
            className='w-full rounded-lg object-cover h-[200px]'
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
          <span className='absolute top-1 right-2 bg-indigo-200 rounded-lg px-[4px] text-sm'>
            advert
          </span>
        </div>
      </div>
    </div>
  )
}

export default SuperNav
