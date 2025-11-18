import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { IoIosInformationCircleOutline, IoMdCloseCircle } from 'react-icons/io'
import { MdEditSquare } from 'react-icons/md'
const Itineraries = ({ categorizedData }: { categorizedData: any }) => {
  return (
    <div>
      <h3 className='text-2xl my-5'>Itineraries </h3>
      {Object.entries(categorizedData.relatedData || {}).map(([key, value]) => (
        <div key={key} className=''>
          {/* <p className='text-orange-600 text-2xl  mt-5 mb-3'>{key}:</p>{' '} */}
          {/* <p className='mb-3'> {(value as any[]).length} items</p> */}
          {/* {console.log(value)} */}
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

export default Itineraries
