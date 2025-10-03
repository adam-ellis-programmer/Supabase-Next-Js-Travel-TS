'use client'
import React, { useState } from 'react'
import { FaSave, FaPlus, FaTimes, FaImage } from 'react-icons/fa'

const AdminAddTour = () => {
  const [tourName, setTourName] = useState('')
  const [country, setCountry] = useState('')
  const [duration, setDuration] = useState('')
  const [price, setPrice] = useState('')
  const [maxPeople, setMaxPeople] = useState('')
  const [difficulty, setDifficulty] = useState('moderate')
  const [destinations, setDestinations] = useState('')
  const [description, setDescription] = useState('')
  const [keyPoints, setKeyPoints] = useState(['', ''])
  const [whyTakeTrip, setWhyTakeTrip] = useState('')
  const [ageGroup, setAgeGroup] = useState('')
  const [pickupPoint, setPickupPoint] = useState('')
  const [dropoffPoint, setDropoffPoint] = useState('')

  const addKeyPoint = () => {
    setKeyPoints([...keyPoints, ''])
  }

  const removeKeyPoint = (index: number) => {
    setKeyPoints(keyPoints.filter((_, i) => i !== index))
  }

  const updateKeyPoint = (index: number, value: string) => {
    const updated = [...keyPoints]
    updated[index] = value
    setKeyPoints(updated)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const tourData = {
      tourName,
      country,
      duration,
      price,
      maxPeople,
      difficulty,
      destinations,
      description,
      // The filter removes empty key points before submitting to the database.
      keyPoints: keyPoints.filter((point) => point.trim() !== ''),
      whyTakeTrip,
      ageGroup,
      pickupPoint,
      dropoffPoint,
    }
    console.log('Tour Data:', tourData)
    // Submit to database here
  }

  return (
    <div className='min-h-[calc(100vh-100px)] bg-gray-50 py-8'>
      <div className='max-w-5xl mx-auto px-4'>
        {/* Header */}
        <div className='mb-8'>
          <h1 className='text-4xl font-bold text-gray-800 mb-2'>
            Add New Tour
          </h1>
          <p className='text-gray-600'>
            Create a new tour package for your website
          </p>
        </div>

        <div className='bg-white rounded-lg shadow-lg p-8'>
          <div className='space-y-8'>
            {/* Basic Information Section */}
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
                    onChange={(e) => setTourName(e.target.value)}
                    placeholder='Amazing Vietnam 12 Day Adventure'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    required
                  />
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
                    Duration (Days) *
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
                    Max People *
                  </label>
                  <input
                    type='number'
                    value={maxPeople}
                    onChange={(e) => setMaxPeople(e.target.value)}
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
              </div>
            </section>

            {/* Description Section */}
            <section>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b'>
                Tour Description
              </h2>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>
                  Main Description *
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder='Discover breathtaking landscapes, immerse yourself in rich culture...'
                  rows={5}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none'
                  required
                />
              </div>
            </section>

            {/* Key Points Section */}
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
                        className='px-4 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors'
                      >
                        <FaTimes />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type='button'
                  onClick={addKeyPoint}
                  className='flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors'
                >
                  <FaPlus /> Add Key Point
                </button>
              </div>
            </section>

            {/* Why Take This Trip Section */}
            <section>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b'>
                Why Take This Trip
              </h2>
              <textarea
                value={whyTakeTrip}
                onChange={(e) => setWhyTakeTrip(e.target.value)}
                placeholder='This carefully curated journey offers the perfect blend...'
                rows={5}
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none'
              />
            </section>

            {/* Logistics Section */}
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

            {/* Images Section */}
            <section>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b'>
                Tour Images
              </h2>
              <div className='border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors cursor-pointer'>
                <FaImage className='text-6xl text-gray-400 mx-auto mb-4' />
                <p className='text-gray-600 mb-2'>
                  Click to upload or drag and drop
                </p>
                <p className='text-sm text-gray-500'>PNG, JPG up to 10MB</p>
              </div>
            </section>

            {/* Action Buttons */}
            <div className='flex gap-4 pt-6 border-t'>
              <button
                onClick={handleSubmit}
                className='flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg'
              >
                <FaSave /> Save Tour
              </button>
              <button
                type='button'
                className='px-8 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors'
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminAddTour
