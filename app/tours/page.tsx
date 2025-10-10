import { TourService } from '@/lib/supabase/services/tour-service'
import ToursPageClient from '@/components/ToursPageClient'
import { Tour } from '@/components/ToursPageCard'

// This enables dynamic rendering (SSR) on every request
export const dynamic = 'force-dynamic'

// Optional: Add metadata for SEO
export const metadata = {
  title: 'Explore Our Tours | Amazing Travel Adventures',
  description:
    'Discover amazing destinations around the world. Browse our curated selection of tours across Australia, Vietnam, Thailand, Japan, and New Zealand.',
}

export default async function AllToursPage() {
  // Fetch tours on the server
  const result = await TourService.getPublishedTours()
  console.log(result)

  if (!result.success) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold text-gray-800 mb-2'>
            Unable to load tours
          </h1>
          <p className='text-gray-600'>{result.error}</p>
        </div>
      </div>
    )
  }

  // Transform the data to match your Tour interface
  const tours: Tour[] = result.data.map((tour) => ({
    id: tour.id,
    name: tour.tour_name,
    country: tour.country,
    duration: tour.duration, // ✅ Don't add " Days" - it's already in the DB
    price: tour.price,
    rating: tour.rating || 4.5,
    reviews: 0,
    destinations: tour.destinations || 0,
    maxPeople: tour.group_size,
    image: tour.tour_images?.[0]?.image_url || '/placeholder-tour.jpg', // ✅ Extract from array
    description: tour.description,
  }))

  return <ToursPageClient initialTours={tours} />
}
