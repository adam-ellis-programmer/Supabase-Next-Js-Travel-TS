'use client'
import React, { useState } from 'react'
import { FaSave, FaPlus, FaTimes, FaGlobe } from 'react-icons/fa'
import { createLandingPageAction } from '@/lib/supabase/actions/admin/add-new-landing-page/action'
/**
      const { data } = await supabase.storage
        .from('country-images')
        .upload(`${slug}/hero.jpg`, heroImage)
 */

const AdminAddLanding = () => {
  const [countryName, setCountryName] = useState('')
  const [slug, setSlug] = useState('')
  const [tagline, setTagline] = useState('')
  const [heroImage, setHeroImage] = useState<File | null>(null)
  const [heroImagePreview, setHeroImagePreview] = useState('')
  const [description, setDescription] = useState('')
  const [bestTime, setBestTime] = useState('')
  const [currency, setCurrency] = useState('')
  const [language, setLanguage] = useState('')
  const [timezone, setTimezone] = useState('')
  const [visa, setVisa] = useState('')
  const [topDestinations, setTopDestinations] = useState([
    { name: '', image: null as File | null, imagePreview: '', description: '' },
  ])
  const [experiences, setExperiences] = useState([
    { icon: 'FaUmbrellaBeach', title: '', description: '' },
  ])

  const [attractions, setAttractions] = useState([''])
  const [travelTips, setTravelTips] = useState([
    { icon: 'FaClock', title: '', tip: '' },
  ])
  const [isDragging, setIsDragging] = useState(false)

  const handleHeroImageUpload = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      setHeroImage(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setHeroImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDestinationImageUpload = (index: number, file: File) => {
    console.log('file changed and added..')

    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onloadend = () => {
        // u = updatedArray
        const u = [...topDestinations]
        u[index] = {
          ...u[index],
          image: file,
          imagePreview: reader.result as string,
        }
        setTopDestinations(u)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent, handler: (file: File) => void) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files[0]
    if (file) handler(file)
  }

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()
  }

  const handleCountryNameChange = (value: string) => {
    setCountryName(value)
    if (!slug || slug === generateSlug(countryName)) {
      setSlug(generateSlug(value))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const landingPageData = {
      countryName,
      slug,
      tagline,
      heroImage,
      description,
      quickFacts: { bestTime, currency, language, timezone, visa },
      topDestinations: topDestinations.filter((d) => d.name.trim() !== ''),
      experiences: experiences.filter((e) => e.title.trim() !== ''),
      attractions: attractions.filter((a) => a.trim() !== ''),
      travelTips: travelTips.filter((t) => t.title.trim() !== ''),
    }
    console.log('Landing Page Data:', landingPageData)
    const res = await createLandingPageAction(landingPageData)
  }

  const iconOptions = [
    'FaUmbrellaBeach',
    'FaMountain',
    'FaUtensils',
    'FaCamera',
    'FaPlane',
    'FaClock',
    'FaMoneyBillWave',
    'FaPassport',
    'FaGlobe',
    'FaMapMarkedAlt',
  ]

  return (
    <div className='min-h-screen bg-gray-50 py-8'>
      <div className='max-w-5xl mx-auto px-4'>
        <div className='mb-8'>
          <h1 className='text-4xl font-bold text-gray-800 mb-2'>
            Add Country Landing Page
          </h1>
          <p className='text-gray-600'>
            Create a new country destination landing page
          </p>
        </div>

        <div className='bg-white rounded-lg shadow-lg p-8 space-y-8'>
          <section>
            <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b flex items-center gap-2'>
              <FaGlobe className='text-blue-600' />
              Basic Information
            </h2>
            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>
                  Country Name *
                </label>
                <input
                  type='text'
                  value={countryName}
                  onChange={(e) => handleCountryNameChange(e.target.value)}
                  placeholder='Australia'
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
                  placeholder='australia'
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm'
                  required
                />
                <p className='text-xs text-gray-500 mt-1'>
                  URL: /country-landing/{slug || 'your-slug'}
                </p>
              </div>
              <div className='md:col-span-2'>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>
                  Tagline *
                </label>
                <input
                  type='text'
                  value={tagline}
                  onChange={(e) => setTagline(e.target.value)}
                  placeholder='Discover the Land Down Under'
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  required
                />
              </div>
              <div className='md:col-span-2'>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>
                  Hero Image *
                </label>
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={(e) => handleDrop(e, handleHeroImageUpload)}
                  className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer ${
                    isDragging
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-300 hover:border-blue-400'
                  }`}
                >
                  {heroImagePreview ? (
                    <div className='space-y-3'>
                      <img
                        src={heroImagePreview}
                        alt='Hero preview'
                        className='max-h-48 mx-auto rounded-lg'
                      />
                      <div className='flex gap-2 justify-center'>
                        <button
                          type='button'
                          onClick={() =>
                            document.getElementById('hero-upload')?.click()
                          }
                          className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'
                        >
                          Change Image
                        </button>
                        <button
                          type='button'
                          onClick={() => {
                            setHeroImage(null)
                            setHeroImagePreview('')
                          }}
                          className='px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600'
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div
                      onClick={() =>
                        document.getElementById('hero-upload')?.click()
                      }
                    >
                      <div className='text-6xl text-gray-400 mb-4'>📸</div>
                      <p className='text-gray-600 mb-2'>
                        Click to upload or drag and drop
                      </p>
                      <p className='text-sm text-gray-500'>
                        PNG, JPG up to 10MB
                      </p>
                    </div>
                  )}
                  <input
                    id='hero-upload'
                    type='file'
                    accept='image/*'
                    onChange={(e) =>
                      e.target.files?.[0] &&
                      handleHeroImageUpload(e.target.files[0])
                    }
                    className='hidden'
                  />
                </div>
              </div>
              <div className='md:col-span-2'>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>
                  Description *
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder='From vibrant cities to pristine beaches...'
                  rows={4}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none'
                  required
                />
              </div>
            </div>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b'>
              Quick Facts
            </h2>
            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>
                  Best Time to Visit *
                </label>
                <input
                  type='text'
                  value={bestTime}
                  onChange={(e) => setBestTime(e.target.value)}
                  placeholder='September to November, March to May'
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  required
                />
              </div>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>
                  Currency *
                </label>
                <input
                  type='text'
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  placeholder='Australian Dollar (AUD)'
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  required
                />
              </div>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>
                  Language *
                </label>
                <input
                  type='text'
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  placeholder='English'
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  required
                />
              </div>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>
                  Timezone *
                </label>
                <input
                  type='text'
                  value={timezone}
                  onChange={(e) => setTimezone(e.target.value)}
                  placeholder='UTC+8 to UTC+11'
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  required
                />
              </div>
              <div className='md:col-span-2'>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>
                  Visa Requirements *
                </label>
                <input
                  type='text'
                  value={visa}
                  onChange={(e) => setVisa(e.target.value)}
                  placeholder='eVisitor or ETA required for most tourists'
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  required
                />
              </div>
            </div>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b'>
              Top Destinations
            </h2>
            <div className='space-y-4'>
              {/* start of map  =========================================================*/}
              {topDestinations.map((dest, index) => (
                <div
                  key={index}
                  className='border border-gray-300 rounded-lg p-4 bg-gray-50'
                >
                  <div className='flex justify-between items-center mb-3'>
                    <h3 className='font-semibold text-lg'>
                      Destination {index + 1}
                    </h3>
                    {topDestinations.length > 1 && (
                      <button
                        type='button'
                        onClick={() =>
                          setTopDestinations(
                            topDestinations.filter((_, i) => i !== index)
                          )
                        }
                        className='px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600'
                      >
                        <FaTimes />
                      </button>
                    )}
                  </div>
                  <div className='grid gap-3'>
                    <input
                      type='text'
                      value={dest.name}
                      onChange={(e) => {
                        const u = [...topDestinations]
                        u[index] = { ...u[index], name: e.target.value }

                        setTopDestinations(u)
                      }}
                      placeholder='Destination name (e.g., Sydney)'
                      className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />

                    <div className='border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-400 transition-colors cursor-pointer'>
                      {dest.imagePreview ? (
                        <div className='space-y-2'>
                          <img
                            src={dest.imagePreview}
                            alt='Destination preview'
                            className='max-h-32 mx-auto rounded-lg'
                          />
                          <div className='flex gap-2 justify-center'>
                            <button
                              type='button'
                              onClick={() =>
                                document
                                  .getElementById(`dest-upload-${index}`)
                                  ?.click()
                              }
                              className='px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm'
                            >
                              Change
                            </button>
                            <button
                              type='button'
                              onClick={() => {
                                const u = [...topDestinations]
                                u[index] = {
                                  ...u[index],
                                  image: null,
                                  imagePreview: '',
                                }

                                setTopDestinations(u)
                              }}
                              className='px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm'
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      ) : (
                        // ===================================================
                        <div
                          onClick={() =>
                            document
                              .getElementById(`dest-upload-${index}`)
                              ?.click()
                          }
                        >
                          <div className='text-4xl text-gray-400 mb-2'>📸</div>
                          <p className='text-sm text-gray-600'>
                            Upload destination image
                          </p>
                        </div>
                        // ===================================================
                      )}
                      <p>hello</p>
                      <input
                        id={`dest-upload-${index}`}
                        type='file'
                        accept='image/*'
                        onChange={(e) =>
                          e.target.files?.[0] &&
                          handleDestinationImageUpload(index, e.target.files[0])
                        }
                        className='hidden'
                      />
                    </div>

                    <textarea
                      value={dest.description}
                      onChange={(e) => {
                        const u = [...topDestinations]
                        u[index] = { ...u[index], description: e.target.value }
                        setTopDestinations(u)
                      }}
                      placeholder='Brief description...'
                      rows={2}
                      className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none'
                    />
                  </div>
                </div>
              ))}
              {/* end of map ========================================================= */}

              <button
                type='button'
                onClick={() =>
                  setTopDestinations([
                    ...topDestinations,
                    {
                      name: '',
                      image: null,
                      imagePreview: '',
                      description: '',
                    },
                  ])
                }
                className='flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'
              >
                <FaPlus /> Add Destination
              </button>
            </div>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b'>
              Things to Experience
            </h2>
            <div className='space-y-4'>
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className='border border-gray-300 rounded-lg p-4 bg-gray-50'
                >
                  <div className='flex justify-between items-center mb-3'>
                    <h3 className='font-semibold text-lg'>
                      Experience {index + 1}
                    </h3>
                    {experiences.length > 1 && (
                      <button
                        type='button'
                        onClick={() =>
                          setExperiences(
                            experiences.filter((_, i) => i !== index)
                          )
                        }
                        className='px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600'
                      >
                        <FaTimes />
                      </button>
                    )}
                  </div>
                  <div className='grid gap-3'>
                    <select
                      value={exp.icon}
                      onChange={(e) => {
                        const u = [...experiences]
                        u[index] = { ...u[index], icon: e.target.value }
                        setExperiences(u)
                      }}
                      className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    >
                      {iconOptions.map((icon) => (
                        <option key={icon} value={icon}>
                          {icon}
                        </option>
                      ))}
                    </select>
                    <input
                      type='text'
                      value={exp.title}
                      onChange={(e) => {
                        const u = [...experiences]
                        u[index] = { ...u[index], title: e.target.value }
                        setExperiences(u)
                      }}
                      placeholder='Experience title (e.g., Beach & Surf)'
                      className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                    <input
                      type='text'
                      value={exp.description}
                      onChange={(e) => {
                        const u = [...experiences]
                        u[index] = { ...u[index], description: e.target.value }
                        setExperiences(u)
                      }}
                      placeholder='Short description'
                      className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                  </div>
                </div>
              ))}
              <button
                type='button'
                onClick={() =>
                  setExperiences([
                    ...experiences,
                    { icon: 'FaGlobe', title: '', description: '' },
                  ])
                }
                className='flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'
              >
                <FaPlus /> Add Experience
              </button>
            </div>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b'>
              Must-See Attractions
            </h2>
            <div className='space-y-3'>
              {attractions.map((attr, index) => (
                <div key={index} className='flex gap-2'>
                  <input
                    type='text'
                    value={attr}
                    onChange={(e) => {
                      const u = [...attractions]
                      u[index] = e.target.value
                      setAttractions(u)
                    }}
                    placeholder='Attraction name (e.g., Sydney Opera House)'
                    className='flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  />
                  {attractions.length > 1 && (
                    <button
                      type='button'
                      onClick={() =>
                        setAttractions(
                          attractions.filter((_, i) => i !== index)
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
                onClick={() => setAttractions([...attractions, ''])}
                className='flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'
              >
                <FaPlus /> Add Attraction
              </button>
            </div>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b'>
              Essential Travel Tips
            </h2>
            <div className='space-y-4'>
              {travelTips.map((tip, index) => (
                <div
                  key={index}
                  className='border border-gray-300 rounded-lg p-4 bg-gray-50'
                >
                  <div className='flex justify-between items-center mb-3'>
                    <h3 className='font-semibold text-lg'>Tip {index + 1}</h3>
                    {travelTips.length > 1 && (
                      <button
                        type='button'
                        onClick={() =>
                          setTravelTips(
                            travelTips.filter((_, i) => i !== index)
                          )
                        }
                        className='px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600'
                      >
                        <FaTimes />
                      </button>
                    )}
                  </div>
                  <div className='grid gap-3'>
                    <select
                      value={tip.icon}
                      onChange={(e) => {
                        const u = [...travelTips]
                        u[index] = { ...u[index], icon: e.target.value }
                        setTravelTips(u)
                      }}
                      className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    >
                      {iconOptions.map((icon) => (
                        <option key={icon} value={icon}>
                          {icon}
                        </option>
                      ))}
                    </select>
                    <input
                      type='text'
                      value={tip.title}
                      onChange={(e) => {
                        const u = [...travelTips]
                        u[index] = { ...u[index], title: e.target.value }
                        setTravelTips(u)
                      }}
                      placeholder='Tip title (e.g., Best Time)'
                      className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                    <textarea
                      value={tip.tip}
                      onChange={(e) => {
                        const u = [...travelTips]
                        u[index] = { ...u[index], tip: e.target.value }
                        setTravelTips(u)
                      }}
                      placeholder='Travel tip details...'
                      rows={2}
                      className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none'
                    />
                  </div>
                </div>
              ))}
              <button
                type='button'
                onClick={() =>
                  setTravelTips([
                    ...travelTips,
                    { icon: 'FaGlobe', title: '', tip: '' },
                  ])
                }
                className='flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'
              >
                <FaPlus /> Add Travel Tip
              </button>
            </div>
          </section>

          <div className='flex gap-4 pt-6 border-t'>
            <button
              onClick={handleSubmit}
              className='flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg'
            >
              <FaSave /> Save Landing Page
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
  )
}

export default AdminAddLanding
