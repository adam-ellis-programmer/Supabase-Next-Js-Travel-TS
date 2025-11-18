import React, { useState } from 'react'
import { IoMdCloseCircle } from 'react-icons/io'
import { MdEditSquare } from 'react-icons/md'
import EditButton from './EditButton'
import { LiaPlusCircleSolid } from 'react-icons/lia'

import { IoMdCheckmarkCircle } from 'react-icons/io'
import { BiSolidNoEntry } from 'react-icons/bi'
import { booking_slots } from '@/seed/data/booking_slots'
import { updateBookingDates } from '@/lib/supabase/actions/admin/booking-slot-actions'

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
  const [loading, setloading] = useState<boolean>(false)
  const [updateActivate, setupdateActivate] = useState<boolean>(true)

  // Track any changes made before we commit to db
  const [editedChanges, setEditedChanges] = useState({})

  // Track any changes to month / year on slot before we make the changes
  const [yearMonthChanges, setYearMonthChanges] = useState({})

  const handleUpdateClick = async () => {
    setloading(true)
    console.log('Handling Booking Updates....')
    console.log('RES:', res)
    console.log('defaultData', defaultData.booking_slots)
    // return

    try {
      const result = await updateBookingDates(
        updateActivate,
        defaultData.booking_slots,
        tourId
      )

      if (result?.success) {
        console.log('✅ Success:', result.message)
        console.log('res from db: ', result)

        const dates = result.existingUpdatedSlots

        // for (const date of dates) {
        //   // console.log(date)

        //   const { booking_slot_dates } = date

        //   for (const d of booking_slot_dates) {
        //     console.log(d)
        //   }
        // }

        // Optionally refresh data or show success message
      } else {
        console.error('❌ Error:', result?.message)
        // Show error message to user
      }
    } catch (error) {
      console.log(error)
    } finally {
      setloading(false)
    }
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
  const handleDeleteSlot = (slotIndex: number) => {
    console.log('deleting  date from slot ...', slotIndex)
    // console.log(categorizedData.relatedData['booking_slots'][slotIndex])
    // console.log(categorizedData.relatedData['booking_slots'])
    // console.log(defaultData.booking_slots)

    setDefaultData((prev: any) => {
      const data = [...defaultData.booking_slots]
      const filteredData = data.filter((_, i) => i !== slotIndex)

      const updatedData = {
        ...prev,
        booking_slots: filteredData,
      }

      return {
        ...prev,
        ...updatedData,
      }
    })
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

  const handleSaveSlotData = (key: string, slotIndex: number) => {
    console.log('logged', key)

    // check if yearMonthChanges has length to stop [Cannot read properties of undefined (reading 'month')]
    if (Object.keys(yearMonthChanges).length === 0) {
      handleCancelSlotEdit()
      return
    }

    setDefaultData((prev: any) => {
      // Create a copy of the booking_slots array
      const updatedBookingSlots = [...prev.booking_slots]
      console.log('updatedBookingSlots', updatedBookingSlots)
      console.log('yearMonthChanges', yearMonthChanges)

      // Get the slot index from yearMonthChanges
      const targetSlotIndex = (yearMonthChanges as any).slotIndex

      // Update the specific slot with the new month/year
      updatedBookingSlots[targetSlotIndex] = {
        ...updatedBookingSlots[targetSlotIndex],
        // "Use the new month if it exists, otherwise keep the old month
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

  // console.log('Slot Index', slotIndex)
  // console.log('Date Index', dateIndex)
  const deleteDate = (slotIndex: number, dateIndex: number) => {
    console.log('deleting...')

    // 1. Copy the booking_slots array (updatedBookingSlots)

    // 2. Copy the specific slot we're modifying (updatedSlot)

    // 3. Filter out the date at dateIndex (filteredDates)

    // 4. Update the slot with filtered dates (updatedSlot)

    // 5. Put the updated slot back in the array (updatedBookingSlots)

    /**
     * 1: take the orignal array and copy
     * 2: take the nested object and copy
     * 3: grab that objects booking dates
     * 4: filter out that deleted date from the booking dates object
     * 5: set the updated dates to the new filtered dates
     * 6: finally take the updated slot object and nicely place back in the original level one array
     *
     */

    setDefaultData((prev: any) => {
      // console.log('prev', prev)

      const updatedBookingSlots = [...prev.booking_slots]

      const updatedSlot = { ...updatedBookingSlots[slotIndex] } // working with the actual slot object
      // console.log('updatedSlot', updatedSlot)

      const datesToUpdate = updatedSlot.booking_slot_dates

      // don't need to spread because .filter() already returns a NEW array!
      // prettier-ignore
      const filteredDates = datesToUpdate.filter((_:any, i:number ) => i !== dateIndex)

      // 4. Update the slot with filtered dates
      updatedSlot.booking_slot_dates = filteredDates

      // 5. Put the updated slot back in the array
      updatedBookingSlots[slotIndex] = updatedSlot

      return {
        ...prev,
        booking_slots: updatedBookingSlots,
      }
    })
  }

  const handleShowBoolean = (
    value: boolean,
    slotIndex: number,
    dateIndex: number
  ) => {
    // console.log('value', value)
    // console.log('slot index', slotIndex)
    // console.log('date index', dateIndex)
    // Main objective is to update the data array here and commit these updates in the
    // main update function
    setDefaultData((prev: any) => {
      // 1: first set the copy so we can do stuff do it
      // 1: first set the copy so we can do stuff do it
      const updatedBookingSlotsArr = [...prev.booking_slots]
      // console.log(updatedBookingSlotsArr)

      const updatedBookingSlot = { ...updatedBookingSlotsArr[slotIndex] }
      // console.log('booking slot: ', updatedBookingSlot)
      const updatedBookingDates = updatedBookingSlot.booking_slot_dates

      updatedBookingDates[dateIndex].show = value
      console.log('updatedBookingDates', updatedBookingDates[dateIndex])

      // PLACE UPDATED OBJECT BACK IN THE NEW ARRAY WE RETURN
      // PLACE UPDATED OBJECT BACK IN THE NEW ARRAY WE RETURN
      // PLACE UPDATED OBJECT BACK IN THE NEW ARRAY WE RETURN
      // <- take the original copy use the slot index and set the new copy of the object
      // make tracker for unsaved changes made
      // next create a booking slots action database call with admin check etc

      // --> ARRAY <--      --INDEX--        --> OBJECT <--
      updatedBookingSlotsArr[slotIndex] = updatedBookingSlot
      // --> ARRAY <--      --INDEX--        --> OBJECT <--

      // next copy the object we are going to work on {...} and spread
      // Look up how react looks and detects changes for re-renders
      return {
        ...prev,
        // 2: then set that key to the updated value here
        booking_slots: updatedBookingSlotsArr,
      }
    })
    // console.log(defaultData)
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
                {loading ? (
                  <div className=' flex items-center space-x-5 cursor-default'>
                    <div className=' animate-spin h-[30px] w-[30px] border-t-black rounded-full border-[4px] border-green-600'></div>
                    <p className='capitalize text-xl'>updating</p>
                  </div>
                ) : (
                  <EditButton onClick={handleUpdateClick} />
                )}
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
                      className='mb-4 border-b border-dashed border-[#b0a3a3cd] '
                    >
                      <span className='bg-rose-500 text-white rounded-lg px-[2px] p-[1px]'>
                        {item.id}
                      </span>
                      <div className='flex mb-2  border-b-[1px] border-dashed  justify-between  '>
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
                              onClick={() => handleSaveSlotData(key, i)}
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
                            <button
                              onClick={() => handleDeleteSlot(index)}
                              className=''
                            >
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
                                <div className=''>
                                  <span className=' inline-block w-12'>
                                    {item.places}
                                  </span>
                                  <span className=' inline-block '>
                                    {item.date}
                                  </span>
                                </div>
                              )}
                              {dateEditingIndex === i &&
                              slotEditingIndex === index ? (
                                <div className='flex space-x-2  items-center'>
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
                                    onChange={(e) =>
                                      handleShowBoolean(
                                        e.target.checked,
                                        index,
                                        i
                                      )
                                    }
                                    defaultChecked={item.show}
                                  />

                                  <button
                                    onClick={() => setEdit(i, index)}
                                    className=''
                                  >
                                    <MdEditSquare className='text-black ' />
                                  </button>
                                  <button
                                    onClick={() => deleteDate(index, i)}
                                    className=''
                                  >
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
