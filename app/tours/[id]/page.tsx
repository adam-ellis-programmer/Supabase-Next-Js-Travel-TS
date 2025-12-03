import Image from 'next/image'
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
import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'

interface TourPageProps {
  params: Promise<{
    id: string
  }>
}

const TourPage = async ({ params }: TourPageProps) => {
  const { id } = await params
  const tourId = parseInt(id)

  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const result = await TourService.getTourById(tourId)

  if (!result.success) {
    throw new Error(result.error)
  }

  const data = result.data
  const { booking_slots, itineraries, tour_images, price, main_hero_url } = data


  return (
    <div className='min-h-[calc(100vh-120px)]'>
      <div className='fixed bottom-0 left-0 w-full z-20 p-5 flex '>
        <Link
          href={`/admin/edit-tour/${id}`}
          className='bg-blue-300 p-1 rounded-lg'
        >
          Edit as admin
        </Link>
      </div>
      {/* Hero - OPTIMIZED with priority */}
      {/* <img src={main_hero_url} alt='' /> */}
      <div className='h-[400px] relative mb-7'>
        {/* <div className='absolute top-0 left-0 w-full h-full bg-[#465868] z-10'></div> */}
        <Image
          src={main_hero_url || '/fallback.jpg'}
          alt={tour_images[0]?.image_alt || 'Tour image'}
          fill
          priority
          className='object-cover object-center'
          sizes='100vw'
          quality={90}
        />
        <div className='absolute top-0 left-0 w-full h-full bg-black/40 flex items-center z-10'>
          <div className='text-white p-8'>
            <p className='text-4xl font-bold'>{data.duration}</p>
            <p className='text-4xl font-bold'>{data.tour_name}</p>
          </div>
        </div>
      </div>

      <div className='md:grid grid-cols-3 md:w-[90%] mx-auto gap-5'>
        <div className=''>
          <TourHeader
            text={`Main Details`}
            classes='text-2xl mb-8 font-bold '
          />
          <TourOverView data={data} />
          <div className='mt-4'>
            {itineraries.map((itinerary, index) => (
              <TourAccordion key={itinerary.id} item={itinerary} i={index} />
            ))}
          </div>
          <TourExtraInfo data={data} />
        </div>

        <div className=''>
          <TourHeader
            text={`Images and reviews`}
            classes='text-2xl mb-8 font-bold '
          />
          <div className='grid grid-cols-2 gap-4 mt-5'>
            {tour_images.map((image) => (
              <TourImge key={image.id} image={image} />
            ))}
          </div>
          <TourComments />
        </div>

        <div className=''>
          <TourHeader
            text={`Booking and related`}
            classes='text-2xl mb-8 font-bold '
          />
          <div className=''>
            <BookingCalender
              tourId={tourId}
              booking_slots={booking_slots}
              price={price}
              userId={user?.id}
            />
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
