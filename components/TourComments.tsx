'use client'
import React, { useState } from 'react'
import TourComment from './TourComment'
import { FaStar, FaPaperPlane } from 'react-icons/fa'

const comments = Array.from({ length: 10 }, (_, i) => i)

const TourComments = () => {
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [comment, setComment] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    // console.log({ name, email, comment, rating })
    // Reset form
    setName('')
    setEmail('')
    setComment('')
    setRating(0)
  }

  return (
    <div className='mt-10'>
      <h3 className='text-3xl font-bold text-center mb-8 text-gray-800'>
        Scroll The Reviews
      </h3>

      {/* Comments List */}
      <ul className='shadow-lg rounded-lg bg-white h-[400px] overflow-y-auto mb-6'>
        {comments.map((item) => {
          return <TourComment key={item} />
        })}

        <div className='flex justify-center my-6'>
          <button className='capitalize bg-blue-500 hover:bg-blue-600 text-xl text-white px-8 py-3 rounded-lg transition-colors shadow-lg'>
            Show more reviews
          </button>
        </div>
      </ul>

      {/* Comment Form */}
      <div className='bg-white rounded-lg shadow-lg p-6 md:p-8'>
        <h4 className='text-2xl font-bold text-gray-800 mb-6'>
          Leave a Review
        </h4>

        <div className='space-y-5'>
          {/* Rating Section */}
          <div>
            <label className='block text-sm font-semibold text-gray-700 mb-3'>
              Your Rating *
            </label>
            <div className='flex gap-2'>
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type='button'
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className='transition-transform hover:scale-110'
                >
                  <FaStar
                    className={`text-3xl ${
                      star <= (hoverRating || rating)
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                </button>
              ))}
              {rating > 0 && (
                <span className='ml-3 text-gray-600 font-semibold flex items-center'>
                  {rating} out of 5
                </span>
              )}
            </div>
          </div>

          {/* Name and Email Row */}
          <div className='grid md:grid-cols-2 gap-4'>
            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>
                Your Name *
              </label>
              <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='John Smith'
                required
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all'
              />
            </div>

            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>
                Your Email *
              </label>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='john@example.com'
                required
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all'
              />
            </div>
          </div>

          {/* Comment Textarea */}
          <div>
            <label className='block text-sm font-semibold text-gray-700 mb-2'>
              Your Review *
            </label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder='Share your experience with this tour...'
              required
              rows={5}
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition-all'
            />
            <p className='text-xs text-gray-500 mt-2'>
              {comment.length} / 500 characters
            </p>
          </div>

          {/* Submit Button */}
          <div className='pt-4'>
            <button
              onClick={handleSubmit}
              type='submit'
              disabled={!name || !email || !comment || rating === 0}
              className='w-full md:w-auto bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg flex items-center justify-center gap-2'
            >
              <FaPaperPlane />
              Submit Review
            </button>

            {rating === 0 && (
              <p className='text-sm text-red-500 mt-2'>
                Please select a rating before submitting
              </p>
            )}
          </div>

          {/* Privacy Note */}
          <p className='text-xs text-gray-500 pt-2'>
            Your email will not be published. Required fields are marked *
          </p>
        </div>
      </div>
    </div>
  )
}

export default TourComments
