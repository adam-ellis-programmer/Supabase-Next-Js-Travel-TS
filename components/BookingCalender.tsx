'use client'
import React, { useState } from 'react'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'

const people = Array.from({ length: 10 }, (_, i) => i)

const bookingDatesFromDb = [
  '6/10/2025',
  '13/10/2025',
  '20/10/2025',
  '27/10/2025',
  //-----------
  '3/11/2025',
  '10/11/2025',
  '17/11/2025',
  '24/11/2025',
]

const BookingCalender = () => {
  const [selected, setSelected] = useState<Date | undefined>()

  // Convert string dates to Date objects
  const availableDates = bookingDatesFromDb.map((dateStr) => {
    const [day, month, year] = dateStr
      .split('/')
      .map((num) => parseInt(num.trim()))
    return new Date(year, month - 1, day)
  })

  // console.log(availableDates)
  //
  // Your disabledDates function is called once per date by DayPicker:
  // Disable all dates EXCEPT those in availableDates
  const disabledDates = (date: Date) => {
    // prettier-ignore
    console.log(typeof date);

    return !availableDates.some(
      (availableDate) =>
        date.getFullYear() === availableDate.getFullYear() &&
        date.getMonth() === availableDate.getMonth() &&
        date.getDate() === availableDate.getDate()
    )
  }

  console.log('Is Oct 5 disabled?', disabledDates(new Date(2025, 9, 5)))

  /**
   * so the way some works is some loops around
   * each item in the bookingDatesFromDb array
   *
   */

  return (
    <div className=''>
      <p className='text-center capitalize text-2xl mt-5'>you pay £1,355</p>
      <div className='flex justify-center mt-5'>
        <DayPicker
          mode='single'
          selected={selected}
          onSelect={setSelected}
          disabled={disabledDates}
          modifiers={{
            available: availableDates,
          }}
          modifiersClassNames={{
            available:
              'bg-green-100 text-green-800 font-bold hover:bg-green-200 rounded-full',
          }}
        />
      </div>
      <label htmlFor='pax' className='mt-5 block'>
        <p className='text-[1.4rem] mb-3'>select passengers</p>
        <select name='' id='pax' className='border w-full p-3'>
          {people.map((item, i) => (
            <option key={i} value={item + 1}>
              {item + 1}
            </option>
          ))}
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
