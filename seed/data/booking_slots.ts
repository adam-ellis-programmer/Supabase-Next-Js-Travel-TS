// seed/data/booking_slots.ts

interface BookingSlotSeed {
  tour_ref_id: string
  slot_ref_id: string
  month: string
  year: string
  bookable_places: number
  show: boolean
  display_order: number
}

export const booking_slots: BookingSlotSeed[] = [
  // ===== VIETNAM TOUR - 4 slots =====
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
  {
    tour_ref_id: 'tour_vietnam_12day',
    slot_ref_id: 'slot_vietnam_apr',
    month: 'April',
    year: '2025',
    bookable_places: 15,
    show: true,
    display_order: 3,
  },

  // ===== THAILAND TOUR - 3 slots =====
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
  {
    tour_ref_id: 'tour_thailand_10day',
    slot_ref_id: 'slot_thailand_feb',
    month: 'February',
    year: '2025',
    bookable_places: 12,
    show: true,
    display_order: 2,
  },

  // ===== JAPAN TOUR - 4 slots =====
  {
    tour_ref_id: 'tour_japan_11day',
    slot_ref_id: 'slot_japan_mar',
    month: 'March',
    year: '2025',
    bookable_places: 14,
    show: true,
    display_order: 0,
  },
  {
    tour_ref_id: 'tour_japan_11day',
    slot_ref_id: 'slot_japan_apr',
    month: 'April',
    year: '2025',
    bookable_places: 14,
    show: true,
    display_order: 1,
  },
  {
    tour_ref_id: 'tour_japan_11day',
    slot_ref_id: 'slot_japan_oct',
    month: 'October',
    year: '2025',
    bookable_places: 14,
    show: true,
    display_order: 2,
  },
  {
    tour_ref_id: 'tour_japan_11day',
    slot_ref_id: 'slot_japan_nov',
    month: 'November',
    year: '2025',
    bookable_places: 14,
    show: true,
    display_order: 3,
  },

  // ===== BALI TOUR - 4 slots =====
  {
    tour_ref_id: 'tour_bali_10day',
    slot_ref_id: 'slot_bali_jan',
    month: 'January',
    year: '2025',
    bookable_places: 10,
    show: true,
    display_order: 0,
  },
  {
    tour_ref_id: 'tour_bali_10day',
    slot_ref_id: 'slot_bali_feb',
    month: 'February',
    year: '2025',
    bookable_places: 10,
    show: true,
    display_order: 1,
  },
  {
    tour_ref_id: 'tour_bali_10day',
    slot_ref_id: 'slot_bali_apr',
    month: 'April',
    year: '2025',
    bookable_places: 10,
    show: true,
    display_order: 2,
  },
  {
    tour_ref_id: 'tour_bali_10day',
    slot_ref_id: 'slot_bali_may',
    month: 'May',
    year: '2025',
    bookable_places: 10,
    show: true,
    display_order: 3,
  },

  // ===== CAMBODIA TOUR - 3 slots =====
  {
    tour_ref_id: 'tour_cambodia_12day',
    slot_ref_id: 'slot_cambodia_jan',
    month: 'January',
    year: '2025',
    bookable_places: 16,
    show: true,
    display_order: 0,
  },
  {
    tour_ref_id: 'tour_cambodia_12day',
    slot_ref_id: 'slot_cambodia_feb',
    month: 'February',
    year: '2025',
    bookable_places: 16,
    show: true,
    display_order: 1,
  },
  {
    tour_ref_id: 'tour_cambodia_12day',
    slot_ref_id: 'slot_cambodia_nov',
    month: 'November',
    year: '2025',
    bookable_places: 16,
    show: true,
    display_order: 2,
  },
]
