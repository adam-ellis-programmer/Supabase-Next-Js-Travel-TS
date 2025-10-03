import React, { useState } from 'react'
import { FaStar, FaCalendarAlt } from 'react-icons/fa'

type Reaction = {
  emoji: string
  label: string
  color: string
  count: number
}

const TourComment = () => {
  const [reactions, setReactions] = useState<Record<string, Reaction>>({
    like: {
      emoji: '👍',
      label: 'Like',
      color: '#3b82f6',
      count: 24,
    },
    love: {
      emoji: '❤️',
      label: 'Love',
      color: '#dc2626',
      count: 18,
    },
    helpful: {
      emoji: '💡',
      label: 'Helpful',
      color: '#f59e0b',
      count: 12,
    },
    insightful: {
      emoji: '🌟',
      label: 'Insightful',
      color: '#8b5cf6',
      count: 8,
    },
  })

  const [activeReaction, setActiveReaction] = useState<string | null>(null)

  const handleReactionClick = (key: string) => {
    setReactions((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        count:
          activeReaction === key ? prev[key].count - 1 : prev[key].count + 1,
      },
    }))
    setActiveReaction(activeReaction === key ? null : key)
  }

  const rating = 5
  const buttons = Object.entries(reactions)

  return (
    <li className='border-b last:border-b-0 p-6 hover:bg-gray-50 transition-colors'>
      {/* Header Section */}
      <div className='flex items-start gap-4 mb-4'>
        <img
          src='https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/person1.jpg'
          alt='Sarah Smith'
          className='w-16 h-16 rounded-full object-cover border-2 border-gray-200 flex-shrink-0'
        />

        <div className='flex-1'>
          <div className='flex items-start justify-between flex-wrap gap-2'>
            <div>
              <h4 className='text-lg font-bold text-gray-800'>Sarah Smith</h4>
              <div className='flex items-center gap-3 mt-1'>
                {/* Star Rating */}
                <div className='flex items-center gap-1'>
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-sm ${
                        i < rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                {/* Date */}
                <div className='flex items-center gap-1 text-sm text-gray-500'>
                  <FaCalendarAlt className='text-xs' />
                  <span>March 15, 2025</span>
                </div>
              </div>
            </div>

            {/* Verified Badge */}
            <span className='bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full border border-green-200'>
              ✓ Verified Traveler
            </span>
          </div>
        </div>
      </div>

      {/* Comment Text */}
      <div className='mb-4'>
        <p className='text-gray-700 leading-relaxed'>
          This tour exceeded all my expectations! Our guide was incredibly
          knowledgeable and friendly, and the itinerary was perfectly paced. The
          accommodations were comfortable, and we got to experience authentic
          local culture. The highlights were definitely the sunset cruise and
          the traditional cooking class. Would absolutely recommend this to
          anyone looking for an unforgettable adventure!
        </p>
      </div>

      {/* Reaction Buttons */}
      <div className='flex flex-wrap gap-2 pt-4 border-t'>
        {buttons.map(([key, item]) => (
          <button
            key={key}
            onClick={() => handleReactionClick(key)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all border ${
              activeReaction === key
                ? 'bg-blue-50 border-blue-300 shadow-sm'
                : 'bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-300'
            }`}
          >
            <span className='text-xl'>{item.emoji}</span>
            <span className='text-sm font-semibold text-gray-700'>
              {item.label}
            </span>
            <span
              className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                activeReaction === key
                  ? 'bg-blue-200 text-blue-700'
                  : 'bg-gray-200 text-gray-600'
              }`}
            >
              {item.count}
            </span>
          </button>
        ))}
      </div>
    </li>
  )
}

export default TourComment
