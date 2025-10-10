// seed/data/itineraries.ts

interface ItinerarySeed {
  tour_ref_id: string // ← Reference to tour
  day_number: number
  day_title: string
  day_description: string
}

export const itineraries: ItinerarySeed[] = [
  // Vietnam Tour - 12 days
  {
    tour_ref_id: 'tour_vietnam_12day',
    day_number: 1,
    day_title: 'Arrival in Hanoi',
    day_description: 'Welcome to Vietnam! Transfer to hotel...',
  },
  {
    tour_ref_id: 'tour_vietnam_12day',
    day_number: 2,
    day_title: 'Hanoi City Tour',
    day_description: 'Explore Ho Chi Minh Mausoleum...',
  },
  {
    tour_ref_id: 'tour_vietnam_12day',
    day_number: 3,
    day_title: 'Ha Long Bay Cruise',
    day_description: 'Journey to Ha Long Bay...',
  },
  // ... days 4-12
  {
    tour_ref_id: 'tour_vietnam_12day',
    day_number: 12,
    day_title: 'Departure from Ho Chi Minh City',
    day_description: 'Final breakfast and airport transfer...',
  },

  // Thailand Tour - 10 days
  {
    tour_ref_id: 'tour_thailand_10day',
    day_number: 1,
    day_title: 'Arrival in Phuket',
    day_description: 'Welcome to Thailand! Beach relaxation...',
  },
  {
    tour_ref_id: 'tour_thailand_10day',
    day_number: 2,
    day_title: 'Phi Phi Islands',
    day_description: 'Full day boat trip to Phi Phi...',
  },
  // ... days 3-10
]
