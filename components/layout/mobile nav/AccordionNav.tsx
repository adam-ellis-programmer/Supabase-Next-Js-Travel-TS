'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { LogoutButton } from '@/components/logout-button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { MdAdminPanelSettings } from 'react-icons/md'
import { useAuthAdmin } from '@/hooks/useAuthAdmin'
import { ToursByCountry, ToursByCountryData } from '@/types/navigation' // Add this import

const AccordionNav = ({
  sortedTours,
  setIsNaveOpen,
}: {
  sortedTours: ToursByCountry // Change from 'any' to proper type
  setIsNaveOpen: (isNaveOpen: boolean) => void
}) => {
  const supabase = createClient()
  const { user, loading } = useAuthAdmin()
  console.log(user)

  // Now TypeScript knows the structure
  const tourData: [string, ToursByCountryData][] = Object.entries(sortedTours)

  const handleMobileTourNav = () => {
    setIsNaveOpen(false)
  }

  const btnGrid = ' grid grid-cols-2 mb-5 gap-3'

  return (
    <>
      <div className={`${btnGrid} `}>{/* ... rest of your buttons ... */}</div>

      <Accordion type='single' collapsible className='mb-3'>
        {tourData.map((item, i) => {
          const [countryName, countryData] = item // Destructure for clarity
          return (
            <AccordionItem key={i} value={`item-${i}`} className='mb-[2px]'>
              <AccordionTrigger className='bg-pink-500 px-5 py-2 text-white text-lg font-bold'>
                <p>
                  Tours in {countryName}{' '}
                  <span className='ml-3'>({countryData.tours.length})</span>
                </p>
              </AccordionTrigger>
              <ul className='ml-2'>
                {countryData.tours.map((tour, tourIndex) => {
                  return (
                    <li className='text-lg' key={tourIndex}>
                      <AccordionContent className='mt-2'>
                        <p className='font-bold text-lg cursor-pointer'>
                          <Link
                            href={`/tours/${tour.id}`}
                            onClick={handleMobileTourNav}
                          >
                            {tour.tour_name}
                          </Link>
                        </p>
                      </AccordionContent>
                    </li>
                  )
                })}
              </ul>
            </AccordionItem>
          )
        })}
      </Accordion>
    </>
  )
}

export default AccordionNav
