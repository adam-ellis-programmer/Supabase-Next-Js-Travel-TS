// app/booking/page.tsx (Server Component)
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import BookingPageClient from '@/components/BookingPageClient'
import { CartService } from '@/lib/supabase/services/cart-service'

const BookingPage = async () => {
  // Get authenticated user
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Redirect to login if not authenticated
  if (!user) {
    redirect('/login?redirect=/booking')
  }

  const testData = await CartService.fetchCart(user.id)
  console.log('TEST DATA', testData)

  // Fetch user's cart with items
  const { data: cartData, error } = await supabase
    .from('carts')
    .select(
      `
      id,
      cart_items (
        id,
        tour_id,
        booking_slot_date_id,
        num_passengers,
        selected_date,
        price_when_added,
        tours (
          id,
          tour_name,
          duration,
          price,
          tour_images (
            image_url
          )
        ),
        booking_slot_dates (
          places
        )
      )
    `
    )
    .eq('user_id', user.id)
    .single()

  if (error) {
    console.error('Error fetching cart:', error)
  }
  // console.log('data-->', cartData)

  // Transform data to match CartItemType
  const cartItems =
    cartData?.cart_items?.map((item: any) => ({
      id: item.id,
      name: item.tours.tour_name,
      duration: item.tours.duration,
      travelers: item.num_passengers,
      date: new Date(item.selected_date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      price: item.tours.price * item.num_passengers,
      image: item.tours.tour_images[0]?.image_url || '/fallback.jpg',
      tourId: item.tour_id,
      bookingSlotDateId: item.booking_slot_date_id,
      pricePerPerson: item.tours.price,
      availablePlaces: item.booking_slot_dates.places,
    })) || []

  return <BookingPageClient initialCartItems={cartItems} userId={user.id} />
}

export default BookingPage
