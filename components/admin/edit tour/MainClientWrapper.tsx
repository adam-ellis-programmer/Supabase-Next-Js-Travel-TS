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
import Link from 'next/link'
import AlertModal from './AlertModal'
import Itineraries from './Itineraries'
import AlertDeleteModal from './AlertDeleteModal'
import DemoAlert from '../alerts/DemoAlert'

const MainClientWrapper = ({ res, tourId }: { res: any; tourId: number }) => {
  // console.log('res-->', res)

  const [showAlert, setShowAlert] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [demoAlert, setDemoAlert] = useState(false)

  // ORGANIZE DATA
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
  // Update in sections
  return (
    <div className='min-h-[calc(100vh-100px)] max-w-[1770px] mx-auto  flex flex-col p-6'>
      {demoAlert && <DemoAlert />}
      {showAlert && <AlertModal setShowAlert={setShowAlert} />}
      {showDeleteModal && (
        <AlertDeleteModal setShowDeleteModal={setShowDeleteModal} />
      )}
      <section className='mb-6 border-b pb-7'>
        <h1 className=' text-2xl font-bold'>Edit Tour Page</h1>
        <p className='capitalize'>
          {' '}
          page access level{' '}
          <span className='text-rose-500 font-bold'> ({res.data.access})</span>
        </p>
        <p className='flex items-center space-x-2'>
          <IoIosInformationCircleOutline className='text-rose-600' />
          <span>{res.data.tour_name}</span>
        </p>
        <div className=' w-[280px] grid grid-cols-2 gap-1'>
          <button className='bg-sky-300 p-1 px-2 rounded-sm mt-1 block w-full'>
            All Tours
          </button>
          <Link
            href={`/`}
            className='bg-blue-300 p-1 px-2 rounded-sm mt-1 block w-full text-center'
          >
            Home
          </Link>
          <Link
            href={`/tours/${tourId}`}
            className='bg-blue-300 p-1 px-2 rounded-sm mt-1 block  text-center col-span-2'
          >
            View Tour
          </Link>
          <button
            onClick={() => setShowDeleteModal(true)}
            className='bg-rose-300 p-1 px-2 rounded-sm mt-1 block  text-center col-span-2'
          >
            Remove Tour
          </button>
        </div>
      </section>

      <section className='grid lg:grid-cols-4 gap-5 flex-1 '>
        {/* Strings */}
        <div className=' border-blue-400 p-4 overflow-auto'>
          <StringFields
            categorizedData={categorizedData}
            tourId={tourId}
            res={res}
            setShowAlert={setShowAlert}
            setDemoAlert={setDemoAlert}
          />
        </div>

        {/* Numbers */}
        <div className=' border-green-400 p-4 overflow-auto'>
          <NumberFields
            categorizedData={categorizedData}
            res={res}
            tourId={tourId}
            setShowAlert={setShowAlert}
            setDemoAlert={setDemoAlert}
          />

          {/* Booleans */}

          <Booleans
            categorizedData={categorizedData}
            res={res}
            tourId={tourId}
            setShowAlert={setShowAlert}
            setDemoAlert={setDemoAlert}
          />

          {/* booking slots */}
          <BookingSlots
            categorizedData={categorizedData}
            res={res}
            tourId={tourId}
            setShowAlert={setShowAlert}
            setDemoAlert={setDemoAlert}
          />
        </div>

        {/* Arrays */}
        <div className=' border-orange-400 p-4 overflow-auto'>
          <ArrayFields
            categorizedData={categorizedData}
            tourId={tourId}
            setShowAlert={setShowAlert}
            setDemoAlert={setDemoAlert}
          />
        </div>
        <div className=''>
          {/* Manage Images */}
          <Images
            categorizedData={categorizedData}
            tourId={tourId}
            setDemoAlert={setDemoAlert}
          />

          {/* Manage Itineraries */}
          <Itineraries
            categorizedData={categorizedData}
            tourId={tourId}
            setShowAlert={setShowAlert}
            setDemoAlert={setDemoAlert}
          />
        </div>
      </section>
    </div>
  )
}

export default MainClientWrapper
