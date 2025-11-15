'use server'

import { createClient } from '../../server'
import { SupabaseClient } from '@supabase/supabase-js'

// ==========================================================================================================
// -- TYPES
// ==========================================================================================================
interface BookingSlotDate {
  id?: number
  booking_slot_id?: number
  date: string
  places: number
  show: boolean
  created_at?: string
}

interface BookingSlot {
  id?: number
  tour_id?: number
  month: string
  year: string
  bookable_places: number
  show: boolean
  display_order: number
  booking_slot_dates?: BookingSlotDate[]
  created_at?: string
  updated_at?: string
}

interface ExistingSlot {
  id: number
  booking_slot_dates: BookingSlotDate[]
}

interface UpdateResult {
  success: boolean
  message: string
}

// ==========================================================================================================
// -- UPDATE BOOKING DATES
// ==========================================================================================================
export async function updateBookingDates(
  bookingSlotsData: BookingSlot[],
  tourId: number
): Promise<UpdateResult> {
  const supabase = await createClient()

  console.log('bookingSlotsData', bookingSlotsData)

  try {
    // Step 1: Fetch existing booking slots for this tour
    const { data: existingSlots, error: fetchError } = await supabase
      .from('booking_slots')
      .select('id, booking_slot_dates(*)')
      .eq('tour_id', tourId)

    if (fetchError) throw fetchError

    const existingSlotIds = new Set(existingSlots?.map((slot) => slot.id) || [])

    console.log('------slots for this trip only------')
    console.log('existingSlotIds', existingSlotIds)

    // Step 2: Separate slots into new and existing
    const newSlots = bookingSlotsData.filter((slot) => !slot.id || !existingSlotIds.has(slot.id)
    )
    return { success: true, message: 'Success!', existingSlotIds, newSlots }
  } catch (error) {
    console.log(error)
  }
}
