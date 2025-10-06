import {
  FaPlane,
  FaMapMarkedAlt,
  FaUmbrellaBeach,
  FaMountain,
  FaUtensils,
  FaCamera,
  FaClock,
  FaGlobe,
  FaMoneyBillWave,
  FaPassport,
  FaStar,
  FaArrowRight,
} from 'react-icons/fa'

// Variables that can be easily swapped
export const countryData = {
  name: 'Australia',
  tagline: 'Discover the Land Down Under',
  heroImage:
    'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1200',
  description:
    'From vibrant cities to pristine beaches and the iconic Outback, Australia offers unforgettable adventures for every traveler. Experience world-class wildlife, ancient cultures, and breathtaking natural wonders.',

  quickFacts: {
    bestTime: 'September to November, March to May',
    currency: 'Australian Dollar (AUD)',
    language: 'English',
    timezone: 'UTC+8 to UTC+11',
    visa: 'eVisitor or ETA required for most tourists',
  },

  topDestinations: [
    {
      name: 'Sydney',
      image:
        'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400',
      description: 'Iconic Opera House, Harbour Bridge, and stunning beaches',
    },
    {
      name: 'Great Barrier Reef',
      image:
        'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=400',
      description:
        "World's largest coral reef system with incredible marine life",
    },
    {
      name: 'Melbourne',
      image:
        'https://images.unsplash.com/photo-1514395462725-fb4566210144?w=400',
      description: 'Cultural capital with art, coffee culture, and sports',
    },
    {
      name: 'Uluru',
      image:
        'https://images.unsplash.com/photo-1540961235228-b90082c4c6bb?w=400',
      description: 'Sacred monolith in the heart of the Red Centre',
    },
  ],

  experiences: [
    {
      icon: FaUmbrellaBeach,
      title: 'Beach & Surf',
      description: 'World-class beaches and surfing spots',
    },
    {
      icon: FaMountain,
      title: 'Adventure',
      description: 'Hiking, diving, and outdoor thrills',
    },
    {
      icon: FaUtensils,
      title: 'Food & Wine',
      description: 'Fresh seafood and premium wines',
    },
    {
      icon: FaCamera,
      title: 'Wildlife',
      description: 'Unique animals in natural habitats',
    },
  ],

  attractions: [
    'Sydney Opera House',
    'Great Barrier Reef',
    'Uluru-Kata Tjuta',
    'Great Ocean Road',
    'Bondi Beach',
    'Daintree Rainforest',
    'Fraser Island',
    'Blue Mountains',
  ],

  travelTips: [
    {
      icon: FaClock,
      title: 'Best Time',
      tip: 'Spring (Sep-Nov) and Autumn (Mar-May) offer mild weather',
    },
    {
      icon: FaPlane,
      title: 'Getting Around',
      tip: 'Domestic flights connect major cities; rent a car for road trips',
    },
    {
      icon: FaMoneyBillWave,
      title: 'Budget',
      tip: 'Expect $100-150 AUD per day for mid-range travel',
    },
    {
      icon: FaPassport,
      title: 'Visa',
      tip: 'Apply for eVisitor or ETA online before departure',
    },
  ],
}
