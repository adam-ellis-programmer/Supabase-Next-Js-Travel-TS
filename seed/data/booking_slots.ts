// seed/data/booking_slots.ts

interface BookingSlotSeed {
  tour_ref_id: string
  slot_ref_id: string // ← Reference for this slot
  month: string
  year: string
  bookable_places: number
  show: boolean
  display_order: number
}

export const booking_slots: BookingSlotSeed[] = [
  // Vietnam Tour - 3 slots
  {
    tour_ref_id: 'tour_vietnam_12day',
    slot_ref_id: 'slot_vietnam_jan',
    month: 'January',
    year: '2025',
    bookable_places: 15,
    show: true,
    display_order: 0,
  },
  {
    tour_ref_id: 'tour_vietnam_12day',
    slot_ref_id: 'slot_vietnam_feb',
    month: 'February',
    year: '2025',
    bookable_places: 15,
    show: true,
    display_order: 1,
  },
  {
    tour_ref_id: 'tour_vietnam_12day',
    slot_ref_id: 'slot_vietnam_mar',
    month: 'March',
    year: '2025',
    bookable_places: 15,
    show: true,
    display_order: 2,
  },

  // Thailand Tour - 2 slots
  {
    tour_ref_id: 'tour_thailand_10day',
    slot_ref_id: 'slot_thailand_dec',
    month: 'December',
    year: '2024',
    bookable_places: 12,
    show: true,
    display_order: 0,
  },
  {
    tour_ref_id: 'tour_thailand_10day',
    slot_ref_id: 'slot_thailand_jan',
    month: 'January',
    year: '2025',
    bookable_places: 12,
    show: true,
    display_order: 1,
  },
]
