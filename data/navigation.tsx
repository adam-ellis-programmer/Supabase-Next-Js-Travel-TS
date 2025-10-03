import { MegaMenuData } from '@/types/navigation'

// data/navigation.ts
export const megaMenuData: MegaMenuData = {
  tours: {
    categories: [
      {
        region: 'Southeast Asia',
        destinations: [
          { name: 'Bangkok', slug: 'bangkok' },
          { name: 'Phuket', slug: 'phuket' },
          { name: 'Hanoi', slug: 'hanoi' },
          { name: 'Ho Chi Minh City', slug: 'ho-chi-minh' },
          { name: 'Siem Reap', slug: 'siem-reap' },
        ],
      },
      {
        region: 'East Asia',
        destinations: [
          { name: 'Tokyo', slug: 'tokyo' },
          { name: 'Seoul', slug: 'seoul' },
          { name: 'Beijing', slug: 'beijing' },
          { name: 'Shanghai', slug: 'shanghai' },
        ],
      },
      {
        region: 'Oceania',
        destinations: [
          { name: 'Sydney', slug: 'sydney' },
          { name: 'Melbourne', slug: 'melbourne' },
          { name: 'Auckland', slug: 'auckland' },
          { name: 'Queenstown', slug: 'queenstown' },
        ],
      },
      {
        region: 'Popular Tours',
        destinations: [
          { name: 'Beach Getaways', slug: 'beach-tours' },
          { name: 'Cultural Heritage', slug: 'cultural-tours' },
          { name: 'Adventure Tours', slug: 'adventure-tours' },
          { name: 'Food & Wine', slug: 'food-tours' },
        ],
      },
    ],
    featured: {
      title: 'Bali Island Paradise',
      subtitle: '7-day adventure from $899',
      image:
        'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
      link: '/tours/bali-paradise',
    },
  },
  destinations: {
    categories: [
      {
        region: 'Australia',
        destinations: [
          { name: 'Sydney', slug: 'sydney' },
          { name: 'Melbourne', slug: 'melbourne' },
          { name: 'Brisbane', slug: 'brisbane' },
          { name: 'Perth', slug: 'perth' },
        ],
      },
      {
        region: 'Vietnam',
        destinations: [
          { name: 'Hanoi', slug: 'hanoi' },
          { name: 'Ho Chi Minh City', slug: 'ho-chi-minh' },
          { name: 'Da Nang', slug: 'da-nang' },
          { name: 'Hoi An', slug: 'hoi-an' },
        ],
      },
      {
        region: 'Cambodia',
        destinations: [
          { name: 'Siem Reap', slug: 'siem-reap' },
          { name: 'Phnom Penh', slug: 'phnom-penh' },
          { name: 'Sihanoukville', slug: 'sihanoukville' },
        ],
      },
      {
        region: 'Thailand',
        destinations: [
          { name: 'Bangkok', slug: 'bangkok' },
          { name: 'Chiang Mai', slug: 'chiang-mai' },
          { name: 'Phuket', slug: 'phuket' },
          { name: 'Krabi', slug: 'krabi' },
        ],
      },
    ],
    featured: {
      title: 'Discover Vietnam',
      subtitle: 'From bustling cities to serene beaches',
      image:
        'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
      link: '/destinations/vietnam',
    },
  },
}
