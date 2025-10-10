// components/TourExtraInfo.tsx

import React from 'react'
import { TourWithRelations } from '@/types/tours'

const TourExtraInfo = ({ data }: { data: TourWithRelations }) => {
  return (
    <div className='border rounded-lg p-6 mt-6'>
      <h2 className='text-2xl font-bold mb-6'>Additional Information</h2>

      {/* What's Included */}
      <div className='mb-6'>
        <h3 className='text-xl font-semibold mb-3 text-green-700'>
          What's Included
        </h3>
        <ul className='space-y-2'>
          {data.whats_included.map((item, index) => (
            <li key={index} className='flex items-start gap-2'>
              <span className='text-green-600 mt-1'>✓</span>
              <span className='text-gray-700'>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* What's Not Included */}
      <div className='mb-6'>
        <h3 className='text-xl font-semibold mb-3 text-red-700'>
          Not Included
        </h3>
        <ul className='space-y-2'>
          {data.not_included.map((item, index) => (
            <li key={index} className='flex items-start gap-2'>
              <span className='text-red-600 mt-1'>✗</span>
              <span className='text-gray-700'>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* What to Bring */}
      <div className='mb-6'>
        <h3 className='text-xl font-semibold mb-3 text-blue-700'>
          What to Bring
        </h3>
        <ul className='space-y-2'>
          {data.what_to_bring.map((item, index) => (
            <li key={index} className='flex items-start gap-2'>
              <span className='text-blue-600 mt-1'>•</span>
              <span className='text-gray-700'>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Travel Documents */}
      <div className='mb-6'>
        <h3 className='text-xl font-semibold mb-3 text-purple-700'>
          Required Travel Documents
        </h3>
        <ul className='space-y-2'>
          {data.travel_documents.map((item, index) => (
            <li key={index} className='flex items-start gap-2'>
              <span className='text-purple-600 mt-1'>📄</span>
              <span className='text-gray-700'>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Dietary Options */}
      <div className='mb-6 bg-yellow-50 p-4 rounded-lg'>
        <h3 className='text-xl font-semibold mb-2 text-yellow-800'>
          Dietary Options
        </h3>
        <p className='text-gray-700'>{data.dietary_options}</p>
      </div>

      {/* Payment & Cancellation */}
      <div className='mb-6 bg-gray-50 p-4 rounded-lg'>
        <h3 className='text-xl font-semibold mb-2'>
          Payment & Cancellation Policy
        </h3>
        <p className='text-gray-700 whitespace-pre-line'>
          {data.payment_cancellation}
        </p>
      </div>

      {/* Good to Know */}
      <div className='bg-blue-50 p-4 rounded-lg'>
        <h3 className='text-xl font-semibold mb-3 text-blue-800'>
          Good to Know
        </h3>
        <ul className='space-y-2'>
          {data.good_to_know.map((item, index) => (
            <li key={index} className='flex items-start gap-2'>
              <span className='text-blue-600 mt-1'>ℹ️</span>
              <span className='text-gray-700'>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TourExtraInfo
