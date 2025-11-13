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

  // Track any changes made before we commit to db
  const [editedChanges, setEditedChanges] = useState({})

  // Track any changes to month / year on slot before we make the changes
  const [yearMonthChanges, setYearMonthChanges] = useState({})
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

  const handleSave = (key: string, slotIndex: number) => {
    console.log('logged', key)

    setDefaultData((prev: any) => {
      // Create a copy of the booking_slots array
      const updatedBookingSlots = [...prev.booking_slots]

      // Get the slot index from yearMonthChanges
      const targetSlotIndex = (yearMonthChanges as any).slotIndex

      // Update the specific slot with the new month/year
      updatedBookingSlots[targetSlotIndex] = {
        ...updatedBookingSlots[targetSlotIndex],
        month:
          (yearMonthChanges as any).month ||
          updatedBookingSlots[targetSlotIndex].month,
        year:
          (yearMonthChanges as any).year ||
          updatedBookingSlots[targetSlotIndex].year,
      }

      return {
        ...prev,
        booking_slots: updatedBookingSlots,
      }
    })

    setYearMonthChanges({}) // Clear changes after saving
    handleCancelSlotEdit()
  }

  const handleDateChange = (
    value: string,
    slotIndex: number,
    dateIndex: number,
    key: string
  ) => {
    console.log(key, value)

    const data =
      defaultData.booking_slots[slotIndex].booking_slot_dates[dateIndex]

    setEditedChanges((prev: any) => ({
      ...prev,
      id: data.id,
      data: {
        // we was not preserving previous data just re spreading each time
        ...defaultData.booking_slots[slotIndex].booking_slot_dates[dateIndex],
        ...(prev.data || {}), // Preserve previous edits
        [key]: key === 'places' ? Number(value) : value,
      },
    }))
  }

  const handleSaveDate = (slotIndex: number, dateIndex: number) => {
    setDefaultData((prev: any) => {
      // Create a deep copy of the booking_slots array
      const updatedBookingSlots = [...prev.booking_slots]

      // Create a copy of the specific slot
      const updatedSlot = { ...updatedBookingSlots[slotIndex] }

      // Create a copy of the booking_slot_dates array
      const updatedDates = [...updatedSlot.booking_slot_dates]
      // console.log(...updatedDates[dateIndex])

      // Update the specific date with the edited changes
      updatedDates[dateIndex] = {
        ...updatedDates[dateIndex],

        ...(editedChanges as any).data, // Merge in the edited data
      }

      // Update the slot with the new dates
      updatedSlot.booking_slot_dates = updatedDates

      // Update the booking_slots array
      updatedBookingSlots[slotIndex] = updatedSlot

      // Return the new state
      return {
        ...prev,
        booking_slots: updatedBookingSlots,
      }
    })

    console.log(editedChanges)
    setEditedChanges({}) // Clear edited changes after saving
    handleCancel()
  }

  const handleCancelSlotEdit = () => {
    setDateSlotIndex(null)
  }

  const handleMonthYearChange = (
    value: string,
    slotIndex: number,
    key: string
  ) => {
    console.log(value, slotIndex)

    // make an object to track the values we are chnaging
    // only need one object at a time! for this pattern
    setYearMonthChanges((prev) => {
      const data = defaultData.booking_slots[slotIndex]
      console.log(data)

      return {
        ...prev,
        slotIndex: slotIndex, // Track which slot
        [key]: value, // Update the specific key (month or year)
      }
    })
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
                              onChange={(e) =>
                                handleMonthYearChange(
                                  e.target.value,
                                  index,
                                  'month'
                                )
                              }
                            />
                            <input
                              defaultValue={item.year}
                              className='border-[2px] rounded-md w-full mx-2 border-blue-400'
                              type='text'
                              onChange={(e) =>
                                handleMonthYearChange(
                                  e.target.value,
                                  index,
                                  'year'
                                )
                              }
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
                              onClick={() => handleSave(key, i)}
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
                                    onChange={(e) =>
                                      handleDateChange(
                                        e.target.value,
                                        index,
                                        i,
                                        'places'
                                      )
                                    }
                                  />
                                  <input
                                    type='date'
                                    name=''
                                    id=''
                                    className='border-blue-500 border-[2px] rounded-md'
                                    onChange={(e) =>
                                      handleDateChange(
                                        e.target.value,
                                        index,
                                        i,
                                        'date'
                                      )
                                    }
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
                                    onClick={() => handleSaveDate(index, i)}
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
                                    defaultChecked={item.show}
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
