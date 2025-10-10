// seed/data/itineraries.ts

interface ItinerarySeed {
  tour_ref_id: string
  day_number: number
  day_title: string
  day_description: string
}

export const itineraries: ItinerarySeed[] = [
  // ===== VIETNAM TOUR - 12 days =====
  {
    tour_ref_id: 'tour_vietnam_12day',
    day_number: 1,
    day_title: 'Arrival in Hanoi',
    day_description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatibus. Itaque, blanditiis molestiae repellendus eius cum aut earum nisi dolorem tempora aliquam voluptatem delectus, maxime, assumenda temporibus laudantium ab. Maxime dolorem accusantium harum doloribus sapiente repellat impedit, quos reprehenderit libero. Welcome to Vietnam! Upon arrival at Noi Bai International Airport, our guide will meet you for transfer to your hotel in Hanoi's Old Quarter. After settling in, enjoy a welcome dinner featuring traditional Vietnamese cuisine.",
  },
  {
    tour_ref_id: 'tour_vietnam_12day',
    day_number: 2,
    day_title: 'Hanoi City Exploration',
    day_description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatibus. Itaque, blanditiis molestiae repellendus eius cum aut earum nisi dolorem tempora aliquam voluptatem delectus, maxime, assumenda temporibus laudantium ab. Maxime dolorem accusantium harum doloribus sapiente repellat impedit, quos reprehenderit libero. Explore the historic heart of Hanoi with visits to Ho Chi Minh Mausoleum, the One Pillar Pagoda, and the Temple of Literature. In the afternoon, wander through the bustling Old Quarter and enjoy a traditional water puppet show.',
  },
  {
    tour_ref_id: 'tour_vietnam_12day',
    day_number: 3,
    day_title: 'Ha Long Bay Cruise',
    day_description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatibus. Itaque, blanditiis molestiae repellendus eius cum aut earum nisi dolorem tempora aliquam voluptatem delectus, maxime, assumenda temporibus laudantium ab. Maxime dolorem accusantium harum doloribus sapiente repellat impedit, quos reprehenderit libero. Journey to the stunning Ha Long Bay, a UNESCO World Heritage Site. Board your overnight cruise vessel and sail through emerald waters dotted with thousands of limestone karsts. Enjoy kayaking, swimming, and a sumptuous seafood dinner on board.',
  },
  {
    tour_ref_id: 'tour_vietnam_12day',
    day_number: 4,
    day_title: 'Ha Long Bay to Hue',
    day_description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatibus. Itaque, blanditiis molestiae repellendus eius cum aut earum nisi dolorem tempora aliquam voluptatem delectus, maxime, assumenda temporibus laudantium ab. Maxime dolorem accusantium harum doloribus sapiente repellat impedit, quos reprehenderit libero. Wake up early for tai chi on the sundeck and enjoy the mystical morning atmosphere. After brunch, return to Hanoi and catch an afternoon flight to Hue, the former imperial capital. Evening at leisure to explore the riverside town.',
  },
  {
    tour_ref_id: 'tour_vietnam_12day',
    day_number: 5,
    day_title: 'Imperial Hue Discovery',
    day_description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatibus. Itaque, blanditiis molestiae repellendus eius cum aut earum nisi dolorem tempora aliquam voluptatem delectus, maxime, assumenda temporibus laudantium ab. Maxime dolorem accusantium harum doloribus sapiente repellat impedit, quos reprehenderit libero. Discover the magnificent Imperial Citadel, former home of Vietnamese emperors. Visit the Forbidden Purple City, royal tombs, and Thien Mu Pagoda. In the evening, enjoy a leisurely dragon boat cruise along the Perfume River while sampling local delicacies.',
  },
  {
    tour_ref_id: 'tour_vietnam_12day',
    day_number: 6,
    day_title: 'Scenic Drive to Hoi An',
    day_description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatibus. Itaque, blanditiis molestiae repellendus eius cum aut earum nisi dolorem tempora aliquam voluptatem delectus, maxime, assumenda temporibus laudantium ab. Maxime dolorem accusantium harum doloribus sapiente repellat impedit, quos reprehenderit libero. Take the breathtaking scenic route over Hai Van Pass to Hoi An. Stop at Lang Co Beach and Marble Mountains along the way. Arrive in charming Hoi An, a UNESCO World Heritage ancient trading port, and explore its lantern-lit streets in the evening.',
  },
  {
    tour_ref_id: 'tour_vietnam_12day',
    day_number: 7,
    day_title: 'Hoi An Ancient Town',
    day_description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatibus. Itaque, blanditiis molestiae repellendus eius cum aut earum nisi dolorem tempora aliquam voluptatem delectus, maxime, assumenda temporibus laudantium ab. Maxime dolorem accusantium harum doloribus sapiente repellat impedit, quos reprehenderit libero. Walking tour of Hoi An's well-preserved ancient town, visiting the Japanese Covered Bridge, assembly halls, and traditional merchant houses. Participate in a hands-on cooking class learning to prepare Vietnamese specialties. Free time for shopping or relaxation.",
  },
  {
    tour_ref_id: 'tour_vietnam_12day',
    day_number: 8,
    day_title: 'Flight to Ho Chi Minh City',
    day_description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatibus. Itaque, blanditiis molestiae repellendus eius cum aut earum nisi dolorem tempora aliquam voluptatem delectus, maxime, assumenda temporibus laudantium ab. Maxime dolorem accusantium harum doloribus sapiente repellat impedit, quos reprehenderit libero. Morning at leisure in Hoi An before flying to dynamic Ho Chi Minh City (Saigon). Upon arrival, begin exploring this vibrant metropolis with visits to the War Remnants Museum, Reunification Palace, and Notre Dame Cathedral. Evening street food tour.',
  },
  {
    tour_ref_id: 'tour_vietnam_12day',
    day_number: 9,
    day_title: 'Cu Chi Tunnels',
    day_description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatibus. Itaque, blanditiis molestiae repellendus eius cum aut earum nisi dolorem tempora aliquam voluptatem delectus, maxime, assumenda temporibus laudantium ab. Maxime dolorem accusantium harum doloribus sapiente repellat impedit, quos reprehenderit libero. Journey to the historic Cu Chi Tunnels, an extensive underground network used during the Vietnam War. Crawl through sections of the tunnels and learn about the ingenuity and resilience of the Vietnamese people. Return to the city for evening exploration of Ben Thanh Market.',
  },
  {
    tour_ref_id: 'tour_vietnam_12day',
    day_number: 10,
    day_title: 'Mekong Delta Adventure',
    day_description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatibus. Itaque, blanditiis molestiae repellendus eius cum aut earum nisi dolorem tempora aliquam voluptatem delectus, maxime, assumenda temporibus laudantium ab. Maxime dolorem accusantium harum doloribus sapiente repellat impedit, quos reprehenderit libero. Full-day excursion to the lush Mekong Delta. Cruise along narrow canals, visit fruit orchards, honey farms, and local workshops. Experience life in the floating markets and enjoy a traditional Vietnamese lunch in a riverside village. Return to Ho Chi Minh City in the evening.',
  },
  {
    tour_ref_id: 'tour_vietnam_12day',
    day_number: 11,
    day_title: 'Free Day in Saigon',
    day_description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatibus. Itaque, blanditiis molestiae repellendus eius cum aut earum nisi dolorem tempora aliquam voluptatem delectus, maxime, assumenda temporibus laudantium ab. Maxime dolorem accusantium harum doloribus sapiente repellat impedit, quos reprehenderit libero. Enjoy a free day to explore Ho Chi Minh City at your own pace. Optional activities include visiting the Jade Emperor Pagoda, shopping on Dong Khoi Street, or taking a cooking class. Farewell dinner at a rooftop restaurant with panoramic city views.',
  },
  {
    tour_ref_id: 'tour_vietnam_12day',
    day_number: 12,
    day_title: 'Departure from Ho Chi Minh City',
    day_description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatibus. Itaque, blanditiis molestiae repellendus eius cum aut earum nisi dolorem tempora aliquam voluptatem delectus, maxime, assumenda temporibus laudantium ab. Maxime dolorem accusantium harum doloribus sapiente repellat impedit, quos reprehenderit libero. Final breakfast and some free time for last-minute shopping or sightseeing. Transfer to Tan Son Nhat Airport for your departure flight. End of an unforgettable Vietnamese adventure with memories to last a lifetime.',
  },

  // ===== THAILAND TOUR - 10 days =====
  {
    tour_ref_id: 'tour_thailand_10day',
    day_number: 1,
    day_title: 'Arrival in Phuket',
    day_description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatibus. Itaque, blanditiis molestiae repellendus eius cum aut earum nisi dolorem tempora aliquam voluptatem delectus, maxime, assumenda temporibus laudantium ab. Maxime dolorem accusantium harum doloribus sapiente repellat impedit, quos reprehenderit libero. Welcome to Thailand! Arrive at Phuket International Airport and transfer to your beachfront resort. Spend the afternoon relaxing by the pool or taking your first dip in the Andaman Sea. Welcome dinner on the beach at sunset.',
  },
  {
    tour_ref_id: 'tour_thailand_10day',
    day_number: 2,
    day_title: 'Phi Phi Islands Full Day',
    day_description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatibus. Itaque, blanditiis molestiae repellendus eius cum aut earum nisi dolorem tempora aliquam voluptatem delectus, maxime, assumenda temporibus laudantium ab. Maxime dolorem accusantium harum doloribus sapiente repellat impedit, quos reprehenderit libero. Early departure for a full-day speedboat trip to the stunning Phi Phi Islands. Visit the famous Maya Bay, snorkel in crystal-clear waters teeming with tropical fish, explore Viking Cave, and relax on pristine beaches. Enjoy a beachside Thai lunch on Phi Phi Don.',
  },
  {
    tour_ref_id: 'tour_thailand_10day',
    day_number: 3,
    day_title: 'Phuket Island Tour',
    day_description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatibus. Itaque, blanditiis molestiae repellendus eius cum aut earum nisi dolorem tempora aliquam voluptatem delectus, maxime, assumenda temporibus laudantium ab. Maxime dolorem accusantium harum doloribus sapiente repellat impedit, quos reprehenderit libero. Explore the highlights of Phuket Island, including the Big Buddha statue, Wat Chalong temple, and the colorful Old Town with its Sino-Portuguese architecture. Visit Promthep Cape for spectacular sunset views. Evening free to explore Patong Beach nightlife or relax at the resort.',
  },
  {
    tour_ref_id: 'tour_thailand_10day',
    day_number: 4,
    day_title: 'James Bond Island Adventure',
    day_description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatibus. Itaque, blanditiis molestiae repellendus eius cum aut earum nisi dolorem tempora aliquam voluptatem delectus, maxime, assumenda temporibus laudantium ab. Maxime dolorem accusantium harum doloribus sapiente repellat impedit, quos reprehenderit libero. Embark on a longtail boat journey through the dramatic limestone formations of Phang Nga Bay. Visit James Bond Island made famous by The Man with the Golden Gun. Kayak through hidden lagoons and sea caves, and visit a traditional Muslim fishing village built on stilts.',
  },
  {
    tour_ref_id: 'tour_thailand_10day',
    day_number: 5,
    day_title: 'Transfer to Krabi',
    day_description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatibus. Itaque, blanditiis molestiae repellendus eius cum aut earum nisi dolorem tempora aliquam voluptatem delectus, maxime, assumenda temporibus laudantium ab. Maxime dolorem accusantium harum doloribus sapiente repellat impedit, quos reprehenderit libero. Morning boat transfer to Krabi province. Check into your beachfront accommodation and spend the afternoon at leisure. Optional rock climbing for adventurous souls or simply relax on the stunning Railay Beach, accessible only by boat and surrounded by towering limestone cliffs.',
  },
  {
    tour_ref_id: 'tour_thailand_10day',
    day_number: 6,
    day_title: 'Four Islands Snorkeling Tour',
    day_description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatibus. Itaque, blanditiis molestiae repellendus eius cum aut earum nisi dolorem tempora aliquam voluptatem delectus, maxime, assumenda temporibus laudantium ab. Maxime dolorem accusantium harum doloribus sapiente repellat impedit, quos reprehenderit libero. Join a traditional longtail boat tour visiting four beautiful islands around Krabi. Snorkel at Koh Poda and Chicken Island, swim in the crystal waters of Tup Island, and explore the Phra Nang Cave Beach. Picnic lunch on a secluded beach and plenty of time for swimming and sunbathing.',
  },
  {
    tour_ref_id: 'tour_thailand_10day',
    day_number: 7,
    day_title: 'Krabi Hot Springs and Emerald Pool',
    day_description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatibus. Itaque, blanditiis molestiae repellendus eius cum aut earum nisi dolorem tempora aliquam voluptatem delectus, maxime, assumenda temporibus laudantium ab. Maxime dolorem accusantium harum doloribus sapiente repellat impedit, quos reprehenderit libero. Venture inland to discover Krabi's natural wonders. Relax in the therapeutic natural hot springs surrounded by lush rainforest. Take a short jungle trek to the stunning Emerald Pool, where you can swim in the crystal-clear turquoise waters. Visit the nearby Blue Pool for photo opportunities.",
  },
  {
    tour_ref_id: 'tour_thailand_10day',
    day_number: 8,
    day_title: 'Transfer to Koh Lanta',
    day_description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatibus. Itaque, blanditiis molestiae repellendus eius cum aut earum nisi dolorem tempora aliquam voluptatem delectus, maxime, assumenda temporibus laudantium ab. Maxime dolorem accusantium harum doloribus sapiente repellat impedit, quos reprehenderit libero. Ferry transfer to the laid-back island of Koh Lanta, known for its long stretches of peaceful beaches and relaxed atmosphere. Check into your beachfront bungalow and enjoy the slower pace of island life. Sunset cocktails on the beach followed by fresh seafood dinner.',
  },
  {
    tour_ref_id: 'tour_thailand_10day',
    day_number: 9,
    day_title: 'Koh Lanta Beach Day',
    day_description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatibus. Itaque, blanditiis molestiae repellendus eius cum aut earum nisi dolorem tempora aliquam voluptatem delectus, maxime, assumenda temporibus laudantium ab. Maxime dolorem accusantium harum doloribus sapiente repellat impedit, quos reprehenderit libero. Full day at leisure to enjoy the beautiful beaches of Koh Lanta. Optional activities include scuba diving, visiting the Old Town, renting a scooter to explore the island, or indulging in a traditional Thai massage. Farewell dinner at a beachfront restaurant with fire show.',
  },
  {
    tour_ref_id: 'tour_thailand_10day',
    day_number: 10,
    day_title: 'Departure from Phuket',
    day_description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatibus. Itaque, blanditiis molestiae repellendus eius cum aut earum nisi dolorem tempora aliquam voluptatem delectus, maxime, assumenda temporibus laudantium ab. Maxime dolorem accusantium harum doloribus sapiente repellat impedit, quos reprehenderit libero. Morning ferry and van transfer back to Phuket International Airport. Depending on your flight time, last-minute beach relaxation or souvenir shopping. Depart with sun-kissed skin, amazing memories, and a heart full of Thai hospitality. Safe travels!',
  },

  // ===== JAPAN TOUR - 11 days =====
  {
    tour_ref_id: 'tour_japan_11day',
    day_number: 1,
    day_title: 'Arrival in Tokyo',
    day_description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatibus. Itaque, blanditiis molestiae repellendus eius cum aut earum nisi dolorem tempora aliquam voluptatem delectus, maxime, assumenda temporibus laudantium ab. Maxime dolorem accusantium harum doloribus sapiente repellat impedit, quos reprehenderit libero. Welcome to Japan! Arrive at Narita or Haneda Airport and transfer to your hotel in central Tokyo. Attend a group orientation meeting to receive your Japan Rail Pass and get familiar with Japanese customs. Evening welcome dinner featuring kaiseki cuisine.',
  },
  {
    tour_ref_id: 'tour_japan_11day',
    day_number: 2,
    day_title: 'Modern Tokyo Exploration',
    day_description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatibus. Itaque, blanditiis molestiae repellendus eius cum aut earum nisi dolorem tempora aliquam voluptatem delectus, maxime, assumenda temporibus laudantium ab. Maxime dolorem accusantium harum doloribus sapiente repellat impedit, quos reprehenderit libero. Discover ultra-modern Tokyo, starting with the famous Shibuya Crossing and Hachiko statue. Explore trendy Harajuku and the beautiful Meiji Shrine. Visit the observation deck of Tokyo Skytree for panoramic views. Evening in electric Shinjuku, experiencing the neon lights and vibrant nightlife.',
  },
  {
    tour_ref_id: 'tour_japan_11day',
    day_number: 3,
    day_title: 'Traditional Tokyo',
    day_description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatibus. Itaque, blanditiis molestiae repellendus eius cum aut earum nisi dolorem tempora aliquam voluptatem delectus, maxime, assumenda temporibus laudantium ab. Maxime dolorem accusantium harum doloribus sapiente repellat impedit, quos reprehenderit libero. Experience traditional Tokyo with a visit to the ancient Senso-ji Temple in Asakusa. Explore Nakamise Shopping Street for traditional crafts. Participate in an authentic tea ceremony, learning about this important Japanese cultural practice. Evening cruise on Tokyo Bay.',
  },
  {
    tour_ref_id: 'tour_japan_11day',
    day_number: 4,
    day_title: 'Mount Fuji and Hakone',
    day_description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatibus. Itaque, blanditiis molestiae repellendus eius cum aut earum nisi dolorem tempora aliquam voluptatem delectus, maxime, assumenda temporibus laudantium ab. Maxime dolorem accusantium harum doloribus sapiente repellat impedit, quos reprehenderit libero. Full-day excursion to iconic Mount Fuji and the Hakone region. Weather permitting, enjoy stunning views of Japan's most famous peak. Cruise on Lake Ashi, ride the Hakone Ropeway for mountain views, and relax in natural hot spring baths. Return to Tokyo in the evening.",
  },
  {
    tour_ref_id: 'tour_japan_11day',
    day_number: 5,
    day_title: 'Bullet Train to Kyoto',
    day_description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatibus. Itaque, blanditiis molestiae repellendus eius cum aut earum nisi dolorem tempora aliquam voluptatem delectus, maxime, assumenda temporibus laudantium ab. Maxime dolorem accusantium harum doloribus sapiente repellat impedit, quos reprehenderit libero. Experience the famous Shinkansen bullet train to Kyoto, reaching speeds of 320 km/h. Arrive in the ancient capital and check into your hotel. Afternoon visit to Kinkaku-ji, the stunning Golden Pavilion. Evening stroll through the atmospheric Gion district, hoping to spot geisha.',
  },
  {
    tour_ref_id: 'tour_japan_11day',
    day_number: 6,
    day_title: 'Kyoto Temples and Gardens',
    day_description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatibus. Itaque, blanditiis molestiae repellendus eius cum aut earum nisi dolorem tempora aliquam voluptatem delectus, maxime, assumenda temporibus laudantium ab. Maxime dolorem accusantium harum doloribus sapiente repellat impedit, quos reprehenderit libero. Full day exploring Kyoto's UNESCO World Heritage sites. Visit the impressive Fushimi Inari Shrine with its thousands of vermillion torii gates. Explore the serene Ryoan-ji rock garden and majestic Kiyomizu-dera Temple with panoramic city views. Traditional kaiseki dinner in the evening.",
  },
  {
    tour_ref_id: 'tour_japan_11day',
    day_number: 7,
    day_title: 'Arashiyama and Cooking Class',
    day_description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatibus. Itaque, blanditiis molestiae repellendus eius cum aut earum nisi dolorem tempora aliquam voluptatem delectus, maxime, assumenda temporibus laudantium ab. Maxime dolorem accusantium harum doloribus sapiente repellat impedit, quos reprehenderit libero. Visit the enchanting Arashiyama Bamboo Grove, walking through towering bamboo stalks. Explore Tenryu-ji Temple and its beautiful gardens. Participate in a hands-on Japanese cooking class, learning to prepare sushi, tempura, or ramen. Check into a traditional ryokan inn with tatami rooms and futon bedding.',
  },
  {
    tour_ref_id: 'tour_japan_11day',
    day_number: 8,
    day_title: 'Day Trip to Nara',
    day_description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatibus. Itaque, blanditiis molestiae repellendus eius cum aut earum nisi dolorem tempora aliquam voluptatem delectus, maxime, assumenda temporibus laudantium ab. Maxime dolorem accusantium harum doloribus sapiente repellat impedit, quos reprehenderit libero. Day trip to nearby Nara, Japan's first permanent capital. Visit Todai-ji Temple housing a massive bronze Buddha. Feed the friendly (and bold!) deer that roam freely in Nara Park. Explore Kasuga Taisha Shrine with its hundreds of bronze and stone lanterns. Return to Kyoto in the evening.",
  },
  {
    tour_ref_id: 'tour_japan_11day',
    day_number: 9,
    day_title: 'Travel to Hiroshima',
    day_description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatibus. Itaque, blanditiis molestiae repellendus eius cum aut earum nisi dolorem tempora aliquam voluptatem delectus, maxime, assumenda temporibus laudantium ab. Maxime dolorem accusantium harum doloribus sapiente repellat impedit, quos reprehenderit libero. Take the bullet train to Hiroshima. Visit the sobering Peace Memorial Park and Museum, learning about the atomic bombing and its aftermath. See the iconic A-Bomb Dome. Reflect on the message of peace and hope. Enjoy Hiroshima's famous okonomiyaki for dinner.",
  },
  {
    tour_ref_id: 'tour_japan_11day',
    day_number: 10,
    day_title: 'Miyajima Island',
    day_description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatibus. Itaque, blanditiis molestiae repellendus eius cum aut earum nisi dolorem tempora aliquam voluptatem delectus, maxime, assumenda temporibus laudantium ab. Maxime dolorem accusantium harum doloribus sapiente repellat impedit, quos reprehenderit libero. Ferry to sacred Miyajima Island, home to the famous "floating" torii gate of Itsukushima Shrine. Hike up Mount Misen for spectacular views or take the ropeway. Interact with the island\'s friendly deer and sample local specialties like grilled oysters and maple leaf cakes.',
  },
  {
    tour_ref_id: 'tour_japan_11day',
    day_number: 11,
    day_title: 'Return to Tokyo and Departure',
    day_description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatibus. Itaque, blanditiis molestiae repellendus eius cum aut earum nisi dolorem tempora aliquam voluptatem delectus, maxime, assumenda temporibus laudantium ab. Maxime dolorem accusantium harum doloribus sapiente repellat impedit, quos reprehenderit libero. Take the bullet train back to Tokyo. Depending on departure time, last-minute shopping in districts like Ginza or Akihabara. Transfer to airport for departure. Sayonara Japan - until we meet again with wonderful memories of this incredible cultural journey.',
  },

  // ===== BALI TOUR - 10 days =====
  {
    tour_ref_id: 'tour_bali_10day',
    day_number: 1,
    day_title: 'Arrival in Bali',
    day_description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatibus. Itaque, blanditiis molestiae repellendus eius cum aut earum nisi dolorem tempora aliquam voluptatem delectus, maxime, assumenda temporibus laudantium ab. Maxime dolorem accusantium harum doloribus sapiente repellat impedit, quos reprehenderit libero. Welcome to the Island of the Gods! Arrive at Ngurah Rai International Airport and transfer to your wellness resort in Ubud. Settle into your serene accommodation surrounded by rice paddies. Evening welcome ceremony with traditional Balinese offerings and gentle introduction to the retreat.',
  },
  {
    tour_ref_id: 'tour_bali_10day',
    day_number: 2,
    day_title: 'Morning Yoga and Temple Visit',
    day_description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatibus. Itaque, blanditiis molestiae repellendus eius cum aut earum nisi dolorem tempora aliquam voluptatem delectus, maxime, assumenda temporibus laudantium ab. Maxime dolorem accusantium harum doloribus sapiente repellat impedit, quos reprehenderit libero. Begin with sunrise yoga overlooking the jungle, followed by a healthy organic breakfast. Visit the sacred Tirta Empul Temple for a traditional water purification ceremony, an important spiritual cleansing ritual. Afternoon meditation session and spa treatment. Dinner featuring fresh local ingredients.',
  },
  {
    tour_ref_id: 'tour_bali_10day',
    day_number: 3,
    day_title: 'Tegalalang Rice Terraces',
    day_description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatibus. Itaque, blanditiis molestiae repellendus eius cum aut earum nisi dolorem tempora aliquam voluptatem delectus, maxime, assumenda temporibus laudantium ab. Maxime dolorem accusantium harum doloribus sapiente repellat impedit, quos reprehenderit libero. After morning yoga, visit the stunning Tegalalang Rice Terraces for a gentle walking meditation through the lush landscape. Learn about traditional Balinese irrigation systems. Afternoon cooking class preparing healthy Balinese dishes using organic ingredients from local markets. Evening restorative yoga.',
  },
  {
    tour_ref_id: 'tour_bali_10day',
    day_number: 4,
    day_title: 'Healing and Meditation',
    day_description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatibus. Itaque, blanditiis molestiae repellendus eius cum aut earum nisi dolorem tempora aliquam voluptatem delectus, maxime, assumenda temporibus laudantium ab. Maxime dolorem accusantium harum doloribus sapiente repellat impedit, quos reprehenderit libero. Full day dedicated to wellness. Morning yoga followed by a private session with a traditional Balinese healer. Afternoon meditation workshop learning various techniques for mindfulness. Traditional Balinese massage using ancient techniques. Silent dinner and evening reflection time.',
  },
  {
    tour_ref_id: 'tour_bali_10day',
    day_number: 5,
    day_title: 'Sacred Monkey Forest',
    day_description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatibus. Itaque, blanditiis molestiae repellendus eius cum aut earum nisi dolorem tempora aliquam voluptatem delectus, maxime, assumenda temporibus laudantium ab. Maxime dolorem accusantium harum doloribus sapiente repellat impedit, quos reprehenderit libero. Gentle morning yoga session. Visit the Sacred Monkey Forest Sanctuary, home to hundreds of long-tailed macaques and ancient temple ruins. Walking meditation through the peaceful forest. Afternoon free for personal reflection, journaling, or optional spa treatments. Evening sound healing session.',
  },
  {
    tour_ref_id: 'tour_bali_10day',
    day_number: 6,
    day_title: 'Mount Batur Sunrise Trek',
    day_description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatibus. Itaque, blanditiis molestiae repellendus eius cum aut earum nisi dolorem tempora aliquam voluptatem delectus, maxime, assumenda temporibus laudantium ab. Maxime dolorem accusantium harum doloribus sapiente repellat impedit, quos reprehenderit libero. Early morning trek up Mount Batur to witness the spectacular sunrise over the volcanic landscape. Breakfast at the summit with views of Lake Batur. Return to resort for rest and relaxation. Afternoon yin yoga to release any muscle tension. Natural hot springs visit for therapeutic soaking.',
  },
  {
    tour_ref_id: 'tour_bali_10day',
    day_number: 7,
    day_title: 'Transfer to Seminyak Beach',
    day_description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatibus. Itaque, blanditiis molestiae repellendus eius cum aut earum nisi dolorem tempora aliquam voluptatem delectus, maxime, assumenda temporibus laudantium ab. Maxime dolorem accusantium harum doloribus sapiente repellat impedit, quos reprehenderit libero. Morning yoga session before transferring to the coast. Check into a beachfront wellness resort in Seminyak. Afternoon beach yoga watching the sunset. Visit Tanah Lot Temple, one of Bali's most photographed sea temples. Fresh seafood dinner on the beach.",
  },
  {
    tour_ref_id: 'tour_bali_10day',
    day_number: 8,
    day_title: 'Beach Wellness Day',
    day_description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatibus. Itaque, blanditiis molestiae repellendus eius cum aut earum nisi dolorem tempora aliquam voluptatem delectus, maxime, assumenda temporibus laudantium ab. Maxime dolorem accusantium harum doloribus sapiente repellat impedit, quos reprehenderit libero. Sunrise beach meditation and yoga. Free morning for swimming, surfing lessons, or simply relaxing by the ocean. Afternoon pranayama breathing workshop. Optional activities include beach horseback riding or visiting local art galleries. Sunset meditation on the beach followed by healthy dinner.',
  },
  {
    tour_ref_id: 'tour_bali_10day',
    day_number: 9,
    day_title: 'Final Wellness Day',
    day_description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatibus. Itaque, blanditiis molestiae repellendus eius cum aut earum nisi dolorem tempora aliquam voluptatem delectus, maxime, assumenda temporibus laudantium ab. Maxime dolorem accusantium harum doloribus sapiente repellat impedit, quos reprehenderit libero. Morning yoga and meditation focusing on taking your practice home. Final healing massage or spa treatment. Free time for beach enjoyment or shopping in Seminyak's boutiques. Closing ceremony and farewell dinner celebrating your transformation and journey. Share experiences with fellow retreat participants.",
  },
  {
    tour_ref_id: 'tour_bali_10day',
    day_number: 10,
    day_title: 'Departure from Bali',
    day_description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatibus. Itaque, blanditiis molestiae repellendus eius cum aut earum nisi dolorem tempora aliquam voluptatem delectus, maxime, assumenda temporibus laudantium ab. Maxime dolorem accusantium harum doloribus sapiente repellat impedit, quos reprehenderit libero. Final sunrise meditation on the beach. Healthy breakfast and checkout. Transfer to Ngurah Rai Airport for your departure flight. Leave Bali feeling refreshed, rejuvenated, and with tools for continued wellness. Until next time, namaste.',
  },

  // ===== CAMBODIA TOUR - 12 days =====
  {
    tour_ref_id: 'tour_cambodia_12day',
    day_number: 1,
    day_title: 'Arrival in Siem Reap',
    day_description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatibus. Itaque, blanditiis molestiae repellendus eius cum aut earum nisi dolorem tempora aliquam voluptatem delectus, maxime, assumenda temporibus laudantium ab. Maxime dolorem accusantium harum doloribus sapiente repellat impedit, quos reprehenderit libero. Welcome to Cambodia! Arrive at Siem Reap International Airport and transfer to your hotel. Attend orientation meeting with welcome drink. Evening stroll through the vibrant Pub Street area and night markets. Welcome dinner featuring traditional Khmer cuisine with Apsara dance performance.',
  },
  {
    tour_ref_id: 'tour_cambodia_12day',
    day_number: 2,
    day_title: 'Angkor Wat Sunrise',
    day_description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatibus. Itaque, blanditiis molestiae repellendus eius cum aut earum nisi dolorem tempora aliquam voluptatem delectus, maxime, assumenda temporibus laudantium ab. Maxime dolorem accusantium harum doloribus sapiente repellat impedit, quos reprehenderit libero. Early morning departure to witness the magical sunrise over Angkor Wat, the world's largest religious monument. Explore this magnificent 12th-century temple complex with an expert guide. Return to hotel for breakfast. Afternoon visit to Angkor Thom and the enigmatic Bayon Temple with its 216 stone faces.",
  },
  {
    tour_ref_id: 'tour_cambodia_12day',
    day_number: 3,
    day_title: 'Ta Prohm and Hidden Temples',
    day_description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatibus. Itaque, blanditiis molestiae repellendus eius cum aut earum nisi dolorem tempora aliquam voluptatem delectus, maxime, assumenda temporibus laudantium ab. Maxime dolorem accusantium harum doloribus sapiente repellat impedit, quos reprehenderit libero. Visit the atmospheric Ta Prohm, where massive tree roots engulf ancient stone structures - made famous by Tomb Raider. Explore lesser-known temples like Banteay Kdei and Pre Rup. Afternoon visit to the exquisite pink sandstone temple of Banteay Srei, known for its intricate carvings.',
  },
  {
    tour_ref_id: 'tour_cambodia_12day',
    day_number: 4,
    day_title: 'Tonle Sap Floating Village',
    day_description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatibus. Itaque, blanditiis molestiae repellendus eius cum aut earum nisi dolorem tempora aliquam voluptatem delectus, maxime, assumenda temporibus laudantium ab. Maxime dolorem accusantium harum doloribus sapiente repellat impedit, quos reprehenderit libero. Boat excursion on Tonle Sap Lake, Southeast Asia's largest freshwater lake. Visit floating villages and learn about the unique lifestyle of communities living on water. See floating schools, markets, and houses. Afternoon Khmer cooking class learning to prepare traditional dishes like amok and lok lak.",
  },
  {
    tour_ref_id: 'tour_cambodia_12day',
    day_number: 5,
    day_title: 'Countryside Temples',
    day_description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatibus. Itaque, blanditiis molestiae repellendus eius cum aut earum nisi dolorem tempora aliquam voluptatem delectus, maxime, assumenda temporibus laudantium ab. Maxime dolorem accusantium harum doloribus sapiente repellat impedit, quos reprehenderit libero. Journey through rural Cambodia to visit remote temples rarely seen by tourists. Explore Beng Mealea, a massive jungle temple in a state of atmospheric ruin. Picnic lunch in the countryside. Visit local villages and interact with friendly Cambodian families. Learn about rural life and traditional crafts.',
  },
  {
    tour_ref_id: 'tour_cambodia_12day',
    day_number: 6,
    day_title: 'Phnom Kulen National Park',
    day_description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatibus. Itaque, blanditiis molestiae repellendus eius cum aut earum nisi dolorem tempora aliquam voluptatem delectus, maxime, assumenda temporibus laudantium ab. Maxime dolorem accusantium harum doloribus sapiente repellat impedit, quos reprehenderit libero. Full-day excursion to sacred Phnom Kulen mountain, birthplace of the ancient Khmer Empire. See the impressive reclining Buddha carved into sandstone. Swim in the refreshing waters beneath the waterfall. View the ancient riverbed carvings of Kbal Spean. Learn about this important pilgrimage site for Cambodians.',
  },
  {
    tour_ref_id: 'tour_cambodia_12day',
    day_number: 7,
    day_title: 'Flight to Sihanoukville',
    day_description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatibus. Itaque, blanditiis molestiae repellendus eius cum aut earum nisi dolorem tempora aliquam voluptatem delectus, maxime, assumenda temporibus laudantium ab. Maxime dolorem accusantium harum doloribus sapiente repellat impedit, quos reprehenderit libero. Morning flight to Sihanoukville on Cambodia's southern coast. Transfer to your beach resort and spend the afternoon relaxing by the turquoise waters of the Gulf of Thailand. Sunset beach walk and fresh seafood dinner. Time to unwind after temple exploration.",
  },
  {
    tour_ref_id: 'tour_cambodia_12day',
    day_number: 8,
    day_title: 'Koh Rong Island Paradise',
    day_description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatibus. Itaque, blanditiis molestiae repellendus eius cum aut earum nisi dolorem tempora aliquam voluptatem delectus, maxime, assumenda temporibus laudantium ab. Maxime dolorem accusantium harum doloribus sapiente repellat impedit, quos reprehenderit libero. Boat trip to pristine Koh Rong Island with its powder-white beaches and crystal waters. Snorkeling among coral reefs and tropical fish. Beach BBQ lunch. Swimming, sunbathing, or kayaking in this tropical paradise. Return to mainland in late afternoon. Optional night snorkeling to see bioluminescent plankton.',
  },
  {
    tour_ref_id: 'tour_cambodia_12day',
    day_number: 9,
    day_title: 'Beach Relaxation Day',
    day_description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatibus. Itaque, blanditiis molestiae repellendus eius cum aut earum nisi dolorem tempora aliquam voluptatem delectus, maxime, assumenda temporibus laudantium ab. Maxime dolorem accusantium harum doloribus sapiente repellat impedit, quos reprehenderit libero. Free day to enjoy the beach at your leisure. Optional activities include scuba diving, stand-up paddleboarding, beach volleyball, or simply relaxing with a good book. Visit local markets or get a traditional Khmer massage. Enjoy the slower pace and beautiful coastal scenery.',
  },
  {
    tour_ref_id: 'tour_cambodia_12day',
    day_number: 10,
    day_title: 'Transfer to Phnom Penh',
    day_description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatibus. Itaque, blanditiis molestiae repellendus eius cum aut earum nisi dolorem tempora aliquam voluptatem delectus, maxime, assumenda temporibus laudantium ab. Maxime dolorem accusantium harum doloribus sapiente repellat impedit, quos reprehenderit libero. Morning transfer to Cambodia's capital, Phnom Penh. Check into your hotel and visit the magnificent Royal Palace with its Silver Pagoda. Explore the National Museum housing the world's finest collection of Khmer art. Evening riverside walk along the Mekong and dinner at a rooftop restaurant.",
  },
  {
    tour_ref_id: 'tour_cambodia_12day',
    day_number: 11,
    day_title: 'Phnom Penh History',
    day_description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatibus. Itaque, blanditiis molestiae repellendus eius cum aut earum nisi dolorem tempora aliquam voluptatem delectus, maxime, assumenda temporibus laudantium ab. Maxime dolorem accusantium harum doloribus sapiente repellat impedit, quos reprehenderit libero. Morning visit to the sobering Tuol Sleng Genocide Museum and Killing Fields of Choeung Ek to learn about Cambodia's tragic recent history under the Khmer Rouge. Afternoon visit to the vibrant Central Market housed in an Art Deco building. Farewell dinner featuring the best of Cambodian cuisine.",
  },
  {
    tour_ref_id: 'tour_cambodia_12day',
    day_number: 12,
    day_title: 'Departure from Phnom Penh',
    day_description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatibus. Itaque, blanditiis molestiae repellendus eius cum aut earum nisi dolorem tempora aliquam voluptatem delectus, maxime, assumenda temporibus laudantium ab. Maxime dolorem accusantium harum doloribus sapiente repellat impedit, quos reprehenderit libero. Final breakfast and free time for last-minute shopping at Russian Market or visiting Wat Phnom temple. Transfer to Phnom Penh International Airport for your departure flight. Leave Cambodia with unforgettable memories of ancient temples, beautiful beaches, and warm Khmer hospitality.',
  },
]
