'use client'
import {
  FaShoppingCart,
  FaTrash,
  FaArrowLeft,
  FaCreditCard,
  FaLock,
} from 'react-icons/fa'

interface CartItemType {
  id: number
  name: string
  duration: string
  travelers: number
  date: string
  price: number
  image: string
}
interface CartItemProps {
  item: CartItemType
  onRemove: (id: number) => void
}

// Cart Item Component
const CartItem = ({ item, onRemove }: CartItemProps) => {
  return (
    <div className='bg-white border border-gray-200 rounded-lg p-4 mb-3 hover:shadow-md transition-shadow'>
      <div className='flex gap-4'>
        <img
          src={item.image}
          alt={item.name}
          className='w-24 h-24 object-cover rounded-lg'
        />
        <div className='flex-1'>
          <h3 className='font-bold text-gray-800 mb-1'>{item.name}</h3>
          <p className='text-sm text-gray-600 mb-2'>
            {item.duration} • {item.travelers} travelers
          </p>
          <p className='text-xs text-gray-500'>{item.date}</p>
        </div>
        <div className='flex flex-col items-end justify-between'>
          <button
            onClick={() => onRemove(item.id)}
            className='text-red-500 hover:text-red-700 transition-colors'
          >
            <FaTrash />
          </button>
          <p className='text-lg font-bold text-rose-600'>£{item.price}</p>
        </div>
      </div>
    </div>
  )
}

export default CartItem
