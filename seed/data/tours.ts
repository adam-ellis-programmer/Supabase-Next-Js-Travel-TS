// seed/data/tours.ts

interface TourSeed {
  ref_id: string
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
  continent: string
}

export const tours: TourSeed[] = [
  {
    ref_id: 'tour_vietnam_12day',
    continent: 'Asia',
    tour_name: 'Amazing Vietnam 12 Day Adventure',
    slug: 'amazing-vietnam-12-day-adventure',
    country: 'vietnam',
    duration: '12 Days',
    price: 2500,
    group_size: 15,
    difficulty: 'moderate',
    destinations: 5,
    description:
      'Discover the breathtaking landscapes and rich cultural heritage of Vietnam on this comprehensive 12-day journey. From the bustling streets of Hanoi to the serene waters of Ha Long Bay, from the ancient town of Hoi An to the vibrant energy of Ho Chi Minh City, this tour offers an immersive experience into the heart of Vietnam. Trek through stunning rice terraces, cruise along the Mekong Delta, and savor authentic Vietnamese cuisine at every turn.',
    rating: 4.8,
    tags: 'adventure, culture, nature, food',
    publish: true,
    key_points: [
      'Explore historic landmarks in Hanoi and Ho Chi Minh City',
      'Experience authentic Vietnamese cuisine and cooking classes',
      'Visit floating markets in the Mekong Delta',
      'Cruise through UNESCO World Heritage Ha Long Bay',
      'Discover ancient temples and colonial architecture',
      'Trek through Sapa rice terraces',
    ],
    why_take_trip:
      "Perfect blend of culture and nature, this tour takes you through Vietnam's most iconic destinations while providing authentic local experiences. With expert guides, comfortable accommodations, and carefully curated activities, you'll gain deep insights into Vietnamese culture, history, and daily life.",
    age_group: 'Suitable for ages 18-65',
    pickup_point:
      'Hanoi Noi Bai International Airport / Central Hanoi Hotels, 8:00 AM',
    dropoff_point: 'Ho Chi Minh City Tan Son Nhat Airport, 6:00 PM',
    whats_included: [
      'Professional English-speaking guide throughout',
      'All accommodation (3-4 star hotels)',
      'Daily breakfast and 8 additional meals',
      'All entrance fees to sites and museums',
      'Internal transportation (bus, boat, train)',
      'Ha Long Bay overnight cruise',
      'Cooking class in Hoi An',
    ],
    not_included: [
      'International flights to/from Vietnam',
      'Travel insurance (mandatory)',
      'Personal expenses and souvenirs',
      'Lunch and dinner not specified',
      'Tips for guides and drivers',
      'Visa fees',
    ],
    what_to_bring: [
      'Comfortable walking shoes',
      'Light jacket for air-conditioned spaces',
      'Sunscreen and sun hat',
      'Insect repellent',
      'Reusable water bottle',
      'Camera and extra batteries',
      'Light rain jacket',
    ],
    travel_documents: [
      'Valid passport (6 months validity)',
      'Vietnam visa or e-visa',
      'Travel insurance documentation',
      'Vaccination certificate if required',
    ],
    dietary_options:
      'Vegetarian and vegan options available with advance notice. Please inform us of any allergies or dietary restrictions.',
    payment_cancellation:
      '30% deposit required to confirm booking. Full payment due 60 days before departure. Cancellation more than 60 days: 30% fee. 30-60 days: 50% fee. Less than 30 days: 100% fee. Travel insurance strongly recommended.',
    good_to_know: [
      'Tours operate rain or shine',
      'Moderate fitness level required',
      'Some early morning starts',
      'Respectful dress required at temples',
      'Best time to visit: October to April',
      'Single supplement available',
    ],
    bookable_pax: 1,
  },
  {
    ref_id: 'tour_thailand_10day',
    continent: 'Asia',
    tour_name: 'Thailand Island Hopping Paradise',
    slug: 'thailand-island-hopping-paradise',
    country: 'thailand',
    duration: '10 Days',
    price: 1800,
    group_size: 12,
    difficulty: 'easy',
    destinations: 4,
    description:
      "Escape to paradise on this incredible 10-day island-hopping adventure through Thailand's most beautiful islands. Experience crystal-clear waters, pristine beaches, vibrant coral reefs, and stunning limestone cliffs. From the bustling shores of Phuket to the tranquil beaches of Koh Lanta, this tour offers the perfect balance of relaxation and adventure with snorkeling, kayaking, and beach time.",
    rating: 4.9,
    tags: 'beach, relaxation, snorkeling, island hopping',
    publish: true,
    key_points: [
      'Visit 4 stunning tropical islands',
      'Snorkeling in crystal-clear waters with abundant marine life',
      'Beachfront accommodations throughout',
      'Sunset boat cruises',
      'Thai massage and spa experiences',
      'Visit famous Maya Bay and Phi Phi Islands',
    ],
    why_take_trip:
      "Perfect tropical paradise getaway for beach lovers and water enthusiasts. This tour combines the best of Thailand's island scenery with comfortable accommodations and exciting water activities. Ideal for those seeking relaxation with a touch of adventure in one of the world's most beautiful destinations.",
    age_group: 'All ages welcome (swimming ability recommended)',
    pickup_point: 'Phuket International Airport',
    dropoff_point: 'Phuket International Airport',
    whats_included: [
      'All boat transfers between islands',
      'Beachfront accommodation (all 9 nights)',
      'Daily breakfast',
      'Snorkeling equipment',
      'Island hopping tours',
      'Professional tour leader',
      'Welcome dinner',
    ],
    not_included: [
      'International flights',
      'Most lunches and dinners',
      'Optional activities (diving, parasailing)',
      'Travel insurance',
      'Personal expenses',
      'Airport transfers (can be arranged)',
    ],
    what_to_bring: [
      'Swimwear and beach cover-ups',
      'Beach towel',
      'Reef-safe sunscreen',
      'Waterproof phone case',
      'Flip-flops and water shoes',
      'Snorkel mask (optional)',
      'Lightweight clothes',
    ],
    travel_documents: [
      'Valid passport (6 months validity)',
      'Thailand visa (check if required)',
      'Travel insurance',
    ],
    dietary_options:
      'Various options available including vegetarian, vegan, and seafood alternatives. Thai cuisine is naturally diverse and accommodating.',
    payment_cancellation:
      '25% deposit to confirm booking. Full payment 45 days before departure. Cancellation 45+ days: 25% fee. 30-45 days: 50% fee. Less than 30 days: 100% fee.',
    good_to_know: [
      'Best visited November to April (dry season)',
      'Swimming ability recommended',
      'Some boat transfers can be choppy',
      'Respect local customs on beaches',
      'Marine park fees may apply',
      'Perfect for couples and families',
    ],
    bookable_pax: 2,
  },
  {
    ref_id: 'tour_japan_11day',
    continent: 'Asia',
    tour_name: 'Japan Cultural Discovery',
    slug: 'japan-cultural-discovery',
    country: 'japan',
    duration: '11 Days',
    price: 3200,
    group_size: 14,
    difficulty: 'easy',
    destinations: 4,
    description:
      'Immerse yourself in the perfect blend of ancient traditions and modern innovation on this 11-day journey through Japan. Experience the neon-lit streets of Tokyo, the serene temples of Kyoto, the historic peace memorial in Hiroshima, and the natural beauty of Mount Fuji. Participate in traditional tea ceremonies, stay in a ryokan, witness geisha performances, and savor authentic Japanese cuisine from sushi to ramen.',
    rating: 4.9,
    tags: 'culture, temples, food, tradition, modern',
    publish: true,
    key_points: [
      "Explore Tokyo's blend of ultra-modern and traditional districts",
      'Visit ancient temples and shrines in Kyoto',
      'Experience authentic tea ceremony',
      'Stay in traditional Japanese ryokan',
      'Bullet train journey through Japanese countryside',
      'Visit Hiroshima Peace Memorial and Miyajima Island',
    ],
    why_take_trip:
      "This tour offers a comprehensive introduction to Japan's fascinating culture, from cutting-edge technology to centuries-old traditions. Perfect for first-time visitors who want to experience the essence of Japan with expert guidance, comfortable accommodations, and insider access to cultural experiences.",
    age_group: 'Suitable for ages 16+',
    pickup_point: 'Tokyo Narita/Haneda Airport or Central Tokyo Hotels',
    dropoff_point: 'Tokyo Narita/Haneda Airport',
    whats_included: [
      'Professional English-speaking guide',
      'All accommodation (mix of hotels and ryokan)',
      'Daily breakfast and 6 dinners',
      'All entrance fees',
      'Japan Rail Pass (7 days)',
      'Tea ceremony experience',
      'Cooking class in Kyoto',
      'All internal transportation',
    ],
    not_included: [
      'International flights',
      'Travel insurance',
      'Lunches and some dinners',
      'Personal expenses',
      'Optional activities',
      'Tips (not customary in Japan)',
    ],
    what_to_bring: [
      'Comfortable walking shoes (temple visits)',
      'Modest clothing for temples',
      'Travel adapter (Type A/B)',
      "Cash (many places don't accept cards)",
      'Light jacket',
      'Umbrella',
      'Slip-on shoes (frequent shoe removal)',
    ],
    travel_documents: [
      'Valid passport',
      'Japan visa (if required)',
      'Travel insurance',
      'COVID-19 documentation if required',
    ],
    dietary_options:
      'Vegetarian options available. Vegan can be challenging but we accommodate with advance notice. Please inform us of any seafood allergies.',
    payment_cancellation:
      '35% deposit required. Full payment 60 days before. Cancellation 60+ days: 35% fee. 30-60 days: 60% fee. Less than 30 days: 100% fee.',
    good_to_know: [
      'Extensive walking and public transport use',
      'Best seasons: Spring (cherry blossoms) or Fall (autumn colors)',
      'Very safe country for travelers',
      'Learn basic Japanese phrases',
      'Tipping not expected',
      'Remove shoes frequently',
    ],
    bookable_pax: 1,
  },
  {
    ref_id: 'tour_bali_10day',
    continent: 'Asia',
    tour_name: 'Bali Spiritual Wellness Retreat',
    slug: 'bali-spiritual-wellness-retreat',
    country: 'indonesia',
    duration: '10 Days',
    price: 2100,
    group_size: 10,
    difficulty: 'easy',
    destinations: 3,
    description:
      "Discover inner peace and rejuvenation on this transformative 10-day wellness retreat in Bali. Combine daily yoga sessions with meditation, traditional Balinese healing practices, and exploration of the island's spiritual sites. From the rice terraces of Ubud to the beaches of Seminyak, experience Bali's natural beauty while nurturing your mind, body, and soul through wellness activities, healthy cuisine, and cultural immersion.",
    rating: 4.7,
    tags: 'wellness, yoga, meditation, spiritual, relaxation',
    publish: true,
    key_points: [
      'Daily yoga and meditation sessions',
      'Traditional Balinese healing ceremonies',
      'Healthy organic meals included',
      'Visit sacred temples and water purification rituals',
      'Cooking class with local ingredients',
      'Spa treatments and massage therapies',
    ],
    why_take_trip:
      "Perfect for those seeking relaxation, spiritual growth, and wellness in one of the world's most beautiful and spiritual destinations. This retreat offers a balanced program of activities and free time, allowing you to reconnect with yourself while experiencing authentic Balinese culture.",
    age_group: 'Suitable for ages 21+',
    pickup_point: 'Ngurah Rai International Airport, Bali',
    dropoff_point: 'Ngurah Rai International Airport, Bali',
    whats_included: [
      'Wellness resort accommodation',
      'All meals (vegetarian/vegan focus)',
      'Daily yoga classes (morning and evening)',
      'Meditation sessions',
      'Traditional Balinese massage',
      'Temple visits with offerings',
      'Cooking class',
      'Water purification ceremony',
      'Airport transfers',
    ],
    not_included: [
      'International flights',
      'Travel insurance',
      'Additional spa treatments',
      'Personal expenses',
      'Optional excursions',
      'Alcoholic beverages',
    ],
    what_to_bring: [
      'Yoga mat (or rent on-site)',
      'Comfortable yoga/exercise clothing',
      'Modest clothing for temple visits',
      'Swimwear',
      'Sunscreen and insect repellent',
      'Journal for reflection',
      'Reusable water bottle',
      'Light scarf for temples',
    ],
    travel_documents: [
      'Valid passport (6 months validity)',
      'Indonesia visa on arrival',
      'Travel insurance',
      'Vaccination records if required',
    ],
    dietary_options:
      'All meals are healthy, organic, and mindful. Vegetarian and vegan as standard. Gluten-free and other dietary requirements accommodated.',
    payment_cancellation:
      '30% deposit to secure your spot. Full payment 45 days before. Cancellation 45+ days: 30% fee. 30-45 days: 50% fee. Less than 30 days: 100% fee.',
    good_to_know: [
      'All fitness levels welcome for yoga',
      'Respectful behavior at sacred sites required',
      'Alcohol-free retreat',
      'Silent hours observed in evenings',
      'Best time: April-October (dry season)',
      'Solo travelers welcome',
    ],
    bookable_pax: 1,
  },
  {
    ref_id: 'tour_cambodia_12day',
    continent: 'Asia',
    tour_name: 'Cambodia Ancient Temples Explorer',
    slug: 'cambodia-ancient-temples-explorer',
    country: 'cambodia',
    duration: '12 Days',
    price: 1950,
    group_size: 16,
    difficulty: 'moderate',
    destinations: 4,
    description:
      "Journey through Cambodia's incredible history and natural beauty on this 12-day adventure. Marvel at the magnificent temples of Angkor Wat, explore remote jungle temples, learn about Cambodia's complex history in Phnom Penh, and relax on pristine southern beaches. This tour combines archaeological wonders with cultural experiences, local interactions, and stunning landscapes for an unforgettable Cambodian experience.",
    rating: 4.6,
    tags: 'temples, history, culture, adventure, archaeology',
    publish: true,
    key_points: [
      'Explore Angkor Wat at sunrise',
      'Visit over 15 ancient temples',
      'Discover hidden jungle temples',
      "Learn Cambodia's history at museums",
      'Float through Tonle Sap floating villages',
      'Beach relaxation in Sihanoukville',
    ],
    why_take_trip:
      "Perfect for history buffs and adventure seekers, this tour offers deep insights into one of Southeast Asia's most fascinating civilizations. From the grandeur of Angkor to the resilience of modern Cambodia, experience a country of contrasts with expert guides who bring history to life.",
    age_group: 'Suitable for ages 16-70',
    pickup_point: 'Siem Reap International Airport',
    dropoff_point: 'Phnom Penh International Airport',
    whats_included: [
      'Professional guide throughout',
      'All accommodation (3-star hotels)',
      'Daily breakfast and 8 additional meals',
      'All temple entrance fees (3-day Angkor pass)',
      'Internal flights (Siem Reap to Sihanoukville)',
      'Boat trips and transfers',
      'Cooking class',
      'Traditional Apsara dance show',
    ],
    not_included: [
      'International flights',
      'Travel insurance',
      'Lunches and some dinners',
      'Personal expenses',
      'Tips for guides',
      'Visa fees ($30 on arrival)',
      'Optional activities',
    ],
    what_to_bring: [
      'Comfortable walking shoes',
      'Hat and sunscreen',
      'Modest clothing for temples (covered shoulders/knees)',
      'Flashlight for dark temples',
      'Insect repellent',
      'Reusable water bottle',
      'Camera with extra storage',
      'Light rain jacket',
    ],
    travel_documents: [
      'Valid passport (6 months validity)',
      'Cambodia visa (e-visa or on arrival)',
      'Travel insurance',
      'Passport photos (2) for visa',
    ],
    dietary_options:
      'Khmer cuisine with vegetarian options available. Please notify us of dietary restrictions or allergies in advance.',
    payment_cancellation:
      '30% deposit required to confirm. Full payment 60 days before departure. Cancellation 60+ days: 30% fee. 30-60 days: 50% fee. Less than 30 days: 100% fee.',
    good_to_know: [
      'Early morning temple visits (sunrise)',
      'Hot and humid climate year-round',
      'Respectful dress at temples mandatory',
      'Best time: November to March',
      'US dollars widely accepted',
      'Moderate walking and climbing stairs',
      'Some rough roads in rural areas',
    ],
    bookable_pax: 1,
  },
]
