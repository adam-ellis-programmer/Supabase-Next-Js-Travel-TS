import React from 'react'
import { IoMdCloseCircle } from 'react-icons/io'
import { MdEditSquare } from 'react-icons/md'

const BookingSlots = ({ categorizedData }: { categorizedData: any }) => {
  return (
    <div>
      {/* ADD DATE PICKER */}
      {Object.entries(categorizedData.relatedData).map(([key, val], i) => {
        if (key === 'booking_slots') {
          const data = val as any[]
          // console.log(data?.length)
          return (
            <div key={i}>
              <p className='text-orange-600 text-2xl  mt-5 mb-3'>{key}:</p>
              <p>{data?.length} Slots</p>
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
      })}
    </div>
  )
}

export default BookingSlots
