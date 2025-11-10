// NavButtons.tsx
'use client'
import { Button } from '../../ui/button'
import { useState, memo } from 'react'
import SuperNav from './SuperNav'

interface data {
  sortedContinents: any
  sortedTours: any
}

const NavButtons = ({ sortedContinents, sortedTours }: data) => {
  // console.log('🔵 NavButtons render')

  const [showSuperNav, setShowSuperNav] = useState(false)
  const [activeMenu, setActiveMenu] = useState<'tours' | 'destinations'>(
    'tours'
  )

  const handleMouseEnter = (menuType: 'tours' | 'destinations') => {
    setActiveMenu(menuType)
    setShowSuperNav(true)
  }

  return (
    <div
      onMouseLeave={() => setShowSuperNav(false)}
      className='h-full items-center hidden md:flex'
    >
      <ul className='relative'>
        {/* bridge */}
        <div className='absolute -left-[490px] h-[30px] -bottom-[60px] z-30 w-[610%] '></div>
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
      {showSuperNav && (
        <SuperNav
          type={activeMenu}
          sortedContinents={sortedContinents}
          sortedTours={sortedTours}
        />
      )}
    </div>
  )
}

// Custom comparison - deep compare the props
export default memo(NavButtons, (prevProps, nextProps) => {
  // console.log('🟣 MEMO COMPARISON RUNNING')

  const continentsEqual =
    JSON.stringify(prevProps.sortedContinents) ===
    JSON.stringify(nextProps.sortedContinents)

  const toursEqual =
    JSON.stringify(prevProps.sortedTours) ===
    JSON.stringify(nextProps.sortedTours)

  const isEqual = continentsEqual && toursEqual

  // console.log('🟣 Continents equal?', continentsEqual)
  // console.log('🟣 Tours equal?', toursEqual)
  // console.log('🟣 Should skip render?', isEqual)

  return isEqual
})
