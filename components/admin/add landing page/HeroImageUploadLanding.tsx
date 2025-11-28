import React from 'react'
import { MdOutlineCloudUpload } from 'react-icons/md'

const HeroImageUploadLanding = () => {
  return (
    <div className='mt-5'>
      <p className='text-lg mb-2'>Hero Upload *</p>
      <div className=' border-blue-500 border-dashed border-2 h-[200px] rounded-lg'>
        <div className='flex justify-center items-center flex-col h-full'>
          <p className='text-2xl mb-2'>Click Or Drag to upload Hero</p>
          <MdOutlineCloudUpload className='text-5xl' />
        </div>
      </div>
    </div>
  )
}

export default HeroImageUploadLanding
