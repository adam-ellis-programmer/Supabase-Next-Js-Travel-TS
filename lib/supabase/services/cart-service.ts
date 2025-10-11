import { createClient } from '@/lib/supabase/server'
import { Cart } from '@/types/cart'

export class CartService {
  // Get user's active cart or create one if it doesn't exist
  //========================
  // --GET OR CREATE
  //========================
  static async getOrCreateCart(userId: string) {
    const supabase = await createClient()

    // Try to find an existing active cart for this user
    const { data: existingCart, error: fetchError } = await supabase
      .from('carts')
      .select('id')
      .eq('user_id', userId)
      .eq('status', 'active') // Assuming you have a status field
      .single()

    if (existingCart) {
      return { cartId: existingCart.id, isNew: false }
    }

    // No cart found, create a new one
    const { data: newCart, error: createError } = await supabase
      .from('carts')
      .insert({
        user_id: userId,
        status: 'active',
        created_at: new Date().toISOString(),
      })
      .select('id')
      .single()

    if (createError) {
      throw new Error(`Failed to create cart: ${createError.message}`)
    }

    return { cartId: newCart.id, isNew: true }
  }

  //========================
  // --INSERT
  //========================

  static async insert(cartData: Cart) {
    // console.log('CART-DATA: ', cartData)

    const supabase = await createClient()

    // Step 1: Get or create the user's cart
    const { cartId } = await this.getOrCreateCart(cartData.user_id)

    // Step 2: Insert the cart item with the cart_id
    const { data, error } = await supabase
      .from('cart_items')
      .insert({
        cart_id: cartId,
        tour_id: cartData.tour_id,
        booking_slot_date_id: cartData.booking_slot_date_id,
        slot_id: cartData.slot_id,
        num_passengers: cartData.num_passengers,
        selected_date: cartData.selected_date,
        price_when_added: cartData.price_when_added,
      })
      .select()

    if (error) {
      return { success: false, error: error.message }
    }

    return { success: true, data, cartId }
  }

  //========================
  // -- FETCH USERS CART (AND ITEMS)
  //========================

  static async fetchCart(userId: string) {
    // ...

    const supabase = await createClient()
    const { data, error } = await supabase
      .from('carts')
      .select(
        `
        id,
        cart_items(
        id)
        `
      )
      .eq('user_id', userId)
    // .single()
    return { success: true, data }
  }
}
