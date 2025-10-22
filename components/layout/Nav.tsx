// import React from 'react'

// import { useMemo } from 'react'
import { FaPlaneDeparture } from 'react-icons/fa'
import { Button } from '../ui/button'
import MobileNav from './MobileNav'
import SuperNav from './super nav/SuperNav'
import NavButtons from './super nav/NavButtons'
import Link from 'next/link'
import NavAuth from '../buttons/NavAuth'
import { createClient } from '@/lib/supabase/server'
import { NavService } from '@/lib/supabase/services/site/navigation-service'
import test, { it } from 'node:test'
import { getSlug } from '../utils/regex'

// type is more commonly used for index signatures and record-like structures.
let renderCounter = 0
const Nav = async () => {
  renderCounter++
  // console.log(
  //   '🔴 NAV SERVER RENDER #' + renderCounter,
  //   new Date().toISOString()
  // )

  const { countriesData, toursData, sortedTours, sortedContinents } =
    await NavService.getNavData()
  // console.log(toursData)
  // console.log('🔴 NAV SERVER RENDER', new Date().toISOString())

  //=========================================
  // -- countries data
  //=========================================
  // ---------------
  // test with limited select data:
  // ---------------
  // const formattedCountriesData = countriesData.reduce((acc, country) => {
  //   if (!acc[country.continent]) {
  //     acc[country.continent] = {
  //       count: 0,
  //       countries: [],
  //       name: country.continent,
  //     }
  //   }

  //   acc[country.continent].countries.push(country)
  //   acc[country.continent].count = acc[country.continent].countries.length

  //   return acc
  // }, {})

  // 1: Initialize continent if it doesn't exist
  // 2: Initialize country array if it doesn't exist
  // 3: Add the tour to the appropriate country

  return (
    <nav className='border-b'>
      {/* nav container */}
      <div className='flex justify-between max-w-[1200px] mx-auto items-center  h-[100px] px-5 md:px-0'>
        <Link href={`/`}>
          <div className=' flex'>
            <FaPlaneDeparture className='text-3xl text-blue-400 ' />
            <h3 className='text-2xl font-bold mx-4'>TravelExplorer</h3>
          </div>
          <p className=' mt-1 block md:hidden'>
            <span className='mr-1 h-[10px] w-[10px] inline-block bg-green-500 rounded-full'></span>{' '}
            Logged In As Adam
          </p>
        </Link>
        <NavButtons
          sortedContinents={sortedContinents}
          sortedTours={sortedTours}
        />
        <div className='flex'>
          <MobileNav
            sortedContinents={sortedContinents}
            sortedTours={sortedTours}
          />
          <NavAuth />
        </div>
        {/* sign in / out buttons */}
      </div>
    </nav>
  )
}

export default Nav
