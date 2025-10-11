'use server'

import { Cart } from '@/types/cart'
import { CartService } from '../services/cart-service'

export const insertCartItem = async (cartData: Cart) => {
  // ...
  const res = await CartService.insert(cartData)
  return res
}

export const fetchUsersCart = async (userId: string) => {
  //...
  const res = await CartService.fetchCart(userId)
  return res
}
