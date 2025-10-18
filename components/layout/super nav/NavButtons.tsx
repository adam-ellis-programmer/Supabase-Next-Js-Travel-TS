// components/nav/NavButtons.tsx
'use client'
import { Button } from '../../ui/button'
import { useState } from 'react'
import SuperNav from './SuperNav'

const NavButtons = () => {
  const [showSuperNav, setShowSuperNav] = useState(false)
  // prettier-ignore
  const [activeMenu, setActiveMenu] = useState<'tours' | 'destinations'>('tours')

  const handleMouseEnter = (menuType: 'tours' | 'destinations') => {
    setActiveMenu(menuType)
    setShowSuperNav(true)
  }

  return (
    <div
      onMouseLeave={() => setShowSuperNav(false)}
      className=' h-full  items-center hidden md:flex'
    >
      <ul className='relative'>
        {/* Invisible Bridge to keep supanav open */}
        <div className='absolute h-[30px] -bottom-[60px] z-30 w-full '></div>
        <li>
          <Button
            className='bg-rose-500 mx-1'
            onMouseEnter={() => handleMouseEnter('destinations')}
          >
            Destinations
          </Button>
          <Button
            className='bg-rose-500 mx-1'
            onMouseEnter={() => handleMouseEnter('tours')}
          >
            Tours
          </Button>
        </li>
      </ul>
      {showSuperNav && <SuperNav type={activeMenu} />}
    </div>
  )
}

export default NavButtons
