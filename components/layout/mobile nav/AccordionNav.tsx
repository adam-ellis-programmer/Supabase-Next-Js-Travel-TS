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
const AccordionNav = ({
  sortedTours,
  setIsNaveOpen,
}: {
  sortedTours: any
  setIsNaveOpen: (isNaveOpen: boolean) => void
}) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    // Check initial auth state
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      setUser(user)
      setLoading(false)
    }

    checkUser()

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  const tourData = Object.entries(sortedTours)

  const handleMobileTourNav = () => {
    setIsNaveOpen(false)
  }

  const btnGrid = ' grid grid-cols-2 mb-5 gap-3'
  const btnFlex = ' space-x-2 space-y-1 mb-5'
  return (
    <>
      {/* space-x-2 space-y-1 mb-5 */}
      <div className={`${btnGrid} `}>
        <span className='text-center text-lg py-1 bg-pink-500 px-3 rounded-md font-bold text-white inline-block cursor-pointer'>
          open all
        </span>
        <span className='text-center text-lg py-1 bg-sky-600 px-5 rounded-md font-bold text-white inline-block cursor-pointer'>
          best sellers
        </span>

        {/* Conditional rendering based on auth state */}
        {!loading && (
          <>
            {user ? (
              <LogoutButton
                handleMobileTourNav={handleMobileTourNav}
                mobile={true}
                className='text-lg py-1 bg-red-600 px-5 rounded-md font-bold text-white inline-block cursor-pointer ml-0'
              />
            ) : (
              <Link
                href={`/auth/login`}
                onClick={handleMobileTourNav}
                className='space-x-1  text-lg py-1 bg-orange-600 px-5 rounded-md font-bold text-white inline-flex items-center justify-center cursor-pointer'
              >
                <MdAdminPanelSettings />
                <span className=''>login</span>
              </Link>
            )}
          </>
        )}

        <Link
          href={`/`}
          onClick={handleMobileTourNav}
          className='text-center text-lg py-1 bg-zinc-500 px-5 rounded-md font-bold text-white inline-block cursor-pointer'
        >
          <span>home</span>
        </Link>
      </div>

      <Accordion type='single' collapsible className='mb-3'>
        {tourData.map((item, i) => {
          return (
            <AccordionItem key={i} value={`item-${i}`} className='mb-[2px]'>
              <AccordionTrigger className='bg-pink-500 px-5 py-2 text-white text-lg font-bold'>
                <p>
                  Tours in {item[0]}{' '}
                  <span className='ml-3'>({item[1].tours.length})</span>
                </p>
              </AccordionTrigger>
              <ul className='ml-2'>
                {item[1].tours.map((item, i) => {
                  return (
                    <li className='text-lg' key={i}>
                      <AccordionContent className='mt-2'>
                        <p className='font-bold text-lg cursor-pointer'>
                          <Link
                            href={`/tours/${item.id}`}
                            onClick={handleMobileTourNav}
                          >
                            {item.tour_name}
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
