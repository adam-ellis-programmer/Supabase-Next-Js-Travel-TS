'use client'
import React, { useState } from 'react'
import { MdEditSquare } from 'react-icons/md'
import { IoMdCheckmarkCircle, IoMdCloseCircle } from 'react-icons/io'
import EditButton from './EditButton'
import { updateTourAdmin } from '@/lib/supabase/actions/admin/admin-actions'
import useDemoCheck from '@/hooks/useAuthDemoCheck'

const StringFields = ({
  categorizedData,
  tourId,
  res,
  setShowAlert,
  setDemoAlert,
}: {
  categorizedData: any
  tourId: number
  res: any
  setShowAlert: (boolean: boolean) => void
  setDemoAlert: (boolean: boolean) => void
}) => {
  // set which index here
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  // gather edited values here
  const [editedValues, seteditedValues] = useState<Record<string, string>>({})
  // set original data
  const [defaultData, setDefaultData] = useState(categorizedData.string)
  const [loading, setLoading] = useState(false)
  const { loading: demoLoading, isDemoUser } = useDemoCheck()

  const handleDbUpddate = async () => {
    // ============ DEMO CHECK ==========
    if (!demoLoading && isDemoUser) {
      console.log(isDemoUser)
      setDemoAlert(true)

      setTimeout(() => {
        setDemoAlert(false)
      }, 5000)
      return
    }
    // ============ DEMO CHECK ==========
    setLoading(true)
    const dataToUpdateStageOne = {
      ...res.data,
      ...editedValues,
    }

    // Exclude from updates
    const excludedKeys = [
      'itineraries',
      'tour_images',
      'booking_slots',
      'created_at',
      'updated_at',
    ]

    // The Journey: Object → Array → Filter → Object

    // prettier-ignore
    const filteredData = Object.entries(dataToUpdateStageOne).filter(([key]) => !excludedKeys.includes(key))

    // from array to object again
    const cleanedData = Object.fromEntries(filteredData)
    // console.log(cleanedData)

    try {
      const data = await updateTourAdmin(tourId, cleanedData)

      setLoading(false)
      setShowAlert(true)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const handleEditMode = (index: number) => {
    setEditingIndex(index)
  }

  const handleCancel = () => {
    setEditingIndex(null)
  }

  const handleSave = (key: string) => {
    // console.log(editedValues[key])
    setDefaultData((prev: {}) => ({
      ...prev,
      [key]: editedValues[key],
    }))
    setEditingIndex(null)
  }

  const hadleTextChange = (key: string, value: string) => {
    seteditedValues((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <div className='space-y-2 text-sm'>
      <div className='flex justify-between mb-4'>
        <h2 className='font-bold text-lg  '>
          String Fields ({Object.keys(categorizedData.string || {}).length})
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
