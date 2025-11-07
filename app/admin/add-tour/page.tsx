'use client'
import UploadTourImages from '@/components/image uploads/UploadTourImages'
import { createTourAction } from '@/lib/supabase/actions/actions'
import { DatabaseService } from '@/lib/supabase/services/database-service'
import { TourFormData } from '@/types/tours'
import React, { useState } from 'react'
import { FaSave, FaPlus, FaTimes, FaImage } from 'react-icons/fa'

const AdminAddTour = () => {
  // Basic Information
  const [tourImages, setTourImages] = useState<File[]>([])
  const [tourName, setTourName] = useState('')
  const [country, setCountry] = useState('')
  const [slug, setSlug] = useState('')
  const [duration, setDuration] = useState('')
  const [price, setPrice] = useState('')
  const [groupSize, setGroupSize] = useState('')
  const [difficulty, setDifficulty] = useState('moderate')
  const [destinations, setDestinations] = useState('')
  const [description, setDescription] = useState('')
  const [rating, setRating] = useState('')
  const [tags, setTags] = useState('')
  const [publish, setPublish] = useState(true)

  // Auto-generate slug from tour name
  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()
  }

  const handleTourNameChange = (value: string) => {
    setTourName(value)
    if (!slug || slug === generateSlug(tourName)) {
      setSlug(generateSlug(value))
    }
  }

  // Key Points
  const [keyPoints, setKeyPoints] = useState(['', ''])

  // Trip Details
  const [whyTakeTrip, setWhyTakeTrip] = useState('')
  const [ageGroup, setAgeGroup] = useState('')
  const [pickupPoint, setPickupPoint] = useState('')
  const [dropoffPoint, setDropoffPoint] = useState('')

  // Itinerary - Days
  // Add month and date
  const [itineraryDays, setItineraryDays] = useState([
    { dayNumber: 1, dayTitle: '', dayDescription: '' },
  ])

  // What's Included/Not Included
  const [whatsIncluded, setWhatsIncluded] = useState([''])
  const [notIncluded, setNotIncluded] = useState([''])

  // Additional Info
  const [whatToBring, setWhatToBring] = useState([''])
  const [travelDocuments, setTravelDocuments] = useState([''])
  const [dietaryOptions, setDietaryOptions] = useState('')
  const [paymentCancellation, setPaymentCancellation] = useState('')
  const [goodToKnow, setGoodToKnow] = useState([''])

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // ===========================
  // Booking Slots Structure
  // ===========================
  // array of objects
  const [bookingSlots, setBookingSlots] = useState([
    {
      dates: [
        { date: '', places: 0 },
        { date: '', places: 0 },
      ],
      bookablePlaces: 30,
      show: true,
      month: '',
      year: '',
    },
  ])
  const [bookablePax, setBookablePax] = useState('')

  // Booking Slot Functions
  // ===========================
  // add a new booking slot
  // ===========================
  const addBookingSlot = () => {
    setBookingSlots([
      ...bookingSlots,
      {
        dates: [
          { date: '', places: 0 },
          { date: '', places: 0 },
        ],
        bookablePlaces: 30,
        show: true,
        month: '',
        year: '',
      },
    ])
  }

  const updateSlotMonth = (slotIndex: number, value: string) => {
    const updated = [...bookingSlots]
    updated[slotIndex].month = value
    console.log(updated[slotIndex])

    setBookingSlots(updated)
  }

  const updateSlotYear = (slotIndex: number, value: string) => {
    const updated = [...bookingSlots]
    updated[slotIndex].year = value
    setBookingSlots(updated)
  }

  const removeBookingSlot = (slotIndex: number) => {
    setBookingSlots(bookingSlots.filter((_, i) => i !== slotIndex))
  }

  const addDateToSlot = (slotIndex: number) => {
    const updated = [...bookingSlots]
    updated[slotIndex].dates.push({ date: '', places: 0 })
    setBookingSlots(updated)
  }

  const removeDateFromSlot = (slotIndex: number, dateIndex: number) => {
    const updated = [...bookingSlots]
    updated[slotIndex].dates = updated[slotIndex].dates.filter(
      (_, i) => i !== dateIndex
    )
    setBookingSlots(updated)
  }

  // ===========================
  // actually updates the date
  // ===========================
  const updateDateInSlot = (
    slotIndex: number,
    dateIndex: number,
    dateValue: string
  ) => {
    // take all the bookig slots make new array
    const updated = [...bookingSlots]
    // console.log(updated[slotIndex].dates[dateIndex])
    // *** two levels of indexing ***
    //  get specific object plucked by the index
    updated[slotIndex].dates[dateIndex].date = dateValue
    // reset bookings slot array with new data
    setBookingSlots(updated)
    console.log('UPDATED DATE.... WITH INDEX ', slotIndex)
  }

  const handlePlacesInSlot = (
    value: number,
    slotIndex: number,
    dateIndex: number
  ) => {
    const updated = [...bookingSlots]
    updated[slotIndex].dates[dateIndex].places = value
    console.log(updated[slotIndex].dates[dateIndex].places)
    setBookingSlots(updated)
  }

  const updateBookablePlaces = (slotIndex: number, value: number) => {
    const updated = [...bookingSlots]
    updated[slotIndex].bookablePlaces = value
    setBookingSlots(updated)
  }

  const toggleSlotShow = (slotIndex: number) => {
    const updated = [...bookingSlots]
    updated[slotIndex].show = !updated[slotIndex].show
    setBookingSlots(updated)
  }

  // Key Points Functions
  const addKeyPoint = () => setKeyPoints([...keyPoints, ''])

  const removeKeyPoint = (index: number) => {
    setKeyPoints(keyPoints.filter((_, i) => i !== index))
  }

  const updateKeyPoint = (index: number, value: string) => {
    const updated = [...keyPoints]
    updated[index] = value
    setKeyPoints(updated)
  }

  // Itinerary Functions

  // ==============================
  // Add new itinerary object
  // ==============================
  const addItineraryDay = () => {
    setItineraryDays([
      ...itineraryDays,
      { dayNumber: itineraryDays.length + 1, dayTitle: '', dayDescription: '' },
    ])
  }

  const removeItineraryDay = (index: number) => {
    setItineraryDays(itineraryDays.filter((_, i) => i !== index))
  }
  // ==============================
  // update itineary object
  // ==============================
  const updateItineraryDay = (index: number, field: string, value: string) => {
    const updated = [...itineraryDays]
    //
    updated[index] = { ...updated[index], [field]: value }
    setItineraryDays(updated)
  }

  /** ^^^^^^^^^^^^^^
   // Step by step:

          updated[0] = {
            ...updated[0],           // Copy all existing properties
            [field]: value           // Override the specific field
          }
   */

  // Generic Array Functions
  const addToArray = (arr: string[], setArr: Function) => setArr([...arr, ''])

  const removeFromArray = (arr: string[], setArr: Function, index: number) => {
    setArr(arr.filter((_: any, i: number) => i !== index))
  }

  const updateArray = (
    arr: string[],
    setArr: Function,
    index: number,
    value: string
  ) => {
    const updated = [...arr]
    updated[index] = value
    setArr(updated)
  }

  function completeStep() {
    // ...
    const steps = 10
    const completedSteps = 3
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // console.log(tourImages)
    // return

    setIsSubmitting(true)
    setError(null)

    // Build the tour data object matching TourFormData type
    const tourData: TourFormData = {
      tourName,
      slug,
      country,
      duration,
      price: parseInt(price),
      groupSize: parseInt(groupSize),
      difficulty,
      destinations: parseInt(destinations),
      description,
      rating: rating ? parseFloat(rating) : null,
      tags,
      publish,
      keyPoints: keyPoints.filter((point) => point.trim() !== ''),
      whyTakeTrip,
      ageGroup,
      pickupPoint,
      dropoffPoint,
      itinerary: itineraryDays
        .filter((day) => day.dayTitle.trim() !== '')
        .map((day, index) => ({
          dayNumber: index + 1, // Renumber days
          dayTitle: day.dayTitle,
          dayDescription: day.dayDescription,
        })),
      whatsIncluded: whatsIncluded.filter((item) => item.trim() !== ''),
      notIncluded: notIncluded.filter((item) => item.trim() !== ''),
      whatToBring: whatToBring.filter((item) => item.trim() !== ''),
      travelDocuments: travelDocuments.filter((item) => item.trim() !== ''),
      dietaryOptions,
      paymentCancellation,
      goodToKnow: goodToKnow.filter((item) => item.trim() !== ''),
      bookablePax: parseInt(bookablePax),
    }
    // console.log(tourData)
    // return

    const availableDates = bookingSlots.map((slot) => ({
      // dates: slot.dates.filter((date) => date.trim() !== ''),
      dates: slot.dates,
      places: 0,
      bookablePlaces: slot.bookablePlaces,
      show: slot.show,
      month: slot.month,
      year: slot.year,
    }))

    // console.log(availableDates)

    try {
      // ✅ Call the Server Action
      const result = await createTourAction(
        availableDates,
        tourData,
        tourImages
      )

      if (result.success) {
        alert('Tour created successfully!')
        // Optionally redirect or reset form
        // router.push('/admin/view-tours')
      } else {
        // can use the ?? ''
        setError(result.error)
        alert(`Error: ${result.error}`)
      }
    } catch (err) {
      console.error('Submission error:', err)
      setError('Failed to create tour')
      alert('Failed to create tour')
    } finally {
      setIsSubmitting(false)
    }
  }
  // console.log(bookingSlots)

  return (
    <div className='min-h-[calc(100vh-100px)] bg-gray-50 py-8'>
      <div className='max-w-5xl mx-auto px-4'>
        <div className='mb-8'>
          <h1 className='text-4xl font-bold text-gray-800 mb-2'>
            Add New Tour
          </h1>
          <p className='text-gray-600'>
            Create a new tour package for your website
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className='bg-white rounded-lg shadow-lg p-8'
        >
          <div className='space-y-8'>
            {/* Basic Information */}
            <section>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b'>
                Basic Information
              </h2>
              <div className='grid md:grid-cols-2 gap-6'>
                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>
                    Tour Name *
                  </label>
                  <input
                    type='text'
                    value={tourName}
                    onChange={(e) => handleTourNameChange(e.target.value)}
                    placeholder='Amazing Vietnam 12 Day Adventure'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    required
                  />
                </div>

                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>
                    URL Slug *
                  </label>
                  <input
                    type='text'
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    placeholder='amazing-vietnam-12-day-adventure'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm'
                    required
                  />
                  <p className='text-xs text-gray-500 mt-1'>
                    URL: /tours/{slug || 'your-slug-here'}
                  </p>
                </div>

                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>
                    Country *
                  </label>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    required
                  >
                    <option value=''>Select Country</option>
                    <option value='australia'>Australia</option>
                    <option value='vietnam'>Vietnam</option>
                    <option value='thailand'>Thailand</option>
                    <option value='japan'>Japan</option>
                    <option value='new zealand'>New Zealand</option>
                  </select>
                </div>

                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>
                    Duration *
                  </label>
                  <input
                    type='text'
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    placeholder='12 Days'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    required
                  />
                </div>

                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>
                    Price (£) *
                  </label>
                  <input
                    type='number'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder='2500'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    required
                  />
                </div>

                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>
                    Group Size (Max People) *
                  </label>
                  <input
                    type='number'
                    value={groupSize}
                    onChange={(e) => setGroupSize(e.target.value)}
                    placeholder='15'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    required
                  />
                </div>

                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>
                    Difficulty *
                  </label>
                  <select
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  >
                    <option value='easy'>Easy</option>
                    <option value='moderate'>Moderate</option>
                    <option value='challenging'>Challenging</option>
                  </select>
                </div>

                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>
                    Number of Destinations *
                  </label>
                  <input
                    type='number'
                    value={destinations}
                    onChange={(e) => setDestinations(e.target.value)}
                    placeholder='5'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    required
                  />
                </div>

                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>
                    Rating
                  </label>
                  <input
                    type='number'
                    step='0.1'
                    min='0'
                    max='5'
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    placeholder='4.5'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  />
                </div>

                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>
                    Tags (comma-separated)
                  </label>
                  <input
                    type='text'
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    placeholder='adventure, culture, nature'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  />
                </div>

                <div className='flex items-center gap-3'>
                  <input
                    type='checkbox'
                    id='publish'
                    checked={publish}
                    onChange={(e) => setPublish(e.target.checked)}
                    className='w-5 h-5'
                  />
                  <label
                    htmlFor='publish'
                    className='text-sm font-semibold text-gray-700'
                  >
                    Publish Tour
                  </label>
                </div>
              </div>
            </section>

            {/* Description */}
            <section>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b'>
                Tour Description
              </h2>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder='Discover breathtaking landscapes...'
                rows={5}
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none'
                required
              />
            </section>

            {/* Key Points */}
            <section>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b'>
                Key Points
              </h2>
              <div className='space-y-3'>
                {keyPoints.map((point, index) => (
                  <div key={index} className='flex gap-2'>
                    <input
                      type='text'
                      value={point}
                      onChange={(e) => updateKeyPoint(index, e.target.value)}
                      placeholder='Explore historic landmarks and UNESCO sites'
                      className='flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                    {keyPoints.length > 1 && (
                      <button
                        type='button'
                        onClick={() => removeKeyPoint(index)}
                        className='px-4 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600'
                      >
                        <FaTimes />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type='button'
                  onClick={addKeyPoint}
                  className='flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'
                >
                  <FaPlus /> Add Key Point
                </button>
              </div>
            </section>

            {/* Why Take This Trip */}
            <section>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b'>
                Why Take This Trip
              </h2>
              <textarea
                value={whyTakeTrip}
                onChange={(e) => setWhyTakeTrip(e.target.value)}
                placeholder='This carefully curated journey offers...'
                rows={5}
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none'
              />
            </section>

            {/* Itinerary */}
            <section>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b'>
                Itinerary (Day by Day)
              </h2>
              <div className='space-y-4'>
                {itineraryDays.map((day, index) => (
                  <div
                    key={index}
                    className='border border-gray-300 rounded-lg p-4'
                  >
                    <div className='flex justify-between items-center mb-3'>
                      <h3 className='font-semibold text-lg'>
                        Day {day.dayNumber}
                      </h3>
                      {itineraryDays.length > 1 && (
                        <button
                          type='button'
                          onClick={() => removeItineraryDay(index)}
                          className='px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600'
                        >
                          <FaTimes />
                        </button>
                      )}
                    </div>
                    <input
                      type='text'
                      value={day.dayTitle}
                      onChange={(e) =>
                        updateItineraryDay(index, 'dayTitle', e.target.value)
                      }
                      placeholder='Day title (e.g., Arrival in Bangkok)'
                      className='w-full px-4 py-2 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                    <textarea
                      value={day.dayDescription}
                      onChange={(e) =>
                        updateItineraryDay(
                          index,
                          'dayDescription',
                          e.target.value
                        )
                      }
                      placeholder='Day description...'
                      rows={3}
                      className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none'
                    />
                  </div>
                ))}
                <button
                  type='button'
                  onClick={addItineraryDay}
                  className='flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'
                >
                  <FaPlus /> Add Day
                </button>
              </div>
            </section>

            {/* What's Included */}
            <section>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b'>
                What's Included
              </h2>
              <div className='space-y-3'>
                {whatsIncluded.map((item, index) => (
                  <div key={index} className='flex gap-2'>
                    <input
                      type='text'
                      value={item}
                      onChange={(e) =>
                        updateArray(
                          whatsIncluded,
                          setWhatsIncluded,
                          index,
                          e.target.value
                        )
                      }
                      placeholder='Professional tour guide'
                      className='flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                    {whatsIncluded.length > 1 && (
                      <button
                        type='button'
                        onClick={() =>
                          removeFromArray(
                            whatsIncluded,
                            setWhatsIncluded,
                            index
                          )
                        }
                        className='px-4 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600'
                      >
                        <FaTimes />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type='button'
                  onClick={() => addToArray(whatsIncluded, setWhatsIncluded)}
                  className='flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'
                >
                  <FaPlus /> Add Item
                </button>
              </div>
            </section>

            {/* What's Not Included */}
            <section>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b'>
                What's Not Included
              </h2>
              <div className='space-y-3'>
                {notIncluded.map((item, index) => (
                  <div key={index} className='flex gap-2'>
                    <input
                      type='text'
                      value={item}
                      onChange={(e) =>
                        updateArray(
                          notIncluded,
                          setNotIncluded,
                          index,
                          e.target.value
                        )
                      }
                      placeholder='International airfare'
                      className='flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                    {notIncluded.length > 1 && (
                      <button
                        type='button'
                        onClick={() =>
                          removeFromArray(notIncluded, setNotIncluded, index)
                        }
                        className='px-4 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600'
                      >
                        <FaTimes />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type='button'
                  onClick={() => addToArray(notIncluded, setNotIncluded)}
                  className='flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'
                >
                  <FaPlus /> Add Item
                </button>
              </div>
            </section>

            {/* What to Bring */}
            <section>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b'>
                What to Bring
              </h2>
              <div className='space-y-3'>
                {whatToBring.map((item, index) => (
                  <div key={index} className='flex gap-2'>
                    <input
                      type='text'
                      value={item}
                      onChange={(e) =>
                        updateArray(
                          whatToBring,
                          setWhatToBring,
                          index,
                          e.target.value
                        )
                      }
                      placeholder='Comfortable walking shoes'
                      className='flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                    {whatToBring.length > 1 && (
                      <button
                        type='button'
                        onClick={() =>
                          removeFromArray(whatToBring, setWhatToBring, index)
                        }
                        className='px-4 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600'
                      >
                        <FaTimes />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type='button'
                  onClick={() => addToArray(whatToBring, setWhatToBring)}
                  className='flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'
                >
                  <FaPlus /> Add Item
                </button>
              </div>
            </section>

            {/* Travel Documents */}
            <section>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b'>
                Travel Documents
              </h2>
              <div className='space-y-3'>
                {travelDocuments.map((item, index) => (
                  <div key={index} className='flex gap-2'>
                    <input
                      type='text'
                      value={item}
                      onChange={(e) =>
                        updateArray(
                          travelDocuments,
                          setTravelDocuments,
                          index,
                          e.target.value
                        )
                      }
                      placeholder='Valid passport (6 months validity)'
                      className='flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                    {travelDocuments.length > 1 && (
                      <button
                        type='button'
                        onClick={() =>
                          removeFromArray(
                            travelDocuments,
                            setTravelDocuments,
                            index
                          )
                        }
                        className='px-4 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600'
                      >
                        <FaTimes />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type='button'
                  onClick={() =>
                    addToArray(travelDocuments, setTravelDocuments)
                  }
                  className='flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'
                >
                  <FaPlus /> Add Document
                </button>
              </div>
            </section>

            {/* Good to Know */}
            <section>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b'>
                Good to Know
              </h2>
              <div className='space-y-3'>
                {goodToKnow.map((item, index) => (
                  <div key={index} className='flex gap-2'>
                    <input
                      type='text'
                      value={item}
                      onChange={(e) =>
                        updateArray(
                          goodToKnow,
                          setGoodToKnow,
                          index,
                          e.target.value
                        )
                      }
                      placeholder='Tours operate rain or shine'
                      className='flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                    {goodToKnow.length > 1 && (
                      <button
                        type='button'
                        onClick={() =>
                          removeFromArray(goodToKnow, setGoodToKnow, index)
                        }
                        className='px-4 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600'
                      >
                        <FaTimes />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type='button'
                  onClick={() => addToArray(goodToKnow, setGoodToKnow)}
                  className='flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'
                >
                  <FaPlus /> Add Info
                </button>
              </div>
            </section>

            {/* Dietary Options */}
            <section>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b'>
                Dietary Options
              </h2>
              <textarea
                value={dietaryOptions}
                onChange={(e) => setDietaryOptions(e.target.value)}
                placeholder='Vegetarian, vegan, gluten-free options available...'
                rows={4}
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none'
              />
            </section>

            {/* Payment & Cancellation */}
            <section>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b'>
                Payment & Cancellation Policy
              </h2>
              <textarea
                value={paymentCancellation}
                onChange={(e) => setPaymentCancellation(e.target.value)}
                placeholder='30% deposit to confirm booking...'
                rows={4}
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none'
              />
            </section>

            {/* Logistics */}
            <section>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b'>
                Logistics & Details
              </h2>
              <div className='space-y-4'>
                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>
                    Age Group
                  </label>
                  <input
                    type='text'
                    value={ageGroup}
                    onChange={(e) => setAgeGroup(e.target.value)}
                    placeholder='Suitable for ages 18-65'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  />
                </div>

                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>
                    Pick-up Point
                  </label>
                  <textarea
                    value={pickupPoint}
                    onChange={(e) => setPickupPoint(e.target.value)}
                    placeholder='Downtown Hotel Lobby, 123 Main Street, 8:00 AM'
                    rows={3}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none'
                  />
                </div>

                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>
                    Drop-off Point
                  </label>
                  <textarea
                    value={dropoffPoint}
                    onChange={(e) => setDropoffPoint(e.target.value)}
                    placeholder='City Airport Terminal, 6:00 PM'
                    rows={3}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none'
                  />
                </div>
              </div>
            </section>

            {/* Booking Details - NEW STRUCTURE */}
            <section>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b'>
                Booking Details
              </h2>

              <div className='mb-6'>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>
                  Bookable Pax (Min Booking Size)
                </label>
                <input
                  type='number'
                  value={bookablePax}
                  onChange={(e) => setBookablePax(e.target.value)}
                  placeholder='1'
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </div>

              {/* ======================================================================================================== */}
              {/* --- BOOKING SLOT */}
              {/* ======================================================================================================== */}

              <div className='space-y-6'>
                {bookingSlots.map((slot, slotIndex) => (
                  <div
                    key={slotIndex}
                    className=' border-gray-300 rounded-lg p-6 bg-blue-50'
                  >
                    <div className='flex justify-between items-center mb-4'>
                      <h3 className='font-semibold text-lg text-gray-800'>
                        Booking Slot {slotIndex + 1}
                      </h3>
                      {bookingSlots.length > 1 && (
                        <button
                          type='button'
                          onClick={() => removeBookingSlot(slotIndex)}
                          className='px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 flex items-center gap-2'
                        >
                          <FaTimes /> Remove Slot
                        </button>
                      )}
                    </div>

                    <div className='grid md:grid-cols-2 gap-4 mb-4'>
                      <div>
                        <label className='block text-sm font-semibold text-gray-700 mb-2'>
                          Bookable Places
                        </label>
                        {/* ============================= */}
                        {/* ----  MONTH SELECTOR */}
                        {/* ============================= */}
                        <div className='space-y-4 mb-4'>
                          {/* Month and Year Selection */}
                          <div className='grid grid-cols-2 gap-4'>
                            <div>
                              <label className='block text-sm font-semibold text-gray-700 mb-2'>
                                Select Month
                              </label>
                              <select
                                value={slot.month}
                                onChange={(e) =>
                                  updateSlotMonth(slotIndex, e.target.value)
                                }
                                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                              >
                                <option value=''>Select a month</option>
                                <option value='January'>January</option>
                                <option value='February'>February</option>
                                <option value='March'>March</option>
                                <option value='April'>April</option>
                                <option value='May'>May</option>
                                <option value='June'>June</option>
                                <option value='July'>July</option>
                                <option value='August'>August</option>
                                <option value='September'>September</option>
                                <option value='October'>October</option>
                                <option value='November'>November</option>
                                <option value='December'>December</option>
                              </select>
                            </div>

                            <div>
                              <label className='block text-sm font-semibold text-gray-700 mb-2'>
                                Year
                              </label>
                              <input
                                type='text'
                                value={slot.year}
                                onChange={(e) =>
                                  updateSlotYear(slotIndex, e.target.value)
                                }
                                placeholder='2025'
                                maxLength={4}
                                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                              />
                            </div>
                          </div>

                          {/* Bookable Places */}
                          <div>
                            <label className='block text-sm font-semibold text-gray-700 mb-2'>
                              Bookable Places
                            </label>
                            <input
                              type='number'
                              value={slot.bookablePlaces}
                              onChange={(e) =>
                                updateBookablePlaces(
                                  slotIndex,
                                  parseInt(e.target.value) || 0
                                )
                              }
                              placeholder='30'
                              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                            />
                          </div>
                        </div>

                        <div className='flex items-center mb-4'>
                          <div className='flex items-center gap-3'></div>
                        </div>
                      </div>

                      <div className='flex items-center'>
                        <div className='flex items-center gap-3'>
                          <input
                            type='checkbox'
                            id={`show-${slotIndex}`}
                            checked={slot.show}
                            onChange={() => toggleSlotShow(slotIndex)}
                            className='w-5 h-5'
                          />
                          <label
                            htmlFor={`show-${slotIndex}`}
                            className='text-sm font-semibold text-gray-700'
                          >
                            Show This Slot
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* ================================================== */}
                    {/* --DATES */}
                    {/* ================================================== */}

                    <div className=''>
                      <div className='grid grid-cols-2'>
                        <label className='block text-sm font-semibold text-gray-700 mb-2'>
                          Available Places
                        </label>
                        <label className='block text-sm font-semibold text-gray-700 mb-2'>
                          Available Dates
                        </label>
                      </div>
                      <div className='space-y-3'>
                        {slot.dates.map((date, dateIndex) => (
                          <div key={dateIndex} className='flex gap-2'>
                            <input
                              type='number'
                              name=''
                              id=''
                              value={date.places}
                              className='w-1/2 p-3 border border-gray-300 rounded'
                              placeholder='Places'
                              onChange={(e) =>
                                handlePlacesInSlot(
                                  parseInt(e.target.value),
                                  slotIndex,
                                  dateIndex
                                )
                              }
                            />
                            <input
                              type='date'
                              value={date.date}
                              onChange={(e) =>
                                updateDateInSlot(
                                  slotIndex,
                                  dateIndex,
                                  e.target.value
                                )
                              }
                              className='flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white'
                            />

                            {slot.dates.length > 1 && (
                              <button
                                type='button'
                                onClick={() =>
                                  removeDateFromSlot(slotIndex, dateIndex)
                                }
                                className='px-4 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600'
                              >
                                <FaTimes />
                              </button>
                            )}
                          </div>
                        ))}
                        <button
                          type='button'
                          onClick={() => addDateToSlot(slotIndex)}
                          className='flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600'
                        >
                          <FaPlus /> Add Date
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                <button
                  type='button'
                  onClick={addBookingSlot}
                  className='flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-semibold'
                >
                  <FaPlus /> Add Booking Slot
                </button>
              </div>
            </section>

            {/* Images Section */}
            <UploadTourImages
              images={tourImages}
              onImagesChange={setTourImages}
            />

            {/* Action Buttons */}
            <div className='flex gap-4 pt-6 border-t'>
              <button
                type='submit'
                disabled={isSubmitting}
                className='flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg'
              >
                <FaSave /> Save Tour
              </button>
              <button
                type='button'
                disabled={isSubmitting}
                onClick={() => {
                  if (
                    confirm(
                      'Are you sure you want to cancel? All changes will be lost.'
                    )
                  ) {
                    // Reset form or navigate away
                    setTourImages([])
                  }
                }}
                className='px-8 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AdminAddTour
