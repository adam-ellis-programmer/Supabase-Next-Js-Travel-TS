import React, { useState } from 'react'
import EditButton from './EditButton'
import { MdEditSquare } from 'react-icons/md'
import { IoMdCheckmarkCircle, IoMdCloseCircle } from 'react-icons/io'
import { BiSolidNoEntry } from 'react-icons/bi'
import { updateTourAdmin } from '@/lib/supabase/actions/admin/admin-actions'

const NumberFields = ({
  categorizedData,
  res,
  tourId,
}: {
  categorizedData: any
  res: any
  tourId: number
}) => {
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [defaultDAta, setDefaultDAta] = useState(categorizedData.number)

  // tracks edited values as we are not sending to the db straight away
  const [editedValues, setEditEdValues] = useState({})
  const [loading, setloading] = useState(false)

  const handleDbUpddate = async () => {
    setloading(true)
    console.log('updating numbers...')

    // prepare data start
    const allData = {
      ...res.data,
      ...defaultDAta,
    }

    // key tries to get key
    // value tries to ge value
    // i tries to get index
    const excludedKeys = [
      'itineraries',
      'tour_images',
      'booking_slots',
      'created_at',
      'updated_at',
    ]

    // convert to arry and filter
    const dataArr = Object.entries(allData).filter(
      ([key]) => !excludedKeys.includes(key)
    )
    // convert back to object
    const dataObj = Object.fromEntries(dataArr)

    console.log(dataObj)
    try {
      console.log('trying update')
      console.log('data before update')
      const data = await updateTourAdmin(tourId, dataObj)
      console.log('update success')
      console.log('update data', data)
    } catch (error) {
      console.log(error)
    } finally {
      setloading(false)
    }
  }

  const handleEditMode = (index: number) => {
    console.log('first')
    setEditingIndex(index)
  }

  const handleCancel = () => {
    setEditingIndex(null)
  }

  const handleNumberChange = (key: string, index: number, value: string) => {
    console.log(key, value)
    setEditEdValues((prev) => ({ ...prev, [key]: Number(value) }))
  }

  const handleSave = (key: string) => {
    console.log(editedValues)
    setDefaultDAta((prev: {}) => ({
      ...prev,
      ...editedValues,
    }))
    setEditingIndex(null)
  }
  //
  //
  const allowed = [1, 2, 4, 5]
  return (
    <div className='space-y-2 text-sm'>
      <div>
        <div className='flex justify-between mb-4 '>
          <h2 className='font-bold text-lg'>
            Number Fields ({Object.keys(categorizedData.number || {}).length})
          </h2>
          {loading ? (
            <div className=' flex items-center space-x-5 cursor-default'>
              <div className=' animate-spin h-[30px] w-[30px] border-t-black rounded-full border-[4px] border-green-600'></div>
              <p className='capitalize text-xl'>updating</p>
            </div>
          ) : (
            <EditButton onClick={handleDbUpddate} />
          )}
        </div>

        {Object.entries(defaultDAta || {}).map(([key, value], i) => (
          <div key={key}>
            <div className='flex justify-between border-b text-md p-1'>
              <span>{key}:</span>
              <div className='flex items-center space-x-4  min-w-[80px] justify-between'>
                {editingIndex === i ? (
                  <input
                    defaultValue={value as number}
                    type='number'
                    onChange={(e) => handleNumberChange(key, i, e.target.value)}
                    className='w-full border rounded-sm border-green-600'
                  />
                ) : (
                  <span> {value as number}</span>
                )}

                {allowed.includes(i) ? (
                  <>
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
                      <button onClick={() => handleEditMode(i)}>
                        <MdEditSquare className='text-green-500' />
                      </button>
                    )}
                  </>
                ) : (
                  <BiSolidNoEntry className='text-red-500 cursor-not-allowed' />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NumberFields
