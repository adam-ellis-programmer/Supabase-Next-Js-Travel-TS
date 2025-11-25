// import { useMemo } from 'react'
import { FaPlaneDeparture } from 'react-icons/fa'
import MobileNav from './MobileNav'
import NavButtons from './super nav/NavButtons'
import Link from 'next/link'
import NavAuth from '../buttons/NavAuth'
import { NavService } from '@/lib/supabase/services/site/navigation-service'
import { getServerUser } from '@/lib/supabase/server-auth'
import { createClient } from '@/lib/supabase/server'

const Nav = async () => {
  const { user, error } = await getServerUser()
  const supabase = await createClient()
  const { data, error: authError } = await supabase.auth.getClaims()

  // console.log('session data', data)

  const { sortedTours, sortedContinents } = await NavService.getNavData()

  console.log('sortedContinents',sortedContinents)

  // sticky top-0 bg-white z-[2000]
  return (
    <nav className='border-b '>
      {/* nav container */}
      <div className='flex justify-between max-w-[1200px] mx-auto items-center  h-[100px] px-5 md:px-0'>
        <div>
          <Link href={`/`}>
            <div className=' flex'>
              <FaPlaneDeparture className='text-3xl text-blue-400 ' />
              <h3 className='text-2xl font-bold mx-4'>TravelExplorer</h3>
            </div>
          </Link>
          {user && (
            <Link href={`/auth/account`} className='mt-1 block md:hidden'>
              <p className=''>
                <span className='mr-1 h-[10px] w-[10px] inline-block bg-green-500 rounded-full'></span>{' '}
                Logged In As {user.email?.split('@')[0] || 'User'}
              </p>
            </Link>
          )}
        </div>
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
