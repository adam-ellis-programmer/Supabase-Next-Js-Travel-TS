'use server'

import { Cart } from '@/types/cart'
import { CartService } from '../services/cart-service'
import { revalidatePath } from 'next/cache'

export const insertCartItem = async (cartData: Cart) => {
  const res = await CartService.insert(cartData)
  revalidatePath('/booking')
  return res
}

export const fetchUsersCart = async (userId: string) => {
  const res = await CartService.fetchCart(userId)
  return res
}

export const deleteCartItem = async (cartItemId: number) => {
  try {
    const res = await CartService.deleteCartItem(cartItemId)

    if (res.success) {
      // Revalidate the booking page to get fresh data
      revalidatePath('/booking')
      return { success: true, data: res.data }
    }

    return { success: false, error: 'Failed to delete cart item' }
  } catch (error) {
    console.error('Error in deleteCartItem action:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    }
  }
}
