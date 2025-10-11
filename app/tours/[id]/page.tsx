import TourAccordion from '@/components/Accordion'
import MightLike from '@/components/cards/MightLike'
import TourHeader from '@/components/TourHeader'
import TourImge from '@/components/TourImge'
import React from 'react'
import TourComments from '@/components/TourComments'
import BookingCalender from '@/components/BookingCalender'
import TourOverView from '@/components/TourOverView'
import TourExtraInfo from '@/components/TourExtraInfo'
import { TourService } from '@/lib/supabase/services/tour-service'

// Define the params type
interface TourPageProps {
  params: {
    id: string
  }
}

const TourPage = async ({ params }: TourPageProps) => {
  const { id } = await params
  const tourId = parseInt(id)

  const result = await TourService.getTourById(tourId)

  if (!result.success) {
    throw new Error(result.error)
  }

  // Remove 'as any' - TypeScript now knows data is TourWithRelations
  const data = result.data
  const { booking_slots, itineraries, tour_images, price } = data

  console.log(price)

  return (
    <div className='min-h-[calc(100vh-120px)]'>
      {/* hero */}
      <div className='h-[400px] relative mb-7'>
        <img
          className='h-full w-full object-cover object-center'
          src={tour_images[0]?.image_url || '/fallback.jpg'}
          alt={tour_images[0]?.image_alt || 'Tour image'}
        />
        <div className='absolute top-0 left-0 w-full h-full bg-black/40 flex items-center'>
          <div className='text-white p-8'>
            <p className='text-4xl font-bold'>{data.duration}</p>
            <p className='text-4xl font-bold'>{data.tour_name}</p>
          </div>
        </div>
      </div>

      <div className='md:grid grid-cols-3 md:w-[90%] mx-auto gap-5'>
        <div className=''>
          <TourHeader text={`Tour Details`} classes='text-2xl text-center' />
          <TourOverView data={data} />
          <div className='mt-4'>
            {itineraries.map((itinerary, index) => (
              <TourAccordion key={itinerary.id} item={itinerary} i={index} />
            ))}
          </div>
          <TourExtraInfo data={data} />
        </div>

        <div className=''>
          <TourHeader text={`Images`} classes='text-2xl text-center' />
          <div className='grid grid-cols-2 gap-4 mt-5'>
            {tour_images.map((image) => (
              <TourImge key={image.id} image={image} />
            ))}
          </div>
          <TourComments />
        </div>

        {/* IntrinsicAttributes is TypeScript's 
        base type for React components that says 
        "these are the only props allowed". When 
        you see this error, it means: */}

        <div className=''>
          <TourHeader text={`Booking`} classes='text-2xl text-center' />
          <div className=''>
            <BookingCalender booking_slots={booking_slots} price={price} />
          </div>
          <div className=''>
            <h2 className='text-center text-2xl my-10'>Tours you might like</h2>
            <MightLike />
            <MightLike />
            <MightLike />
            <MightLike />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TourPage
