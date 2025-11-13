import React from 'react'
import { IoMdCloseCircle } from 'react-icons/io'
import { MdEditSquare } from 'react-icons/md'
import EditButton from './EditButton'

const BookingSlots = ({
  categorizedData,
  tourId,
  res,
}: {
  categorizedData: any
  tourId: number
  res: any
}) => {
  //
  const handleClick = () => {
    console.log('Handling Booking Updates....')
    console.log(res)
  }
  const handleAddNewBookingSlot = () => {
    console.log('adding new date ...')
  }
  const handleAddNewDate = () => {
    console.log('adding new date to slot ...')
  }
  const handleDeleteSlot = () => {
    console.log('deleting  date from slot ...')
  }
  const toggleShow = () => {
    console.log('toggeling show ...')
  }
  const toggleEdit = () => {
    console.log('toggle edit mode ...')
  }
  const handleDeleteDate = () => {
    console.log('deleting date ...')
  }
  return (
    <div className='mt-10'>
      {/* ADD DATE PICKER */}

      {Object.entries(categorizedData.relatedData).map(([key, val], i) => {
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
                        {(item.booking_slot_dates as any[]).map((item, i) => {
                          return (
                            <li
                              key={i}
                              className='flex justify-between border-b'
                            >
                              <div>{item.date}</div>
                              <div className='flex space-x-3'>
                                <input
                                  type='checkbox'
                                  name=''
                                  id=''
                                  defaultChecked
                                />
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
                          <button
                            onClick={handleAddNewDate}
                            className='bg-blue-300 px-5 py-1 rounded-md'
                          >
                            + add new date
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
                  className='bg-rose-500 text-white p-2 rounded-md'
                >
                  Add New Booking Slot
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
