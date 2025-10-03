// components/nav/NavButtons.tsx
'use client'
import { Button } from '../../ui/button'
import { useState } from 'react'
import SuperNav from './SuperNav'

const NavButtons = () => {
  const [showSuperNav, setShowSuperNav] = useState(false)
  const [navContent, setnavContent] = useState('false')

  const hadleMousEnter = (id: string) => {
    setShowSuperNav(true)
    setnavContent(id)
  }
  const handleMouseLeave = (id: string) => {
    setShowSuperNav(false)
    setnavContent('')
  }

  return (
    <div className=''>
      <ul>
        <li>
          <Button
            onMouseEnter={() => hadleMousEnter('tours')}
            onMouseLeave={() => handleMouseLeave('tours')}
            className='bg-rose-500 mx-1'
          >
            Tours
          </Button>
          <Button
            onMouseEnter={() => hadleMousEnter('destinations')}
            onMouseLeave={() => handleMouseLeave('destinations')}
            className='bg-rose-500 mx-1'
          >
            destinations
          </Button>
        </li>
      </ul>
      {showSuperNav && <SuperNav navContent={navContent} />}
    </div>
  )
}

export default NavButtons
