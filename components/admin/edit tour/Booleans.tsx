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
  const [allBooleans, setallBooleans] = useState(categorizedData.boolean)
  // editing index
  // edited values
  // loading
  // default data

  const handleClick = () => {
    // console.log('handle booleans')
    // console.log(res.data)
    // console.log(categorizedData.boolean)
    console.log('allBooleans', allBooleans)
  }

  const handleBooleanChnage = (key: string, value: boolean) => {
    const tempdata = {
      ...categorizedData.boolean,
    }

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
          <EditButton onClick={handleClick} />
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
