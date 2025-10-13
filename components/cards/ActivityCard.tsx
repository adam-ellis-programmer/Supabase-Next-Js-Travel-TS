import React from 'react'
import { FaSkiingNordic } from 'react-icons/fa'
import { FaSkiing, FaBiking, FaHiking, FaWineGlassAlt } from 'react-icons/fa'
import {
  GiScubaTanks,
  GiMountainClimbing,
  GiBinoculars,
} from 'react-icons/gi'

const ActivityCard = () => {
  return (
    <div className='relative h-[280px] w-[240px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl group'>
      {/* Gradient overlay */}
      <div className='absolute inset-0 bg-gradient-to-t from-purple-900 via-purple-600/70 to-purple-400/50'></div>

      {/* Content */}
      <div className='relative h-full p-6 flex flex-col justify-between'>
        <div className='flex justify-between items-start'>
          <span className='text-white/90 text-xs font-medium uppercase tracking-wider bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full'>
            Adventure
          </span>
          <div className='text-white text-2xl opacity-70 group-hover:opacity-100 transition-opacity'>
            →
          </div>
        </div>

        <div className='text-center'>
          <div className='mb-4 inline-block p-3 bg-white/10 backdrop-blur-sm rounded-xl'>
            <FaBiking className='text-6xl text-white' />
          </div>
          <h3 className='text-2xl font-bold text-white mb-1'>
            Mountain Biking
          </h3>
          <p className='text-white/80 text-sm'>12 Tours Available</p>
        </div>

        <div className='h-1 bg-white/20 rounded-full overflow-hidden'>
          <div className='h-full w-0 bg-white group-hover:w-full transition-all duration-500'></div>
        </div>
      </div>
    </div>
  )
}

export default ActivityCard
