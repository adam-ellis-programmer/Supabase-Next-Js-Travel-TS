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

  // Add these itinerary objects to your itineraries.ts file

  // ===== PERU TOUR - 14 days =====
  {
    tour_ref_id: 'tour_peru_14day',
    day_number: 1,
    day_title: 'Arrival in Lima',
    day_description:
      'Welcome to Peru! Upon arrival at Jorge Chávez International Airport, meet your guide and transfer to your hotel in the historic Miraflores district. After settling in, enjoy a walking tour of colonial Lima including the Plaza de Armas, Cathedral, and Government Palace. Welcome dinner featuring traditional Peruvian cuisine including ceviche and pisco sours.',
  },
  {
    tour_ref_id: 'tour_peru_14day',
    day_number: 2,
    day_title: 'Lima to Cusco',
    day_description:
      'Morning flight to Cusco, the ancient capital of the Inca Empire. Take it easy today to acclimatize to the altitude (3,400m). Gentle walking tour of Cusco including the impressive Qorikancha (Sun Temple) and the bohemian San Blas neighborhood. Afternoon coca tea and rest. Evening briefing for the upcoming Inca Trail trek.',
  },
  {
    tour_ref_id: 'tour_peru_14day',
    day_number: 3,
    day_title: 'Sacred Valley Exploration',
    day_description:
      'Full day exploring the Sacred Valley. Visit the colorful Pisac market where locals trade handicrafts and produce. Explore the impressive Pisac archaeological site with panoramic valley views. Traditional lunch in a local community. Afternoon visit to Ollantaytambo, a living Inca town with magnificent fortress ruins. Overnight in the Sacred Valley.',
  },
  {
    tour_ref_id: 'tour_peru_14day',
    day_number: 4,
    day_title: 'Inca Trail Day 1 - Wayllabamba',
    day_description:
      'Early morning start for the classic Inca Trail! Drive to Km 82 starting point. Begin trekking through the Urubamba Valley with spectacular mountain views. Pass through local villages and archaeological sites. Gradual ascent along the Cusichaca River. Camp at Wayllabamba (3,000m) after approximately 6 hours of hiking. Hearty dinner prepared by trek crew.',
  },
  {
    tour_ref_id: 'tour_peru_14day',
    day_number: 5,
    day_title: "Inca Trail Day 2 - Dead Woman's Pass",
    day_description:
      "The most challenging day! Early start for the steep climb to Dead Woman's Pass (4,200m), the highest point of the trail. Breathtaking views reward your effort. Descend to Pacaymayo Valley for lunch. Continue to the second pass visiting Runkurakay ruins. Descend to Chaquicocha camp (3,600m). Total hiking time approximately 7-8 hours.",
  },
  {
    tour_ref_id: 'tour_peru_14day',
    day_number: 6,
    day_title: 'Inca Trail Day 3 - Cloud Forest',
    day_description:
      'Most scenic day of the trek! Pass through diverse ecosystems from alpine to cloud forest. Explore several Inca sites including Phuyupatamarca (City Above the Clouds). Dramatic descent down ancient stone steps. Arrive at Wiñay Wayna with its impressive agricultural terraces. Final night camping near the Sun Gate. Farewell dinner with porters.',
  },
  {
    tour_ref_id: 'tour_peru_14day',
    day_number: 7,
    day_title: 'Machu Picchu Sunrise',
    day_description:
      'Pre-dawn start for the final stretch to the Sun Gate. Watch the sunrise illuminate Machu Picchu - an unforgettable moment! Comprehensive guided tour of the citadel learning about its history, architecture, and mysteries. Optional climb Huayna Picchu for aerial views. Afternoon train to Aguas Calientes, then return to Cusco. Celebration dinner.',
  },
  {
    tour_ref_id: 'tour_peru_14day',
    day_number: 8,
    day_title: 'Flight to Puerto Maldonado',
    day_description:
      'Morning flight from Cusco to Puerto Maldonado, gateway to the Amazon. Boat journey up the Tambopata River to your eco-lodge deep in the rainforest. Afternoon jungle walk to spot monkeys, sloths, and tropical birds. Night walk to observe nocturnal creatures including tarantulas and tree frogs. Fall asleep to the symphony of the jungle.',
  },
  {
    tour_ref_id: 'tour_peru_14day',
    day_number: 9,
    day_title: 'Amazon Wildlife & Canopy Tower',
    day_description:
      'Early morning visit to a clay lick where hundreds of parrots and macaws gather. Canopy tower climb for spectacular rainforest views and bird watching. Afternoon piranha fishing and swimming in the river (safe areas only!). Learn about medicinal plants from indigenous guides. Night caiman spotting expedition by boat.',
  },
  {
    tour_ref_id: 'tour_peru_14day',
    day_number: 10,
    day_title: 'Amazon to Lake Titicaca',
    day_description:
      "Morning return to Puerto Maldonado. Flight to Juliaca via Lima, then scenic drive to Puno on the shores of Lake Titicaca (3,800m), the world's highest navigable lake. Check into hotel with lake views. Evening at leisure to rest and acclimatize. Traditional music performance at dinner.",
  },
  {
    tour_ref_id: 'tour_peru_14day',
    day_number: 11,
    day_title: 'Uros Floating Islands',
    day_description:
      'Full day boat excursion on Lake Titicaca. Visit the remarkable Uros floating islands made entirely of totora reeds. Meet local families and learn about their unique way of life. Continue to Taquile Island for lunch and to observe traditional textile weaving. Return to Puno with stunning sunset views over the lake.',
  },
  {
    tour_ref_id: 'tour_peru_14day',
    day_number: 12,
    day_title: 'Journey to Nazca',
    day_description:
      'Early morning flight from Juliaca to Lima, then continue by comfortable bus to Nazca (6 hours) through dramatic coastal desert scenery. Stop at the Ballestas Islands ("Poor Man\'s Galapagos") to see sea lions, penguins, and countless seabirds. Arrive in Nazca and visit the museum to understand the mysterious Nazca Lines.',
  },
  {
    tour_ref_id: 'tour_peru_14day',
    day_number: 13,
    day_title: 'Nazca Lines Overflight',
    day_description:
      'Morning flight over the enigmatic Nazca Lines in small aircraft. Marvel at the enormous geometric patterns and figures including the hummingbird, monkey, and astronaut, visible only from the air. Visit ancient Nazca aqueducts still in use today. Afternoon return to Lima. Farewell dinner in the seaside district of Barranco.',
  },
  {
    tour_ref_id: 'tour_peru_14day',
    day_number: 14,
    day_title: 'Departure from Lima',
    day_description:
      'Free morning for last-minute shopping at Indian Market or visiting any missed Lima sights. Optional visit to Larco Museum with its impressive pre-Columbian art collection. Transfer to airport for international departure. Leave Peru with incredible memories of Inca wonders, Amazon adventures, and warm Peruvian hospitality.',
  },
  // Add these itinerary objects to your itineraries.ts file

  // ===== MOROCCO TOUR - 10 days =====
  {
    tour_ref_id: 'tour_morocco_10day',
    day_number: 1,
    day_title: 'Arrival in Casablanca',
    day_description:
      'Welcome to Morocco! Arrive at Mohammed V International Airport and meet your guide. Visit the impressive Hassan II Mosque, one of the largest mosques in the world with stunning Atlantic Ocean views. Transfer to Rabat, the capital city. Explore the Kasbah of the Udayas and Hassan Tower. Check into your riad and enjoy a welcome dinner with traditional Moroccan specialties.',
  },
  {
    tour_ref_id: 'tour_morocco_10day',
    day_number: 2,
    day_title: 'Rabat to Chefchaouen',
    day_description:
      "Journey north through the Rif Mountains to the enchanting blue city of Chefchaouen. This photographer's paradise is painted in countless shades of blue. Explore the medina's narrow streets, visit local artisan workshops, and climb to the Spanish Mosque for panoramic views. Evening at leisure to soak in the peaceful mountain atmosphere. Overnight in a traditional riad.",
  },
  {
    tour_ref_id: 'tour_morocco_10day',
    day_number: 3,
    day_title: 'Chefchaouen to Fes',
    day_description:
      "Morning departure to Fes with a stop at the Roman ruins of Volubilis, Morocco's best-preserved archaeological site. Continue to the imperial city of Meknes to see the massive Bab Mansour gate. Arrive in Fes, Morocco's spiritual and cultural capital. Check into your riad in the medina. Traditional hammam spa experience in the evening.",
  },
  {
    tour_ref_id: 'tour_morocco_10day',
    day_number: 4,
    day_title: 'Fes Medina Discovery',
    day_description:
      "Full day exploring the UNESCO-listed Fes el-Bali medina with an expert local guide. Navigate the maze-like streets visiting the Bou Inania Madrasa, ancient tanneries, Nejjarine Museum, and Al-Karaouine University (world's oldest). Watch traditional craftsmen at work in the souks. Lunch at a traditional restaurant. Evening rooftop dinner with medina views.",
  },
  {
    tour_ref_id: 'tour_morocco_10day',
    day_number: 5,
    day_title: 'Journey to Sahara Desert',
    day_description:
      'Epic journey to the Sahara Desert crossing the Middle Atlas Mountains. Stop in Ifrane, "Morocco\'s Switzerland," and cedar forests where Barbary monkeys roam. Cross the Ziz Valley with its million palm trees. Arrive in Merzouga at the edge of the Erg Chebbi dunes. Sunset camel trek into the desert. Overnight in Berber camp under countless stars. Traditional music around the campfire.',
  },
  {
    tour_ref_id: 'tour_morocco_10day',
    day_number: 6,
    day_title: 'Desert to Dades Valley',
    day_description:
      'Wake early to watch the sunrise over the dunes. Camel ride back to Merzouga. Visit a Gnawa music family and explore underground irrigation channels. Drive through dramatic landscapes to Todra Gorge with its 300m high canyon walls. Continue through the Valley of Roses to Dades Valley. Overnight in a kasbah hotel with stunning valley views.',
  },
  {
    tour_ref_id: 'tour_morocco_10day',
    day_number: 7,
    day_title: 'Dades to Marrakech',
    day_description:
      "Scenic drive along the Road of 1000 Kasbahs. Visit the UNESCO World Heritage site of Ait Benhaddou, a spectacular fortified village featured in many Hollywood films. Cross the High Atlas Mountains via the dramatic Tizi n'Tichka pass (2,260m). Arrive in vibrant Marrakech. Evening visit to the legendary Jemaa el-Fnaa square with its entertainers and food stalls.",
  },
  {
    tour_ref_id: 'tour_morocco_10day',
    day_number: 8,
    day_title: 'Marrakech Exploration',
    day_description:
      "Full day discovering Marrakech's treasures. Visit the Bahia Palace, Saadian Tombs, and Koutoubia Mosque. Explore the colorful souks with their spices, textiles, and handicrafts. Lunch in a hidden riad restaurant. Afternoon visit to the beautiful Majorelle Garden. Participate in a cooking class learning to prepare tagine and other Moroccan dishes. Feast on your creations for dinner.",
  },
  {
    tour_ref_id: 'tour_morocco_10day',
    day_number: 9,
    day_title: 'Atlas Mountains Excursion',
    day_description:
      "Day trip to the High Atlas Mountains. Visit a traditional Berber village and enjoy mint tea with a local family. Optional mule ride or hike to waterfalls in the Ourika Valley. Learn about Argan oil production at a women's cooperative. Return to Marrakech for a farewell dinner in a palace restaurant with belly dancing and traditional music performances.",
  },
  {
    tour_ref_id: 'tour_morocco_10day',
    day_number: 10,
    day_title: 'Departure from Marrakech',
    day_description:
      'Free morning for last-minute shopping in the souks or relaxing at a café. Optional visit to the Menara Gardens or Yves Saint Laurent Museum. Transfer to Marrakech Menara Airport for your departure. Leave Morocco with memories of dramatic landscapes, ancient cities, warm hospitality, and the magic of the Sahara.',
  },

  // ===== ICELAND TOUR - 8 days =====
  {
    tour_ref_id: 'tour_iceland_8day',
    day_number: 1,
    day_title: 'Arrival & Reykjavik',
    day_description:
      'Welcome to Iceland! Arrival at Keflavík Airport and transfer to Reykjavik. Stop at the famous Blue Lagoon for a relaxing soak in the mineral-rich geothermal waters - perfect after your flight. Check into your hotel in central Reykjavik. Evening walking tour of the compact city center including Hallgrímskirkja church and the harbor. Welcome dinner featuring fresh Icelandic seafood.',
  },
  {
    tour_ref_id: 'tour_iceland_8day',
    day_number: 2,
    day_title: 'Golden Circle & South Coast',
    day_description:
      'Begin the Ring Road adventure! Visit the Golden Circle highlights: Þingvellir National Park (continental divide), Geysir geothermal area with erupting hot springs, and mighty Gullfoss waterfall. Continue south to Seljalandsfoss waterfall where you can walk behind the cascade. End at Skógafoss waterfall. First Northern Lights hunting opportunity tonight (weather permitting). Overnight in Vík.',
  },
  {
    tour_ref_id: 'tour_iceland_8day',
    day_number: 3,
    day_title: 'Black Beaches & Glacier Lagoon',
    day_description:
      'Explore Reynisfjara black sand beach with its basalt columns and powerful Atlantic waves. Journey through vast lava fields to Vatnajökull National Park. Marvel at Jökulsárlón Glacier Lagoon where icebergs float serenely. Walk on Diamond Beach where ice chunks sparkle on black sand. Natural ice cave exploration with specialized guides and equipment. Northern Lights wake-up call if visible.',
  },
  {
    tour_ref_id: 'tour_iceland_8day',
    day_number: 4,
    day_title: 'East Fjords Journey',
    day_description:
      'Scenic drive through the dramatic East Fjords with towering mountains and picturesque fishing villages. Stop at Djúpivogur and explore the charming harbor. Continue through winding coastal roads with stunning ocean views. Possible whale watching opportunities from shore. Arrive in Egilsstaðir, the capital of East Iceland. Soak in local hot springs. Northern Lights viewing if conditions allow.',
  },
  {
    tour_ref_id: 'tour_iceland_8day',
    day_number: 5,
    day_title: 'Lake Mývatn & North Iceland',
    day_description:
      "Drive to Lake Mývatn area, a geothermal wonderland. Explore pseudo-craters, bubbling mud pools at Hverir, and bizarre lava formations at Dimmuborgir. Visit powerful Dettifoss, Europe's most powerful waterfall. Whale watching tour from Húsavík, the whale capital of Iceland. Relax in Mývatn Nature Baths with mountain views. Overnight in Akureyri, Iceland's second city.",
  },
  {
    tour_ref_id: 'tour_iceland_8day',
    day_number: 6,
    day_title: 'Snæfellsnes Peninsula',
    day_description:
      'Long but spectacular drive to Snæfellsnes Peninsula, "Iceland in Miniature." Photo stop at Hvítserkur rock formation. Explore charming fishing villages, dramatic sea cliffs, and Kirkjufell mountain (most photographed mountain in Iceland). Visit Snæfellsjökull National Park with its glacier-capped volcano. Black church at Búðir. Final evening in countryside location perfect for Northern Lights.',
  },
  {
    tour_ref_id: 'tour_iceland_8day',
    day_number: 7,
    day_title: 'West Iceland & Return',
    day_description:
      "Explore West Iceland highlights including Hraunfossar and Barnafoss waterfalls. Visit Deildartunguhver, Europe's most powerful hot spring. Optional glacier hiking on Langjökull with crampons and ice axes. Return to Reykjavik for farewell dinner at a top restaurant. Final Northern Lights opportunity - your guide knows the best spots away from city lights.",
  },
  {
    tour_ref_id: 'tour_iceland_8day',
    day_number: 8,
    day_title: 'Departure',
    day_description:
      'Transfer to Keflavík Airport for departure. Optional early morning visit to the Blue Lagoon if flight schedule permits. Leave Iceland with memories of otherworldly landscapes, the magical Northern Lights (hopefully!), and the raw power of nature in this land of fire and ice.',
  },

  // Add these itinerary objects to your itineraries.ts file

  // ===== EGYPT TOUR - 11 days =====
  {
    tour_ref_id: 'tour_egypt_11day',
    day_number: 1,
    day_title: 'Arrival in Cairo',
    day_description:
      'Welcome to Egypt, land of the Pharaohs! Arrive at Cairo International Airport and meet your Egyptologist guide. Transfer to your hotel near the pyramids. Evening visit to the Khan el-Khalili bazaar, one of the oldest markets in the Middle East. Welcome dinner with views of the illuminated pyramids. Briefing about the upcoming adventure.',
  },
  {
    tour_ref_id: 'tour_egypt_11day',
    day_number: 2,
    day_title: 'Pyramids & Sphinx',
    day_description:
      "Full day at the Giza Plateau. Early morning visit to the Great Pyramids - last surviving Wonder of the Ancient World. Optional entry inside the Great Pyramid. Meet the enigmatic Sphinx and learn its mysteries. Visit the Solar Boat Museum. Afternoon at the Saqqara necropolis to see the Step Pyramid, the world's oldest pyramid. Evening sound and light show at the pyramids.",
  },
  {
    tour_ref_id: 'tour_egypt_11day',
    day_number: 3,
    day_title: 'Egyptian Museum & Old Cairo',
    day_description:
      "Morning visit to the Egyptian Museum housing the world's greatest collection of Pharaonic artifacts, including Tutankhamun's golden treasures. Explore Coptic Cairo including the Hanging Church and Ben Ezra Synagogue. Visit the Citadel of Saladin and Mohamed Ali Mosque with panoramic city views. Evening flight to Luxor. Check into your Nile-view hotel.",
  },
  {
    tour_ref_id: 'tour_egypt_11day',
    day_number: 4,
    day_title: 'Valley of the Kings',
    day_description:
      "Cross to the West Bank of the Nile. Explore the Valley of the Kings, entering three elaborate pharaonic tombs (optional Tutankhamun's tomb). Visit the magnificent Temple of Hatshepsut and the Colossi of Memnon. Afternoon visit to Karnak Temple, the largest ancient religious site in the world. Board your 5-star Nile cruise ship. Dinner and belly dancing show onboard.",
  },
  {
    tour_ref_id: 'tour_egypt_11day',
    day_number: 5,
    day_title: 'Nile Cruise - Edfu & Kom Ombo',
    day_description:
      "Sail to Edfu. Morning visit to the Temple of Horus, Egypt's best-preserved temple. Return to ship for lunch while sailing to Kom Ombo. Afternoon visit to the unusual double temple dedicated to Sobek the crocodile god and Horus. See the ancient calendar and surgical instruments carved in stone. Sunset sailing towards Aswan. Galabeya party onboard.",
  },
  {
    tour_ref_id: 'tour_egypt_11day',
    day_number: 6,
    day_title: 'Aswan & Philae Temple',
    day_description:
      'Morning visit to the Aswan High Dam and the Unfinished Obelisk. Motorboat ride to the island of Philae to explore the romantic Temple of Isis. Afternoon felucca sailing around Elephantine Island and the Botanical Gardens. Visit a Nubian village for tea with a local family. Optional evening visit to the Sound and Light show at Philae Temple.',
  },
  {
    tour_ref_id: 'tour_egypt_11day',
    day_number: 7,
    day_title: 'Abu Simbel Excursion',
    day_description:
      'Very early morning drive through the desert to Abu Simbel (or optional flight). Marvel at the colossal temples of Ramesses II and Nefertari, rescued from flooding by UNESCO. Learn about the incredible feat of moving these massive structures. Return to Aswan and disembark from cruise. Afternoon train journey back to Luxor enjoying Nile Valley scenery.',
  },
  {
    tour_ref_id: 'tour_egypt_11day',
    day_number: 8,
    day_title: 'Luxor to Red Sea',
    day_description:
      'Morning visit to Luxor Temple connected to Karnak by the ancient Avenue of Sphinxes. Drive across the Eastern Desert to Hurghada on the Red Sea coast (4 hours). Check into your beach resort. Afternoon at leisure to enjoy the beach, pool, or optional activities. Fresh seafood dinner by the sea.',
  },
  {
    tour_ref_id: 'tour_egypt_11day',
    day_number: 9,
    day_title: 'Red Sea Paradise',
    day_description:
      "Full day to enjoy the Red Sea. Morning snorkeling or diving excursion to explore spectacular coral reefs teeming with tropical fish. The Red Sea offers some of the world's best diving. Afternoon options include glass-bottom boat tour, parasailing, or simply relaxing on the beach. Evening at leisure at the resort.",
  },
  {
    tour_ref_id: 'tour_egypt_11day',
    day_number: 10,
    day_title: 'Desert Safari & Return to Cairo',
    day_description:
      'Morning desert safari by 4x4 to a Bedouin village. Experience traditional Bedouin hospitality, camel riding, and learn about desert life. Afternoon flight from Hurghada to Cairo. Farewell dinner cruise on the Nile with traditional entertainment including whirling dervishes and belly dancing.',
  },
  {
    tour_ref_id: 'tour_egypt_11day',
    day_number: 11,
    day_title: 'Departure',
    day_description:
      'Transfer to Cairo International Airport for your departure. Optional morning visit to the new Grand Egyptian Museum (if open) or last-minute shopping for papyrus, perfumes, and souvenirs. Leave Egypt with unforgettable memories of ancient wonders, the eternal Nile, and warm Egyptian hospitality.',
  },

  // ===== INDIA TOUR - 15 days =====
  {
    tour_ref_id: 'tour_india_15day',
    day_number: 1,
    day_title: 'Arrival in Delhi',
    day_description:
      'Namaste and welcome to incredible India! Arrive at Indira Gandhi International Airport and transfer to your hotel. Afternoon at leisure to rest and adjust to the sensory feast that is India. Evening welcome dinner at a renowned restaurant featuring diverse Indian cuisines. Briefing about Indian customs and the journey ahead.',
  },
  {
    tour_ref_id: 'tour_india_15day',
    day_number: 2,
    day_title: 'Old & New Delhi',
    day_description:
      "Full day exploring India's capital. Morning rickshaw ride through the chaotic lanes of Old Delhi. Visit Jama Masjid (India's largest mosque), walk through Chandni Chowk market, and see the Red Fort. Afternoon in New Delhi: India Gate, Parliament House, and Humayun's Tomb. Visit Gandhi Memorial. Evening at leisure in Connaught Place.",
  },
  {
    tour_ref_id: 'tour_india_15day',
    day_number: 3,
    day_title: 'Delhi to Agra',
    day_description:
      'Morning drive to Agra via the new expressway (3 hours). Check into your hotel with Taj Mahal views. Afternoon visit to Agra Fort, a UNESCO World Heritage site with its palaces, mosques, and halls. Sunset visit to Mehtab Bagh gardens for perfect Taj Mahal photos across the river. Evening at leisure to explore local markets.',
  },
  {
    tour_ref_id: 'tour_india_15day',
    day_number: 4,
    day_title: 'Taj Mahal & Fatehpur Sikri',
    day_description:
      'Dawn visit to the Taj Mahal to witness the marble monument change colors with the sunrise - truly magical! Return for breakfast. Visit the exquisite Tomb of Itimad-ud-Daulah (Baby Taj). Afternoon excursion to Fatehpur Sikri, the abandoned Mughal capital with perfectly preserved palaces and mosques. Continue to Jaipur, the Pink City.',
  },
  {
    tour_ref_id: 'tour_india_15day',
    day_number: 5,
    day_title: 'Jaipur Palaces & Forts',
    day_description:
      'Morning excursion to Amber Fort. Ascend to the fort on decorated elephants or by jeep. Explore the stunning palace complex with its mirror palace and panoramic views. Photo stop at Hawa Mahal (Palace of Winds). Visit the City Palace and its museums, and Jantar Mantar astronomical observatory. Afternoon cooking class learning Rajasthani cuisine.',
  },
  {
    tour_ref_id: 'tour_india_15day',
    day_number: 6,
    day_title: 'Jaipur to Varanasi',
    day_description:
      "Morning visit to a traditional textile workshop to see block printing and carpet weaving. Afternoon flight to Varanasi, India's holiest city. Check into your hotel near the ghats. Evening Aarti ceremony on the Ganges - witness the spectacular ritual with fire, incense, and chanting as thousands gather for prayers. Truly unforgettable spiritual experience.",
  },
  {
    tour_ref_id: 'tour_india_15day',
    day_number: 7,
    day_title: 'Spiritual Varanasi',
    day_description:
      'Pre-dawn boat ride on the Ganges to watch the sunrise and observe morning rituals. See pilgrims bathing in the sacred waters and priests performing ceremonies. Walk through the ancient narrow lanes. Visit Sarnath where Buddha gave his first sermon. Evening visit to a local family for dinner and cultural exchange.',
  },
  {
    tour_ref_id: 'tour_india_15day',
    day_number: 8,
    day_title: 'Flight to Kerala',
    day_description:
      "Morning flight to Cochin (Kochi) in tropical Kerala via Delhi. Dramatic change from North to South India! Transfer to your hotel. Evening Kathakali dance performance - elaborate costumes, dramatic makeup, and expressive storytelling. Dinner featuring Kerala's famous seafood and coconut-based cuisine.",
  },
  {
    tour_ref_id: 'tour_india_15day',
    day_number: 9,
    day_title: 'Cochin Heritage',
    day_description:
      "Explore Fort Cochin's colonial heritage. Visit the iconic Chinese fishing nets, Jewish Quarter with its 400-year-old synagogue, and spice markets. See St. Francis Church where Vasco da Gama was buried. Visit Mattancherry Palace with its Hindu murals. Afternoon cooking class learning to prepare Kerala specialties using fresh spices. Evening sunset harbor cruise.",
  },
  {
    tour_ref_id: 'tour_india_15day',
    day_number: 10,
    day_title: 'Journey to Munnar',
    day_description:
      "Scenic drive into the Western Ghats mountains to Munnar hill station (4 hours). Stop at waterfalls and spice gardens en route. This region produces some of India's finest tea. Check into your resort surrounded by tea plantations. Afternoon visit to tea museum and factory. Learn about tea processing and enjoy tastings. Cool mountain air provides welcome relief from coastal humidity.",
  },
  {
    tour_ref_id: 'tour_india_15day',
    day_number: 11,
    day_title: 'Munnar to Thekkady',
    day_description:
      'Morning nature walk through tea estates with chances to spot Nilgiri tahr and exotic birds. Drive to Thekkady/Periyar (3 hours), famous for its wildlife sanctuary. Afternoon spice plantation tour - see cardamom, pepper, vanilla, and cinnamon growing. Evening Kalaripayattu martial arts demonstration, the ancient art that influenced kung fu.',
  },
  {
    tour_ref_id: 'tour_india_15day',
    day_number: 12,
    day_title: 'Periyar Wildlife & Backwaters',
    day_description:
      'Early morning boat safari on Periyar Lake looking for elephants, sambar deer, and birds. With luck, spot tigers or leopards. Drive to Alleppey, Venice of the East (3 hours). Board your traditional houseboat for overnight backwaters cruise. Sail through palm-fringed canals, observe village life, and enjoy fresh Kerala meals prepared onboard.',
  },
  {
    tour_ref_id: 'tour_india_15day',
    day_number: 13,
    day_title: 'Backwaters to Marari Beach',
    day_description:
      'Morning cruise through narrow canals observing rural Kerala life - coir making, toddy tapping, fishing. Disembark and transfer to Marari Beach, a pristine stretch of palm-fringed sand. Check into beach resort. Afternoon at leisure for swimming, ayurvedic massage, or beach walks. Fresh seafood dinner on the beach.',
  },
  {
    tour_ref_id: 'tour_india_15day',
    day_number: 14,
    day_title: 'Beach Relaxation',
    day_description:
      'Full day at leisure to unwind after your India adventure. Optional activities include yoga session, cycling through fishing villages, cooking demonstration, or simply relaxing by the Arabian Sea. Visit local fish market in the morning. Farewell dinner featuring a grand Kerala feast served on banana leaves.',
  },
  {
    tour_ref_id: 'tour_india_15day',
    day_number: 15,
    day_title: 'Departure from Cochin',
    day_description:
      'Transfer to Cochin International Airport (2 hours) for your departure. Optional stop at local markets for last-minute spice shopping. Leave India with incredible memories of magnificent monuments, spiritual experiences, diverse landscapes, and the warmth of Indian hospitality. Namaste until we meet again!',
  },
]
