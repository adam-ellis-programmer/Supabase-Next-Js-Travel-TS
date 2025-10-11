'use client'
import React, { useState, useEffect } from 'react'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import { BookingSlotWithDates } from '@/types/tours'

interface BookingCalenderProps {
  booking_slots: BookingSlotWithDates[]
  price: number
}

const BookingCalender = ({ booking_slots, price }: BookingCalenderProps) => {
  const [selected, setSelected] = useState<Date | undefined>()
  const [selectedSlotInfo, setSelectedSlotInfo] = useState<{
    places: number
    price: number
  } | null>(null)
  const [numPassengers, setNumPassengers] = useState<number>(1)

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

  const disabledDates = (date: Date) => {
    return !availableDates.some(
      (availableDate) =>
        date.getFullYear() === availableDate.getFullYear() &&
        date.getMonth() === availableDate.getMonth() &&
        date.getDate() === availableDate.getDate()
    )
  }

  const handleDateSelect = (date: Date | undefined) => {
    console.log('date', date)
    setSelected(date)
    setNumPassengers(1) // Reset to 1 when date changes

    if (date) {
      const year = date.getFullYear()
      const month = String(date.getMonth() + 1).padStart(2, '0')
      const day = String(date.getDate()).padStart(2, '0')
      const dateStr = `${year}-${month}-${day}`

      console.log('date string', dateStr)

      const info = dateInfoMap.get(dateStr)

      console.log('dateInfoMap', dateInfoMap)
      console.log('INFO', info)

      if (info) {
        setSelectedSlotInfo({ places: info.places, price: price })
      }
    } else {
      setSelectedSlotInfo(null)
    }
  }

  const handleBooking = () => {
    console.log('making booking...')
    console.log('Places available:', selectedSlotInfo?.places)
    console.log('Number of passengers:', numPassengers)
    console.log(
      'Total price:',
      selectedSlotInfo?.price ? selectedSlotInfo.price * numPassengers : 0
    )
  }

  const handlePaxNum = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNumPassengers(Number(e.target.value))
  }

  // Generate array based on available places
  const people = selectedSlotInfo
    ? Array.from({ length: selectedSlotInfo.places }, (_, i) => i + 1)
    : []

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
          ? `You pay £${selectedSlotInfo.price * numPassengers} (${
              selectedSlotInfo.places
            } places available)`
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

      {selectedSlotInfo && (
        <label htmlFor='pax' className='mt-5 block'>
          <p className='text-[1.4rem] mb-3'>select passengers</p>
          <select
            onChange={handlePaxNum}
            value={numPassengers}
            id='pax'
            className='border w-full p-3'
          >
            {people.map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </label>
      )}

      <div className='flex justify-center mt-5'>
        <button
          onClick={handleBooking}
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
