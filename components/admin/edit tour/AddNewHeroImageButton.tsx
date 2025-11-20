import React, { useEffect, useState } from 'react'
import { CiImageOn } from 'react-icons/ci'

const AddNewHeroImageButton = ({ urlData }: { urlData: string }) => {
  const [isDragging, setIsDragging] = useState(false)
  const [imgUrl, setImgUrl] = useState<string | null>(urlData)
  // console.log(urlData) 

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    // if (e.currentTarget === e.target) {
    // }
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false) // Reset the visual state
    const files = e.dataTransfer.files
    console.log(files)
    handleFileDisplay(files)
  }

  async function handleFileDisplay(files: FileList) {
    // Revoke the old URL before creating a new one
    if (imgUrl) {
      URL.revokeObjectURL(imgUrl)
    }

    const img = URL.createObjectURL(files[0])
    setImgUrl(img)
  }

  // Clean up when component unmounts
  useEffect(() => {
    return () => {
      if (imgUrl) {
        URL.revokeObjectURL(imgUrl)
      }
    }
  }, [imgUrl])

  return (
    <div>
      <h3 className='text-lg mb-2'>Hero Image:</h3>
      <div>
        {imgUrl ? (
          <img
            className='h-[200px] w-full object-cover object-center rounded-lg'
            src={imgUrl}
            alt=''
          />
        ) : (
          <div className='h-[200px] border border-rose-500 rounded-lg p-5'>
            <p className='leading-[1.5rem] text-center text-lg capitalize'>
              no image for hero yet
            </p>
            <p className='leading-[1.5rem] text-center text-lg capitalize'>
              add an image below
            </p>
            <div className='  flex justify-center mt-5'>
              <CiImageOn className='text-5xl animate-pulse' />
            </div>
          </div>
        )}
        <input type="file" className='hidden' />
      </div>
      <div
        className={`mt-5 h-[200px] border border-dashed border-neutral-600 flex justify-center items-center rounded-lg cursor-pointer
        ${isDragging ? 'bg-rose-400 border-none' : ''}`}
      >
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onDragEnter={handleDragEnter}
          className='flex justify-center items-center flex-col border w-full h-full'
        >
          <div className='flex justify-center items-center flex-col pointer-events-none'>
            <p className='mb-2 text-lg capitalize'>
              drag or select hero image here
            </p>
            <CiImageOn className='text-5xl animate-pulse' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddNewHeroImageButton
