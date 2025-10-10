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
      'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
    storage_path: 'tours/vietnam-12day/halong-bay.jpg',
    image_alt: 'Ha Long Bay limestone karsts at sunset',
    display_order: 0,
    is_primary: true,
  },
  {
    tour_ref_id: 'tour_vietnam_12day',
    image_url:
      'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
    storage_path: 'tours/vietnam-12day/hanoi-old-quarter.jpg',
    image_alt: 'Busy Hanoi Old Quarter street scene',
    display_order: 1,
    is_primary: false,
  },
  {
    tour_ref_id: 'tour_vietnam_12day',
    image_url:
      'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
    storage_path: 'tours/vietnam-12day/hoi-an.jpg',
    image_alt: 'Hoi An Ancient Town with lanterns',
    display_order: 2,
    is_primary: false,
  },
  {
    tour_ref_id: 'tour_vietnam_12day',
    image_url:
      'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
    storage_path: 'tours/vietnam-12day/mekong-delta.jpg',
    image_alt: 'Mekong Delta floating market',
    display_order: 3,
    is_primary: false,
  },
  {
    tour_ref_id: 'tour_vietnam_12day',
    image_url:
      'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
    storage_path: 'tours/vietnam-12day/sapa.jpg',
    image_alt: 'Sapa rice terraces in northern Vietnam',
    display_order: 4,
    is_primary: false,
  },
  {
    tour_ref_id: 'tour_vietnam_12day',
    image_url:
      'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
    storage_path: 'tours/vietnam-12day/ho-chi-minh.jpg',
    image_alt: 'Ho Chi Minh City skyline at night',
    display_order: 5,
    is_primary: false,
  },

  // ===== THAILAND TOUR - 6 images =====
  {
    tour_ref_id: 'tour_thailand_10day',
    image_url:
      'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
    storage_path: 'tours/thailand-10day/phi-phi.jpg',
    image_alt: 'Phi Phi Islands Maya Bay crystal waters',
    display_order: 0,
    is_primary: true,
  },
  {
    tour_ref_id: 'tour_thailand_10day',
    image_url:
      'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
    storage_path: 'tours/thailand-10day/phuket-beach.jpg',
    image_alt: 'Phuket sunset beach with longtail boats',
    display_order: 1,
    is_primary: false,
  },
  {
    tour_ref_id: 'tour_thailand_10day',
    image_url:
      'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
    storage_path: 'tours/thailand-10day/krabi-cliffs.jpg',
    image_alt: 'Krabi limestone cliffs and turquoise water',
    display_order: 2,
    is_primary: false,
  },
  {
    tour_ref_id: 'tour_thailand_10day',
    image_url:
      'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
    storage_path: 'tours/thailand-10day/snorkeling.jpg',
    image_alt: 'Snorkeling with tropical fish',
    display_order: 3,
    is_primary: false,
  },
  {
    tour_ref_id: 'tour_thailand_10day',
    image_url:
      'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
    storage_path: 'tours/thailand-10day/koh-lanta.jpg',
    image_alt: 'Koh Lanta peaceful beach resort',
    display_order: 4,
    is_primary: false,
  },
  {
    tour_ref_id: 'tour_thailand_10day',
    image_url:
      'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
    storage_path: 'tours/thailand-10day/james-bond-island.jpg',
    image_alt: 'James Bond Island Phang Nga Bay',
    display_order: 5,
    is_primary: false,
  },

  // ===== JAPAN TOUR - 6 images =====
  {
    tour_ref_id: 'tour_japan_11day',
    image_url:
      'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
    storage_path: 'tours/japan-11day/kyoto-temple.jpg',
    image_alt: 'Kinkaku-ji Golden Pavilion in Kyoto',
    display_order: 0,
    is_primary: true,
  },
  {
    tour_ref_id: 'tour_japan_11day',
    image_url:
      'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
    storage_path: 'tours/japan-11day/tokyo-shibuya.jpg',
    image_alt: 'Tokyo Shibuya crossing at night',
    display_order: 1,
    is_primary: false,
  },
  {
    tour_ref_id: 'tour_japan_11day',
    image_url:
      'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
    storage_path: 'tours/japan-11day/mount-fuji.jpg',
    image_alt: 'Mount Fuji with cherry blossoms',
    display_order: 2,
    is_primary: false,
  },
  {
    tour_ref_id: 'tour_japan_11day',
    image_url:
      'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
    storage_path: 'tours/japan-11day/fushimi-inari.jpg',
    image_alt: 'Fushimi Inari shrine thousand torii gates',
    display_order: 3,
    is_primary: false,
  },
  {
    tour_ref_id: 'tour_japan_11day',
    image_url:
      'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
    storage_path: 'tours/japan-11day/hiroshima.jpg',
    image_alt: 'Hiroshima Peace Memorial and Atomic Dome',
    display_order: 4,
    is_primary: false,
  },
  {
    tour_ref_id: 'tour_japan_11day',
    image_url:
      'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
    storage_path: 'tours/japan-11day/ryokan.jpg',
    image_alt: 'Traditional Japanese ryokan room',
    display_order: 5,
    is_primary: false,
  },

  // ===== BALI TOUR - 6 images =====
  {
    tour_ref_id: 'tour_bali_10day',
    image_url:
      'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
    storage_path: 'tours/bali-10day/tegalalang-rice-terraces.jpg',
    image_alt: 'Tegalalang rice terraces in Ubud',
    display_order: 0,
    is_primary: true,
  },
  {
    tour_ref_id: 'tour_bali_10day',
    image_url:
      'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
    storage_path: 'tours/bali-10day/yoga-session.jpg',
    image_alt: 'Sunrise yoga session overlooking jungle',
    display_order: 1,
    is_primary: false,
  },
  {
    tour_ref_id: 'tour_bali_10day',
    image_url:
      'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
    storage_path: 'tours/bali-10day/tanah-lot.jpg',
    image_alt: 'Tanah Lot temple at sunset',
    display_order: 2,
    is_primary: false,
  },
  {
    tour_ref_id: 'tour_bali_10day',
    image_url:
      'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
    storage_path: 'tours/bali-10day/water-purification.jpg',
    image_alt: 'Tirta Empul water purification ceremony',
    display_order: 3,
    is_primary: false,
  },
  {
    tour_ref_id: 'tour_bali_10day',
    image_url:
      'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
    storage_path: 'tours/bali-10day/healthy-cuisine.jpg',
    image_alt: 'Organic vegetarian Balinese meal',
    display_order: 4,
    is_primary: false,
  },
  {
    tour_ref_id: 'tour_bali_10day',
    image_url:
      'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
    storage_path: 'tours/bali-10day/seminyak-beach.jpg',
    image_alt: 'Seminyak beach at golden hour',
    display_order: 5,
    is_primary: false,
  },

  // ===== CAMBODIA TOUR - 6 images =====
  {
    tour_ref_id: 'tour_cambodia_12day',
    image_url:
      'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
    storage_path: 'tours/cambodia-12day/angkor-wat.jpg',
    image_alt: 'Angkor Wat at sunrise reflection',
    display_order: 0,
    is_primary: true,
  },
  {
    tour_ref_id: 'tour_cambodia_12day',
    image_url:
      'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
    storage_path: 'tours/cambodia-12day/bayon-temple.jpg',
    image_alt: 'Bayon temple stone faces',
    display_order: 1,
    is_primary: false,
  },
  {
    tour_ref_id: 'tour_cambodia_12day',
    image_url:
      'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
    storage_path: 'tours/cambodia-12day/ta-prohm.jpg',
    image_alt: 'Ta Prohm jungle temple with tree roots',
    display_order: 2,
    is_primary: false,
  },
  {
    tour_ref_id: 'tour_cambodia_12day',
    image_url:
      'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
    storage_path: 'tours/cambodia-12day/tonle-sap.jpg',
    image_alt: 'Tonle Sap floating village',
    display_order: 3,
    is_primary: false,
  },
  {
    tour_ref_id: 'tour_cambodia_12day',
    image_url:
      'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
    storage_path: 'tours/cambodia-12day/royal-palace.jpg',
    image_alt: 'Royal Palace Phnom Penh',
    display_order: 4,
    is_primary: false,
  },
  {
    tour_ref_id: 'tour_cambodia_12day',
    image_url:
      'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
    storage_path: 'tours/cambodia-12day/sihanoukville-beach.jpg',
    image_alt: 'Sihanoukville pristine beach',
    display_order: 5,
    is_primary: false,
  },
]
