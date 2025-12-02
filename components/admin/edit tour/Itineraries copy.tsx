'use client'
import React, { useEffect, useRef, useState } from 'react'
import { TbHandGrab } from 'react-icons/tb'
import { GoGrabber } from 'react-icons/go'
import { itinerariesUpdate } from '@/lib/supabase/actions/admin/itineraries-actions'
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
import EditButton from './EditButton'

const Itineraries = ({ categorizedData }: { categorizedData: any }) => {
  const [editIndex, setEditIndex] = useState<number | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [loading, setloading] = useState(false)
  const [defaultData, setDefaultData] = useState(categorizedData.relatedData)
  // Store temporary edits before committing
  const [tempEdits, setTempEdits] = useState<any>({})

  const handleSetEditMode = (index: number) => {
    setEditIndex(index)
    setIsEditing(true)
    // Store current values as temporary edits
    setTempEdits({
      day_title: defaultData.itineraries[index].day_title,
      day_description: defaultData.itineraries[index].day_description,
    })
  }

  const handleCancelEditMode = async () => {
    const res = await itinerariesUpdate()

    return

    setEditIndex(null)
    setIsEditing(false)
    setTempEdits({}) // Clear temporary edits
  }

  const handleTextChange = (value: string, key: string) => {
    // Update temporary edits only
    setTempEdits((prev: any) => ({
      ...prev,
      [key]: value,
    }))
  }

  const handleSaveToDB = () => {
    // console.log('defaultData: ', defaultData.itineraries)
    // Add your API call here to save to database
  }

  const handleSaveToDom = (index: number) => {
    // Update the actual state with temporary edits
    const updatedItineraries = [...defaultData.itineraries]
    updatedItineraries[index] = {
      ...updatedItineraries[index],
      ...tempEdits,
    }

    setDefaultData({
      ...defaultData,
      itineraries: updatedItineraries,
    })

    // console.log('items updated: ', updatedItineraries[index])

    // Reset edit mode
    setEditIndex(null)
    setIsEditing(false)
    setTempEdits({})
  }

  return (
    <div>
      <h3 className='text-2xl my-5'>Itineraries </h3>
      <div className='mb-5'>
        {loading ? (
          <div className=' flex items-center space-x-5 cursor-default'>
            <div className=' animate-spin h-[30px] w-[30px] border-t-black rounded-full border-[4px] border-green-600'></div>
            <p className='capitalize text-xl'>updating</p>
          </div>
        ) : (
          <EditButton onClick={handleSaveToDB} />
        )}
      </div>
      {Object.entries(defaultData || {}).map(([key, value]) => (
        <div key={key} className=''>
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
                        <div className='w-full flex justify-between relative'>
                          {editIndex === i ? (
                            <input
                              type='text'
                              id='day_title'
                              name='day_title'
                              value={tempEdits.day_title || ''}
                              className='rounded-md w-3/4 px-1 py-2'
                              onChange={(e) =>
                                handleTextChange(e.target.value, 'day_title')
                              }
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
                              onClick={() => handleSaveToDom(i)}
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
                            name='day_description'
                            id='day_description'
                            value={tempEdits.day_description || ''}
                            onChange={(e) =>
                              handleTextChange(
                                e.target.value,
                                'day_description'
                              )
                            }
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
