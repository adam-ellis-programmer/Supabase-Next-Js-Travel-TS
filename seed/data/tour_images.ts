interface TourImageSeed {
  tour_id: number
  image_url: string
  storage_path: string
  image_alt: string
  display_order: number
  is_primary: boolean
}

export const tour_images: TourImageSeed[] = [
  {
    tour_id: 1,
    image_url:
      'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
    storage_path: 'tour-1/vietnam-1.jpg',
    image_alt: 'Ha Long Bay Vietnam',
    display_order: 0,
    is_primary: true,
  },
  {
    tour_id: 1,
    image_url:
      'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
    storage_path: 'tour-1/vietnam-2.jpg',
    image_alt: 'Hanoi Old Quarter',
    display_order: 1,
    is_primary: false,
  },
  {
    tour_id: 2,
    image_url:
      'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
    storage_path: 'tour-2/thailand-1.jpg',
    image_alt: 'Phi Phi Islands Thailand',
    display_order: 0,
    is_primary: true,
  },
]
