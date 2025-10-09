// lib/supabase/services/tour-service.ts

import { createClient } from '@/lib/supabase/server'
import type {
  Tour,
  TourFormData,
  TourInsert,
  ItineraryInsert,
  TourWithRelations,
} from '@/types/tours'

interface BookingSlotInsert {
  tour_id: number
  month: string
  year: string
  bookable_places: number
  show: boolean
  display_order: number
}

interface BookingSlotDateInsert {
  booking_slot_id: number
  date: string
  places: number
  show: boolean
}

export class TourService {
  //==============
  // GET TOUR BY ID
  //==============
  static async getTourById(
    tourId: number
  ): Promise<
    { success: true; data: Tour } | { success: false; error: string }
  > {
    const supabase = await createClient()

    const { data, error } = await supabase
      .from('tours')
      .select('*')
      .eq('id', tourId)
      .single()

    if (error) {
      console.error('Get tour error:', error)
      return { success: false, error: error.message }
    }

    return { success: true, data }
  }

  //==============
  // GET TOUR WITH RELATIONS
  //==============
  static async getTourWithRelations(
    tourId: number
  ): Promise<
    | { success: true; data: TourWithRelations }
    | { success: false; error: string }
  > {
    const supabase = await createClient()

    const { data, error } = await supabase
      .from('tours')
      .select(
        `
        *,
        itineraries (*),
        tour_images (*)
      `
      )
      .eq('id', tourId)
      .order('day_number', { foreignTable: 'itineraries', ascending: true })
      .order('display_order', { foreignTable: 'tour_images', ascending: true })
      .single()

    if (error) {
      console.error('Get tour with relations error:', error)
      return { success: false, error: error.message }
    }

    return { success: true, data }
  }

  //==============
  // GET ALL PUBLISHED TOURS
  //==============
  static async getPublishedTours(): Promise<
    { success: true; data: Tour[] } | { success: false; error: string }
  > {
    const supabase = await createClient()

    const { data, error } = await supabase
      .from('tours')
      .select('*')
      .eq('publish', true)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Get published tours error:', error)
      return { success: false, error: error.message }
    }

