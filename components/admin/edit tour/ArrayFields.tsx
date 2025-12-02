'use client'
import React, { useEffect, useRef, useState } from 'react'
import {
  IoIosInformationCircleOutline,
  IoMdCheckmarkCircle,
  IoMdCloseCircle,
} from 'react-icons/io'
import { MdEditSquare } from 'react-icons/md'
import EditButton from './EditButton'
import { FaCirclePlus } from 'react-icons/fa6'
import { updateArrayFields } from '@/lib/supabase/actions/admin/array-field-actions'

const ArrayFields = ({
  categorizedData,
  tourId,
  setShowAlert,
}: {
  categorizedData: any
  tourId: number
  setShowAlert: (boolean: boolean) => void
}) => {
  const [defaultData, setDefaultData] = useState(categorizedData.array)
  const [keyIndex, setKeyIndex] = useState<string | null>(null)
  const [itemIndex, setitemIndex] = useState<number | null>(null)
  const [loading, setloading] = useState(false)

  // Store the edited value directly here
  const [editedValue, setEditedValue] = useState<string>('')

  const handleUpdateClick = async () => {
    setloading(true)

    try {
      const res = await updateArrayFields(defaultData, tourId)

      setShowAlert(true)
    } catch (error) {
      console.log(error)
    } finally {
      setloading(false)
    }
  }

  const handleEditMode = (key: string, index: number) => {
    // console.log(key, index)
    setKeyIndex(key)
    setitemIndex(index)
    // Set the initial value when entering edit mode

    // console.log(defaultData[key][index])
    setEditedValue(defaultData[key][index])
  }

  const handleCloseEdit = () => {
    setKeyIndex(null)
    setitemIndex(null)
    setEditedValue('')
  }

  const handleTextChage = (value: string) => {
    // Just update the edited value
    setEditedValue(value)
  }

  const handleSaveEdit = (key: string, index: number) => {
    setDefaultData((prev: any) => {
      const updatedArray = [...prev[key]]
      // set actual array text
      updatedArray[index] = editedValue

      return {
        ...prev,
        [key]: updatedArray,
      }
    })

    handleCloseEdit()
  }

  const handleDelteItem = (key: string, index: number) => {
    const data = defaultData[key]
    const filtereData = data.filter((item: {}, i: number) => i !== index)

    setDefaultData((prev: any) => {
      return {
        ...prev,
        [key]: filtereData,
      }
    })
  }

  const handleAddPoint = (key: string) => {
    const data = defaultData[key]
    const newPoint = 'Please Change Me!'
    data.push(newPoint)

    setDefaultData((prev: any) => {
      return {
        ...prev,
        [key]: data,
      }
    })
  }

  return (
    <div className='space-y-2 text-sm'>
      <div className='flex justify-between mb-4'>
        <h2 className='font-bold text-lg '>
          Array Fields ({Object.keys(defaultData || {}).length})
        </h2>
        {loading ? (
          <div className=' flex items-center space-x-5 cursor-default'>
            <div className=' animate-spin h-[30px] w-[30px] border-t-black rounded-full border-[4px] border-green-600'></div>
            <p className='capitalize text-xl'>updating</p>
          </div>
        ) : (
          <EditButton onClick={handleUpdateClick} />
        )}
      </div>
      {Object.entries(defaultData || {}).map(([key, value]) => (
        <div key={key}>
          <div className='flex items-center justify-between'>
            <p className='text-orange-600 text-2xl my-3 '>{key}:</p>
            <button
              onClick={() => handleAddPoint(key)}
              className='bg-blue-300 h-[30px] flex items-center space-x-2 p-1 px-3 ml-2 rounded-md'
            >
              <FaCirclePlus />
              <span>Point </span>
            </button>
          </div>
          {(value as any[]).length} items
          <ul>
            {(value as any[]).map((item, i) => {
              return (
                <li key={i}>
                  <div className='border-b border-orange-200 py-2 flex items-center space-x-5 justify-between'>
                    <IoIosInformationCircleOutline className='inline-block mr-3 text-lg' />
                    {keyIndex === key && itemIndex === i ? (
                      <textarea
                        className='border border-rose-500 w-full p-2 rounded-lg'
                        onChange={(e) => handleTextChage(e.target.value)}
                        value={editedValue}
                      ></textarea>
                    ) : (
                      <span className='flex-1'>{item}</span>
                    )}

                    {keyIndex === key && itemIndex === i ? (
                      <div className='flex space-x-2 items-center'>
                        <IoMdCheckmarkCircle
                          className='text-green-600 text-xl cursor-pointer hover:text-green-700'
                          title='Save'
                          onClick={() => handleSaveEdit(key, i)}
                        />
                        <IoMdCloseCircle
                          className='text-red-600 text-xl cursor-pointer hover:text-red-700'
                          title='Cancel'
                          onClick={handleCloseEdit}
                        />
                      </div>
                    ) : (
                      <div className='flex space-x-3'>
                        <MdEditSquare
                          onClick={() => handleEditMode(key, i)}
                          className='text-black cursor-pointer'
                        />
                        <IoMdCloseCircle
                          onClick={() => handleDelteItem(key, i)}
                          className='text-red-500 cursor-pointer'
                        />
                      </div>
                    )}
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default ArrayFields
