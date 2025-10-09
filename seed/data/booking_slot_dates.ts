interface BookingSlotDateSeed {
  booking_slot_id: number
  date: string
  places: number
  show: boolean
}

export const booking_slot_dates: BookingSlotDateSeed[] = [
  // January 2025 - Vietnam Tour (booking_slot_id: 1)
  {
    booking_slot_id: 1,
    date: '2025-01-15',
    places: 5,
    show: true,
  },
  {
    booking_slot_id: 1,
    date: '2025-01-22',
    places: 8,
    show: true,
  },

  // February 2025 - Vietnam Tour (booking_slot_id: 2)
  {
    booking_slot_id: 2,
    date: '2025-02-10',
    places: 10,
    show: true,
  },
  {
    booking_slot_id: 2,
    date: '2025-02-24',
    places: 7,
    show: true,
  },

  // December 2024 - Thailand Tour (booking_slot_id: 3)
  {
    booking_slot_id: 3,
    date: '2024-12-15',
    places: 6,
    show: true,
  },

  // January 2025 - Thailand Tour (booking_slot_id: 4)
  {
    booking_slot_id: 4,
    date: '2025-01-20',
    places: 8,
    show: true,
  },
]
