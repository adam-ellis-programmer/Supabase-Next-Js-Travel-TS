'use server'
import { Indent } from 'lucide-react'
import { createClient } from '../../../server'
import { error } from 'console'

export const createTourAction = async (
  tourData,
  tourImages,
  heroImgage,
  bookingSlots
) => {
  const supabase = await createClient()

  console.log('\n tour images \n ')
  //   console.log(tourImages)

  //   console.log({ tourData, tourImages, heroImgage, availableDates })

  const preppedTourData = {
    tour_name: tourData.tourName,
    slug: tourData.slug,
    country: tourData.country,
    duration: tourData.duration,
    price: tourData.price,
    group_size: tourData.groupSize,
    difficulty: tourData.difficulty,
    destinations: tourData.destinations,
    description: tourData.description,
    rating: tourData.rating,
    tags: tourData.tags,
    publish: tourData.publish,
    why_take_trip: tourData.whyTakeTrip,
    age_group: tourData.ageGroup,
    pickup_point: tourData.pickupPoint,
    dropoff_point: tourData.dropoffPoint,
    key_points: tourData.keyPoints,
    whats_included: tourData.whatsIncluded,
    not_included: tourData.notIncluded,
    what_to_bring: tourData.whatToBring,
    travel_documents: tourData.travelDocuments,
    good_to_know: tourData.goodToKnow,
    dietary_options: tourData.dietaryOptions,
    payment_cancellation: tourData.paymentCancellation,
    bookable_pax: tourData.bookablePax,
    show_case: tourData.showCase,
    best_seller: tourData.bestSeller,
    continent: tourData.continent,
    hero_url: '',
    main_hero_url: '',
    hero_path: '',
    access: 3,
  }

  // loop over
  const itineraryData = tourData.itinerary

  const tourBookingSlots = bookingSlots

  // ========================
  // Insert to tour table
  // ========================
  const { data: insertedTourdata, error: insertedTourError } = await supabase
    .from('tours')
    .insert(preppedTourData)
    .select()

  if (insertedTourError) console.log(insertedTourError)

  // Get new tour id
  const newTourId = insertedTourdata[0].id

  // ========================
  // INSERT ITNIERARY DAY DATA
  // ========================
  for await (const [index, item] of itineraryData.entries()) {
    console.log(index, item)

    const prepedDayData = {
      tour_id: newTourId,
      day_number: index + 1,
      day_title: item.dayTitle,
      day_description: item.dayDescription,
    }

    const { data: itinerarieData, error: itineraryError } = await supabase
      .from('itineraries')
      .insert(prepedDayData)
      .select()

    if (itineraryError) console.log(itineraryError)
    console.log('Itninerary data inserted success')
  } // End of loop

  // ========================
  // insert to parent slot table
  // ========================
  for await (const slot of tourBookingSlots) {
    const { dates, ...newSlot } = slot

    // Prep data
    const slotDataToInsert = {
      tour_id: newTourId,
      bookable_places: newSlot.bookablePlaces,
      show: newSlot.show,
      month: newSlot.month,
      year: newSlot.year,
      display_order: 1,
    }

    // insert preped tour date
    const { data: insertedSlotData, error: slotErr } = await supabase
      .from('booking_slots')
      .insert(slotDataToInsert)
      .select()

    if (slotErr) console.log(slotErr)

    // Get new slot id
    const newSlotId = insertedSlotData[0].id

    // map, transform and prep nested dates data
    const dateInserts = dates.map((d) => ({
      booking_slot_id: newSlotId,
      date: d.date,
      places: d.places,
      show: true,
    }))

    // insert child dates of parent slot
    const { error: datesErr } = await supabase
      .from('booking_slot_dates')
      .insert(dateInserts)

    if (datesErr) console.log('datesErr', datesErr)
  } // end of loop

  // ========================
  // INSERT AND UPADATE HERO IMAGE DATA
  // ========================

  console.log('starting image upload ...')
  const path = `hero/${newTourId}/${heroImgage.name}`
  const { data: imageData, imageError } = await supabase.storage
    .from('tour-images')
    .upload(path, heroImgage, {
      cacheControl: '3600',
      upsert: false,
    })

  console.log('logging response...')
  if (imageData) console.log('imageData', imageData)
  if (imageError) console.log('imageError', imageError)

  console.log('Getting hero url public url...')
  const heroPath = imageData.path
  const { data: heroUrl } = supabase.storage
    .from('tour-images')
    .getPublicUrl(heroPath)

  console.log('Logging hero url data')
  if (heroUrl) console.log(heroUrl.publicUrl)

  console.log('Updating Hero Url data in tours table...')
  const { error: updateHeroUrlError } = await supabase
    .from('tours')
    .update({ main_hero_url: heroUrl.publicUrl, hero_path: heroPath })
    .eq('id', newTourId)

  if (updateHeroUrlError) console.log(updateHeroUrlError)
  console.log('Hero Url updated successfullly')

  // ========================
  // INSERT AND UPADATE TOUR IMAGES DATA
  // ========================

  console.log('starting uploading images and getting urls...')
  for (const [index, img] of tourImages.entries()) {
    const path = `tours/${newTourId}/${img.name}`
    const { data: uploadedImgData, error: uploadError } = await supabase.storage
      .from('tour-images')
      .upload(path, img, {
        cacheControl: '3600',
        upsert: false,
      })

    const storagePath = uploadedImgData.path

    if (uploadedImgData) console.log('uploadedImgData', uploadedImgData)
    if (uploadError) console.log('uploadError', uploadError)

    console.log('Getting image url...')
    const { data: imgUrlData } = supabase.storage
      .from('tour-images')
      .getPublicUrl(storagePath)

    console.log('Inserting new image record into the database...')

    const imageRecord = {
      tour_id: newTourId,
      image_url: imgUrlData.publicUrl,
      image_alt: '',
      display_order: index + 1,
      is_primary: index === 0 ? true : false,
      storage_path: storagePath,
      is_seeded: false,
    }

    const { data: imageRecordData, error: imageRecordError } = await supabase
      .from('tour_images')
      .insert(imageRecord)
      .select()

    if (imageRecordData) console.log('imageRecordData', imageRecordData)
    if (imageRecordError) console.log('imageRecordError', imageRecordError)

    if (imageRecordData)
      console.log('Successfylly uploaded and inserted new iamge and record!')
  } // end of loop

  console.log('Upload complete...')

  return {
    success: true,
    error: false,
  }
}
