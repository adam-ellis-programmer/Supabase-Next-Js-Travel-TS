import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { MdEditSquare } from 'react-icons/md'
import { IoMdCloseCircle } from 'react-icons/io'
import AddNewImagesButton from './AddNewImagesButton'
import AddNewHeroImageButton from './AddNewHeroImageButton'
const Images = ({ categorizedData }: { categorizedData: any }) => {
  console.log('from images ', categorizedData.string.hero_url)

  return (
    <div className=''>
      <h3 className='text-2xl'>Images </h3>
      <div className='relative my-5 '>
        {/* <div className='relative border border-rose-500 h-[200px] '></div> */}
        <AddNewHeroImageButton urlData={categorizedData.string.hero_url} />
        <AddNewImagesButton />
      </div>
      {Object.entries(categorizedData.relatedData || {}).map(([key, value]) => (
        <div key={key}>
          {/* <p className='text-orange-600 text-2xl  mt-5 mb-3'>{key}:</p>{' '} */}
          {/* <p className='mb-3'> {(value as any[]).length} items</p> */}
          {/* {console.log(value)} */}
          {key === 'tour_images' && (
            <ul className='grid grid-cols-2 md:grid-cols-3 gap-2'>
              {(value as any[]).map((item, i) => {
                return (
                  <li key={i} className='relative h-[200px]  lg:h-[100px]'>
                    <img
                      className='h-full rounded-lg w-full object-cover object-center'
                      src={item.image_url}
                      alt=''
                    />
                    {/* <div className='absolute top-0 left-0 w-full h-full bg-[#3e4e5c3c] z-1'></div> */}
                    {/* button container */}
                    <div className=' absolute top-0 left-0 w-full flex justify-between  z-10 text-3xl px-2 py-1'>
                      <button className=''>
                        <MdEditSquare className='text-black ' />
                      </button>
                      <button>
                        {/* <MdDelete className='text-green-600' /> */}
                        <IoMdCloseCircle />
                      </button>
                    </div>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      ))}
    </div>
  )
}

export default Images
