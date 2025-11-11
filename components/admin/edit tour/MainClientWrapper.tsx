'use client'
import React, { useEffect, useRef, useState } from 'react'

import { IoIosInformationCircleOutline, IoMdCloseCircle } from 'react-icons/io'
import { MdEditSquare } from 'react-icons/md'

import StringFields from './StringFields'
import NumberFields from './NumberFields'
import Booleans from './Booleans'
import BookingSlots from './BookingSlots'
import ArrayFields from './ArrayFields'
import Images from './Images'
import EditButton from './EditButton'

const MainClientWrapper = ({ res }: { res: any }) => {
  const categorizedData = Object.entries(res.data).reduce(
    (acc, [key, value]) => {
      // Skip related data objects (related tables)
      // Related table data is an ARRAY of OBJECTS
      if (
        key === 'tour_images' ||
        key === 'itineraries' ||
        key === 'booking_slots'
      ) {
        if (!acc.relatedData) acc.relatedData = {}
        acc.relatedData[key] = value
        return acc
      }

      const type = Array.isArray(value) ? 'array' : typeof value

      if (!acc[type]) {
        acc[type] = {}
      }

      acc[type][key] = value
      return acc
    },
    {} as Record<string, any>
  )
  return (
    <div className='min-h-[calc(100vh-100px)] max-w-[1770px] mx-auto border flex flex-col p-6'>
      <section className='mb-6'>
        <h1 className=' text-2xl font-bold'>Edit Tour Page</h1>
        <p className='capitalize'>
          {' '}
          access level <span> (5)</span>
        </p>
        <p className='flex items-center space-x-2'>
          <IoIosInformationCircleOutline className='text-rose-600' />
          <span>{res.data.tour_name}</span>
        </p>
        <button className='bg-sky-300 p-1 px-2 rounded-sm mt-1 block w-[100px]'>
          All Tours
        </button>
        <button className='bg-blue-300 p-1 px-2 rounded-sm mt-1 block w-[100px]'>
          Update
        </button>
      </section>

      <section className='grid lg:grid-cols-4 gap-5 flex-1 '>
        {/* Strings */}
        <div className=' border-blue-400 p-4 overflow-auto'>
          <StringFields categorizedData={categorizedData} />
        </div>

        {/* Numbers */}
        <div className=' border-green-400 p-4 overflow-auto'>
          <NumberFields categorizedData={categorizedData} />

          {/* Booleans */}

          <Booleans categorizedData={categorizedData} />

          {/* booking slots */}
          <BookingSlots categorizedData={categorizedData} />
        </div>

        {/* Arrays */}
        <div className=' border-orange-400 p-4 overflow-auto'>
          <ArrayFields categorizedData={categorizedData} />

          {/* <h2 className='font-bold text-lg mt-4 mb-3'>Related Data</h2> */}
          <div className='space-y-2 text-sm'></div>
        </div>
        <div>
          <div>
            <div className='flex justify-between mb-5'>
              <p className='font-bold text-lg'>Hero Image</p>
              {/* <EditButton /> */}
            </div>
            <div className='relative'>
              <img
                className='rounded-md w-full object-cover'
                src='https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=1200'
                alt=''
              />

              <div className=' absolute top-0 left-0 w-full flex justify-between  z-10 text-3xl px-2 py-1'>
                <button className=''>
                  <MdEditSquare className='text-black ' />
                </button>
                <button>
                  {/* <MdDelete className='text-green-600' /> */}
                  <IoMdCloseCircle />
                </button>
              </div>
            </div>
          </div>
          <h2 className='font-bold text-lg mt-4 mb-3'>Related Data</h2>
          <Images categorizedData={categorizedData} />
        </div>
      </section>
    </div>
  )
}

export default MainClientWrapper
