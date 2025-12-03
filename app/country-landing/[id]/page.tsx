import React from 'react'
import { LandingPage } from '@/lib/supabase/services/site/landing-page-service'
import Link from 'next/link'
import Image from 'next/image'

import {
  FaPlane,
  FaMapMarkedAlt,
  FaUmbrellaBeach,
  FaMountain,
  FaUtensils,
  FaCamera,
  FaClock,
  FaGlobe,
  FaMoneyBillWave,
  FaPassport,
  FaStar,
  FaArrowRight,
} from 'react-icons/fa'
import { IconType } from 'react-icons'
// ✅ Import the type you need
import type { LandingPageData, CountryData } from '@/types/landing-page'
// Using the legacy API
const url = require('url')
const generateSlug = (name: string) => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}
const CountryLandingPage = async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
  const { id } = await params

  // decode
  const decodedId = decodeURIComponent(id)

  // use decoded to create a slug
  const idToSend = generateSlug(decodedId)

  // Query with the slug
  const res = await LandingPage.getPage(idToSend)

  // Type asserted data response
  const dbData = res[0] as LandingPageData

  // if no data return this
  if (!dbData)
    return (
      <div className='min-h-[calc(100vh-100px)] relative'>
        <div className='absolute top-0 left-0 w-full h-full z-10 bg-[#3a4e5f8d] flex justify-center items-center p-10'>
          <div className='bg-[#cccccc90] p-10 rounded-lg'>
            <p className='text-3xl text-center leading-10'>
              No Landing Page Available Yet
            </p>
            <p className='text-3xl text-center  leading-10'>Check Back Soon!</p>
            <div className='flex justify-center mt-5'>
              <Link className='bg-green-400 p-3 rounded-xl' href={`/`}>
                back home
              </Link>
            </div>
          </div>
        </div>

        <Image
          src='https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/4x4.jpg'
          alt='Coming soon background'
          fill
          className='object-cover object-center'
          priority
          // sizes='100vw'
          // unoptimized
        />
      </div>
    )

  // Icon mapping for experiences and travel tips
  const iconMap: { [key: string]: IconType } = {
    FaCamera,
    FaUtensils,
    FaGlobe,
    FaMountain,
    FaClock,
    FaPlane,
    FaMoneyBillWave,
    FaPassport,
    FaUmbrellaBeach,
    FaMapMarkedAlt,
  }

  // Map database data to component structure
  const countryData: CountryData = {
    name: dbData.country_name,
    tagline: dbData.tagline,
    heroImage: dbData.hero_image_url,
    description: dbData.description,

    quickFacts: {
      bestTime: dbData.best_time,
      currency: dbData.currency,
      language: dbData.language,
      timezone: dbData.timezone,
      visa: dbData.visa,
    },

    topDestinations: dbData.landing_page_destinations
      .sort((a, b) => a.display_order - b.display_order)
      .map((dest) => ({
        name: dest.name,
        image: dest.image_url,
        description: dest.description,
      })),

    experiences: dbData.landing_page_experiences
      .sort((a, b) => a.display_order - b.display_order)
      .map((exp) => ({
        icon: iconMap[exp.icon] || FaGlobe,
        title: exp.title,
        description: exp.description,
      })),

    attractions: dbData.attractions,

    travelTips: dbData.landing_page_travel_tips
      .sort((a, b) => a.display_order - b.display_order)
      .map((tip) => ({
        icon: iconMap[tip.icon] || FaClock,
        title: tip.title,
        tip: tip.tip,
      })),
  }

  return (
    <div className='bg-white'>
      {/* Hero Section */}
      <div className='relative h-[500px] flex items-center justify-center'>
        <img
          src={countryData.heroImage}
          alt={countryData.name}
          className='absolute inset-0 w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-black/40'></div>
        <div className='relative z-10 text-center text-white px-4'>
          <h1 className='text-5xl md:text-6xl font-bold mb-4'>
            {countryData.name}
          </h1>
          <p className='text-xl md:text-2xl mb-8'>{countryData.tagline}</p>
          <Link
            href={`/tours`}
            className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors shadow-lg'
          >
            Explore Tours
          </Link>
        </div>
      </div>

      {/* Country Overview */}
      <div className='max-w-7xl mx-auto px-6 py-16'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div>
            <h2 className='text-3xl font-bold mb-4 text-gray-800'>
              Welcome to {countryData.name}
            </h2>
            <p className='text-gray-600 leading-relaxed mb-6'>
              {countryData.description}
            </p>
            <button className='text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all'>
              Learn More <FaArrowRight />
            </button>
          </div>
          <div className='bg-blue-50 p-6 rounded-lg border border-blue-100'>
            <h3 className='text-xl font-bold mb-4 text-gray-800 flex items-center gap-2'>
              <FaGlobe className='text-blue-600' />
              Quick Facts
            </h3>
            <div className='space-y-3 text-gray-700'>
              <div>
                <span className='font-semibold'>Best Time to Visit:</span>{' '}
                {countryData.quickFacts.bestTime}
              </div>
              <div>
                <span className='font-semibold'>Currency:</span>{' '}
                {countryData.quickFacts.currency}
              </div>
              <div>
                <span className='font-semibold'>Language:</span>{' '}
                {countryData.quickFacts.language}
              </div>
              <div>
                <span className='font-semibold'>Timezone:</span>{' '}
                {countryData.quickFacts.timezone}
              </div>
              <div>
                <span className='font-semibold'>Visa:</span>{' '}
                {countryData.quickFacts.visa}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Destinations */}
      <div className='bg-gray-50 py-16'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-3xl font-bold mb-8 text-gray-800 text-center'>
            Top Destinations
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {countryData.topDestinations.map((dest) => (
              <div
                key={dest.name}
                className='bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group cursor-pointer'
              >
                <div className='h-48 overflow-hidden'>
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                  />
                </div>
                <div className='p-4'>
                  <h3 className='text-xl font-bold mb-2 text-gray-800'>
                    {dest.name}
                  </h3>
                  <p className='text-gray-600 text-sm'>{dest.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Experiences */}
      <div className='py-16 max-w-7xl mx-auto px-6'>
        <h2 className='text-3xl font-bold mb-8 text-gray-800 text-center'>
          Things to Experience
        </h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {countryData.experiences.map((exp) => (
            <div
              key={exp.title}
              className='text-center p-6 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-lg transition-all'
            >
              <exp.icon className='text-5xl text-blue-600 mx-auto mb-4' />
              <h3 className='text-xl font-semibold mb-2 text-gray-800'>
                {exp.title}
              </h3>
              <p className='text-gray-600 text-sm'>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Must-See Attractions */}
      <div className='bg-gradient-to-br from-blue-600 to-blue-800 py-16 text-white'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-3xl font-bold mb-8 text-center'>
            Must-See Attractions
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {countryData.attractions.map((attraction) => (
              <div
                key={attraction}
                className='bg-white/10 backdrop-blur-sm p-4 rounded-lg flex items-center gap-3 hover:bg-white/20 transition-colors'
              >
                <FaStar className='text-yellow-400 flex-shrink-0' />
                <span className='font-medium'>{attraction}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Travel Tips */}
      <div className='py-16 max-w-7xl mx-auto px-6'>
        <h2 className='text-3xl font-bold mb-8 text-gray-800 text-center'>
          Essential Travel Tips
        </h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {countryData.travelTips.map((tip) => {
            return (
              <div
                key={tip.title}
                className='bg-gray-50 p-6 rounded-lg border border-gray-200'
              >
                <tip.icon className='text-3xl text-blue-600 mb-3' />
                <h3 className='text-lg font-semibold mb-2 text-gray-800'>
                  {tip.title}
                </h3>
                <p className='text-gray-600 text-sm'>{tip.tip}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className='bg-gray-800 py-16 text-white'>
        <div className='max-w-4xl mx-auto text-center px-6'>
          <h2 className='text-3xl font-bold mb-4'>
            Ready to Explore {countryData.name}?
          </h2>
          <p className='text-xl mb-8 text-gray-300'>
            Let us help you plan your perfect adventure
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href={`/tours`}
              className='bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors'
            >
              View All Tours
            </Link>
            <Link
              href={`/contact`}
              className='bg-white text-gray-800 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors'
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountryLandingPage
