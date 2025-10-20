// components/nav/SuperNav.tsx
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { megaMenuData } from '@/data/navigation'
import DevButtons from '@/dev/DevButtons'

interface SuperNavProps {
  type: 'tours' | 'destinations'
  sortedContinents: any
  sortedTours: any
}

const SuperNav = ({ type, sortedContinents, sortedTours }: SuperNavProps) => {
  const data = megaMenuData[type]

  const destinations = Object.values(sortedContinents)
  const tours = Object.values(sortedTours)

  const megaData = {
    destinations,
    tours,
  }

  const navData = megaData[type] as any[]
  console.log(navData)

  return (
    <div className='absolute mt-12 z-30 top-20 left-0 right-0 max-w-[1200px] mx-auto bg-white rounded-2xl p-8 shadow-2xl border border-gray-100'>
      <DevButtons />

      <div className='grid grid-cols-12 gap-8'>
        <div className='border col-span-8 '>
          
          {type === 'destinations' ? (
            <>
              {navData.map((continent, continentIndex) => {
                const countryNames = Object.keys(continent.tours)

                return (
                  <div key={continentIndex}>
                    <h3>{continent.text}</h3>
                    <ul className='ml-5'>
                      {countryNames.map((countryName, countryIndex) => {
                        return <li key={countryIndex}>{countryName}</li>
                      })}
                    </ul>
                  </div>
                )
              })}
            </>
          ) : (
            <div>
              {navData.map((country, countryIndex) => {
                return (
                  <div key={countryIndex}>
                    <h3>{country.text}</h3>
                    <ul className='ml-5'>
                      {country.tours.map((tour: any, tourIndex: number) => {
                        return <li key={tourIndex}>{tour.tour_name}</li>
                      })}
                    </ul>
                  </div>
                )
              })}
            </div>
          )}
        </div>
        <div className='border col-span-4'>{/* image */}</div>
      </div>
    </div>
  )
}

export default SuperNav
