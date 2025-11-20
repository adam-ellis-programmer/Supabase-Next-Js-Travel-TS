import React from 'react'
import { CiImageOn } from 'react-icons/ci'

const AddNewHeroImageButton = () => {
  return (
    <div className='mt-5 h-[200px] border border-dashed border-neutral-600 flex justify-center items-center rounded-lg cursor-pointer'>
      <div className='flex justify-center items-center flex-col'>
        <p className='mb-2 text-lg capitalize '>
          drag or select hero image here 
        </p>
        <CiImageOn className='text-5xl animate-pulse' />
      </div>
    </div>
  )
}

export default AddNewHeroImageButton
