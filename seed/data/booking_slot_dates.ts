// seed/data/booking_slot_dates.ts

interface BookingSlotDateSeed {
  slot_ref_id: string // ← Reference to booking slot
  date: string
  places: number
  show: boolean
}

export const booking_slot_dates: BookingSlotDateSeed[] = [
  // Vietnam January Slot - 5 dates
  {
    slot_ref_id: 'slot_vietnam_jan',
    date: '2025-01-05',
    places: 3,
    show: true,
  },
  {
    slot_ref_id: 'slot_vietnam_jan',
    date: '2025-01-12',
    places: 5,
    show: true,
  },
  {
    slot_ref_id: 'slot_vietnam_jan',
    date: '2025-01-19',
    places: 4,
    show: true,
  },
  {
    slot_ref_id: 'slot_vietnam_jan',
    date: '2025-01-26',
    places: 3,
    show: true,
  },

  // Vietnam February Slot - 4 dates
  {
    slot_ref_id: 'slot_vietnam_feb',
    date: '2025-02-02',
    places: 6,
    show: true,
  },
  {
    slot_ref_id: 'slot_vietnam_feb',
    date: '2025-02-09',
    places: 5,
    show: true,
  },
  {
    slot_ref_id: 'slot_vietnam_feb',
    date: '2025-02-16',
    places: 4,
    show: true,
  },
  {
    slot_ref_id: 'slot_vietnam_feb',
    date: '2025-02-23',
    places: 0,
    show: true,
  },

  // Thailand December Slot - 5 dates
  {
    slot_ref_id: 'slot_thailand_dec',
    date: '2024-12-10',
    places: 4,
    show: true,
  },
  {
    slot_ref_id: 'slot_thailand_dec',
    date: '2024-12-17',
    places: 3,
    show: true,
  },
  // ... more dates
]
