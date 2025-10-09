interface ItinerarySeed {
  tour_id: number
  day_number: number
  day_title: string
  day_description: string
}

export const itineraries: ItinerarySeed[] = [
  // Vietnam tour itinerary (assuming tour_id: 1)
  {
    tour_id: 1,
    day_number: 1,
    day_title: 'Arrival in Hanoi',
    day_description:
      "Welcome to Vietnam! Upon arrival at Hanoi airport, you'll be greeted by your guide and transferred to your hotel in the Old Quarter. After checking in, enjoy a welcome dinner featuring authentic Vietnamese cuisine.",
  },
  {
    tour_id: 1,
    day_number: 2,
    day_title: 'Hanoi City Tour',
    day_description:
      'Explore the highlights of Hanoi including the Ho Chi Minh Mausoleum, Temple of Literature, and the bustling Old Quarter. In the evening, enjoy a traditional water puppet show.',
  },
  {
    tour_id: 1,
    day_number: 3,
    day_title: 'Ha Long Bay Cruise',
    day_description:
      'Journey to Ha Long Bay, a UNESCO World Heritage site. Board your cruise ship and spend the day exploring limestone karsts, mysterious caves, and emerald waters.',
  },

  // Thailand tour itinerary (assuming tour_id: 2)
  {
    tour_id: 2,
    day_number: 1,
    day_title: 'Arrival in Phuket',
    day_description:
      'Arrive in Phuket and transfer to your beachfront resort. Spend the afternoon relaxing on Patong Beach and exploring the local area.',
  },
  {
    tour_id: 2,
    day_number: 2,
    day_title: 'Phi Phi Islands Day Trip',
    day_description:
      'Full day excursion to the stunning Phi Phi Islands. Snorkel in Maya Bay, explore Viking Cave, and enjoy lunch on the beach.',
  },
]
