// seed/data/tours.ts

interface TourSeed {
  ref_id: string // ← Temporary reference ID
  tour_name: string
  slug: string
  country: string
  duration: string
  price: number
  group_size: number
  difficulty: string
  destinations: number
  description: string
  rating: number
  tags: string
  publish: boolean
  key_points: string[]
  why_take_trip: string
  age_group: string
  pickup_point: string
  dropoff_point: string
  whats_included: string[]
  not_included: string[]
  what_to_bring: string[]
  travel_documents: string[]
  dietary_options: string
  payment_cancellation: string
  good_to_know: string[]
  bookable_pax: number
}

export const tours: TourSeed[] = [
  {
    ref_id: 'tour_vietnam_12day',
    tour_name: 'Amazing Vietnam 12 Day Adventure',
    slug: 'amazing-vietnam-12-day-adventure',
    country: 'vietnam',
    duration: '12 Days',
    price: 2500,
    group_size: 15,
    difficulty: 'moderate',
    destinations: 5,
    description: 'Discover the breathtaking landscapes...',
    rating: 4.8,
    tags: 'adventure, culture, nature, food',
    publish: true,
    key_points: [
      'Explore historic landmarks',
      'Experience authentic cuisine',
      'Visit floating markets',
      'Cruise through Ha Long Bay',
    ],
    why_take_trip: 'Perfect blend of culture and nature...',
    age_group: 'Suitable for ages 18-65',
    pickup_point: 'Hanoi Hotel, 8:00 AM',
    dropoff_point: 'Ho Chi Minh City Airport, 6:00 PM',
    whats_included: [
      'Professional guide',
      'All accommodation',
      'Daily breakfast',
      'Entrance fees',
    ],
    not_included: [
      'International flights',
      'Travel insurance',
      'Personal expenses',
    ],
    what_to_bring: ['Comfortable shoes', 'Light jacket', 'Sunscreen'],
    travel_documents: ['Valid passport', 'Vietnam visa'],
    dietary_options: 'Vegetarian and vegan options available',
    payment_cancellation: '30% deposit required...',
    good_to_know: ['Tours operate rain or shine', 'Moderate fitness required'],
    bookable_pax: 1,
  },
  {
    ref_id: 'tour_thailand_10day',
    tour_name: 'Thailand Island Hopping 10 Days',
    slug: 'thailand-island-hopping-10-days',
    country: 'thailand',
    duration: '10 Days',
    price: 1800,
    group_size: 12,
    difficulty: 'easy',
    destinations: 4,
    description: 'Explore stunning Thai islands...',
    rating: 4.9,
    tags: 'beach, relaxation, snorkeling',
    publish: true,
    key_points: [
      'Visit 4 stunning islands',
      'Snorkeling in crystal waters',
      'Beachfront accommodations',
    ],
    why_take_trip: 'Perfect tropical paradise getaway...',
    age_group: 'All ages welcome',
    pickup_point: 'Phuket Airport',
    dropoff_point: 'Phuket Airport',
    whats_included: [
      'Boat transfers',
      'Beach accommodation',
      'Daily breakfast',
    ],
    not_included: ['Flights', 'Lunch and dinner', 'Optional activities'],
    what_to_bring: ['Swimwear', 'Beach towel', 'Reef-safe sunscreen'],
    travel_documents: ['Valid passport'],
    dietary_options: 'Various options available',
    payment_cancellation: '25% deposit to confirm...',
    good_to_know: [
      'Best visited November-April',
      'Swimming ability recommended',
    ],
    bookable_pax: 2,
  },
  // Add 8 more tours here...
]
