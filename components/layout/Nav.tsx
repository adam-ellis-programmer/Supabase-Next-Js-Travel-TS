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
const Nav = async () => {
  const { countriesData, toursData } = await NavService.getNavData()

  //=========================================
  // -- countries data
  //=========================================
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

  //=========================================
  // -- tours data
  //=========================================
  const formattedToursData = toursData.reduce((acc, item) => {
    if (!acc[item.country]) {
      acc[item.country] = {
        countries: [],
      }
    }

    if (item.country === item.country) {
      acc[item.country].countries.push(item)
    }

    return acc
  }, {})

  // const sortedContinents = toursData.reduce((acc, item) => {
  //   // console.log(item)

  //   if (!acc[item.continent]) {
  //     acc[item.continent] = {
  //       continent: item.continent,
  //       countries: [],
  //     }
  //   }

  //   if (item.continent === item.continent) {
  //     acc[item.continent].countries.push(item)
  //   }

  //   return acc
  // }, {})

  // console.log(sortedContinents)

  const sortedContinents = toursData.reduce((acc, item) => {
    // 1:  Initialize continent if it doesn't exist
    if (!acc[item.continent]) {
      acc[item.continent] = {
        continent: item.continent,
        countries: {}, // Use an object to group by country
      }
    }

    // 2: Initialize country array if it doesn't exist
    if (!acc[item.continent].countries[item.country]) {
      acc[item.continent].countries[item.country] = []
    }

    // 3: Add the tour to the appropriate country
    acc[item.continent].countries[item.country].push(item)

    return acc
  }, {})

  console.log(sortedContinents)

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

        <NavButtons />
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
