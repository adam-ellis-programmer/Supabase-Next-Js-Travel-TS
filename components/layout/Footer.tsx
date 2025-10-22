import React from 'react'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPlaneDeparture,
} from 'react-icons/fa'
import MyAccount from '../buttons/MyAccount'

const Footer = () => {
  return (
    <footer className=' bg-[#244057] text-white'>
      <div className='grid md:grid-cols-3 gap-8 px-6 py-12 max-w-7xl mx-auto'>
        {/* Company Info */}
        <div>
          <div className='flex items-center gap-2 mb-4'>
            <FaPlaneDeparture className='text-3xl text-blue-400' />
            <h3 className='text-2xl font-bold'>TravelExplorer</h3>
          </div>
          <p className='text-gray-300 mb-6 leading-relaxed'>
            Your gateway to unforgettable adventures. We create personalized
            travel experiences that inspire and transform, taking you to the
            world's most remarkable destinations.
          </p>
          <div className='flex gap-4'>
            <a
              href='#'
              className='bg-white/10 hover:bg-blue-600 p-3 rounded-full transition-colors duration-300'
            >
              <FaFacebookF className='text-lg' />
            </a>
            <a
              href='#'
              className='bg-white/10 hover:bg-blue-400 p-3 rounded-full transition-colors duration-300'
            >
              <FaTwitter className='text-lg' />
            </a>
            <a
              href='#'
              className='bg-white/10 hover:bg-pink-600 p-3 rounded-full transition-colors duration-300'
            >
              <FaInstagram className='text-lg' />
            </a>
            <a
              href='#'
              className='bg-white/10 hover:bg-red-600 p-3 rounded-full transition-colors duration-300'
            >
              <FaYoutube className='text-lg' />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className='text-xl font-bold mb-4 border-b border-white/20 pb-2'>
            Quick Links
          </h3>
          <div className='grid grid-cols-2 gap-y-3'>
            <a
              href='#'
              className='text-gray-300 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 inline-block'
            >
              About Us
            </a>
            <a
              href='#'
              className='text-gray-300 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 inline-block'
            >
              Destinations
            </a>
            <a
              href='#'
              className='text-gray-300 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 inline-block'
            >
              Tour Packages
            </a>
            <a
              href='#'
              className='text-gray-300 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 inline-block'
            >
              Special Offers
            </a>
            <a
              href='#'
              className='text-gray-300 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 inline-block'
            >
              Travel Blog
            </a>
            <a
              href='#'
              className='text-gray-300 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 inline-block'
            >
              Customer Reviews
            </a>
            <a
              href='#'
              className='text-gray-300 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 inline-block'
            >
              FAQs
            </a>
            <a
              href='#'
              className='text-gray-300 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 inline-block'
            >
              Contact Us
            </a>
            <a
              href='#'
              className='text-gray-300 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 inline-block'
            >
              Privacy Policy
            </a>
            <a
              href='#'
              className='text-gray-300 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 inline-block'
            >
              Terms & Conditions
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className='text-xl font-bold mb-4 border-b border-white/20 pb-2'>
            Get In Touch
          </h3>
          <div className='space-y-4'>
            <div className='flex items-start gap-3'>
              <FaMapMarkerAlt className='text-blue-400 mt-1 text-lg flex-shrink-0' />
              <div>
                <p className='text-gray-300'>123 Travel Street</p>
                <p className='text-gray-300'>London, UK W1A 1AA</p>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <FaPhone className='text-blue-400 text-lg flex-shrink-0' />
              <a
                href='tel:+441234567890'
                className='text-gray-300 hover:text-blue-400 transition-colors'
              >
                +44 (0) 123 456 7890
              </a>
            </div>
            <div className='flex items-center gap-3'>
              <FaEnvelope className='text-blue-400 text-lg flex-shrink-0' />
              <a
                href='mailto:info@travelexplorer.com'
                className='text-gray-300 hover:text-blue-400 transition-colors'
              >
                info@travelexplorer.com
              </a>
            </div>
          </div>

          <div className='mt-6 bg-white/10 p-4 rounded-lg'>
            <h4 className='font-semibold mb-2'>Newsletter</h4>
            <p className='text-sm text-gray-300 mb-3'>
              Subscribe for exclusive travel deals!
            </p>
            <div className='flex gap-2'>
              <input
                type='email'
                placeholder='Your email'
                className='flex-1 px-3 py-2 rounded bg-white/20 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400'
              />
              <button className='bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-semibold transition-colors'>
                Join
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-white/20 px-6 py-4'>
        <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-gray-400'>
          <p>&copy; 2025 TravelExplorer. All rights reserved.</p>
          <MyAccount />
          <div className='flex gap-4'>
            <a href='#' className='hover:text-blue-400 transition-colors'>
              Privacy
            </a>
            <a href='#' className='hover:text-blue-400 transition-colors'>
              Terms
            </a>
            <a href='#' className='hover:text-blue-400 transition-colors'>
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
