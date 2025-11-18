'use client'
import React, { useEffect, useRef, useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  IoIosInformationCircleOutline,
  IoMdCheckmarkCircle,
  IoMdCloseCircle,
} from 'react-icons/io'
import { MdEditSquare } from 'react-icons/md'

const Itineraries = ({ categorizedData }: { categorizedData: any }) => {
  const [editIndex, seteditIndex] = useState<number | null>(null)
  const [isEditing, setIsEditing] = useState(false)

  const handleSetEditMode = (index: number) => {
    console.log(index)
    seteditIndex(index)
    setIsEditing(true)
  }

  const handleCancelEditMode = () => {
    seteditIndex(null)
    console.log('clicked')

    setIsEditing(false)
  }

  const handleTextChange = () => {}
  const handleSaveToDB = () => {}
  // Hero Images have their own table
  // Hero Images have their own table
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
                collapsible={!isEditing}
                className='w-full'
                defaultValue='item-0'
              >
                {(value as any[]).map((item, i) => {
                  return (
                    <AccordionItem key={i} value={`item-${i}`}>
                      <AccordionTrigger className='bg-blue-200 mb-3 px-5'>
                        <div className='w-full flex justify-between '>
                          {editIndex === i ? (
                            <input
                              type='text'
                              defaultValue={item.day_title}
                              className='rounded-md w-3/4'
                            />
                          ) : (
                            <p> {item.day_title}</p>
                          )}
                          <p className=''>Day ({item.day_number})</p>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className='flex flex-col gap-4 text-balance'>
                        {editIndex === i ? (
                          <div className='flex space-x-2 items-center '>
                            <IoMdCheckmarkCircle
                              className='text-green-600 text-xl cursor-pointer hover:text-green-700'
                              title='Save'
                              onClick={() => handleCancelEditMode()}
                            />
                            <IoMdCloseCircle
                              className='text-red-600 text-xl cursor-pointer hover:text-red-700'
                              title='Cancel'
                              onClick={() => handleCancelEditMode()}
                            />
                          </div>
                        ) : (
                          <div className=' flex justify-end space-x-3'>
                            <button
                              onClick={() => handleSetEditMode(i)}
                              className='cursor-pointer'
                            >
                              <MdEditSquare className='text-black text-2xl' />
                            </button>
                          </div>
                        )}
                        {editIndex === i ? (
                          <textarea
                            className='min-h-[250px] outline-none -mt-2 border rounded-lg border-rose-400 p-3'
                            name=''
                            id=''
                            defaultValue={item.day_description}
                          ></textarea>
                        ) : (
                          <p>{item.day_description}</p>
                        )}
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
