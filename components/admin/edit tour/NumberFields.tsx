import React, { useState } from 'react'
import EditButton from './EditButton'
import { MdEditSquare } from 'react-icons/md'
import { IoMdCheckmarkCircle, IoMdCloseCircle } from 'react-icons/io'
import { BiSolidNoEntry } from 'react-icons/bi'

const NumberFields = ({ categorizedData }: { categorizedData: any }) => {
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [defaultDAta, setDefaultDAta] = useState(categorizedData.number)

  const handleClick = () => {
    console.log('updating numbers...')
    console.log(categorizedData.number)
  }

  const handleEditMode = (index: number) => {
    console.log('first')
    setEditingIndex(index)
  }

  const handleCancel = () => {
    setEditingIndex(null)
  }

  const allowed = [1, 2, 4, 5]
  return (
    <div className='space-y-2 text-sm'>
      <div>
        <div className='flex justify-between mb-4 '>
          <h2 className='font-bold text-lg'>
            Number Fields ({Object.keys(categorizedData.number || {}).length})
          </h2>
          <EditButton onClick={handleClick} />
        </div>

        {Object.entries(categorizedData.number || {}).map(([key, value], i) => (
          <div key={key}>
            <div className='flex justify-between border-b text-md p-1'>
              <span>{key}:</span>
              <div className='flex items-center space-x-4  min-w-[80px] justify-between'>
                {editingIndex === i ? (
                  <input
                    defaultValue={value as number}
                    type='number'
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
