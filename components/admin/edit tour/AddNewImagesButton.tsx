import React, { useEffect, useRef, useState } from 'react'
import { CiImageOn } from 'react-icons/ci'
import { CiCirclePlus } from 'react-icons/ci'
import { IoMdCloseCircle } from 'react-icons/io'

const images = [
  'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80', // Thai Temple
  'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80', // Tropical Beach
  'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRoYWlsYW5kfGVufDB8fDB8fHww', // Tropical Beach
  'https://plus.unsplash.com/premium_photo-1681582960531-7b5de57fb276?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHRoYWlsYW5kfGVufDB8fDB8fHww', // Tropical Beach
]

const AddNewImagesButton = () => {
  const [isDragging, setIsDragging] = useState(false)
  const [fileUrls, setFileUrls] = useState<string[]>([])
  const [files, setFiles] = useState<File[]>([])

  const fileDataIds = new Set()

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault() // REQUIRED - allows drop
  }

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleOnDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const files = e.dataTransfer.files
    setFiles(files)
    console.log(files)
    setIsDragging(false)
    handleShowFiles(files)
  }

  const handleShowFiles = (files: FileList) => {
    console.log(files)

    // Create all URLs first
    const newUrls: string[] = []
    for (const file of files) {
      const url = URL.createObjectURL(file)
      newUrls.push(url)
    }

    // Update state once with all new URLs
    setFileUrls((prev) => [...prev, ...newUrls])
  }

  console.log(fileUrls)
  const handleUpload = () => {
    console.log('uploading files ....')
  }

  return (
    <div>
      <div className='my-5'>
        {fileUrls && fileUrls.length > 0 && (
          <>
            <p className='text-center mb-2 capitalize flex space-x-3'>
              <span>new iamges for upload!</span>
              <span className=''>({fileUrls.length} items)</span>
            </p>
            <div className='flex space-x-3 mb-2'>
              <button
                onClick={handleUpload}
                className='inline bg-green-300 rounded-full px-2'
              >
                upload
              </button>
              <button
                onClick={() => setFileUrls([])}
                className='inline bg-rose-300 rounded-full px-2'
              >
                cancel
              </button>
            </div>
          </>
        )}
        <ul className='grid grid-cols-3 gap-3 '>
          {fileUrls &&
            fileUrls.map((url, i) => {
              return (
                <li className='h-[100px] relative' key={i}>
                  <div className='absolute top-0 left-0 w-full flex justify-end p-2'>
                    <button className='cursor-pointer '>
                      <IoMdCloseCircle className='text-2xl text-red-500 ' />
                    </button>
                  </div>
                  <img className='rounded-lg h-full w-full' src={url} alt='' />
                </li>
              )
            })}
        </ul>
      </div>
      <div
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleOnDrop}
        className={` h-[200px] border border-dashed border-neutral-600 flex justify-center items-center rounded-lg cursor-pointer ${
          isDragging ? 'bg-rose-500 border-none' : ''
        }`}
      >
        <div className='flex justify-center items-center flex-col pointer-events-none'>
          <p className='mb-2 text-lg capitalize'>
            drag or select new images here
          </p>
          <CiImageOn className='text-5xl animate-pulse' />
        </div>
      </div>
    </div>
  )
}

export default AddNewImagesButton
