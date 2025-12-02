'use client'
import React, { useState } from 'react'
import { FaSave, FaPlus, FaTimes, FaGlobe } from 'react-icons/fa'
import { createLandingPageAction } from '@/lib/supabase/actions/admin/add-new-landing-page/action'
import AdminAddLandingOLD from './page OLD'
import { BsFillInfoSquareFill } from 'react-icons/bs'

import { LandingPage } from '@/lib/supabase/services/site/landing-page-service'
import HeroImageUploadLanding from '@/components/admin/add landing page/HeroImageUploadLanding'
import TopDestinationsLanding from '@/components/admin/add landing page/TopDestinationsLanding'
import ThingsToExperience from '@/components/admin/add landing page/ThingsToExperience'
import MustSeeAttractions from '@/components/admin/add landing page/MustSeeAttractions'
import EssentialTravelTips from '@/components/admin/add landing page/EssentialTravelTips'

const booleanFields = ['is_active']
const pageExperiences = ['icon', 'title', 'description', 'display_order']
const pageDestinations = ['name', 'image_url', 'description', 'display_order']

const landingPageFields = [
  'country_name',
  'slug',
  'tagline',
  'description',
] as const
const quickFacts = ['best_time', 'currency', 'language', 'timezone', 'visa']

const generateSlug = (name: string) => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

const AdminAddLanding = () => {
  const [heroData, setHeroData] = useState<File | null>(null)

  const [basicInfo, setbasicInfo] = useState({
    country_name: '',
    slug: '',
    tagline: '',
    description: '',
  })

  const [quickFactsData, setQuickFactsData] = useState({
    best_time: '',
    currency: '',
    language: '',
    timezone: '',
    visa: '',
  })

  //
  const [topDestinations, setTopDestinations] = useState([
    {
      name: '',
      image: null as File | null,
      imagePreview: null,
      description: '',
    },
  ])

  const [experiences, setExperiences] = useState([
    { icon: 'FaUmbrellaBeach', title: '', description: '' },
  ])

  const [attractions, setAttractions] = useState([''])

  const [travelTips, setTravelTips] = useState([
    { icon: 'FaClock', title: '', tip: '' },
  ])

  const handleLandingFieldsChnage = (e) => {
    const { name, value } = e.target

    setbasicInfo((prev) => ({
      ...prev,
      [name]: value,
      ...(name === 'country_name' && { slug: generateSlug(value) }),
    }))
  }

  const handleFactChange = (e) => {
    const { name, value } = e.target
    setQuickFactsData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  /**
 * 
landing_pages
landing_page_destinations
landing_page_experiences
landing_page_travel_tips
 */
  const handleSubmit = async () => {
    const dataToSubmit = {
      basicInfo,
      quickFactsData,
      topDestinations,
      experiences,
      attractions,
      travelTips,
      heroData,
    }


    const res = await createLandingPageAction(dataToSubmit)


    if (res.success) {
      alert('Landing page created successfully!')
      // Optionally redirect to the new page
      // router.push(`/country-landing/${res.data.slug}`)
    } else {
      alert(`Error: ${res.error}`)
    }
  }

  return (
    <div className='mt-8'>
      <div className='min-h-[calc(100vh-100px)] w-full max-w-[1200px] mx-auto '>
        <section>
          <div className='mb-8'>
            <h1 className='text-4xl font-bold text-gray-800 mb-2'>
              Add Country Landing Page
            </h1>
            <p className='text-gray-600'>
              Create a new country destination landing page
            </p>
          </div>
        </section>

        <section className='mt-10 bg-blue-50 p-10 rounded-lg shadow-md'>
          <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b flex items-center gap-2'>
            <FaGlobe className='' />
            <span> Basic Information</span>
          </h2>
          <div className='grid grid-cols-2 gap-3'>
            {landingPageFields.slice(0, 3).map((field, i) => {
              return (
                <label key={i} className='relative'>
                  <p className='text-lg mb-2'>{field} *</p>
                  <input
                    type='text'
                    name={field}
                    className={`border border-blue-500 rounded-md w-full text-lg p-2 ${
                      field === 'slug' && 'cursor-not-allowed'
                    }`}
                    placeholder={
                      field === 'slug'
                        ? `Slug Auto Generated`
                        : `Enter ${field}`
                    }
                    onChange={handleLandingFieldsChnage}
                    disabled={field === 'slug'}
                    readOnly={field === 'slug'}
                    value={basicInfo[field as keyof typeof basicInfo]}
                  />
                  {field === 'slug' && (
                    <p className='text-gray-500  h-10 w-full text-sm absolute top-[109%]'>
                      {' '}
                      <span className='text-green-700 font-bold'>URL</span>:
                      /country-landing/
                      {basicInfo[field as keyof typeof basicInfo] === ''
                        ? 'slug here'
                        : basicInfo[field as keyof typeof basicInfo]}
                    </p>
                  )}
                </label>
              )
            })}
          </div>
          <div className='mt-5'>
            {landingPageFields.slice(3).map((field, i) => {
              return (
                <label key={i} className=''>
                  <p className='text-lg mb-2'>{field} *</p>
                  <textarea
                    placeholder={`Enter ${field}`}
                    className='w-full min-h-[200px] border border-blue-600  text-lg p-3 rounded-lg'
                    name={field}
                    id=''
                    onChange={handleLandingFieldsChnage}
                  ></textarea>
                </label>
              )
            })}
          </div>

          {/* Hero upload component! */}
          <HeroImageUploadLanding
            heroData={heroData}
            setHeroData={setHeroData}
          />
        </section>

        {/* Quick Facts */}
        <section className='mt-10  bg-blue-50 p-10 rounded-lg shadow-md'>
          <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b flex items-center space-x-2'>
            <BsFillInfoSquareFill />
            <span>Quick Facts</span>
          </h2>
          <div className='grid gap-3 grid-cols-2'>
            {quickFacts.map((fact, i) => {
              return (
                <label key={i} className=''>
                  <p className='text-lg mb-2'>{fact} *</p>
                  <input
                    className={`w-full text-lg p-2 border border-blue-600 rounded-lg`}
                    type='text'
                    name={fact}
                    placeholder={`Enter ${fact}`}
                    id=''
                    onChange={handleFactChange}
                  />
                </label>
              )
            })}
          </div>
        </section>

        <TopDestinationsLanding
          topDestinations={topDestinations}
          setTopDestinations={setTopDestinations}
        />

        <ThingsToExperience
          experiences={experiences}
          setExperiences={setExperiences}
        />

        <MustSeeAttractions
          attractions={attractions}
          setAttractions={setAttractions}
        />

        <EssentialTravelTips
          travelTips={travelTips}
          setTravelTips={setTravelTips}
        />
        {/* <AdminAddLandingOLD /> */}

        <div className='mb-10 flex px-10 fixed bottom-0 left-0 w-full'>
          <button
            onClick={handleSubmit}
            className='bg-green-400 p-2 text-lg rounded-lg shadow-lg '
          >
            Submit Page
          </button>
        </div>
      </div>
    </div>
  )
}

export default AdminAddLanding
