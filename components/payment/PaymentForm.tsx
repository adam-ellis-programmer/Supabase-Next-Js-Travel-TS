import { useRouter } from 'next/navigation'
import React from 'react'

import {
  FaShoppingCart,
  FaTrash,
  FaArrowLeft,
  FaCreditCard,
  FaLock,
} from 'react-icons/fa'

interface Payment {
  subtotal: number
  tax: number
  total: number
}

const PaymentForm = ({ subtotal, tax, total }: Payment) => {
  const router = useRouter()
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    // TODO: Implement actual payment processing
    alert('Booking completed!')
    router.push('/booking-confirmation')
  }
  return (
    <div className='lg:sticky lg:top-4 h-fit'>
      <div className='bg-white border border-gray-200 rounded-lg p-6 shadow-lg'>
        <h2 className='text-xl font-bold text-gray-800 mb-4 flex items-center gap-2'>
          <FaCreditCard className='text-blue-600' />
          Payment Details
        </h2>

        <div className='space-y-4'>
          {/* Cardholder Name */}
          <div>
            <label className='block text-sm font-semibold text-gray-700 mb-2'>
              Cardholder Name
            </label>
            <input
              type='text'
              placeholder='John Smith'
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          {/* Card Number */}
          <div>
            <label className='block text-sm font-semibold text-gray-700 mb-2'>
              Card Number
            </label>
            <input
              type='text'
              placeholder='1234 5678 9012 3456'
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          {/* Expiry and CVV */}
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>
                Expiry Date
              </label>
              <input
                type='text'
                placeholder='MM/YY'
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>
            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>
                CVV
              </label>
              <input
                type='text'
                placeholder='123'
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>
          </div>

          {/* Billing Address */}
          <div>
            <label className='block text-sm font-semibold text-gray-700 mb-2'>
              Billing Address
            </label>
            <input
              type='text'
              placeholder='Street Address'
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2'
            />
            <div className='grid grid-cols-2 gap-2'>
              <input
                type='text'
                placeholder='City'
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
              <input
                type='text'
                placeholder='Postcode'
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>
          </div>

          {/* Order Summary - Desktop */}
          <div className='hidden lg:block bg-gray-50 rounded-lg p-4 mt-6'>
            <h3 className='font-bold text-gray-800 mb-3'>Order Summary</h3>
            <div className='space-y-2 mb-4'>
              <div className='flex justify-between text-gray-600 text-sm'>
                <span>Subtotal</span>
                <span>£{subtotal.toFixed(2)}</span>
              </div>
              <div className='flex justify-between text-gray-600 text-sm'>
                <span>Tax (10%)</span>
                <span>£{tax.toFixed(2)}</span>
              </div>
              <div className='border-t pt-2 mt-2'>
                <div className='flex justify-between text-lg font-bold text-gray-800'>
                  <span>Total</span>
                  <span className='text-rose-600'>£{total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className='w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors shadow-lg mt-6'
          >
            <FaLock />
            Complete Booking - £{total.toFixed(2)}
          </button>

          <p className='text-xs text-gray-500 text-center mt-2'>
            Your payment is secure and encrypted
          </p>
        </div>
      </div>
    </div>
  )
}

export default PaymentForm
