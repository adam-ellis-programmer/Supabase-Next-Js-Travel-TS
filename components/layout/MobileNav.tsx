'use client'
import { FaBarsStaggered } from 'react-icons/fa6'
import React, { useState, useEffect, useEffectEvent } from 'react'
import { FaPlaneDeparture } from 'react-icons/fa'
import { links as devLinks } from '@/dev/DevButtons'
import Link from 'next/link'

import { megaMenuData } from '@/data/navigation'

const MobileNav = () => {
  const [isNaveOpen, setIsNaveOpen] = useState(false)
  const handleToggle = () => {
    //...
    console.log('clicked ...')
    setIsNaveOpen(!isNaveOpen)
  }

  useEffect(() => {
    if (isNaveOpen) {
      document.documentElement.classList.add('no-scroll')
    }

    return () => {
      document.documentElement.classList.remove('no-scroll')
    }
  }, [isNaveOpen])
  return (
    <div className='block md:hidden'>
      <button onClick={handleToggle} className='cursor-pointer'>
        <FaBarsStaggered className='text-3xl' />
      </button>

      {isNaveOpen && (
        <div className='absolute top-0 bottom-0 left-0 right-0 h-full max-w-[600px] mx-auto z-30 bg-white p-5'>
          <section className=''>
            <div className=' flex justify-between'>
              <div className=' flex'>
                <FaPlaneDeparture className='text-3xl text-blue-400' />
                <h3 className='text-2xl font-bold mx-4'>TravelExplorer</h3>
              </div>
              <button onClick={handleToggle} className='cursor-pointer'>
                <FaBarsStaggered className='text-3xl' />
              </button>
            </div>
          </section>

          <section className=' grid grid-cols-2 mt-5'>
            <ul>
              <li>
                <h2>Australia</h2>
                <ul className='ml-5'>
                  <li>list item 1</li>
                  <li>list item 1</li>
                  <li>list item 1</li>
                </ul>
              </li>

              <li className='mt-2'>
                <h2> Vietnam</h2>
                <ul className='ml-5'>
                  <li>list item 1</li>
                  <li>list item 1</li>
                  <li>list item 1</li>
                </ul>
              </li>

              <li className='mt-2'>
                <h2>Cambodia</h2>
                <ul className='ml-5'>
                  <li>list item 1</li>
                  <li>list item 1</li>
                  <li>list item 1</li>
                </ul>
              </li>
            </ul>

            <div>images </div>
          </section>

          <section className='absolute mt-10'>
            <h4 className='text-center'> dev buttons</h4>
            <ul className='grid grid-cols-3 gap-7'>
              {devLinks.map((link, i) => {
                return (
                  <li key={i} onClick={handleToggle}>
                    <Link
                      className='bg-blue-400 rounded-md p-1 w-full block text-center'
                      href={link.link}
                    >
                      {link.text}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </section>
        </div>
      )}
    </div>
  )
}

export default MobileNav
