import React from 'react'
import { FaSkiingNordic } from 'react-icons/fa'
const ActivityCard = () => {
  return (
    <div className='h-[250px] w-[250px] rounded-full bg-rose-500 flex justify-center items-center'>
      <div className=' flex justify-center items-center flex-col'>
        <h5 className='text-2xl'>Skiing</h5>
        <FaSkiingNordic className='text-5xl' />
      </div>
    </div>
  )
}

export default ActivityCard
