import React, { useState } from 'react'
import EditButton from './EditButton'

const Booleans = ({
  categorizedData,
  tourId,
  res,
}: {
  categorizedData: any
  tourId: number
  res: any
}) => {
  const [editingIndex, setEditingIndex] = useState(null)
  const [editedItems, seteditedItems] = useState({})

  // Init data so we can manipulate this as we click
  const [allBooleans, setallBooleans] = useState(categorizedData.boolean)

  // Handle the update object as a whole as this
  // re-inforces object handling principles

  // Convert Object to array, clean it with loop, convert back to object
  const handleUpdateClick = () => {
    console.log('res', res.data)
    const resArr = Object.entries(res.data)

    const excludedKeys = [
      'itineraries',
      'tour_images',
      'booking_slots',
      'created_at',
      'updated_at',
    ]

    const filteredData = resArr.filter(([key]) => !excludedKeys.includes(key))
    const cleanedObject = Object.fromEntries(filteredData)

    // console.log('allBooleans', allBooleans)
    // console.log('cleanedObject: ', cleanedObject)
    const dataToUpdate = {
      ...cleanedObject,
      ...allBooleans,
    }
    console.log('dataToUpdate', dataToUpdate)
  }

  const handleBooleanChnage = (key: string, value: boolean) => {
    setallBooleans((prev: any) => ({
      ...prev,
      [key]: value,
    }))
  }
  return (
    <div className='space-y-2 text-sm mt-10'>
      <div>
        <div className='flex justify-between mb-4'>
          <h2 className='font-bold text-lg'>
            Boolean Fields ({Object.keys(categorizedData.boolean || {}).length})
          </h2>
          <EditButton onClick={handleUpdateClick} />
        </div>
        {Object.entries(categorizedData.boolean || {}).map(([key, value]) => (
          <div
            key={key}
            className='border-b pb-1 text-md flex items-center justify-between'
          >
            <label htmlFor={key} className='w-full'>
              {key}:
            </label>
            <input
              className='w-[20px] h-[20px]'
              type='checkbox'
              name={key}
              defaultChecked={true}
              onChange={(e) => handleBooleanChnage(key, e.target.checked)}
              id={key}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Booleans
