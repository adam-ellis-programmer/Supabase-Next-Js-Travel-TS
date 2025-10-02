import React from 'react'
import { FaPlane, FaMapMarkedAlt, FaUmbrellaBeach, FaMountain, FaUtensils, FaCamera, FaClock, FaGlobe, FaMoneyBillWave, FaPassport, FaStar, FaArrowRight } from 'react-icons/fa'

const CountryLandingPage = () => {
  // Variables that can be easily swapped
  const countryData = {
    name: "Australia",
    tagline: "Discover the Land Down Under",
    heroImage: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1200",
    description: "From vibrant cities to pristine beaches and the iconic Outback, Australia offers unforgettable adventures for every traveler. Experience world-class wildlife, ancient cultures, and breathtaking natural wonders.",
    
    quickFacts: {
      bestTime: "September to November, March to May",
      currency: "Australian Dollar (AUD)",
      language: "English",
      timezone: "UTC+8 to UTC+11",
      visa: "eVisitor or ETA required for most tourists"
    },
    
    topDestinations: [
      {
        name: "Sydney",
        image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400",
        description: "Iconic Opera House, Harbour Bridge, and stunning beaches"
      },
      {
        name: "Great Barrier Reef",
        image: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=400",
        description: "World's largest coral reef system with incredible marine life"
      },
      {
        name: "Melbourne",
        image: "https://images.unsplash.com/photo-1514395462725-fb4566210144?w=400",
        description: "Cultural capital with art, coffee culture, and sports"
      },
      {
        name: "Uluru",
        image: "https://images.unsplash.com/photo-1540961235228-b90082c4c6bb?w=400",
        description: "Sacred monolith in the heart of the Red Centre"
      }
    ],
    
    experiences: [
      { icon: FaUmbrellaBeach, title: "Beach & Surf", description: "World-class beaches and surfing spots" },
      { icon: FaMountain, title: "Adventure", description: "Hiking, diving, and outdoor thrills" },
      { icon: FaUtensils, title: "Food & Wine", description: "Fresh seafood and premium wines" },
      { icon: FaCamera, title: "Wildlife", description: "Unique animals in natural habitats" }
    ],
    
    attractions: [
      "Sydney Opera House",
      "Great Barrier Reef",
      "Uluru-Kata Tjuta",
      "Great Ocean Road",
      "Bondi Beach",
      "Daintree Rainforest",
      "Fraser Island",
      "Blue Mountains"
    ],
    
    travelTips: [
      { icon: FaClock, title: "Best Time", tip: "Spring (Sep-Nov) and Autumn (Mar-May) offer mild weather" },
      { icon: FaPlane, title: "Getting Around", tip: "Domestic flights connect major cities; rent a car for road trips" },
      { icon: FaMoneyBillWave, title: "Budget", tip: "Expect $100-150 AUD per day for mid-range travel" },
      { icon: FaPassport, title: "Visa", tip: "Apply for eVisitor or ETA online before departure" }
    ]
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
          <h1 className='text-5xl md:text-6xl font-bold mb-4'>{countryData.name}</h1>
          <p className='text-xl md:text-2xl mb-8'>{countryData.tagline}</p>
          <button className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors shadow-lg'>
            Explore Tours
          </button>
        </div>
      </div>

      {/* Country Overview */}
      <div className='max-w-7xl mx-auto px-6 py-16'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div>
            <h2 className='text-3xl font-bold mb-4 text-gray-800'>Welcome to {countryData.name}</h2>
            <p className='text-gray-600 leading-relaxed mb-6'>{countryData.description}</p>
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
                <span className='font-semibold'>Best Time to Visit:</span> {countryData.quickFacts.bestTime}
              </div>
              <div>
                <span className='font-semibold'>Currency:</span> {countryData.quickFacts.currency}
              </div>
              <div>
                <span className='font-semibold'>Language:</span> {countryData.quickFacts.language}
              </div>
              <div>
                <span className='font-semibold'>Timezone:</span> {countryData.quickFacts.timezone}
              </div>
              <div>
                <span className='font-semibold'>Visa:</span> {countryData.quickFacts.visa}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Destinations */}
      <div className='bg-gray-50 py-16'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-3xl font-bold mb-8 text-gray-800 text-center'>Top Destinations</h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {countryData.topDestinations.map((dest, index) => (
              <div key={index} className='bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group cursor-pointer'>
                <div className='h-48 overflow-hidden'>
                  <img 
                    src={dest.image} 
                    alt={dest.name}
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                  />
                </div>
                <div className='p-4'>
                  <h3 className='text-xl font-bold mb-2 text-gray-800'>{dest.name}</h3>
                  <p className='text-gray-600 text-sm'>{dest.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Experiences */}
      <div className='py-16 max-w-7xl mx-auto px-6'>
        <h2 className='text-3xl font-bold mb-8 text-gray-800 text-center'>Things to Experience</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {countryData.experiences.map((exp, index) => (
            <div key={index} className='text-center p-6 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-lg transition-all'>
              <exp.icon className='text-5xl text-blue-600 mx-auto mb-4' />
              <h3 className='text-xl font-semibold mb-2 text-gray-800'>{exp.title}</h3>
              <p className='text-gray-600 text-sm'>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Must-See Attractions */}
      <div className='bg-gradient-to-br from-blue-600 to-blue-800 py-16 text-white'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-3xl font-bold mb-8 text-center'>Must-See Attractions</h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {countryData.attractions.map((attraction, index) => (
              <div key={index} className='bg-white/10 backdrop-blur-sm p-4 rounded-lg flex items-center gap-3 hover:bg-white/20 transition-colors'>
                <FaStar className='text-yellow-400 flex-shrink-0' />
                <span className='font-medium'>{attraction}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Travel Tips */}
      <div className='py-16 max-w-7xl mx-auto px-6'>
        <h2 className='text-3xl font-bold mb-8 text-gray-800 text-center'>Essential Travel Tips</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {countryData.travelTips.map((tip, index) => (
            <div key={index} className='bg-gray-50 p-6 rounded-lg border border-gray-200'>
              <tip.icon className='text-3xl text-blue-600 mb-3' />
              <h3 className='text-lg font-semibold mb-2 text-gray-800'>{tip.title}</h3>
              <p className='text-gray-600 text-sm'>{tip.tip}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className='bg-gray-800 py-16 text-white'>
        <div className='max-w-4xl mx-auto text-center px-6'>
          <h2 className='text-3xl font-bold mb-4'>Ready to Explore {countryData.name}?</h2>
          <p className='text-xl mb-8 text-gray-300'>Let us help you plan your perfect adventure</p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button className='bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors'>
              View All Tours
            </button>
            <button className='bg-white text-gray-800 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors'>
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountryLandingPage