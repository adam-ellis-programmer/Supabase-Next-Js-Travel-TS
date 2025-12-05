import React, { useState } from 'react'
import EditButton from './EditButton'
import { updateTourAdmin } from '@/lib/supabase/actions/admin/admin-actions'
import useDemoCheck from '@/hooks/useAuthDemoCheck'

const Booleans = ({
  categorizedData,
  tourId,
  res,
  setShowAlert,
  setDemoalert,
}: {
  categorizedData: any
  tourId: number
  res: any
  setShowAlert: (boolean: boolean) => void
  setDemoalert: (boolean: boolean) => void
}) => {
  const { loading: demoLoading, isDemoUser } = useDemoCheck()
  const [editingIndex, setEditingIndex] = useState(null)
  const [editedItems, seteditedItems] = useState({})
  const [loading, setloading] = useState(false)

  // Init data so we can manipulate this as we click
  const [allBooleans, setallBooleans] = useState(categorizedData.boolean)

  // Handle the update object as a whole as this
  // re-inforces object handling principles

  // Convert Object to array, clean it with loop, convert back to object
  const handleUpdateClick = async () => {
    // ============ DEMO CHECK ==========
    if (!demoLoading && isDemoUser) {
      console.log(isDemoUser)
      setDemoalert(true)

      setTimeout(() => {
        setDemoalert(false)
      }, 5000)
      return
    }
    // ============ DEMO CHECK ==========
    setloading(true)

    //1: convert to array for handling
    const resArr = Object.entries(res.data)

    const excludedKeys = [
      'itineraries',
      'tour_images',
      'booking_slots',
      'created_at',
      'updated_at',
    ]

    //2: run filter to clean data
    const filteredData = resArr.filter(([key]) => !excludedKeys.includes(key))
    const cleanedObject = Object.fromEntries(filteredData)

    // spread out to update end object for db entry
    const dataToUpdate = {
      ...cleanedObject,
      ...allBooleans,
    }
    // console.log('dataToUpdate', dataToUpdate)
    // console.log('dataToUpdate', Object.entries(dataToUpdate).length)
    // console.log('making boolean updates to db:')

    try {
      const res = await updateTourAdmin(tourId, dataToUpdate)
      setShowAlert(true)
      // console.log('success updating booleans to databse:')
      // console.log('res from databse: ', res)
      // console.log('Log finished')
    } catch (error) {
      console.log(error)
    } finally {
      setloading(false)
    }
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

          {loading ? (
            <div className=' flex items-center space-x-5 cursor-default'>
              <div className=' animate-spin h-[30px] w-[30px] border-t-black rounded-full border-[4px] border-green-600'></div>
              <p className='capitalize text-xl'>updating</p>
            </div>
          ) : (
            <EditButton onClick={handleUpdateClick} />
          )}
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
              defaultChecked={allBooleans[key]}
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
