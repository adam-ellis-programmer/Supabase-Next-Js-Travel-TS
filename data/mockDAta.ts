export const mockUser = {
  email: 'user@example.com',
  id: '123e4567-e89b-12d3-a456-426614174000',
  created_at: '2024-01-15T10:30:00Z',
  last_sign_in_at: '2025-10-01T14:20:00Z',
}

export const mockBookedTours = Array.from({ length: 4 }, (_, i) => ({
  id: `booking-${i}`,
  booking_date: '2025-11-15',
  guests: 2,
  total_price: 1299,
  status:
    i === 0
      ? 'confirmed'
      : i === 1
      ? 'pending'
      : i === 2
      ? 'completed'
      : 'confirmed',
  tour: {
    id: `tour-${i}`,
    title: '12 Day Thai Adventure',
    description:
      'Experience the best of Thailand with visits to Bangkok, Chiang Mai, and the stunning islands of Phuket.',
    price: 1299,
    duration: '12 days',
    location: 'Thailand',
    image_url:
      'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/Hero4.jpg',
  },
}))
