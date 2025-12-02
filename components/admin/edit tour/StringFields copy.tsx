'use client'
import React, { useState } from 'react'
import { MdEditSquare } from 'react-icons/md'
import { IoMdCheckmarkCircle, IoMdCloseCircle } from 'react-icons/io'
import EditButton from './EditButton'

const StringFields = ({ categorizedData }: { categorizedData: any }) => {
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [editedValues, setEditedValues] = useState<Record<string, string>>({})

  const handleClick = () => {
    // console.log('updating string fields...')
    // console.log('Edited values:', editedValues)
  }

  const handleEditMode = (index: number, key: string, value: string) => {
    setEditingIndex(index)
    if (!editedValues[key]) {
      setEditedValues((prev) => ({ ...prev, [key]: value }))
    }
  }

  const handleSave = (key: string) => {
    // console.log(`Saving ${key}:`, editedValues[key])
    setEditingIndex(null)
  }

  const handleCancel = () => {
    setEditingIndex(null)
  }

  const handleTextChange = (key: string, value: string) => {
    setEditedValues((prev) => ({ ...prev, [key]: value }))
  }

  const autoResize = (textarea: HTMLTextAreaElement) => {
    textarea.style.height = 'auto'
    textarea.style.height = textarea.scrollHeight + 'px'
  }

  return (
    <div className='space-y-2 text-sm'>
      <div className='flex justify-between mb-4'>
        <h2 className='font-bold text-lg'>
          String Fields ({Object.keys(categorizedData.string || {}).length})
        </h2>
        <EditButton onClick={handleClick} />
      </div>
      <div>
        {Object.entries(categorizedData.string || {}).map(([key, value], i) => {
          const stringValue = value as string // ✅ Assert it's a string

          return (
            <div key={key} className='border-b pb-3'>
              <div className='text-orange-600 cursor-pointer flex items-center justify-between'>
                <span className='text-lg'>{key}</span>

                {editingIndex === i ? (
                  <div className='flex space-x-2'>
                    <IoMdCheckmarkCircle
                      onClick={() => handleSave(key)}
                      className='text-green-600 text-xl cursor-pointer hover:text-green-700'
                      title='Save'
                    />
                    <IoMdCloseCircle
                      onClick={handleCancel}
                      className='text-red-600 text-xl cursor-pointer hover:text-red-700'
                      title='Cancel'
                    />
                  </div>
                ) : (
                  <MdEditSquare
                    onClick={() => handleEditMode(i, key, stringValue)} // ✅ Use stringValue
                    className='text-black text-md cursor-pointer hover:text-gray-700'
                    title='Edit'
                  />
                )}
              </div>

              {editingIndex === i ? (
                <textarea
                  className='w-full resize-none overflow-hidden focus:outline-blue-500 p-2 rounded-md border mt-2'
                  value={editedValues[key] || stringValue} // ✅ Use stringValue
                  onChange={(e) => handleTextChange(key, e.target.value)}
                  ref={(el) => {
                    if (el) autoResize(el)
                  }}
                  onInput={(e) => autoResize(e.currentTarget)}
                  autoFocus
                />
              ) : (
                <p className='mt-1'>{editedValues[key] || stringValue}</p> // ✅ Use stringValue
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default StringFields