    return { success: true, data }
  }

  //==============
  // GET ALL TOURS (ADMIN)
  //==============
  static async getAllTours(): Promise<
    { success: true; data: Tour[] } | { success: false; error: string }
  > {
    const supabase = await createClient()

    const { data, error } = await supabase
      .from('tours')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Get all tours error:', error)
      return { success: false, error: error.message }
    }

    return { success: true, data }
  }

  //==============
  // INSERT TOUR WITH ITINERARY
  //==============
  static async insertTour(
    tourData: TourFormData
  ): Promise<
    { success: true; tourId: number } | { success: false; error: string }
  > {
    const supabase = await createClient()

    try {
      // Convert form data (camelCase) to database format (snake_case)
      const tourInsert: TourInsert = {
        tour_name: tourData.tourName,
        slug: tourData.slug,
        country: tourData.country,
        duration: tourData.duration,
        price: tourData.price,
        group_size: tourData.groupSize,
        difficulty: tourData.difficulty,
        destinations: tourData.destinations,
        description: tourData.description,
        rating: tourData.rating,
        tags: tourData.tags,
        publish: tourData.publish,
        key_points: tourData.keyPoints,
        why_take_trip: tourData.whyTakeTrip,
        age_group: tourData.ageGroup,
        pickup_point: tourData.pickupPoint,
        dropoff_point: tourData.dropoffPoint,
        whats_included: tourData.whatsIncluded,
        not_included: tourData.notIncluded,
        what_to_bring: tourData.whatToBring,
        travel_documents: tourData.travelDocuments,
        dietary_options: tourData.dietaryOptions,
        payment_cancellation: tourData.paymentCancellation,
        good_to_know: tourData.goodToKnow,
        bookable_pax: tourData.bookablePax,
      }

      // 1. Insert tour
      const { data: tour, error: tourError } = await supabase
        .from('tours')
        .insert(tourInsert)
        .select()
        .single()

      if (tourError) {
        console.error('Tour insert error:', tourError)
        return { success: false, error: tourError.message }
      }

      // 2. Insert itinerary items (if any)
      if (tourData.itinerary.length > 0) {
        const itineraryInserts: ItineraryInsert[] = tourData.itinerary.map(
          (day) => ({
            tour_id: tour.id,
            day_number: day.dayNumber,
            day_title: day.dayTitle,
            day_description: day.dayDescription,
          })
        )

        const { error: itineraryError } = await supabase
          .from('itineraries')
          .insert(itineraryInserts)

        if (itineraryError) {
          console.error('Itinerary insert error:', itineraryError)
          return {
            success: false,
            error: `Tour created but itinerary failed: ${itineraryError.message}`,
          }
        }
      }

      return { success: true, tourId: tour.id }
    } catch (error) {
      console.error('Insert tour error:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      }
    }
  }

  // =========================================
  // BOOKING SLOTS
  // =========================================
  static async insertBookingSlots(
    tourId: number,
    bookingSlots: Array<{
      bookablePlaces: number
      show: boolean
      month: string
      year: string
      dates: Array<{ date: string; places: number }>
    }>
  ): Promise<{ success: true } | { success: false; error: string }> {
    const supabase = await createClient()

    try {
      // Insert each booking slot and its dates
      for (let i = 0; i < bookingSlots.length; i++) {
        const slot = bookingSlots[i]

        // 1. Insert booking slot
        const slotInsert: BookingSlotInsert = {
          tour_id: tourId,
          month: slot.month,
          year: slot.year,
          bookable_places: slot.bookablePlaces,
          show: slot.show,
          display_order: i,
        }

        const { data: insertedSlot, error: slotError } = await supabase
          .from('booking_slots')
          .insert(slotInsert)
          .select()
          .single()

        if (slotError) {
          console.error('Booking slot insert error:', slotError)
          return { success: false, error: slotError.message }
        }

        // 2. Insert booking_slot_dates for this slot (if any)
        if (slot.dates && slot.dates.length > 0) {
          const dateInserts: BookingSlotDateInsert[] = slot.dates
            .filter((d) => d.date) // Only include dates that have a value
            .map((d) => ({
              booking_slot_id: insertedSlot.id,
              date: d.date,
              places: d.places || 0,
              show: true, // Default to true, you can make this configurable
            }))

          if (dateInserts.length > 0) {
            const { error: datesError } = await supabase
              .from('booking_slot_dates')
              .insert(dateInserts)

            if (datesError) {
              console.error('Booking slot dates insert error:', datesError)
              return {
                success: false,
                error: `Booking slot created but dates failed: ${datesError.message}`,
              }
            }
          }
        }
      }

      return { success: true }
    } catch (error) {
      console.error('Insert booking slots error:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      }
    }
  }
  //==============
  // UPDATE TOUR
  //==============
  static async updateTour(
    tourId: number,
    updates: Partial<TourInsert>
  ): Promise<
    { success: true; data: Tour } | { success: false; error: string }
  > {
    const supabase = await createClient()

    const { data, error } = await supabase
      .from('tours')
      .update(updates)
      .eq('id', tourId)
      .select()
      .single()

    if (error) {
      console.error('Update tour error:', error)
      return { success: false, error: error.message }
    }

    return { success: true, data }
  }

  //==============
  // DELETE TOUR
  //==============
  static async deleteTour(
    tourId: number
  ): Promise<{ success: true } | { success: false; error: string }> {
    const supabase = await createClient()

    const { error } = await supabase.from('tours').delete().eq('id', tourId)

    if (error) {
      console.error('Delete tour error:', error)
      return { success: false, error: error.message }
    }

    return { success: true }
  }

  //==============
  // SEARCH TOURS
  //==============
  static async searchTours(
    searchTerm: string
  ): Promise<
    { success: true; data: Tour[] } | { success: false; error: string }
  > {
    const supabase = await createClient()

    const { data, error } = await supabase
      .from('tours')
      .select('*')
      .or(
        `tour_name.ilike.%${searchTerm}%,description.ilike.%${searchTerm}%,country.ilike.%${searchTerm}%`
      )
      .eq('publish', true)

    if (error) {
      console.error('Search tours error:', error)
      return { success: false, error: error.message }
    }

    return { success: true, data }
  }

  //==============
  // FILTER TOURS BY COUNTRY
  //==============
  static async getToursByCountry(
    country: string
  ): Promise<
    { success: true; data: Tour[] } | { success: false; error: string }
  > {
    const supabase = await createClient()

    const { data, error } = await supabase
      .from('tours')
      .select('*')
      .eq('country', country)
      .eq('publish', true)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Get tours by country error:', error)
      return { success: false, error: error.message }
    }

    return { success: true, data }
  }
}
