// seed/data/tour_images.ts

interface TourImageSeed {
  tour_ref_id: string
  image_url: string
  storage_path: string
  image_alt: string
  display_order: number
  is_primary: boolean
}

export const tour_images: TourImageSeed[] = [
  // ===== VIETNAM TOUR - 6 images =====
  {
    tour_ref_id: 'tour_vietnam_12day',
    image_url:
      'https://images.unsplash.com/photo-1528127269322-539801943592?w=1200',
    storage_path: 'tours/vietnam-12day/halong-bay.jpg',
    image_alt: 'Ha Long Bay limestone karsts at sunset',
    display_order: 0,
    is_primary: true,
  },
  {
    tour_ref_id: 'tour_vietnam_12day',
    image_url:
      'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1200',
    storage_path: 'tours/vietnam-12day/hanoi-old-quarter.jpg',
    image_alt: 'Busy Hanoi Old Quarter street scene',
    display_order: 1,
    is_primary: false,
  },
  {
    tour_ref_id: 'tour_vietnam_12day',
    image_url:
      'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=1200',
    storage_path: 'tours/vietnam-12day/hoi-an.jpg',
    image_alt: 'Hoi An Ancient Town with lanterns',
    display_order: 2,
    is_primary: false,
  },
  {
    tour_ref_id: 'tour_vietnam_12day',
    image_url:
      'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=1200',
    storage_path: 'tours/vietnam-12day/mekong-delta.jpg',
    image_alt: 'Mekong Delta floating market',
    display_order: 3,
    is_primary: false,
  },
  {
    tour_ref_id: 'tour_vietnam_12day',
    image_url:
      'https://images.unsplash.com/photo-1583652788210-ed5e654b8a56?w=1200',
    storage_path: 'tours/vietnam-12day/sapa.jpg',
    image_alt: 'Sapa rice terraces in northern Vietnam',
    display_order: 4,
    is_primary: false,
  },
  {
    tour_ref_id: 'tour_vietnam_12day',
    image_url:
      'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1200',
    storage_path: 'tours/vietnam-12day/ho-chi-minh.jpg',
    image_alt: 'Ho Chi Minh City skyline at night',
    display_order: 5,
    is_primary: false,
  },

  // ===== THAILAND TOUR - 6 images =====
  {
    tour_ref_id: 'tour_thailand_10day',
    image_url:
      'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=1200',
    storage_path: 'tours/thailand-10day/phi-phi.jpg',
    image_alt: 'Phi Phi Islands Maya Bay crystal waters',
    display_order: 0,
    is_primary: true,
  },
  {
    tour_ref_id: 'tour_thailand_10day',
    image_url:
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200',
    storage_path: 'tours/thailand-10day/phuket-beach.jpg',
    image_alt: 'Phuket sunset beach with longtail boats',
    display_order: 1,
    is_primary: false,
  },
  {
    tour_ref_id: 'tour_thailand_10day',
    image_url:
      'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1200',
    storage_path: 'tours/thailand-10day/krabi-cliffs.jpg',
    image_alt: 'Krabi limestone cliffs and turquoise water',
    display_order: 2,
    is_primary: false,
  },
  {
    tour_ref_id: 'tour_thailand_10day',
    image_url:
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200',
    storage_path: 'tours/thailand-10day/snorkeling.jpg',
    image_alt: 'Snorkeling with tropical fish',
    display_order: 3,
    is_primary: false,
  },
  {
    tour_ref_id: 'tour_thailand_10day',
    image_url:
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200',
    storage_path: 'tours/thailand-10day/koh-lanta.jpg',
    image_alt: 'Koh Lanta peaceful beach resort',
    display_order: 4,
    is_primary: false,
  },
  {
    tour_ref_id: 'tour_thailand_10day',
    image_url:
      'https://images.unsplash.com/photo-1537956965359-7573183d1f57?w=1200',
    storage_path: 'tours/thailand-10day/james-bond-island.jpg',
    image_alt: 'James Bond Island Phang Nga Bay',
    display_order: 5,
    is_primary: false,
  },

  // ===== JAPAN TOUR - 6 images =====
  {
    tour_ref_id: 'tour_japan_11day',
    image_url:
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200',
    storage_path: 'tours/japan-11day/kyoto-temple.jpg',
    image_alt: 'Kinkaku-ji Golden Pavilion in Kyoto',
    display_order: 0,
    is_primary: true,
  },
  {
    tour_ref_id: 'tour_japan_11day',
    image_url:
      'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200',
    storage_path: 'tours/japan-11day/tokyo-shibuya.jpg',
    image_alt: 'Tokyo Shibuya crossing at night',
    display_order: 1,
    is_primary: false,
  },
  {
    tour_ref_id: 'tour_japan_11day',
    image_url:
      'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=1200',
    storage_path: 'tours/japan-11day/mount-fuji.jpg',
    image_alt: 'Mount Fuji with cherry blossoms',
    display_order: 2,
    is_primary: false,
  },
  {
    tour_ref_id: 'tour_japan_11day',
    image_url:
      'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=1200',
    storage_path: 'tours/japan-11day/fushimi-inari.jpg',
    image_alt: 'Fushimi Inari shrine thousand torii gates',
    display_order: 3,
    is_primary: false,
  },
  {
    tour_ref_id: 'tour_japan_11day',
    image_url:
      'https://images.unsplash.com/photo-1590253230532-a67f6bc61c9e?w=1200',
    storage_path: 'tours/japan-11day/hiroshima.jpg',
    image_alt: 'Hiroshima Peace Memorial and Atomic Dome',
    display_order: 4,
    is_primary: false,
  },
  {
    tour_ref_id: 'tour_japan_11day',
    image_url:
      'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200',
    storage_path: 'tours/japan-11day/ryokan.jpg',
    image_alt: 'Traditional Japanese ryokan room',
    display_order: 5,
    is_primary: false,
  },

  // ===== BALI TOUR - 6 images =====
  {
    tour_ref_id: 'tour_bali_10day',
    image_url:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200',
    storage_path: 'tours/bali-10day/tegalalang-rice-terraces.jpg',
    image_alt: 'Tegalalang rice terraces in Ubud',
    display_order: 0,
    is_primary: true,
  },
  {
    tour_ref_id: 'tour_bali_10day',
    image_url:
      'https://images.unsplash.com/photo-1588392382834-a891154bca4d?w=1200',
    storage_path: 'tours/bali-10day/yoga-session.jpg',
    image_alt: 'Sunrise yoga session overlooking jungle',
    display_order: 1,
    is_primary: false,
  },
  {
    tour_ref_id: 'tour_bali_10day',
    image_url:
      'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=1200',
    storage_path: 'tours/bali-10day/tanah-lot.jpg',
    image_alt: 'Tanah Lot temple at sunset',
    display_order: 2,
    is_primary: false,
  },
  {
    tour_ref_id: 'tour_bali_10day',
    image_url:
      'https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?w=1200',
    storage_path: 'tours/bali-10day/water-purification.jpg',
    image_alt: 'Tirta Empul water purification ceremony',
    display_order: 3,
    is_primary: false,
  },
  {
    tour_ref_id: 'tour_bali_10day',
    image_url:
      'https://images.unsplash.com/photo-1559526324-593bc073d938?w=1200',
    storage_path: 'tours/bali-10day/healthy-cuisine.jpg',
    image_alt: 'Organic vegetarian Balinese meal',
    display_order: 4,
    is_primary: false,
  },
  {
    tour_ref_id: 'tour_bali_10day',
    image_url:
      'https://images.unsplash.com/photo-1573790387438-4da905039392?w=1200',
    storage_path: 'tours/bali-10day/seminyak-beach.jpg',
    image_alt: 'Seminyak beach at golden hour',
    display_order: 5,
    is_primary: false,
  },

  // ===== CAMBODIA TOUR - 6 images =====
  {
    tour_ref_id: 'tour_cambodia_12day',
    image_url:
      'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=1200',
    storage_path: 'tours/cambodia-12day/angkor-wat.jpg',
    image_alt: 'Angkor Wat at sunrise reflection',
    display_order: 0,
    is_primary: true,
  },
  {
    tour_ref_id: 'tour_cambodia_12day',
    image_url:
      'https://images.unsplash.com/photo-1553603227-2358aabe821e?w=1200',
    storage_path: 'tours/cambodia-12day/bayon-temple.jpg',
    image_alt: 'Bayon temple stone faces',
    display_order: 1,
    is_primary: false,
  },
  {
    tour_ref_id: 'tour_cambodia_12day',
    image_url:
      'https://images.unsplash.com/photo-1563822249366-8b18e4785b0e?w=1200',
    storage_path: 'tours/cambodia-12day/ta-prohm.jpg',
    image_alt: 'Ta Prohm jungle temple with tree roots',
    display_order: 2,
    is_primary: false,
  },
  {
    tour_ref_id: 'tour_cambodia_12day',
    image_url:
      'https://images.unsplash.com/photo-1604594849809-dfedbc827105?w=1200',
    storage_path: 'tours/cambodia-12day/tonle-sap.jpg',
    image_alt: 'Tonle Sap floating village',
    display_order: 3,
    is_primary: false,
  },
  {
    tour_ref_id: 'tour_cambodia_12day',
    image_url:
      'https://images.unsplash.com/photo-1526106147829-0a5b1f69a8bc?w=1200',
    storage_path: 'tours/cambodia-12day/royal-palace.jpg',
    image_alt: 'Royal Palace Phnom Penh',
    display_order: 4,
    is_primary: false,
  },
  {
    tour_ref_id: 'tour_cambodia_12day',
    image_url:
      'https://images.unsplash.com/photo-1590071989538-fed3cf7e2c78?w=1200',
    storage_path: 'tours/cambodia-12day/sihanoukville-beach.jpg',
    image_alt: 'Sihanoukville pristine beach',
    display_order: 5,
    is_primary: false,
  },
]
