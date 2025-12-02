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

const ArrayFields = ({ categorizedData }: { categorizedData: any }) => {
  const [defaultData, setDefaultData] = useState(categorizedData.array)
  const [keyIndex, setKeyIndex] = useState<string | null>(null)
  const [itemIndex, setitemIndex] = useState<number | null>(null)

  const handleClick = () => {
    // console.log('Handle Array updates...')
    // console.log(defaultData)
  }

  const handleEditMode = (key: string, index: number) => {
    console.log(key, index)
    setKeyIndex(key)
    setitemIndex(index)
  }

  const handleCancelEdit = () => {
    setKeyIndex(null)
    setitemIndex(null)
  }

  const handleTextChage = (value: string, key: string, index: number) => {
    setDefaultData((prev: any) => {
      // Create a copy of the array for the specific key
      const updatedArray = [...prev[key]]

      // Update the specific index with the new value
      updatedArray[index] = value

      console.log('updatedArray', updatedArray)

      return {
        ...prev,
        [key]: updatedArray,
      }
    })
  }
  return (
    <div className='space-y-2 text-sm'>
      <div className='flex justify-between mb-4'>
        <h2 className='font-bold text-lg '>
          Array Fields ({Object.keys(defaultData || {}).length})
        </h2>
        <EditButton onClick={handleClick} />
      </div>
      {Object.entries(defaultData || {}).map(([key, value]) => (
        <div key={key}>
          {/* {console.log(value)} */}
          <div className='flex   items-center  justify-between'>
            <p className='text-orange-600 text-2xl my-3 '>{key}:</p>
            <button className='bg-blue-300 h-[30px] flex  items-center  space-x-2 p-1 px-3 ml-2 rounded-md'>
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
                        name=''
                        id=''
                        onChange={(e) =>
                          handleTextChage(e.target.value, key, i)
                        }
                        defaultValue={item}
                      ></textarea>
                    ) : (
                      <span className=' flex-1 '>{item}</span>
                    )}

                    {keyIndex === key && itemIndex === i ? (
                      <div className='flex space-x-2  items-center'>
                        <IoMdCheckmarkCircle
                          className='text-green-600 text-xl cursor-pointer hover:text-green-700'
                          title='Save'
                          // onClick={() => handleSaveDate(index, i)}
                        />
                        <IoMdCloseCircle
                          className='text-red-600 text-xl cursor-pointer hover:text-red-700'
                          title='Cancel'
                          onClick={handleCancelEdit}
                        />
                      </div>
                    ) : (
                      <div className='flex space-x-3 '>
                        <MdEditSquare
                          onClick={() => handleEditMode(key, i)}
                          className='text-black  cursor-pointer'
                        />
                        <IoMdCloseCircle className='text-red-500 cursor-pointer' />
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
