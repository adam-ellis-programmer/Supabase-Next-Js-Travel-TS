'use client'
import React, { useState } from 'react'
import { itinerariesUpdate } from '@/lib/supabase/actions/admin/itineraries-actions'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import { IoMdCheckmarkCircle, IoMdCloseCircle } from 'react-icons/io'
import { MdEditSquare } from 'react-icons/md'
import EditButton from './EditButton'
import useDemoCheck from '@/hooks/useAuthDemoCheck'

const Itineraries = ({
  categorizedData,
  tourId,
  setShowAlert,
  setDemoalert,
}: {
  categorizedData: any
  tourId: number
  setShowAlert: (boolean: boolean) => void
  setDemoalert: (boolean: boolean) => void
}) => {
  const { loading: demoLoading, isDemoUser } = useDemoCheck()
  const [editIndex, setEditIndex] = useState<number | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [loading, setLoading] = useState(false)
  const [defaultData, setDefaultData] = useState(categorizedData.relatedData)
  const [tempEdits, setTempEdits] = useState<any>({})

  // Track modified items (existing items with changes)
  const [modifiedItems, setModifiedItems] = useState<Set<number>>(new Set())

  // Track new items (items to be inserted)
  const [newItems, setNewItems] = useState<Set<number>>(new Set())

  // Track items marked for deletion (store IDs, not indices)
  const [itemsToDelete, setItemsToDelete] = useState<Set<number>>(new Set())

  const handleSetEditMode = (index: number) => {
    setEditIndex(index)
    setIsEditing(true)
    setTempEdits({
      day_title: defaultData.itineraries[index].day_title,
      day_description: defaultData.itineraries[index].day_description,
    })
  }

  const handleCancelEditMode = () => {
    setEditIndex(null)
    setIsEditing(false)
    setTempEdits({})
  }

  const handleTextChange = (value: string, key: string) => {
    setTempEdits((prev: any) => ({
      ...prev,
      [key]: value,
    }))
  }

  const handleToggleDelete = (index: number, checked: boolean) => {
    const item = defaultData.itineraries[index]

    if (!item.id) {
      // For new items without IDs, just remove them from the array
      const updatedItineraries = defaultData.itineraries.filter(
        (_: any, i: number) => i !== index
      )

      setDefaultData({
        ...defaultData,
        itineraries: updatedItineraries,
      })

      // Remove from newItems tracking
      setNewItems((prev) => {
        const updated = new Set(prev) // what ever the prev is

        updated.delete(index)
        // Adjust indices for items after the deleted one
        const adjustedSet = new Set<number>()
        updated.forEach((i) => {
          // drop the stack by one
          adjustedSet.add(i > index ? i - 1 : i) // shift all indexes after deleted one down by one
        })
        // console.log(adjustedSet)

        return adjustedSet
      })
      return
    }

    // For existing items with IDs, mark for deletion
    setItemsToDelete((prev) => {
      const updated = new Set(prev)
      if (checked) {
        updated.add(item.id)
      } else {
        updated.delete(item.id)
      }
      return updated
    })
  }

  const handleSaveToDB = async () => {
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
    if (
      modifiedItems.size === 0 &&
      newItems.size === 0 &&
      itemsToDelete.size === 0
    ) {
      console.log('No changes to save')
      return
    }

    setLoading(true)

    // Get modified existing items (exclude items marked for deletion)
    const itemsToUpdate = Array.from(modifiedItems)
      .map((index) => defaultData.itineraries[index])
      .filter((item) => !itemsToDelete.has(item.id))

    // Get new items to insert
    const itemsToInsert = Array.from(newItems).map((index) => ({
      ...defaultData.itineraries[index],
    }))

    // Get IDs to delete
    const idsToDelete = Array.from(itemsToDelete)

    // console.log('Items to update:', itemsToUpdate)
    // console.log('Items to insert:', itemsToInsert)
    // console.log('Items to delete:', idsToDelete)

    try {
      const res = await itinerariesUpdate(
        tourId,
        itemsToUpdate,
        itemsToInsert,
        idsToDelete
      )
      // console.log('Server response:', res)

      if (res.success) {
        // Remove deleted items from local state
        if (idsToDelete.length > 0) {
          const updatedItineraries = defaultData.itineraries.filter(
            (item: any) => !itemsToDelete.has(item.id)
          )
          setDefaultData({
            ...defaultData,
            itineraries: updatedItineraries,
          })
        }

        // Update the local state with the returned data (which includes new IDs)
        if (res.insertedItems && res.insertedItems.length > 0) {
          const updatedItineraries = [...defaultData.itineraries]

          // Replace temporary items with items that have database IDs
          res.insertedItems.forEach((insertedItem: any) => {
            const index = updatedItineraries.findIndex(
              (item) => !item.id && item.day_number === insertedItem.day_number
            )
            if (index !== -1) {
              updatedItineraries[index] = insertedItem
            }
          })

          setDefaultData({
            ...defaultData,
            itineraries: updatedItineraries,
          })
        }

        // Clear tracking sets after successful update
        setModifiedItems(new Set())
        setNewItems(new Set())
        setItemsToDelete(new Set())
        setShowAlert(true)
      }
    } catch (error) {
      console.error('Error updating itineraries:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSaveToDom = (index: number) => {
    const updatedItineraries = [...defaultData.itineraries]
    updatedItineraries[index] = {
      ...updatedItineraries[index],
      ...tempEdits,
    }

    setDefaultData({
      ...defaultData,
      itineraries: updatedItineraries,
    })

    // Check if this is a new item (no ID) or existing item
    const item = updatedItineraries[index]
    if (item.id) {
      // Existing item - mark as modified
      setModifiedItems((prev) => new Set(prev).add(index))
    } else {
      // New item - mark as new
      setNewItems((prev) => new Set(prev).add(index))
    }

    // console.log('items updated: ', updatedItineraries[index])

    setEditIndex(null)
    setIsEditing(false)
    setTempEdits({})
  }

  const handleAddDay = () => {
    // console.log('adding day...')
    const newDay = {
      // No ID for new items - this is how we identify them
      day_description: 'Enter Text',
      day_title: 'Enter Title',
      day_number: defaultData.itineraries.length + 1,
      tour_id: tourId,
    }

    const updatedDataArray = [...defaultData.itineraries, newDay]

    setDefaultData({
      ...defaultData,
      itineraries: updatedDataArray,
    })

    // Mark the new item index as "new"
    const newIndex = updatedDataArray.length - 1
    setNewItems((prev) => new Set(prev).add(newIndex))
  }

  const getTotalChanges = () =>
    modifiedItems.size + newItems.size + itemsToDelete.size

  return (
    <div>
      <h3 className='text-2xl my-5'>Itineraries</h3>
      <div className='mb-5'>
        {loading ? (
          <div className='flex items-center space-x-5 cursor-default'>
            <div className='animate-spin h-[30px] w-[30px] border-t-black rounded-full border-[4px] border-green-600'></div>
            <p className='capitalize text-xl'>updating</p>
          </div>
        ) : (
          <div className='flex items-center space-x-3'>
            <EditButton onClick={handleSaveToDB} />
            {getTotalChanges() > 0 && (
              <div className='flex items-center space-x-2'>
                {modifiedItems.size > 0 && (
                  <span className='text-sm text-orange-600'>
                    {modifiedItems.size} modified
                  </span>
                )}
                {newItems.size > 0 && (
                  <span className='text-sm text-green-600'>
                    {newItems.size} new
                  </span>
                )}
                {itemsToDelete.size > 0 && (
                  <span className='text-sm text-red-600'>
                    {itemsToDelete.size} to delete
                  </span>
                )}
              </div>
            )}
          </div>
        )}
      </div>
      {Object.entries(defaultData || {}).map(([key, value]) => (
        <div key={key}>
          {key === 'itineraries' && (
            <ul>
              <Accordion
                type='single'
                collapsible={!isEditing}
                className='w-full'
                defaultValue='item-0'
              >
                {(value as any[]).map((item, i) => {
                  const isModified = modifiedItems.has(i)
                  const isNew = newItems.has(i)
                  const isMarkedForDeletion =
                    item.id && itemsToDelete.has(item.id)

                  return (
                    <AccordionItem key={i} value={`item-${i}`}>
                      <AccordionTrigger
                        className={`mb-3 px-5 ${
                          isMarkedForDeletion
                            ? 'bg-red-200 border-l-4 border-red-500 opacity-60'
                            : isNew
                            ? 'bg-green-200 border-l-4 border-green-500'
                            : isModified
                            ? 'bg-orange-200 border-l-4 border-orange-500'
                            : 'bg-blue-200'
                        }`}
                      >
                        <div className='w-full flex justify-between relative'>
                          {editIndex === i ? (
                            <input
                              type='text'
                              id='day_title'
                              name='day_title'
                              value={tempEdits.day_title || ''}
                              className='rounded-md w-3/4 px-1 py-2'
                              onChange={(e) =>
                                handleTextChange(e.target.value, 'day_title')
                              }
                            />
                          ) : (
                            <div className='flex items-center gap-2'>
                              <p
                                className={
                                  isMarkedForDeletion ? 'line-through' : ''
                                }
                              >
                                {item.day_title}
                              </p>
                              {isNew && (
                                <span className='text-xs bg-green-600 text-white px-2 py-0.5 rounded'>
                                  NEW
                                </span>
                              )}
                              {isModified && !isMarkedForDeletion && (
                                <span className='text-xs bg-orange-600 text-white px-2 py-0.5 rounded'>
                                  MODIFIED
                                </span>
                              )}
                              {isMarkedForDeletion && (
                                <span className='text-xs bg-red-600 text-white px-2 py-0.5 rounded'>
                                  TO DELETE
                                </span>
                              )}
                            </div>
                          )}
                          <p>Day ({item.day_number})</p>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className='flex flex-col gap-4 text-balance'>
                        {editIndex === i ? (
                          <div className='flex space-x-2 items-center'>
                            <IoMdCheckmarkCircle
                              className='text-green-600 text-xl cursor-pointer hover:text-green-700'
                              title='Save'
                              onClick={() => handleSaveToDom(i)}
                            />
                            <IoMdCloseCircle
                              className='text-red-600 text-xl cursor-pointer hover:text-red-700'
                              title='Cancel'
                              onClick={() => handleCancelEditMode()}
                            />
                          </div>
                        ) : (
                          <div className='flex justify-end space-x-3 items-center'>
                            <label htmlFor={`delete-${i}`}>
                              mark for delete
                            </label>
                            <Checkbox
                              id={`delete-${i}`}
                              checked={isMarkedForDeletion}
                              onCheckedChange={(checked) =>
                                handleToggleDelete(i, checked as boolean)
                              }
                              className='rounded-full border-red-500 data-[state=checked]:border-red-600 data-[state=checked]:bg-red-600 data-[state=checked]:text-white dark:data-[state=checked]:border-red-700 dark:data-[state=checked]:bg-red-700 w-[20px] h-[20px]'
                            />
                            <button
                              onClick={() => handleSetEditMode(i)}
                              className='cursor-pointer'
                            >
                              <MdEditSquare className='text-black text-2xl' />
                            </button>
                          </div>
                        )}
                        {editIndex === i ? (
                          <textarea
                            className='min-h-[250px] outline-none -mt-2 border rounded-lg border-rose-400 p-3'
                            name='day_description'
                            id='day_description'
                            value={tempEdits.day_description || ''}
                            onChange={(e) =>
                              handleTextChange(
                                e.target.value,
                                'day_description'
                              )
                            }
                          ></textarea>
                        ) : (
                          <p
                            className={
                              isMarkedForDeletion
                                ? 'line-through opacity-60'
                                : ''
                            }
                          >
                            {item.day_description}
                          </p>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  )
                })}
              </Accordion>
            </ul>
          )}
        </div>
      ))}
      <div className='flex justify-end'>
        <button
          onClick={handleAddDay}
          className='flex items-center space-x-3 bg-blue-300 px-4 py-1 rounded'
        >
          <IoMdAddCircleOutline />
          <span className='capitalize'>add day</span>
        </button>
      </div>
    </div>
  )
}

export default Itineraries
