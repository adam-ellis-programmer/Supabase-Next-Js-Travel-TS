'use client'
import React, { useState } from 'react'
import { MdEditSquare } from 'react-icons/md'
import { IoMdCheckmarkCircle, IoMdCloseCircle } from 'react-icons/io'
import EditButton from './EditButton'
import { updateTourAdmin } from '@/lib/supabase/actions/admin/admin-actions'

const StringFields = ({
  categorizedData,
  tourId,
  res,
}: {
  categorizedData: any
  tourId: number
  res: any
}) => {
  // console.log('categorizedData', categorizedData)

  // set which index here
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  // gather edited values here
  const [editedValues, seteditedValues] = useState<Record<string, string>>({})

  const [defaultData, setDefaultData] = useState(categorizedData.string)

  const handleDbUpddate = async () => {
    console.log('updating string fields...')
    console.log(categorizedData)
    console.log(defaultData)

    const preparedData = {} as any
    // console.log(Object.entries(defaultData))
    const excludedKeys = [
      'itineraries',
      'tour_images',
      'booking_slots',
      'created_at',
      'updated_at',
    ]

    //  computed key values
    const preppedDefault = Object.entries(defaultData).map(([key, val]) => {
      console.log(key, val)
      if (!excludedKeys.includes(key)) {
        return {
          [key]: val,
        }
      }
    })

    console.log('preppedDefault-->', preppedDefault)

    // Skip related data
    Object.entries(res.data).forEach(([key, val]) => {
      // console.log(key, val)
      if (
        key !== 'itineraries' &&
        key !== 'tour_images' &&
        key !== 'booking_slots' &&
        key !== 'created_at' &&
        key !== 'updated_at'
      ) {
        preparedData[key] = val
      }
    })

    // final data fro DB
    const dataFroDB = {
      ...preparedData,
      ...defaultData, // remove createdAt and updatedAt
    }

    console.log('preparedData', dataFroDB)
    // const res = await updateTourAdmin(tourId, dataFroDB)

    // console.log('RES', res)
  }

  const handleEditMode = (index: number) => {
    setEditingIndex(index)
  }

  const handleCancel = () => {
    setEditingIndex(null)
  }
  // const excludedKeys = ['itineraries', 'tour_images', 'booking_slots', 'created_at', 'updated_at']

  // Object.entries(res.data).forEach(([key, val]) => {
  //   if (!excludedKeys.includes(key)) {
  //     preparedData[key] = val
  //   }
  // })
  // if obj !== obj then update
  const handleSave = (key: string) => {
    const updatedData = {
      ...categorizedData.string,
      ...editedValues,
    }
    setDefaultData(updatedData)
    setEditingIndex(null)
  }

  const hadleTextChange = (key: string, value: string) => {
    seteditedValues((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  return (
    <div className='space-y-2 text-sm'>
      <div className='flex justify-between mb-4'>
        <h2 className='font-bold text-lg  '>
          String Fields ({Object.keys(categorizedData.string || {}).length})
        </h2>
        <EditButton onClick={handleDbUpddate} />
      </div>
      <div>
        {Object.entries(defaultData || {}).map(([key, value], i) => (
          <div key={key} className='border-b pb-3'>
            <div className='text-orange-600  cursor-pointer flex items-center justify-between '>
              <span className='text-lg'>{key}</span>
              {editingIndex === i ? (
                <div className='flex space-x-2'>
                  <IoMdCheckmarkCircle
                    className='text-green-600 text-xl cursor-pointer hover:text-green-700'
                    title='Save'
                    onClick={() => handleSave(key)}
                  />
                  <IoMdCloseCircle
                    className='text-red-600 text-xl cursor-pointer hover:text-red-700'
                    title='Cancel'
                    onClick={handleCancel}
                  />
                </div>
              ) : (
                <MdEditSquare
                  onClick={() => handleEditMode(i)}
                  className='text-black text-md'
                />
              )}
            </div>
            {editingIndex === i ? (
              <textarea
                className='w-full h-[100px] border-[1px] border-red-500 p-5 rounded-md'
                name=''
                defaultValue={value as string}
                id=''
                onChange={(e) => hadleTextChange(key, e.target.value)}
              ></textarea>
            ) : (
              <p className=''>{value as string}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default StringFields
