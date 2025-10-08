// components/image uploads/UploadTourImages.tsx
'use client'

import React, { useState, useRef } from 'react'
import { FaImage, FaTimes, FaUpload } from 'react-icons/fa'

interface UploadTourImagesProps {
  images: File[]
  onImagesChange: (files: File[]) => void
}

const UploadTourImages = ({
  images,
  onImagesChange,
}: UploadTourImagesProps) => {
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Handle file selection
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files) {
      addFiles(Array.from(files))
    }
  }

  // Handle drag events
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    const files = Array.from(e.dataTransfer.files)
    addFiles(files)
  }

  // Add files with validation
  const addFiles = (newFiles: File[]) => {
    // Filter for images only
    const imageFiles = newFiles.filter((file) => file.type.startsWith('image/'))

    // Filter for size (10MB max)
    const validFiles = imageFiles.filter(
      (file) => file.size <= 10 * 1024 * 1024
    )

    if (validFiles.length !== newFiles.length) {
      alert('Some files were skipped. Only images under 10MB are allowed.')
    }

    // Add to existing images
    onImagesChange([...images, ...validFiles])
  }

  // Remove a specific image
  const removeImage = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index)
    onImagesChange(updatedImages)
  }

  // Trigger file input click
  const handleClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <section>
      <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b'>
        Tour Images
      </h2>

      {/* Upload Area */}
      <div
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`border-2 border-dashed border-rose-600 rounded-lg p-8 text-center transition-colors cursor-pointer ${
          isDragging
            ? 'border-blue-500 bg-blue-50'
            : 'border-gray-300 hover:border-blue-500'
        }`}
      >
        <FaUpload className='text-6xl text-gray-400 mx-auto mb-4' />
        <p className='text-gray-600 mb-2'>
          {isDragging ? 'Drop images here' : 'Click to upload or drag and drop'}
        </p>
        <p className='text-sm text-gray-500'>PNG, JPG up to 10MB</p>

        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type='file'
          multiple
          accept='image/*'
          onChange={handleFileSelect}
          className='hidden'
        />
      </div>

      {/* Preview Selected Images */}
      {images.length > 0 && (
        <div className='mt-6'>
          <h3 className='text-lg font-semibold text-gray-800 mb-3'>
            Selected Images ({images.length})
          </h3>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {images.map((file, index) => (
              <div key={index} className='relative group'>
                <img
                  src={URL.createObjectURL(file)}
                  alt={`Preview ${index + 1}`}
                  className='w-full h-32 object-cover rounded-lg border border-gray-300'
                />
                <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all rounded-lg flex items-center justify-center'>
                  <button
                    type='button'
                    onClick={(e) => {
                      //   e.stopPropagation()
                      removeImage(index)
                    }}
                    className='opacity-0 group-hover:opacity-100 transition-opacity px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600'
                  >
                    <FaTimes />
                  </button>
                </div>
                <p className='text-xs text-gray-600 mt-1 truncate'>
                  {file.name}
                </p>
                <p className='text-xs text-gray-500'>
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

export default UploadTourImages
