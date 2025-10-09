interface BookingSlotSeed {
  tour_id: number
  month: string
  year: string
  bookable_places: number
  show: boolean
  display_order: number
}

export const booking_slots: BookingSlotSeed[] = [
  {
    tour_id: 1,
    month: 'January',
    year: '2025',
    bookable_places: 15,
    show: true,
    display_order: 0,
  },
  {
    tour_id: 1,
    month: 'February',
    year: '2025',
    bookable_places: 15,
    show: true,
    display_order: 1,
  },
  {
    tour_id: 2,
    month: 'December',
    year: '2024',
    bookable_places: 12,
    show: true,
    display_order: 0,
  },
  {
    tour_id: 2,
    month: 'January',
    year: '2025',
    bookable_places: 12,
    show: true,
    display_order: 1,
  },
]
