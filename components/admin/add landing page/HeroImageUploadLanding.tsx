import React, { useRef, useState } from 'react'
import { MdOutlineCloudUpload } from 'react-icons/md'
import { AiFillCloseSquare } from 'react-icons/ai'

const HeroImageUploadLanding = () => {
  const fileSelectInput = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [heroTempUrl, setHeroTempUrl] = useState(null)

  const handleDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
    console.log('logging...')
  }

  const onDragLeave = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
    console.log('leaving drag...')
  }

  const onDragDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
    const file = e.dataTransfer.files[0]
    console.log('droped: ', file)
    handleFileDisplay(file)
  }

  function handleFileDisplay(file: File) {
    const url = URL.createObjectURL(file)
    setHeroTempUrl(url)
  }

  const handleImageSelect = () => {
    console.log('clicked')
    fileSelectInput.current.click()
  }

  const handleHiddenInputChange = (e) => {
    const file = e.target.files[0]
    console.log(file)
    handleFileDisplay(file)
  }
  return (
    <div className='mt-5'>
      <p className='text-lg mb-2'>Hero Upload *</p>
      <div
        onClick={handleImageSelect}
        onDragOver={handleDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDragDrop}
        className={`cursor-pointer border-blue-500 border-dashed border-2 h-[300px] rounded-lg relative ${
          isDragging && 'bg-blue-100 border-red-500'
        } ${heroTempUrl && 'border-none'}`}
      >
        {/* Show image temp */}
        {heroTempUrl ? (
          <div className='absolute h-full w-full overflow-hidden rounded-lg'>
            <div className='bg-[#414e6a8f] absolute top-0  left-0 w-full h-full flex justify-center items-center'>
              <button
                onClick={() => setHeroTempUrl(null)}
                className=' text-6xl text-red-600'
              >
                <AiFillCloseSquare />
              </button>
            </div>
            <img
              className='w-full h-full object-cover rounded-lg'
              src={heroTempUrl}
              alt=''
            />
          </div>
        ) : (
          <div className='flex justify-center items-center flex-col h-full'>
            <p className='text-2xl mb-2'>Click Or Drag to upload Hero</p>
            <MdOutlineCloudUpload className='text-5xl' />
          </div>
        )}
      </div>
      <input
        onChange={handleHiddenInputChange}
        ref={fileSelectInput}
        type='file'
        name=''
        id=''
        hidden
      />
    </div>
  )
}

export default HeroImageUploadLanding
