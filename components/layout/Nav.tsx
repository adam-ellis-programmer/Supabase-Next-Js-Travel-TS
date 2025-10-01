// import React from 'react'

import { Button } from '../ui/button'

const Nav = () => {
  return (
    <nav className='border-b'>
      {/* nav container */}
      <div className='flex justify-between max-w-[1200px] mx-auto items-center  h-[100px] p-5'>
        <div>Travel Logo</div>
        <ul>
          <li>
            <Button className='bg-rose-500 mx-1'>Tours</Button>
            <Button className='bg-rose-500 mx-1'>destinations</Button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
