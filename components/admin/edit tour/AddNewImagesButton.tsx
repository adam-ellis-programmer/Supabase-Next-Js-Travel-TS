import React, { useState } from 'react'
import { CiImageOn } from 'react-icons/ci'
import { IoMdCloseCircle } from 'react-icons/io'

const AddNewImagesButton = () => {
  const [isDragging, setIsDragging] = useState(false)
  const [files, setFiles] = useState<File[]>([])

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
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
    const droppedFiles = e.dataTransfer.files
    setFiles((prev) => [...prev, ...Array.from(droppedFiles)])
    setIsDragging(false)
  }

  const handleRemoveFile = (indexToRemove: number) => {
    setFiles((prev) => prev.filter((_, index) => index !== indexToRemove))
  }

  const handleUpload = async () => {
    console.log('uploading files:', files)
    // Upload to Supabase here
    for (const file of files) {
      // await supabase.storage.from('bucket').upload(...)
    }
  }

  const handleCancel = () => {
    // Revoke all URLs before clearing
    files.forEach((file) => {
      const url = URL.createObjectURL(file)
      URL.revokeObjectURL(url)
    })
    setFiles([])
  }

  function getLegthText(length: number) {
    if (length === 1) {
      return 'iten'
    }
    return 'items'
  }

  function formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes'

    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))

    console.log('i:',i)

    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i]
  }

  console.log(Math.log(2))

  return (
    <div>
      <div className='my-5'>
        {files.length > 0 && (
          <>
            <p className='text-center text-lg mb-2 capitalize flex space-x-3'>
              <span>new images for upload!</span>
              <span>
                ({files.length} {getLegthText(files.length)})
              </span>
            </p>
            <div className='flex space-x-3 mb-2'>
              <button
                onClick={handleUpload}
                className='inline bg-green-300 rounded-full px-2'
              >
                upload
              </button>
              <button
                onClick={handleCancel}
                className='inline bg-rose-300 rounded-full px-2'
              >
                cancel
              </button>
            </div>
          </>
        )}
        <ul className='grid grid-cols-3 gap-3'>
          {files.map((file, i) => {
            // Create URL on-the-fly for each render
            const url = URL.createObjectURL(file)

            console.log(file)

            return (
              <li className='h-[100px] relative' key={i}>
                <div className='absolute bottom-0 left-0 w-full '>
                  <span className='bg-blue-500 rounded-md px-1 text-white'>
                    {formatFileSize(file.size)}
                  </span>
                </div>
                <div className='absolute top-0 left-0 w-full flex justify-end p-2'>
                  <button
                    onClick={() => handleRemoveFile(i)}
                    className='cursor-pointer'
                  >
                    <IoMdCloseCircle className='text-2xl text-red-500' />
                  </button>
                </div>
                <img
                  className='rounded-lg h-full w-full object-cover'
                  src={url}
                  alt={file.name}
                  onLoad={() => URL.revokeObjectURL(url)} // Clean up after load
                />
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
        className={`h-[200px] border border-dashed border-neutral-600 flex justify-center items-center rounded-lg cursor-pointer ${
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
