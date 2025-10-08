import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const user = false

const NavAuth = () => {
  return (
    <div className='hidden md:flex'>
      {user ? (
        <div className='flex  items-center '>
          <p>Hello Adam</p>
          <Button className='ml-5 bg-gray-700  font-bold '>log out</Button>
        </div>
      ) : (
        <Link className='' href={`/auth/login`}>
          <Button className=' h-[30px]'>login</Button>
        </Link>
      )}
    </div>
  )
}

export default NavAuth
