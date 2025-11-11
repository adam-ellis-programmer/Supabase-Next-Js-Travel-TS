import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { MdEditSquare } from 'react-icons/md'
import { IoMdCloseCircle } from 'react-icons/io'
const Images = ({ categorizedData }: { categorizedData: any }) => {
  return (
    <div>
      {Object.entries(categorizedData.relatedData || {}).map(([key, value]) => (
        <div key={key}>
          <p className='text-orange-600 text-2xl  mt-5 mb-3'>{key}:</p>{' '}
          <p className='mb-3'> {(value as any[]).length} items</p>
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
          {key === 'itineraries' && (
            <ul>
              <Accordion
                type='single'
                collapsible
                className='w-full'
                defaultValue='item-0'
              >
                {(value as any[]).map((item, i) => {
                  return (
                    <AccordionItem key={i} value={`item-${i}`}>
                      <AccordionTrigger className='bg-blue-200 mb-3 px-5'>
                        <div className='w-full flex justify-between'>
                          <p> {item.day_title}</p>{' '}
                          <p>Day ({item.day_number})</p>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className='flex flex-col gap-4 text-balance'>
                        <div className=' flex justify-end space-x-3'>
                          <button className='cursor-pointer'>
                            <MdEditSquare className='text-black text-2xl' />
                          </button>
                          <button className='cursor-pointer'>
                            <IoMdCloseCircle className='text-2xl' />
                          </button>
                        </div>
                        {/* <p>{item.day_description}</p> */}
                        <textarea
                          className='min-h-[250px] outline-none -mt-2'
                          name=''
                          id=''
                          defaultValue={item.day_description}
                        ></textarea>
                      </AccordionContent>
                    </AccordionItem>
                  )
                })}
              </Accordion>
            </ul>
          )}
        </div>
      ))}
    </div>
  )
}

export default Images
