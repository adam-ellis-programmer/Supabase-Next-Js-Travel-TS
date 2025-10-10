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
  // Vietnam Tour - 6 images
  {
    tour_ref_id: 'tour_vietnam_12day',
    image_url:
      'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
    storage_path: 'tours/vietnam-12day/halong-bay.jpg',
    image_alt: 'Ha Long Bay Vietnam',
    display_order: 0,
    is_primary: true,
  },
  {
    tour_ref_id: 'tour_vietnam_12day',
    image_url:
      'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
    storage_path: 'tours/vietnam-12day/hanoi-old-quarter.jpg',
    image_alt: 'Hanoi Old Quarter',
    display_order: 1,
    is_primary: false,
  },
  {
    tour_ref_id: 'tour_vietnam_12day',
    image_url: 'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
    storage_path: 'tours/vietnam-12day/hoi-an.jpg',
    image_alt: 'Hoi An Ancient Town',
    display_order: 2,
    is_primary: false,
  },
  {
    tour_ref_id: 'tour_vietnam_12day',
    image_url: 'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
    storage_path: 'tours/vietnam-12day/mekong-delta.jpg',
    image_alt: 'Mekong Delta',
    display_order: 3,
    is_primary: false,
  },
  {
    tour_ref_id: 'tour_vietnam_12day',
    image_url:
      'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
    storage_path: 'tours/vietnam-12day/sapa.jpg',
    image_alt: 'Sapa Rice Terraces',
    display_order: 4,
    is_primary: false,
  },
  {
    tour_ref_id: 'tour_vietnam_12day',
    image_url:
      'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
    storage_path: 'tours/vietnam-12day/ho-chi-minh.jpg',
    image_alt: 'Ho Chi Minh City',
    display_order: 5,
    is_primary: false,
  },

  // Thailand Tour - 6 images
  {
    tour_ref_id: 'tour_thailand_10day',
    image_url: 'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
    storage_path: 'tours/thailand-10day/phi-phi.jpg',
    image_alt: 'Phi Phi Islands',
    display_order: 0,
    is_primary: true,
  },
  {
    tour_ref_id: 'tour_thailand_10day',
    image_url: 'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
    storage_path: 'tours/thailand-10day/phuket-beach.jpg',
    image_alt: 'Phuket Beach',
    display_order: 1,
    is_primary: false,
  },
  // ... 4 more images for Thailand
]
