'use client'
import React, { useState, useEffect } from 'react'

// TypeScript interfaces
interface Passenger {
  id: string
  name: string
  age: number | string
  idVerification: 'passport' | 'drivers-license' | ''
  lead: boolean
}

interface Booking {
  bookingId: number
  leadPaxId: number
  numOfPax: number
  tripName: string
  days: number
  subtotal: number
  tax: number
  total: number
  bookingDate: string
  tripImg: string
  passengers: Passenger[]
}

const ManageBooking = () => {
  const [customersBookings, setCustomersBookings] = useState<Booking[]>([])
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null)
  const [passengers, setPassengers] = useState<Passenger[]>([])

  // Generate dummy data only on client side after mount
  useEffect(() => {
    const getRandomInt = (min: number, max: number): number => {
      const minCeiled = Math.ceil(min)
      const maxFloored = Math.floor(max)
      return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
    }

    const dummyData: Booking[] = Array.from({ length: 3 }, (_, i) => {
      return {
        completed: true,
        bookingId: i + 1,
        leadPaxId: 1,
        numOfPax: getRandomInt(2, 5),
        tripName: [
          '30 Day Outback Explorer',
          '20 Day Asia Intro',
          '1 Year Working Holiday Package Australia',
        ][i],
        days: [30, 20, 365][i],
        subtotal: [4500, 3200, 12000][i],
        tax: 0.02,
        total: [4590, 3264, 12240][i],
        bookingDate: new Date().toLocaleDateString(),
        tripImg: ['', '', ''][i],
        passengers: [
          {
            id: `p-${i}-1`,
            name: ['Emma', 'Lisa', 'Susan'][i],
            age: [28, 29, 41][i],
            idVerification: 'passport',
            lead: true,
          },
        ],
      }
    })

    setCustomersBookings(dummyData)
    setSelectedBooking(dummyData[0])
    setPassengers(dummyData[0].passengers)
  }, [])

  // Handle booking selection
  const handleBookingSelect = (booking: Booking) => {
    setSelectedBooking(booking)
    setPassengers(booking.passengers)
  }

  // Add new passenger
  const handleAddPassenger = () => {
    const newPassenger: Passenger = {
      id: `p-${Date.now()}`,
      name: '',
      age: '',
      idVerification: '',
      lead: false,
    }
    setPassengers([...passengers, newPassenger])
  }

  // Update passenger info
  const handlePassengerChange = (
    id: string,
    field: keyof Passenger,
    value: string | number
  ) => {


    setPassengers(
      passengers.map((pax) =>
        pax.id === id ? { ...pax, [field]: value } : pax
      )
    )
  }

  // Remove passenger
  const handleRemovePassenger = (id: string) => {
    setPassengers(passengers.filter((pax) => pax.id !== id))
  }

  // Save booking changes
  const handleSaveBooking = () => {
    // Here you would save to Supabase
    // console.log('Saving booking:', { ...selectedBooking, passengers })
    alert('Booking updated successfully!')
  }

  return (
    <div className='min-h-[calc(100vh-100px)] bg-gray-50 py-8 max-w-[1300px] mx-auto p-5'>
      {/* Header */}
      <section className='mb-8'>
        <h1 className='text-center text-3xl font-bold text-gray-800'>
          Manage Your Bookings
        </h1>
        <p className='text-center text-gray-600 mt-2'>
          Select a booking to update passenger information
        </p>
      </section>

      {/* Loading State */}
      {customersBookings.length === 0 ? (
        <div className='text-center py-12'>
          <p className='text-gray-500'>Loading your bookings...</p>
        </div>
      ) : (
        <>
          {/* Booking Cards Grid */}
          <section className='mb-8'>
            <h2 className='text-xl font-semibold mb-4 text-gray-700'>
              Your Bookings
            </h2>
            <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {customersBookings.map((booking) => {
                const isSelected =
                  selectedBooking?.bookingId === booking.bookingId
                return (
                  <li
                    key={booking.bookingId}
                    onClick={() => handleBookingSelect(booking)}
                    className={`
                      border-2 rounded-lg p-4 cursor-pointer transition-all hover:shadow-lg
                      ${
                        isSelected
                          ? 'border-blue-500 bg-blue-50 shadow-md'
                          : 'border-gray-200 bg-white hover:border-blue-300'
                      }
                    `}
                  >
                    <div className='mb-3'>
                      <h3 className='font-semibold text-lg text-gray-800 mb-1'>
                        {booking.tripName}
                      </h3>
                      <p className='text-sm text-gray-600'>
                        {booking.days} days
                      </p>
                    </div>
                    <div className='space-y-1 text-sm'>
                      <p className='text-gray-700'>
                        <span className='font-medium'>Booking ID:</span> #
                        {booking.bookingId}
                      </p>
                      <p className='text-gray-700'>
                        <span className='font-medium'>Passengers:</span>{' '}
                        {booking.numOfPax}
                      </p>
                      <p className='text-gray-700'>
                        <span className='font-medium'>Total:</span> $
                        {booking.total.toLocaleString()}
                      </p>
                      <p className='text-gray-700'>
                        <span className='font-medium'>Booked:</span>{' '}
                        {booking.bookingDate}
                      </p>
                    </div>
                    {isSelected && (
                      <div className='mt-3 pt-3 border-t border-blue-200'>
                        <p className='text-xs text-blue-600 font-medium'>
                          ✓ Currently editing
                        </p>
                      </div>
                    )}
                  </li>
                )
              })}
            </ul>
          </section>

          {/* Passenger Management Section */}
          {selectedBooking && (
            <section className='bg-white rounded-lg shadow-md p-6'>
              <div className='mb-6'>
                <h2 className='text-2xl font-bold text-gray-800 mb-2'>
                  Update Passenger Details
                </h2>
                <p className='text-gray-600'>
                  Booking: {selectedBooking.tripName} (#
                  {selectedBooking.bookingId})
                </p>
              </div>

              {/* Passengers List */}
              <div className='space-y-4 mb-6'>
                {passengers.map((passenger, index) => (
                  <div
                    key={passenger.id}
                    className='border border-gray-200 rounded-lg p-4 bg-gray-50'
                  >
                    <p>hello</p>
                    <div className='flex justify-between items-start mb-3'>
                      <h3 className='font-semibold text-lg text-gray-800'>
                        {passenger.lead
                          ? '👤 Lead Passenger'
                          : `Passenger ${index + 1}`}
                      </h3>
                      {!passenger.lead && (
                        <button
                          onClick={() => handleRemovePassenger(passenger.id)}
                          className='text-red-600 hover:text-red-800 text-sm font-medium'
                        >
                          Remove
                        </button>
                      )}
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                      {/* Name */}
                      <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                          Full Name *
                        </label>
                        <input
                          type='text'
                          value={passenger.name}
                          onChange={(e) =>
                            handlePassengerChange(
                              passenger.id,
                              'name',
                              e.target.value
                            )
                          }
                          className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                          placeholder='Enter full name'
                          disabled={passenger.lead}
                        />
                      </div>

                      {/* Age */}
                      <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                          Age *
                        </label>
                        <input
                          type='number'
                          value={passenger.age}
                          onChange={(e) =>
                            handlePassengerChange(
                              passenger.id,
                              'age',
                              e.target.value
                            )
                          }
                          className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                          placeholder='Age'
                          min='1'
                          max='120'
                        />
                      </div>

                      {/* ID Verification */}
                      <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                          ID Verification *
                        </label>
                        <select
                          value={passenger.idVerification}
                          onChange={(e) =>
                            handlePassengerChange(
                              passenger.id,
                              'idVerification',
                              e.target.value
                            )
                          }
                          className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        >
                          <option value=''>Select ID Type</option>
                          <option value='passport'>Passport</option>
                          <option value='drivers-license'>
                            Driver's License
                          </option>
                        </select>
                      </div>
                    </div>

                    {/* ID Upload Section */}
                    {passenger.idVerification && (
                      <div className='mt-4'>
                        <label className='block text-sm font-medium text-gray-700 mb-2'>
                          Upload{' '}
                          {passenger.idVerification === 'passport'
                            ? 'Passport'
                            : "Driver's License"}
                        </label>
                        <input
                          type='file'
                          accept='image/*,.pdf'
                          className='w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100'
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Add Passenger Button */}
              <div className='flex gap-4'>
                <button
                  onClick={handleAddPassenger}
                  className='px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors font-medium'
                >
                  + Add Passenger
                </button>

                <button
                  onClick={handleSaveBooking}
                  className='px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium ml-auto'
                >
                  Save Changes
                </button>
              </div>

              {/* Passenger Count Warning */}
              {passengers.length > selectedBooking.numOfPax && (
                <div className='mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md'>
                  <p className='text-sm text-yellow-800'>
                    ⚠️ Warning: You've added more passengers (
                    {passengers.length}) than your booking allows (
                    {selectedBooking.numOfPax}). You may need to update your
                    booking or remove some passengers.
                  </p>
                </div>
              )}
            </section>
          )}
        </>
      )}
    </div>
  )
}

export default ManageBooking
