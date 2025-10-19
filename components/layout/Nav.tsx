// import React from 'react'

import { FaPlaneDeparture } from 'react-icons/fa'
import { Button } from '../ui/button'
import MobileNav from './MobileNav'
import SuperNav from './super nav/SuperNav'
import NavButtons from './super nav/NavButtons'
import Link from 'next/link'
import NavAuth from '../buttons/NavAuth'
import { createClient } from '@/lib/supabase/server'
import { NavService } from '@/lib/supabase/services/site/navigation-service'

// type is more commonly used for index signatures and record-like structures.

type ToursByCountry = {
  [country1: string]: {
    tours: Array<{
      country: any
      continent: any
      slug: any
    }>
    country: ''
    count: 0
  }
}

type ToursByContinentAndCountry = {
  [continent: string]: {
    tours: {
      [country: string]: Array<{
        country: any
        continent: any
        slug: any
      }>
    }
    tourCount: number
    continent: string
  }
}
const Nav = async () => {
  const { countriesData, toursData } = await NavService.getNavData()

  //=========================================
  // -- countries data
  //=========================================
  // ---------------
  // test with limited select data:
  // ---------------
  const formattedCountriesData = countriesData.reduce((acc, country) => {
    if (!acc[country.continent]) {
      acc[country.continent] = {
        count: 0,
        countries: [],
        name: country.continent,
      }
    }

    acc[country.continent].countries.push(country)
    acc[country.continent].count = acc[country.continent].countries.length

    return acc
  }, {})

  // 1: Initialize continent if it doesn't exist
  // 2: Initialize country array if it doesn't exist
  // 3: Add the tour to the appropriate country

  const sortedTours = toursData.reduce<ToursByCountry>((acc, item) => {
    if (!acc[item.country]) {
      acc[item.country] = {
        tours: [],
        country: '',
        count: 0,
      }
    }

    acc[item.country].tours.push(item)
    acc[item.country].country = item.country
    acc[item.country].count += 1
    return acc
  }, {})

  const sortedContinents = toursData.reduce<ToursByContinentAndCountry>(
    (acc, item) => {
      if (!acc[item.continent]) {
        acc[item.continent] = {
          tours: {
            // asia: [...],
            // europe: [...]
          },
          tourCount: 0,
          continent: '',
        }
      }
      acc[item.continent].tours[item.country] = []

      acc[item.continent].tours[item.country].push(item)
      // Step 4: Increment count (runs for EVERY tour)
      acc[item.continent].tourCount += 1
      acc[item.continent].continent = item.continent
      return acc
    },
    {}
  )

  // console.log('sortedContinents:', sortedContinents)

  const destinations = Object.values(sortedContinents)
  const tours = Object.values(sortedTours)
  // console.log('sortedTours:', sortedTours)

  // console.log(tours)

  return (
    <nav className='border-b'>
      {/* nav container */}
      <div className='flex justify-between max-w-[1200px] mx-auto items-center  h-[100px]'>
        <Link href={`/`}>
          <div className=' flex'>
            <FaPlaneDeparture className='text-3xl text-blue-400' />
            <h3 className='text-2xl font-bold mx-4'>TravelExplorer</h3>
          </div>
        </Link>

        <NavButtons
          sortedContinents={sortedContinents}
          sortedTours={sortedTours}
        />
        <div className='flex'>
          <MobileNav />
          <NavAuth />
        </div>
        {/* sign in / out buttons */}
      </div>
    </nav>
  )
}

export default Nav
