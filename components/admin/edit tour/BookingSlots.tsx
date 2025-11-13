import React, { useState } from 'react'
import { IoMdCloseCircle } from 'react-icons/io'
import { MdEditSquare } from 'react-icons/md'
import EditButton from './EditButton'
import { LiaPlusCircleSolid } from 'react-icons/lia'

import { IoMdCheckmarkCircle } from 'react-icons/io'
import { BiSolidNoEntry } from 'react-icons/bi'

const BookingSlots = ({
  categorizedData,
  tourId,
  res,
}: {
  categorizedData: any
  tourId: number
  res: any
}) => {
  const [defaultData, setDefaultData] = useState(categorizedData.relatedData)
  const [dateEditingIndex, setdateEditingIndex] = useState<number | null>(null)
  const [slotEditingIndex, setslotEditingIndex] = useState<number | null>(null)
  const [dateSlotIndex, setDateSlotIndex] = useState<number | null>(null)

  //
  const handleClick = () => {
    console.log('Handling Booking Updates....')
    console.log(res)
  }
  const handleAddNewBookingSlot = () => {
    console.log('adding new date ...')

    const newData = {
      ...defaultData,
    }

    const newSlot = {
      bookable_places: 0,
      booking_slot_dates: [],
      display_order: 1,
      month: 'January',
      show: true,
      tour_id: 0,
      year: '2026',
    }
    newData['booking_slots'].push(newSlot)
    setDefaultData(newData)
  }

  const handleAddNewDate = (item: any, i: number) => {
    console.log('adding new date to slot ...')
    const dates = [...item.booking_slot_dates]

    const newDate = {
      date: '2025-01-01',
      places: 12,
      show: true,
    }

    const updatedData = {
      ...item,
    }

    updatedData['booking_slot_dates'].push(newDate)
    dates.push(newDate)

    setDefaultData((prev: {}) => ({
      ...prev,
      ...updatedData,
    }))
    console.log(defaultData)
  }
  const handleDeleteSlot = () => {
    console.log('deleting  date from slot ...')
  }
  const toggleShow = () => {
    console.log('toggeling show ...')
  }
  const setEdit = (dateIndex: number, slotIndex: number) => {
    setdateEditingIndex(dateIndex) // date
    setslotEditingIndex(slotIndex) // slot
    console.log('slotIndex', slotIndex)
    console.log('dateIndex', dateIndex)
  }
  const handleDeleteDate = () => {
    console.log('deleting date ...')
  }

  const handleCancel = () => {
    setdateEditingIndex(null)
    setslotEditingIndex(null)
  }

  const handleEditSlotDate = (slotIndex: number) => {
    console.log('editing slot...')
    setDateSlotIndex(slotIndex)
  }

  const handleCancelSlotEdit = () => {
    setDateSlotIndex(null)
  }
  return (
    <div className='mt-10'>
      {/* ADD DATE PICKER */}

      {Object.entries(defaultData).map(([key, val], i) => {
        if (key === 'booking_slots') {
          const data = val as any[]
          // console.log(data?.length)
          return (
            <div key={i} className=''>
              {/* <p className='text-orange-600 text-2xl  mt-5 mb-3'>{key}:</p> */}
              <div className='flex justify-between mb-4'>
                <h2 className='font-bold text-lg'>
                  Booking Slot Fields <span>({data?.length})</span>
                </h2>
                <EditButton onClick={handleClick} />
              </div>
              <div className='flex justify-end space-x-5 capitalize'>
                <span>s</span>
                <span>e</span>
                <span>d</span>
              </div>
              <div className='mb-2 ml-5 space-x-8'>
                <span>SP</span>
                <span>DT</span>
              </div>
              <ul>
                {data.map((item, index) => {
                  // console.log('date item', item)
                  return (
                    <li
                      key={index}
                      className='mb-4 border-b border-dashed border-[#b0a3a3cd]'
                    >
                      <div className='flex mb-2  border-b-[1px] border-dashed  justify-between '>
                        {dateSlotIndex === index ? (
                          <div className='flex w-[200px]'>
                            <input
                              defaultValue={item.month}
                              className='border-[2px] rounded-md w-full mx-2 border-blue-400'
                              type='text'
                              name=''
                              id=''
                            />
                            <input
                              defaultValue={item.year}
                              className='border-[2px] rounded-md w-full mx-2 border-blue-400'
                              type='text'
                            />
                          </div>
                        ) : (
                          <p>
                            {item.month} {item.year}
                          </p>
                        )}
                        {dateSlotIndex === index ? (
                          <div className='flex space-x-2 items-center '>
                            <IoMdCheckmarkCircle
                              className='text-green-600 text-xl cursor-pointer hover:text-green-700'
                              title='Save'
                              // onClick={() => handleSave(key)}
                            />
                            <IoMdCloseCircle
                              className='text-red-600 text-xl cursor-pointer hover:text-red-700'
                              title='Cancel'
                              onClick={handleCancelSlotEdit}
                            />
                          </div>
                        ) : (
                          <div className='flex space-x-3'>
                            <button onClick={() => handleEditSlotDate(index)}>
                              <MdEditSquare className='text-black ' />
                            </button>
                            <button className=''>
                              <IoMdCloseCircle className='text-red-500' />
                            </button>
                          </div>
                        )}
                      </div>

                      <ul className='ml-5'>
                        {(item.booking_slot_dates as any[]).map((item, i) => {
                          return (
                            <li
                              key={i}
                              className='flex justify-between border-b'
                            >
                              {dateEditingIndex === i &&
                              slotEditingIndex === index ? (
                                <div className='border w-[50px] flex space-x-3'>
                                  <input
                                    type='number'
                                    defaultValue={item.places}
                                    className='w-[100px]  border-blue-500 border-[2px] rounded-md'
                                  />
                                  <input
                                    type='date'
                                    name=''
                                    id=''
                                    className='border-blue-500 border-[2px] rounded-md'
                                  />
                                </div>
                              ) : (
                                <div className=' space-x-8'>
                                  <span className=''>{item.places}</span>
                                  <span className=''>{item.date}</span>
                                </div>
                              )}
                              {dateEditingIndex === i &&
                              slotEditingIndex === index ? (
                                <div className='flex space-x-2'>
                                  <IoMdCheckmarkCircle
                                    className='text-green-600 text-xl cursor-pointer hover:text-green-700'
                                    title='Save'
                                    // onClick={() => handleSave(key)}
                                  />
                                  <IoMdCloseCircle
                                    className='text-red-600 text-xl cursor-pointer hover:text-red-700'
                                    title='Cancel'
                                    onClick={handleCancel}
                                  />
                                </div>
                              ) : (
                                <div className='flex space-x-3'>
                                  <input
                                    type='checkbox'
                                    name=''
                                    id=''
                                    defaultChecked
                                  />
                                  <button
                                    onClick={() => setEdit(i, index)}
                                    className=''
                                  >
                                    <MdEditSquare className='text-black ' />
                                  </button>
                                  <button className=''>
                                    <IoMdCloseCircle className='text-red-500' />
                                  </button>
                                </div>
                              )}
                            </li>
                          )
                        })}
                        <div className='mt-2 flex justify-end'>
                          <button
                            onClick={() => handleAddNewDate(item, i)}
                            className='bg-blue-300 px-1 py-1 rounded-md flex items-center space-x-2'
                          >
                            <LiaPlusCircleSolid />
                            <span> booking date</span>
                          </button>
                        </div>
                      </ul>
                    </li>
                  )
                })}
              </ul>
              <div className='mt-5 flex justify-center items-center'>
                <button
                  onClick={handleAddNewBookingSlot}
                  className='bg-blue-300 text-black px-3 py-[5px] rounded-md flex items-center space-x-2'
                >
                  <LiaPlusCircleSolid />
                  <span> booking slot</span>
                </button>
              </div>
            </div>
          )
        }
      })}
    </div>
  )
}

export default BookingSlots
