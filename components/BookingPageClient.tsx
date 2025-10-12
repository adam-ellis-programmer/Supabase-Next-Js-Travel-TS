'use client'
import {
  FaShoppingCart,
  FaArrowLeft,
  FaCreditCard,
  FaLock,
} from 'react-icons/fa'
import { useState, useEffect, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import CartItem from '@/components/cart/CartItem'
import PaymentForm from './payment/PaymentForm'
import { deleteCartItem } from '@/lib/supabase/actions/cart-actions'

interface CartItemType {
  id: number
  name: string
  duration: string
  travelers: number
  date: string
  price: number
  image: string
  tourId: number
  bookingSlotDateId: number
  pricePerPerson: number
  availablePlaces: number
}

interface BookingPageClientProps {
  initialCartItems: CartItemType[]
  userId: string
}

const BookingPageClient = ({
  initialCartItems,
  userId,
}: BookingPageClientProps) => {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [removingItemId, setRemovingItemId] = useState<number | null>(null)
  const [cartItems, setCartItems] = useState<CartItemType[]>(initialCartItems)

  // Sync state when props change (after router.refresh())
  useEffect(() => {
    setCartItems(initialCartItems)
  }, [initialCartItems])

  const removeItem = async (id: number) => {
    setRemovingItemId(id)

    // Optimistic update - immediate UI feedback
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))

    try {
      const result = await deleteCartItem(id)

      if (result.success) {
        // Refresh to get authoritative data from server
        startTransition(() => {
          router.refresh()
        })
      } else {
        // Rollback optimistic update on failure
        setCartItems(initialCartItems)
        console.error('Failed to remove item:', result.error)
        alert('Failed to remove item. Please try again.')
      }
    } catch (error) {
      // Rollback optimistic update on error
      setCartItems(initialCartItems)
      console.error('Error removing item:', error)
      alert('An error occurred while removing the item.')
    } finally {
      setRemovingItemId(null)
    }
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
              <button
                onClick={() => router.push('/tours')}
                className='text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2 transition-colors'
              >
                <FaArrowLeft />
                Keep Shopping
              </button>
            </div>

            {cartItems.length > 0 ? (
              <div>
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onRemove={removeItem}
                    isRemoving={removingItemId === item.id}
                  />
                ))}
              </div>
            ) : (
              <div className='text-center py-12'>
                <FaShoppingCart className='text-6xl text-gray-300 mx-auto mb-4' />
                <p className='text-gray-500 mb-4'>Your cart is empty</p>
                <button
                  onClick={() => router.push('/tours')}
                  className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors'
                >
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
          <PaymentForm subtotal={subtotal} tax={tax} total={total} />
        )}
      </div>
    </div>
  )
}

export default BookingPageClient
