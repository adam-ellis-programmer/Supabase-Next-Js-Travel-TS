import React, { useRef, useState } from 'react'
import AddNewImagesButton from './AddNewImagesButton'
import AddNewHeroImageButton from './AddNewHeroImageButton'
import ImageListItem from './ImageListItem'
import { handleTest } from '@/lib/supabase/actions/admin/images/test'
import { deleteAll } from '@/lib/supabase/actions/admin/images/delete-tour-images'
import { TiInfoOutline } from 'react-icons/ti'
import { useRouter } from 'next/navigation'

const Images = ({
  categorizedData,
  tourId,
}: {
  categorizedData: any
  tourId: number
}) => {
  const [isUploading, setIsUploading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [deleteAllLoading, setDeleteAllLoading] = useState(false)
  const router = useRouter()
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      console.log('Selected files:', files)
      // Handle the file upload here
    }
  }

  const test = async () => {
    const data = await handleTest()
    console.log(data)
  }

  const handleDeleteAll = async () => {
    // ...
    setDeleteAllLoading(true)
    try {
      const data = categorizedData.relatedData['tour_images']
      const res = await deleteAll(data)
      console.log('res from server: ', res)
    } catch (error) {
      console.log(error)
    } finally {
      // ...
      setDeleteAllLoading(false)
      router.refresh()
    }

    // console.log(categorizedData.relatedData['tour_images'])
  }

  return (
    <div className=''>
      <h3 className='text-2xl'>Images</h3>
      <div className='relative '>
        {/* Manage Hero Image */}
        <AddNewHeroImageButton  tourId={tourId} urlData={categorizedData.string.main_hero_url} />
        {/* Manage Tour Images */}
        <AddNewImagesButton tourId={tourId} />
      </div>
      <p className='text-lg'>Main Tour Imgaes</p>

      {Object.entries(categorizedData.relatedData['tour_images'] || {}).length >
        0 && (
        <div className='mb-1'>
          <button
            disabled={deleteAllLoading}
            onClick={handleDeleteAll}
            className={`bg-red-300 px-2 rounded-sm ${
              deleteAllLoading && 'bg-gray-400'
            }`}
          >
            {deleteAllLoading ? 'Please Wait' : 'delete all'}
          </button>
        </div>
      )}

      {Object.entries(categorizedData.relatedData || {}).map(([key, value]) => (
        <div key={key} className=''>
          {key === 'tour_images' && (
            <>
              {/*  If delete all pressed */}
              {deleteAllLoading ? (
                <div className='relative h-[200px] rounded-lg flex justify-center items-center flex-col border border-orange-500'>
                  <TiInfoOutline className='absolute top-4 left-4 text-5xl text-yellow-500' />
                  <p className='text-2xl capitalize leading-8'>
                    deleting all...
                  </p>
                  <p className='text-2xl capitalize leading-8'>please wait!</p>
                  <div className='mt-5 animate-spin h-[80px] w-[80px] border-t-black border-orange-500 rounded-full border-[2px]'></div>
                </div>
              ) : (
                // else show current tour images
                <ul className='grid grid-cols-2 md:grid-cols-3 gap-2 '>
                  {(value as any[]).map((item, i) => (
                    <ImageListItem
                      key={item.id}
                      item={item}
                      i={i}
                      fileInputRef={fileInputRef}
                    />
                  ))}
                </ul>
              )}
            </>
          )}
        </div>
      ))}

      {/* <button onClick={() => test()}>test</button> */}
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type='file'
        accept='image/*'
        onChange={handleFileChange}
        className='hidden'
      />
    </div>
  )
}

export default Images
