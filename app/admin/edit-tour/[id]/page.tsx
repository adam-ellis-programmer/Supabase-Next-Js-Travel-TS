import AdminEditTourItinerary from '@/components/Accordions/AdminEditTourItinerary'
import UnderConstruction from '@/components/site/UnderConstruction'
import { getTourByIdAdmin } from '@/lib/supabase/actions/admin/admin-actions'
import React from 'react'
import { IoIosInformationCircleOutline } from 'react-icons/io'

import { MdDelete } from 'react-icons/md'
import { MdEditSquare } from 'react-icons/md'
import { IoMdCloseCircle } from 'react-icons/io'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface AdminEditTourPageProps {
  params: Promise<{ id: string }>
}
const AdminEditTourPage = async ({ params }: AdminEditTourPageProps) => {
  const { id } = await params
  const res = await getTourByIdAdmin(Number(id))
  //   console.log(res.data)

  if (!res.success || !res.data) {
    return <div>Tour not found</div>
  }

  // Dynamically organize by type
  const categorizedData = Object.entries(res.data).reduce(
    (acc, [key, value]) => {
      //   console.log(key, value)
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

  console.log('Categorized Data:', categorizedData)
  console.log(res.data)

  return (
    <div className='min-h-[calc(100vh-100px)] max-w-[1760px] mx-auto border flex flex-col p-6'>
      <section className='mb-6'>
        <h1 className=' text-2xl font-bold'>Edit Tour Page</h1>
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

      <div className='grid lg:grid-cols-4 gap-5 flex-1'>
        {/* Strings */}
        <div className=' border-blue-400 p-4 overflow-auto'>
          <h2 className='font-bold text-lg mb-3 '>
            String Fields ({Object.keys(categorizedData.string || {}).length})
          </h2>
          <div className='space-y-2 text-sm'>
            {Object.entries(categorizedData.string || {}).map(
              ([key, value]) => (
                <div key={key} className='border-b pb-3'>
                  <p className='text-orange-600  cursor-pointer flex items-center justify-between '>
                    <span className='text-lg'>{key}</span>
                    <MdEditSquare className='text-black text-md' />
                  </p>
                  <p className=''>{value as string}</p>
                </div>
              )
            )}
          </div>
        </div>

        {/* Numbers */}
        <div className=' border-green-400 p-4 overflow-auto'>
          <h2 className='font-bold text-lg mb-3'>
            Number Fields ({Object.keys(categorizedData.number || {}).length})
          </h2>
          <div className='space-y-2 text-sm'>
            {Object.entries(categorizedData.number || {}).map(
              ([key, value]) => (
                <div key={key}>
                  <p className='flex justify-between border-b text-md p-1'>
                    <span>{key}:</span>
                    <span> {value as number}</span>
                  </p>
                </div>
              )
            )}
          </div>

          {/* Booleans */}
          <div className=' overflow-auto border-t mt-10 pt-5'>
            <h2 className='font-bold text-lg mb-3'>
              Boolean Fields (
              {Object.keys(categorizedData.boolean || {}).length})
            </h2>
            <div className='space-y-2 text-sm'>
              {Object.entries(categorizedData.boolean || {}).map(
                ([key, value]) => (
                  <div
                    key={key}
                    className='border-b pb-1 text-md flex items-center justify-between'
                  >
                    <p className=''>{key}:</p>{' '}
                    {value ? (
                      <input
                        className='w-[20px] h-[20px]'
                        type='checkbox'
                        name=''
                        defaultChecked={true}
                        id=''
                      />
                    ) : (
                      <input
                        className='w-[20px] h-[20px]'
                        type='checkbox'
                        name=''
                        id=''
                        defaultChecked={false}
                      />
                    )}
                  </div>
                )
              )}
            </div>
            <div>
              {/* ADD DATE PICKER */}
              {Object.entries(categorizedData.relatedData).map(
                ([key, val], i) => {
                  if (key === 'booking_slots') {
                    const data = val as any[]
                    console.log(val)

                    return (
                      <div key={i}>
                        <p className='text-orange-600 text-2xl  mt-5 mb-3'>
                          {key}:
                        </p>
                        <ul>
                          {data.map((item, i) => {
                            // console.log('date item', item)
                            return (
                              <li
                                key={i}
                                className='mb-4 border-b border-dashed border-[#b0a3a3cd]'
                              >
                                <div className='flex space-x-4'>
                                  <p>
                                    {item.month} {item.year}
                                  </p>
                                  <button className=''>
                                    <IoMdCloseCircle className='text-red-500' />
                                  </button>
                                </div>

                                <ul className='ml-5'>
                                  {item.booking_slot_dates.map((item, i) => {
                                    return (
                                      <li
                                        key={i}
                                        className='flex justify-between border-b'
                                      >
                                        <div>{item.date}</div>
                                        <div className='flex space-x-3'>
                                          <button className=''>
                                            <MdEditSquare className='text-black ' />
                                          </button>
                                          <button className=''>
                                            <IoMdCloseCircle className='text-red-500' />
                                          </button>
                                        </div>
                                      </li>
                                    )
                                  })}
                                  <div className='mt-2 flex justify-end'>
                                    <button className='bg-blue-300 px-5 py-1 rounded-md'>
                                      + add new date
                                    </button>
                                  </div>
                                </ul>
                              </li>
                            )
                          })}
                        </ul>
                        <div className='mt-5 flex justify-center items-center'>
                          <button className='bg-rose-500 text-white p-2 rounded-md'>
                            Add New Booking Slot
                          </button>
                        </div>
                      </div>
                    )
                  }
                }
              )}
            </div>
          </div>
        </div>

        {/* Arrays */}
        <div className=' border-orange-400 p-4 overflow-auto'>
          <h2 className='font-bold text-lg mb-3'>
            Array Fields ({Object.keys(categorizedData.array || {}).length})
          </h2>
          <div className='space-y-2 text-sm'>
            {Object.entries(categorizedData.array || {}).map(([key, value]) => (
              <div key={key}>
                {/* {console.log(value)} */}
                <p className='text-orange-600 text-2xl my-3 '>{key}:</p>{' '}
                {(value as any[]).length} items
                <ul>
                  {(value as any[]).map((item, i) => {
                    return (
                      <li key={i}>
                        <p className='border-b border-orange-200 py-2 flex items-center space-x-5 justify-between'>
                          <IoIosInformationCircleOutline className='inline-block mr-3 text-lg' />
                          <span className=' flex-1 '>{item}</span>
                          <span className='flex space-x-3'>
                            <MdEditSquare className='text-black  cursor-pointer' />
                            <IoMdCloseCircle className='text-red-500 cursor-pointer' />
                          </span>
                        </p>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>

          {/* <h2 className='font-bold text-lg mt-4 mb-3'>Related Data</h2> */}
          <div className='space-y-2 text-sm'></div>
        </div>
        <div>
          <div>
            <p className='font-bold text-lg mb-3'>Hero Image</p>
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
          {Object.entries(categorizedData.relatedData || {}).map(
            ([key, value]) => (
              <div key={key}>
                <p className='text-orange-600 text-2xl  mt-5 mb-3'>{key}:</p>{' '}
                <p className='mb-3'> {(value as any[]).length} items</p>
                {/* {console.log(value)} */}
                {key === 'tour_images' && (
                  <ul className='grid grid-cols-2 md:grid-cols-3 gap-2'>
                    {(value as any[]).map((item, i) => {
                      return (
                        <li
                          key={i}
                          className='relative h-[200px]  lg:h-[100px]'
                        >
                          <img
                            className='h-full rounded-lg w-full object-cover object-center'
                            src={item.image_url}
                            alt=''
                          />
                          {/* <div className='absolute top-0 left-0 w-full h-full bg-[#3e4e5c3c] z-1'></div> */}
                          {/* button container */}
                          <div className=' absolute top-0 left-0 w-full flex justify-between  z-10 text-3xl px-2 py-1'>
                            <button className=''>
                              <MdEditSquare className='text-black ' />
                            </button>
                            <button>
                              {/* <MdDelete className='text-green-600' /> */}
                              <IoMdCloseCircle />
                            </button>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                )}
                {key === 'itineraries' && (
                  <ul>
                    <Accordion
                      type='single'
                      collapsible
                      className='w-full'
                      defaultValue='item-0'
                    >
                      {(value as any[]).map((item, i) => {
                        return (
                          <AccordionItem key={i} value={`item-${i}`}>
                            <AccordionTrigger className='bg-blue-200 mb-3 px-5'>
                              <div className='w-full flex justify-between'>
                                <p> {item.day_title}</p>{' '}
                                <p>Day ({item.day_number})</p>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className='flex flex-col gap-4 text-balance'>
                              <div className=' flex justify-end space-x-3'>
                                <button className='cursor-pointer'>
                                  <MdEditSquare className='text-black text-2xl' />
                                </button>
                                <button className='cursor-pointer'>
                                  <IoMdCloseCircle className='text-2xl' />
                                </button>
                              </div>
                              {/* <p>{item.day_description}</p> */}
                              <textarea
                                className='min-h-[250px] outline-none -mt-2'
                                name=''
                                id=''
                                defaultValue={item.day_description}
                              ></textarea>
                            </AccordionContent>
                          </AccordionItem>
                        )
                      })}
                    </Accordion>
                  </ul>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminEditTourPage
