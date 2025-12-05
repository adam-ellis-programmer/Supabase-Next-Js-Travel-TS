import React, { useRef, useState } from 'react'
import AddNewImagesButton from './AddNewImagesButton'
import AddNewHeroImageButton from './AddNewHeroImageButton'
import ImageListItem from './ImageListItem'
import { handleTest } from '@/lib/supabase/actions/admin/images/test'
import { deleteAll } from '@/lib/supabase/actions/admin/images/delete-tour-images'
import { TiInfoOutline } from 'react-icons/ti'
import { useRouter } from 'next/navigation'
import { updateTourImage } from '@/lib/supabase/actions/admin/images/update-tour-image'
import useDemoCheck from '@/hooks/useAuthDemoCheck'

const Images = ({
  categorizedData,
  tourId,
  setDemoalert,
}: {
  categorizedData: any
  tourId: number
  setDemoalert: (boolean: boolean) => void
}) => {
  const { loading: demoLoading, isDemoUser } = useDemoCheck()
  const router = useRouter()
  const [isUploading, setIsUploading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [deleteAllLoading, setDeleteAllLoading] = useState(false)
  const [editLoading, seteditLoading] = useState(false)
  const [editId, setEditId] = useState<number | null>(null)

  const handleChangeImage = (index: number, id: number) => {
    // console.log('changing image id logged from images parent: ', id)
    setEditId(id)
    // Trigger the file input click
    fileInputRef.current?.click()
  }

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log('updating from images ...')

    seteditLoading(true)
    const files = e.target.files

    // ✅ Guard clause: Check if we have files AND editId
    if (!files || files.length === 0) {
      seteditLoading(false)
      return
    }

    if (editId === null) {
      console.error('No image ID selected')
      seteditLoading(false)
      return
    }

    const formData = new FormData()
    formData.append('file-data', files[0])
    // ✅ Convert numbers to strings
    formData.append('image-id', editId.toString())
    formData.append('tour-id', tourId.toString())

    try {
      const res = await updateTourImage(formData)

      router.refresh()
    } catch (error) {
      console.log(error)
    } finally {
      seteditLoading(false)
    }
  }

  const test = async () => {
    const data = await handleTest()
  }

  const handleDeleteAll = async () => {
    // ============ DEMO CHECK ==========
    if (!demoLoading && isDemoUser) {
      console.log(isDemoUser)
      setDemoalert(true)

      setTimeout(() => {
        setDemoalert(false)
      }, 5000)
      return
    }
    // ============ DEMO CHECK ==========
    setDeleteAllLoading(true)
    try {
      const data = categorizedData.relatedData['tour_images']
      const res = await deleteAll(data)
    } catch (error) {
      console.log(error)
    } finally {
      setDeleteAllLoading(false)
      router.refresh()
    }
  }

  // sort data by display order
  const tourImagesData = [...categorizedData.relatedData['tour_images']]
  const sortedData = tourImagesData.sort(
    (a, b) => a.display_order - b.display_order
  )

  return (
    <div className=''>
      <h3 className='text-2xl'>Images</h3>
      <div className='relative '>
        {/* Manage Hero Image */}
        <AddNewHeroImageButton
          tourId={tourId}
          urlData={categorizedData.string.main_hero_url}
        />
        {/* Manage Tour Images */}
        <AddNewImagesButton tourId={tourId} />
      </div>
      <p className='text-lg'>Main Tour Images</p>

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
                  {(sortedData as any[]).map((item, i) => (
                    <ImageListItem
                      key={item.id}
                      item={item}
                      i={i}
                      editLoading={editLoading}
                      editId={editId}
                      handleChangeImage={handleChangeImage}
                    />
                  ))}
                </ul>
              )}
            </>
          )}
        </div>
      ))}

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
