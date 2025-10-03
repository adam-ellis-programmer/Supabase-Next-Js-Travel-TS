// import React from 'react'

import { FaPlaneDeparture } from 'react-icons/fa'
import { Button } from '../ui/button'
import MobileNav from './MobileNav'
const Nav = () => {
  return (
    <nav className='border-b'>
      {/* nav container */}
      <div className='flex justify-between max-w-[1200px] mx-auto items-center  h-[100px] p-5'>
        <div className=' flex'>
          <FaPlaneDeparture className='text-3xl text-blue-400' />
          <h3 className='text-2xl font-bold mx-4'>TravelExplorer</h3>
        </div>

        <MobileNav />

        {/* <ul>
          <li>
            <Button className='bg-rose-500 mx-1'>Tours</Button>
            <Button className='bg-rose-500 mx-1'>destinations</Button>
          </li>
        </ul> */}
      </div>
    </nav>
  )
}

export default Nav
