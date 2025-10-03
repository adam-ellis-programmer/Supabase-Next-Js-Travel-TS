'use client'
// npm install react-day-picker date-fns
import React, { useState } from 'react'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
const people = Array.from({ length: 10 }, (_, i) => {
  return i
})

const bookigDatesFromDb = ['1/5/25']

const BookingCalender = () => {
  const [selected, setSelected] = useState<Date | undefined>()
  console.log(selected)

  return (
    <div className=''>
      <p className='text-center capitalize text-2xl mt-5'> you pay £1,355</p>
      <div className=' flex justify-center mt-5'>
        <DayPicker mode='single' selected={selected} onSelect={setSelected} />
      </div>
      <label htmlFor='pax' className='mt-5 block'>
        <p className='text-[1.4rem] mb-3'>select passengers</p>
        <select name='' id='pax' className='border w-full p-3'>
          {people.map((item, i) => {
            return (
              <option key={i} value=''>
                {item + 1}
              </option>
            )
          })}
        </select>
      </label>

      <div className='flex justify-center mt-5'>
        <button className='bg-orange-500 text-white text-2xl p-3 rounded'>
          Book Now!
        </button>
      </div>
    </div>
  )
}

export default BookingCalender
