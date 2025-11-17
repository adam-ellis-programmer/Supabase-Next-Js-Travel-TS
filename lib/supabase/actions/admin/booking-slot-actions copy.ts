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
// can assign a slotId to each new date in that slot in the dom
// ==========================================================================================================
// -- UPDATE BOOKING DATES
// ==========================================================================================================
export async function updateBookingDates(
  bookingSlotsData: BookingSlot[],
  tourId: number
): Promise<UpdateResult> {
  const supabase = await createClient()

  try {
    // Step 1: Fetch existing booking slots for this tour
    const { data: existingSlots, error: fetchError } = await supabase
      .from('booking_slots')
      .select('id, booking_slot_dates(*)')
      .eq('tour_id', tourId)

    if (fetchError) throw fetchError

    const existingSlotIds = new Set(
      (existingSlots as ExistingSlot[])?.map((slot) => slot.id) || []
    )
    console.log('existing slots:', existingSlotIds) // log

    // Step 2: Separate slots into new and existing
    const newSlots = bookingSlotsData.filter(
      (slot) => !slot.id || !existingSlotIds.has(slot.id)
    )
    console.log('newSlots:', newSlots) // log

    const existingUpdatedSlots = bookingSlotsData.filter(
      (slot) => slot.id && existingSlotIds.has(slot.id)
    )
    console.log('existingUpdatedSlots:', existingUpdatedSlots) // log

    const currentSlotIds = new Set(
      bookingSlotsData.map((slot) => slot.id).filter(Boolean) as number[]
    )
    console.log('currentSlotIds:', currentSlotIds) // log

    // Step 3: Identify slots to delete (existed before but not in current data)
    // prettier-ignore
    const slotsToDelete = (existingSlots as ExistingSlot[])?.filter((slot) => !currentSlotIds.has(slot.id)) || []

    console.log('slotsToDelete:', slotsToDelete) // log

    // Step 4: Delete removed slots and their dates (cascade should handle dates)
    if (slotsToDelete.length > 0) {
      const slotIdsToDelete = slotsToDelete.map((slot) => slot.id)

      // Delete booking_slot_dates first
      const { error: deleteDatesError } = await supabase
        .from('booking_slot_dates')
        .delete()
        .in('booking_slot_id', slotIdsToDelete)

      if (deleteDatesError) throw deleteDatesError

      // Then delete booking_slots
      const { error: deleteSlotsError } = await supabase
        .from('booking_slots')
        .delete()
        .in('id', slotIdsToDelete)

      if (deleteSlotsError) throw deleteSlotsError
    }

    // Step 5: Insert new booking slots
    const insertedSlots: Array<BookingSlot & { dates: BookingSlotDate[] }> = []

    for (const slot of newSlots) {
      const { booking_slot_dates, ...slotData } = slot

      const { data: insertedSlot, error: insertSlotError } = await supabase
        .from('booking_slots')
        .insert({
          tour_id: tourId,
          month: slotData.month,
          year: slotData.year,
          bookable_places: slotData.bookable_places || 0,
          show: slotData.show ?? true,
          display_order: slotData.display_order || 0,
        })
        .select()
        .single()

      if (insertSlotError) throw insertSlotError

      // prettier-ignore
      insertedSlots.push({...(insertedSlot as BookingSlot), dates: booking_slot_dates || [],})
    }

    // Step 6: Update existing booking slots
    for (const slot of existingUpdatedSlots) {
      const { id, booking_slot_dates, ...slotData } = slot

      // Update the booking slot metadata
      const { error: updateSlotError } = await supabase
        .from('booking_slots')
        .update({
          month: slotData.month,
          year: slotData.year,
          bookable_places: slotData.bookable_places,
          show: slotData.show,
          display_order: slotData.display_order,
          updated_at: new Date().toISOString(),
        })
        .eq('id', id)

      if (updateSlotError) throw updateSlotError

      // Handle dates for this slot
      if (id) {
        await updateBookingSlotDates(supabase, id, booking_slot_dates || [])
      }
    }

    // Step 7: Insert dates for newly created slots
    for (const slot of insertedSlots) {
      if (slot.dates.length > 0 && slot.id) {
        await updateBookingSlotDates(supabase, slot.id, slot.dates)
      }
    }

    return { success: true, message: 'Booking slots updated successfully' }
  } catch (error) {
    console.error('Error updating booking slots:', error)
    return {
      success: false,
      message:
        error instanceof Error ? error.message : 'Unknown error occurred',
    }
  }
}

// ==========================================================================================================
// -- HELPER: UPDATE BOOKING SLOT DATES
// ==========================================================================================================
async function updateBookingSlotDates(
  supabase: SupabaseClient,
  bookingSlotId: number,
  dates: BookingSlotDate[]
): Promise<void> {
  // Fetch existing dates for this slot
  const { data: existingDates, error: fetchError } = await supabase
    .from('booking_slot_dates')
    .select('*')
    .eq('booking_slot_id', bookingSlotId)

  if (fetchError) throw fetchError

  const existingDateIds = new Set(
    (existingDates as BookingSlotDate[])
      ?.map((d) => d.id)
      .filter(Boolean) as number[]
  )

  // categorize
  // Separate into new and existing dates
  //
  // prettier-ignore
  const newDates = dates.filter((date) => !date.id || !existingDateIds.has(date.id))
  // prettier-ignore
  const existingUpdatedDates = dates.filter((date) => date.id && existingDateIds.has(date.id))
  // prettier-ignore
  const currentDateIds = new Set(dates.map((date) => date.id).filter(Boolean) as number[])
  //
  // Delete removed dates
  // prettier-ignore
  const datesToDelete =(existingDates as BookingSlotDate[])?.filter( (date) => date.id && !currentDateIds.has(date.id)) || []

  if (datesToDelete.length > 0) {
    const { error: deleteError } = await supabase
      .from('booking_slot_dates')
      .delete()
      .in('id', datesToDelete.map((d) => d.id).filter(Boolean) as number[])

    if (deleteError) throw deleteError
  }

  // Insert new dates
  if (newDates.length > 0) {
    const datesToInsert = newDates.map((date) => ({
      booking_slot_id: bookingSlotId,
      date: date.date,
      places: date.places || 0,
      show: date.show ?? true,
    }))

    const { error: insertError } = await supabase
      .from('booking_slot_dates')
      .insert(datesToInsert)

    if (insertError) throw insertError
  }

  // Update existing dates
  for (const date of existingUpdatedDates) {
    if (!date.id) continue

    const { error: updateError } = await supabase
      .from('booking_slot_dates')
      .update({
        date: date.date,
        places: date.places,
        show: date.show,
      })
      .eq('id', date.id)

    if (updateError) throw updateError
  }
}
