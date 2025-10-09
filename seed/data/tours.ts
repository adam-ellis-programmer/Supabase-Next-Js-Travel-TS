interface TourSeed {
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
    tour_name: 'Amazing Vietnam 12 Day Adventure',
    slug: 'amazing-vietnam-12-day-adventure',
    country: 'vietnam',
    duration: '12 Days',
    price: 2500,
    group_size: 15,
    difficulty: 'moderate',
    destinations: 5, 
    description: 'Discover the breathtaking landscapes and rich culture of Vietnam on this unforgettable 12-day journey through ancient temples, bustling markets, and stunning natural wonders.',
    rating: 4.8,
    tags: 'adventure, culture, nature, food',
    publish: true,
    key_points: [
      'Explore historic landmarks and UNESCO World Heritage sites',
      'Experience authentic Vietnamese cuisine and cooking classes',
      'Visit floating markets and traditional villages',
      'Cruise through stunning Ha Long Bay',
    ],
    why_take_trip: 'This carefully curated journey offers the perfect blend of cultural immersion, natural beauty, and authentic experiences. From the bustling streets of Hanoi to the serene waters of Ha Long Bay, you\'ll discover the true essence of Vietnam.',
    age_group: 'Suitable for ages 18-65',
    pickup_point: 'Hanoi Hotel, 123 Old Quarter Street, 8:00 AM',
    dropoff_point: 'Ho Chi Minh City Airport, 6:00 PM',
    whats_included: [
      'Professional English-speaking tour guide',
      'All accommodation (11 nights)',
      'Daily breakfast and selected meals',
      'All entrance fees to attractions',
      'Internal transportation',
    ],
    not_included: [
      'International airfare',
      'Travel insurance',
      'Personal expenses',
      'Alcoholic beverages',
      'Tips and gratuities',
    ],
    what_to_bring: [
      'Comfortable walking shoes',
      'Light jacket for air-conditioned spaces',
      'Sun protection (hat, sunscreen)',
      'Reusable water bottle',
      'Camera',
    ],
    travel_documents: [
      'Valid passport (6 months validity)',
      'Vietnam visa (if required)',
      'Travel insurance documents',
      'Vaccination certificate (if required)',
    ],
    dietary_options: 'Vegetarian, vegan, and gluten-free options available. Please inform us of any dietary restrictions at least 7 days before departure.',
    payment_cancellation: '30% deposit required to confirm booking. Full payment due 30 days before departure. Cancellations more than 30 days before departure: 50% refund. Less than 30 days: no refund.',
    good_to_know: [
      'Tours operate rain or shine',
      'Moderate fitness level required',
      'Some walking on uneven surfaces',
      'Dress modestly when visiting temples',
    ],
    bookable_pax: 1,
  },
  {
    tour_name: 'Thailand Island Hopping 10 Days',
    slug: 'thailand-island-hopping-10-days',
    country: 'thailand',
    duration: '10 Days',
    price: 1800,
    group_size: 12,
    difficulty: 'easy',
    destinations: 4,
    description: 'Explore Thailand\'s stunning islands, from the vibrant beaches of Phuket to the pristine shores of Koh Phi Phi. Snorkel in crystal-clear waters and experience island paradise.',
    rating: 4.9,
    tags: 'beach, relaxation, snorkeling, adventure',
    publish: true,
    key_points: [
      'Visit 4 stunning Thai islands',
      'Snorkeling in crystal-clear waters',
      'Beachfront accommodations',
      'Traditional Thai cooking class',
    ],
    why_take_trip: 'Perfect for those seeking a tropical paradise getaway with the perfect mix of relaxation and adventure.',
    age_group: 'All ages welcome',
    pickup_point: 'Phuket International Airport, Arrivals Hall',
    dropoff_point: 'Phuket International Airport, Departures',
    whats_included: [
      'All boat transfers between islands',
      'Beachfront accommodation (9 nights)',
      'Daily breakfast',
      'Snorkeling equipment',
      'Thai cooking class',
    ],
    not_included: [
      'International flights',
      'Lunch and dinner (except where specified)',
      'Travel insurance',
      'Optional activities',
    ],
    what_to_bring: [
      'Swimwear',
      'Beach towel',
      'Reef-safe sunscreen',
      'Waterproof phone case',
      'Light clothing',
    ],
    travel_documents: [
      'Valid passport',
      'Travel insurance',
    ],
    dietary_options: 'Various dietary options available upon request.',
    payment_cancellation: '25% deposit to confirm. Cancellations 45+ days: full refund minus deposit. 30-44 days: 50% refund. Less than 30 days: no refund.',
    good_to_know: [
      'Best visited November-April',
      'Some activities weather dependent',
      'Swimming ability recommended',
    ],
    bookable_pax: 2,
  },
]