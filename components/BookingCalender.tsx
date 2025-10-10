'use client'
import React, { useState } from 'react'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import { BookingSlotWithDates } from '@/types/tours'

const people = Array.from({ length: 10 }, (_, i) => i)

interface BookingCalenderProps {
  booking_slots: BookingSlotWithDates[]
}

const BookingCalender = ({ booking_slots }: BookingCalenderProps) => {
  const [selected, setSelected] = useState<Date | undefined>()
  const [selectedSlotInfo, setSelectedSlotInfo] = useState<{
    places: number
    price: number
  } | null>(null)

  // Build a map of dates to their slot info for quick lookup
  const dateInfoMap = new Map<string, { places: number; slotId: number }>()
  const availableDates: Date[] = []

  booking_slots?.forEach((slot) => {
    slot.booking_slot_dates?.forEach((dateObj) => {
      if (dateObj.show && dateObj.places > 0) {
        const date = new Date(dateObj.date)
        availableDates.push(date)
        dateInfoMap.set(dateObj.date, {
          places: dateObj.places,
          slotId: slot.id,
        })
      }
    })
  })
  // console.log(availableDates)

  const disabledDates = (date: Date) => {
    return !availableDates.some(
      (availableDate) =>
        date.getFullYear() === availableDate.getFullYear() &&
        date.getMonth() === availableDate.getMonth() &&
        date.getDate() === availableDate.getDate()
    )
  }

  const handleDateSelect = (date: Date | undefined) => {
    console.log(date)

    setSelected(date)
    if (date) {
      const dateStr = date.toISOString().split('T')[0]
      const info = dateInfoMap.get(dateStr)

      if (info) {
        setSelectedSlotInfo({ places: info.places, price: 1355 })
      }
    }
  }
  // console.log(selectedSlotInfo)

  return (
    <div className=''>
      {/* Display available months */}
      <div className='mb-4'>
        <h3 className='font-semibold mb-2'>Available Months:</h3>
        <div className='flex flex-wrap gap-2'>
          {booking_slots?.map((slot) => (
            <span
              key={slot.id}
              className='px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm'
            >
              {slot.month} {slot.year}
            </span>
          ))}
        </div>
      </div>

      <p className='text-center capitalize text-2xl mt-5'>
        {selectedSlotInfo
          ? `You pay £${selectedSlotInfo.price} (${selectedSlotInfo.places} places available)`
          : 'Select a date'}
      </p>

      <div className='flex justify-center mt-5'>
        <DayPicker
          mode='single'
          selected={selected}
          onSelect={handleDateSelect}
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
        <button
          className='bg-orange-500 text-white text-2xl p-3 rounded disabled:bg-gray-400'
          disabled={!selected}
        >
          Book Now!
        </button>
      </div>
    </div>
  )
}

export default BookingCalender
