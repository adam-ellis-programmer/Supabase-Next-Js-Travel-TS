import React, { useRef } from 'react'
import AddNewImagesButton from './AddNewImagesButton'
import AddNewHeroImageButton from './AddNewHeroImageButton'
import ImageListItem from './ImageListItem'
import { handleTest } from '@/lib/supabase/actions/admin/images/test'

const Images = ({
  categorizedData,
  tourId,
}: {
  categorizedData: any
  tourId: number
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null)

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

  return (
    <div className=''>
      <h3 className='text-2xl'>Images</h3>
      <div className='relative my-5'>
        <AddNewHeroImageButton urlData={categorizedData.string.main_hero_url} />
        <AddNewImagesButton tourId={tourId} />
      </div>
      <p className='text-lg mb-5'>Main Tour Imgaes</p>
      {Object.entries(categorizedData.relatedData || {}).map(([key, value]) => (
        <div key={key}>
          {key === 'tour_images' && (
            <ul className='grid grid-cols-2 md:grid-cols-3 gap-2'>
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
        </div>
      ))}

      <button onClick={() => test()}>test</button>
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
