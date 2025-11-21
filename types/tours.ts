// types/tours.ts

// Database types (snake_case - matches database columns)
export interface Tour {
  id: number
  tour_name: string
  slug: string
  country: string
  duration: string
  price: number
  group_size: number
  difficulty: string
  destinations: number
  description: string
  rating: number | null
  tags: string
  publish: boolean
  why_take_trip: string
  age_group: string
  pickup_point: string
  dropoff_point: string
  key_points: string[]
  whats_included: string[]
  not_included: string[]
  what_to_bring: string[]
  travel_documents: string[]
  dietary_options: string
  payment_cancellation: string
  good_to_know: string[]
  bookable_pax: number
  created_at: string
  updated_at: string
  // REMOVED: booking_slots - this is a relation, not a column
}

export interface Itinerary {
  id: number
  tour_id: number
  day_number: number
  day_title: string
  day_description: string
  created_at: string
  updated_at: string
}

export interface TourImage {
  id: number
  tour_id: number
  image_url: string
  image_alt: string | null
  display_order: number
  is_primary: boolean
  created_at: string
}

// Booking slot types
export interface BookingSlotDate {
  id: number
  booking_slot_id: number
  date: string
  places: number
  show: boolean
  created_at: string
}

export interface BookingSlot {
  id: number
  tour_id: number
  month: string
  year: string
  bookable_places: number
  show: boolean
  display_order: number
  created_at: string
  updated_at: string
}

export interface BookingSlotWithDates extends BookingSlot {
  booking_slot_dates: BookingSlotDate[]
}

// Query result types (tour with relations)
export interface TourWithRelations extends Tour {
  booking_slots: BookingSlotWithDates[]
  itineraries: Itinerary[]
  tour_images: TourImage[]
  main_hero_url: string
}

// Legacy type for backwards compatibility if needed
export interface TourWithImages extends Tour {
  tour_images?: TourImage[]
}

// Form types (camelCase - matches your React form state)
export interface TourFormData {
  tourName: string
  slug: string
  country: string
  duration: string
  price: number
  groupSize: number
  difficulty: string
  destinations: number
  description: string
  rating: number | null
  tags: string
  publish: boolean
  keyPoints: string[]
  whyTakeTrip: string
  ageGroup: string
  pickupPoint: string
  dropoffPoint: string
  itinerary: ItineraryDay[]
  whatsIncluded: string[]
  notIncluded: string[]
  whatToBring: string[]
  travelDocuments: string[]
  dietaryOptions: string
  paymentCancellation: string
  goodToKnow: string[]
  bookablePax: number
}

export interface ItineraryDay {
  dayNumber: number
  dayTitle: string
  dayDescription: string
}

// Insert types (what you send to the database)
export type TourInsert = Omit<Tour, 'id' | 'created_at' | 'updated_at'>
export type ItineraryInsert = Omit<
  Itinerary,
  'id' | 'created_at' | 'updated_at'
>
