import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { CiImageOn } from 'react-icons/ci'
import { TiInfoOutline } from 'react-icons/ti'
import { updateHeroImage } from '@/lib/supabase/actions/admin/images/hero-image'
const AddNewHeroImageButton = ({
  urlData,
  tourId,
}: {
  urlData: string
  tourId: number
}) => {
  const router = useRouter()
  const [isDragging, setIsDragging] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [updatedImageFile, setUpdatedImageFile] = useState<File | null>(null)

  const [imgUrl, setImgUrl] = useState<string | null>(urlData)
  // console.log('urlData', urlData)

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
    setUpdatedImageFile(files[0])
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

  const handleHeroUpload = async () => {
    // Check if file exists before uploading
    if (!updatedImageFile) {
      console.error('No file selected')
      return
    }

    const formData = new FormData()
    // file gets sent as blob data
    formData.append('hero_file', updatedImageFile)
    // everything else needs to be converted
    formData.append('tourId', tourId.toString())
    //
    setIsUploading(true)

    try {
      const res = await updateHeroImage(formData)
      console.log('res from hero server: ', res)
      console.log(updatedImageFile)

      setIsUploading(false)
      router.refresh()
      console.log('done')
    } catch (error) {
      console.error('Upload failed:', error)
      setIsUploading(false)
    }
  }

  return (
    <div>
      <h3 className='text-lg mb-2'>Hero Image:</h3>
      <button onClick={handleHeroUpload} className='bg-green-400 px-2 rounded'>
        {isUploading ? 'Please Wait!' : '  Upload!'}
      </button>

      {isUploading ? (
        <div className='relative h-[200px] rounded-lg flex justify-center items-center flex-col border border-orange-500 mt-3'>
          <TiInfoOutline className='absolute top-4 left-4 text-5xl text-yellow-500' />
          <p className='text-2xl capitalize leading-8'>uploading images...</p>
          <p className='text-2xl capitalize leading-8'>please wait!</p>
          <div className='mt-5 animate-spin h-[80px] w-[80px] border-t-black border-orange-500 rounded-full border-[2px]'></div>
        </div>
      ) : (
        <div className='mt-3 border'>
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
          <input type='file' className='hidden' />
        </div>
      )}

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
