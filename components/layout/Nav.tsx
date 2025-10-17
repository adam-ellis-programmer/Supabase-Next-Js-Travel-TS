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
  // console.log(countries)

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

  // console.log(formattedCountriesData)
  // country
  // console.log(toursData)

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

  console.log(formattedToursData)

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
