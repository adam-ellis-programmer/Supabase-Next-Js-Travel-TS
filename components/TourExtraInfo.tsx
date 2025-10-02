import React from 'react'
import {
  FaInfoCircle,
  FaSuitcase,
  FaExclamationTriangle,
  FaUmbrellaBeach,
  FaUtensils,
  FaCamera,
  FaMoneyBillWave,
  FaPassport,
} from 'react-icons/fa'

const TourExtraInfo = () => {
  return (
    <div className='border rounded-lg p-6 max-w-4xl'>
      <h2 className='text-2xl font-bold mb-6'>Additional Information</h2>

      {/* What's Included */}
      <div className='mb-6'>
        <h3 className='text-xl font-semibold mb-4 flex items-center gap-2'>
          <FaInfoCircle className='text-blue-600' />
          What's Included
        </h3>
        <div className='bg-green-50 p-4 rounded-lg'>
          <ul className='space-y-2 text-gray-700'>
            <li className='flex items-start gap-2'>
              <span className='text-green-600 mt-1'>✓</span>
              <span>Professional tour guide (English-speaking)</span>
            </li>
            <li className='flex items-start gap-2'>
              <span className='text-green-600 mt-1'>✓</span>
              <span>All transportation during the tour</span>
            </li>
            <li className='flex items-start gap-2'>
              <span className='text-green-600 mt-1'>✓</span>
              <span>4 nights accommodation in 4-star hotels</span>
            </li>
            <li className='flex items-start gap-2'>
              <span className='text-green-600 mt-1'>✓</span>
              <span>Daily breakfast and 3 lunches</span>
            </li>
            <li className='flex items-start gap-2'>
              <span className='text-green-600 mt-1'>✓</span>
              <span>All entrance fees to attractions</span>
            </li>
            <li className='flex items-start gap-2'>
              <span className='text-green-600 mt-1'>✓</span>
              <span>Travel insurance</span>
            </li>
          </ul>
        </div>
      </div>

      {/* What's Not Included */}
      <div className='mb-6'>
        <h3 className='text-xl font-semibold mb-4 flex items-center gap-2'>
          <FaExclamationTriangle className='text-orange-600' />
          What's Not Included
        </h3>
        <div className='bg-orange-50 p-4 rounded-lg'>
          <ul className='space-y-2 text-gray-700'>
            <li className='flex items-start gap-2'>
              <span className='text-orange-600 mt-1'>✗</span>
              <span>International airfare</span>
            </li>
            <li className='flex items-start gap-2'>
              <span className='text-orange-600 mt-1'>✗</span>
              <span>Dinners (unless specified)</span>
            </li>
            <li className='flex items-start gap-2'>
              <span className='text-orange-600 mt-1'>✗</span>
              <span>Personal expenses and souvenirs</span>
            </li>
            <li className='flex items-start gap-2'>
              <span className='text-orange-600 mt-1'>✗</span>
              <span>Tips for guide and driver (recommended $5-10/day)</span>
            </li>
            <li className='flex items-start gap-2'>
              <span className='text-orange-600 mt-1'>✗</span>
              <span>Optional activities and excursions</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Important Info Grid */}
      <div className='grid md:grid-cols-2 gap-4 mb-6'>
        <div className='border border-blue-200 bg-blue-50 p-4 rounded-lg'>
          <h3 className='font-semibold mb-3 flex items-center gap-2'>
            <FaSuitcase className='text-blue-600' />
            What to Bring
          </h3>
          <ul className='space-y-1 text-sm text-gray-700'>
            <li>• Comfortable walking shoes</li>
            <li>• Light jacket or sweater</li>
            <li>• Sunscreen and sunglasses</li>
            <li>• Camera and chargers</li>
            <li>• Personal medications</li>
            <li>• Reusable water bottle</li>
          </ul>
        </div>

        <div className='border border-purple-200 bg-purple-50 p-4 rounded-lg'>
          <h3 className='font-semibold mb-3 flex items-center gap-2'>
            <FaPassport className='text-purple-600' />
            Travel Documents
          </h3>
          <ul className='space-y-1 text-sm text-gray-700'>
            <li>• Valid passport (6 months validity)</li>
            <li>• Visa (if required)</li>
            <li>• Travel insurance documents</li>
            <li>• Booking confirmation</li>
            <li>• Emergency contact information</li>
            <li>• Copy of important documents</li>
          </ul>
        </div>

        <div className='border border-green-200 bg-green-50 p-4 rounded-lg'>
          <h3 className='font-semibold mb-3 flex items-center gap-2'>
            <FaUtensils className='text-green-600' />
            Dietary Options
          </h3>
          <p className='text-sm text-gray-700 mb-2'>
            We accommodate various dietary requirements:
          </p>
          <ul className='space-y-1 text-sm text-gray-700'>
            <li>• Vegetarian options available</li>
            <li>• Vegan meals upon request</li>
            <li>• Gluten-free alternatives</li>
            <li>• Allergy accommodations</li>
          </ul>
          <p className='text-xs text-gray-600 mt-2'>
            Please inform us 48 hours before departure
          </p>
        </div>

        <div className='border border-yellow-200 bg-yellow-50 p-4 rounded-lg'>
          <h3 className='font-semibold mb-3 flex items-center gap-2'>
            <FaMoneyBillWave className='text-yellow-600' />
            Payment & Cancellation
          </h3>
          <ul className='space-y-1 text-sm text-gray-700'>
            <li>• 30% deposit to confirm booking</li>
            <li>• Full payment 14 days before tour</li>
            <li>• Free cancellation up to 7 days</li>
            <li>• 50% refund 3-7 days before</li>
            <li>• No refund within 48 hours</li>
          </ul>
        </div>
      </div>

      {/* Additional Notes */}
      <div className='bg-gray-50 border-l-4 border-blue-600 p-4 rounded'>
        <h3 className='font-semibold mb-2 flex items-center gap-2'>
          <FaCamera className='text-blue-600' />
          Good to Know
        </h3>
        <ul className='space-y-1 text-sm text-gray-700'>
          <li>
            • Tours operate rain or shine - dress appropriately for weather
            conditions
          </li>
          <li>
            • Some attractions may have dress codes (covered shoulders and
            knees)
          </li>
          <li>• Average walking distance: 5-7 km per day</li>
          <li>• Free time is included each day for personal exploration</li>
          <li>• Group photos will be taken and shared after the tour</li>
        </ul>
      </div>
    </div>
  )
}

export default TourExtraInfo
