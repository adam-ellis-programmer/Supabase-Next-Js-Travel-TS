import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { LogoutButton } from '../logout-button'
import { getServerUser } from '@/lib/supabase/server-auth'

const NavAuth = async () => {
  const { user, error } = await getServerUser()

  return (
    <div className='hidden md:flex'>
      {user ? (
        <div className='flex items-center gap-4'>
          <Link href={`/auth/account`}>
            <p className='capitalize'>
              <span className='mr-1 h-[10px] w-[10px] inline-block bg-green-500 rounded-full animate-pulse'></span>{' '}
              logged in as {user.email?.split('@')[0] || 'User'}
            </p>
          </Link>

          <LogoutButton />
        </div>
      ) : (
        <Link href={`/auth/login`}>
          <Button className='bg-[#4e6378] '>login</Button>
        </Link>
      )}
    </div>
  )
}

export default NavAuth
