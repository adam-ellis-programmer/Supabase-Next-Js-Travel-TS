'use client'
import React, { useState } from 'react'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
// npm install react-day-picker date-fns
const BookingCalender = () => {
  const [selected, setSelected] = useState<Date | undefined>()
  return (
    <div className=' flex justify-center mt-5'>
      <DayPicker mode='single' selected={selected} onSelect={setSelected} />
    </div>
  )
}

export default BookingCalender
