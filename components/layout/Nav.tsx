// import React from 'react'

import { FaPlaneDeparture } from 'react-icons/fa'
import { Button } from '../ui/button'
import MobileNav from './MobileNav'
import SuperNav from './super nav/SuperNav'
import NavButtons from './super nav/NavButtons'
import Link from 'next/link'
import NavAuth from '../buttons/NavAuth'
import { createClient } from '@/lib/supabase/server'

const Nav = async () => {
  const supabase = createClient()
  // const { data: { user }, error } = await supabase.auth.getUser()
  // console.log(user)

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
