import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const user = true
const NavAuth = () => {
  return (
    <div className='hidden md:flex'>
      {user ? (
        <div className='flex flex-col justify-center'>
          <p>Hello Adam</p>
          <p>you are logged in</p>
        </div>
      ) : (
        <Link className='' href={`/auth/login`}>
          <Button className='bg-orange-600'>login</Button>
        </Link>
      )}
    </div>
  )
}

export default NavAuth
