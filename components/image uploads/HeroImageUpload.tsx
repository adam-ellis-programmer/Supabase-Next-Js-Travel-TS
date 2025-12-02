import { FaWindowClose } from 'react-icons/fa'
import React, { useEffect, useRef, useState } from 'react'
import { FaUpload } from 'react-icons/fa'

const HeroImageUpload = ({
  setheroImgage,
}: {
  setheroImgage: (file: File) => void
}) => {
  const fileInputRef = useRef(null)

  const [fileUrl, setFileUrl] = useState(null)
  const [isDragging, setisDragging] = useState(false)

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault()
    setisDragging(true)
  }
  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setisDragging(false)
  }
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setisDragging(true)
  }
  const hanldeDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setisDragging(false)

    const file = Array.from(e.dataTransfer.files)
    handleFileUrl(file[0])
    setheroImgage(file[0])
  }

  const handleClick = () => {
    fileInputRef?.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file: File = e.target.files[0]

    setheroImgage(file)
    handleFileUrl(file)
  }

  function handleFileUrl(file: File) {
    const url = URL.createObjectURL(file)
    setFileUrl(url)
  }

  const handleCancelImage = () => {
    setFileUrl(null)
  }

  return (
    <section className=''>
      <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b'>
        Hero Image
      </h2>
      <div className='h-[200px] border-blue-500 border-dashed border-2 rounded-md'>
        <div
          onClick={handleClick}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={hanldeDrop}
          className='flex justify-center items-center flex-col h-full cursor-pointer'
        >
          <FaUpload className='text-6xl text-gray-400 mx-auto mb-4' />
          <p className='text-gray-600 mb-2'>
            {isDragging
              ? 'Drop images here'
              : 'Click to upload or drag and drop'}
          </p>
          <p className='text-sm text-gray-500'>PNG, JPG up to 10MB</p>
          <input
            ref={fileInputRef}
            type='file'
            name='fileInputRef'
            id='fileInputRef'
            className='hidden'
            onChange={handleFileChange}
          />
        </div>
      </div>
      {fileUrl && (
        <div className='mt-5 relative group w-[400px]'>
          {/* Overlay that appears on hover */}
          <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg'>
            <button
              onClick={handleCancelImage}
              type='button'
              className='cursor-pointer transform hover:scale-110 transition-transform'
            >
              <FaWindowClose className='text-red-600 text-5xl drop-shadow-lg' />
            </button>
          </div>

          {/* Image */}
          <img
            className='h-[200px] w-[400px] rounded-lg object-cover object-center shadow-md'
            src={fileUrl || ''}
            alt='Hero preview'
          />
        </div>
      )}
    </section>
  )
}

export default HeroImageUpload
