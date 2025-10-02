'use client'
import {
  FaShoppingCart,
  FaTrash,
  FaArrowLeft,
  FaCreditCard,
  FaLock,
} from 'react-icons/fa'

import { useState } from 'react'
import CartItem from '@/components/cart/CartItem'
// Types
interface CartItemType {
  id: number
  name: string
  duration: string
  travelers: number
  date: string
  price: number
  image: string
}

const BookingPage = () => {
  // Mock cart data - replace with real data later
  const [cartItems, setCartItems] = useState<CartItemType[]>(
    Array.from({ length: 2 }, (_, i) => ({
      id: i + 1,
      name: `Vietnam ${10 + i} Day Adventure`,
      duration: `${10 + i} Days`,
      travelers: i + 2,
      date: 'March 15, 2025',
      price: 2500 + i * 300,
      image:
        'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
    }))
  )

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    alert('Booking completed!')
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0)
  const tax = subtotal * 0.1
  const total = subtotal + tax

  return (
    <div className='min-h-[calc(100vh-100px)] max-w-[1200px] mx-auto px-4 py-8'>
      <div className='mb-6'>
        <h1 className='text-3xl font-bold text-gray-800 mb-2'>
          Complete Your Booking
        </h1>
        <p className='text-gray-600'>
          Review your cart and enter payment details
        </p>
      </div>

      <div className='grid lg:grid-cols-[1fr_400px] gap-8'>
        {/* Left Side - Cart */}
        <div>
          <div className='bg-gray-50 rounded-lg p-6 mb-4'>
            <div className='flex items-center justify-between mb-4'>
              <h2 className='text-xl font-bold text-gray-800 flex items-center gap-2'>
                <FaShoppingCart className='text-blue-600' />
                Your Cart ({cartItems.length})
              </h2>
              <button className='text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2 transition-colors'>
                <FaArrowLeft />
                Keep Shopping
              </button>
            </div>

            {/*  Cart Item called here  */}
            {cartItems.length > 0 ? (
              <div>
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} onRemove={removeItem} />
                ))}
              </div>
            ) : (
              <div className='text-center py-12'>
                <FaShoppingCart className='text-6xl text-gray-300 mx-auto mb-4' />
                <p className='text-gray-500 mb-4'>Your cart is empty</p>
                <button className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors'>
                  Browse Tours
                </button>
              </div>
            )}
          </div>

          {/* Order Summary for mobile */}
          {cartItems.length > 0 && (
            <div className='lg:hidden bg-white border border-gray-200 rounded-lg p-6 mb-4'>
              <h3 className='font-bold text-gray-800 mb-4'>Order Summary</h3>
              <div className='space-y-2 mb-4'>
                <div className='flex justify-between text-gray-600'>
                  <span>Subtotal</span>
                  <span>£{subtotal.toFixed(2)}</span>
                </div>
                <div className='flex justify-between text-gray-600'>
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
          )}
        </div>

        {/* Right Side - Payment Details */}
        {cartItems.length > 0 && (
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
                  <h3 className='font-bold text-gray-800 mb-3'>
                    Order Summary
                  </h3>
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
                        <span className='text-rose-600'>
                          £{total.toFixed(2)}
                        </span>
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
        )}
      </div>
    </div>
  )
}

export default BookingPage
