'use client'
import React, { useState } from 'react'
import { FaSave, FaPlus, FaTimes, FaGlobe } from 'react-icons/fa'
import { createLandingPageAction } from '@/lib/supabase/actions/admin/add-new-landing-page/action'
import AdminAddLandingOLD from './page OLD'
import { LandingPage } from '@/lib/supabase/services/site/landing-page-service'
import HeroImageUploadLanding from '@/components/admin/add landing page/HeroImageUploadLanding'
import TopDestinationsLanding from '@/components/admin/add landing page/TopDestinationsLanding'
import ThingsToExperience from '@/components/admin/add landing page/ThingsToExperience'
import MustSeeAttractions from '@/components/admin/add landing page/MustSeeAttractions'

// 'attractions',
const booleanFields = ['is_active']
const landingPageFields = ['country_name', 'slug', 'tagline', 'description']
const quickFacts = ['best_time', 'currency', 'language', 'timezone', 'visa']

const pageExperiences = ['icon', 'title', 'description', 'display_order']
const pageDestinations = ['name', 'image_url', 'description', 'display_order']

const AdminAddLanding = () => {
  const [topDestinations, setTopDestinations] = useState([
    { name: '', image: null as File | null, imagePreview: '', description: '' },
  ])

  const [experiences, setExperiences] = useState([
    { icon: 'FaUmbrellaBeach', title: '', description: '' },
  ])

  const [attractions, setAttractions] = useState([''])

  return (
    <div className=''>
      <div className='min-h-[calc(100vh-100px)] w-full max-w-[1200px] mx-auto'>
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

        <section>
          <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b flex items-center gap-2'>
            <FaGlobe className='text-blue-600' />
            Basic Information
          </h2>
          <div className='grid grid-cols-2 gap-3'>
            {landingPageFields.slice(0, 3).map((item, i) => {
              return (
                <label key={i} className=''>
                  <p className='text-lg mb-2'>{item} *</p>
                  <input
                    type='text'
                    className={`border border-blue-500 rounded-md w-full text-lg p-2 `}
                    placeholder={`Enter ${item}`}
                  />
                </label>
              )
            })}
          </div>
          <div className='mt-5'>
            {landingPageFields.slice(3).map((item, i) => {
              return (
                <label key={i} className=''>
                  <p className='text-lg mb-2'>{item} *</p>
                  <textarea
                    placeholder={`Enter ${item}`}
                    className='w-full min-h-[200px] border border-blue-600  text-lg p-3 rounded-lg'
                    name=''
                    id=''
                  ></textarea>
                </label>
              )
            })}
          </div>

          {/* Hero upload component! */}
          <HeroImageUploadLanding />
        </section>

        {/* Quick Facts */}
        <section className='mt-5'>
          <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b'>
            Quick Facts
          </h2>
          <div className='grid gap-3 grid-cols-2'>
            {quickFacts.map((item, i) => {
              return (
                <label key={i} className=''>
                  <p className='text-lg mb-2'>{item} *</p>
                  <input
                    className={`w-full text-lg p-2 border border-blue-600 rounded-lg ${
                      i === 4 ? 'col-span-2' : ''
                    }`}
                    type='text'
                    name=''
                    placeholder={`Enter ${item}`}
                    id=''
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

        <AdminAddLandingOLD />
      </div>
    </div>
  )
}

export default AdminAddLanding
