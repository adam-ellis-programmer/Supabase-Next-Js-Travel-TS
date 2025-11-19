'use server'

import { createClient } from '../../server'

export async function itinerariesUpdate(
  tourId,
  itemsToUpdate,
  itemsToInsert,
  idsToDelete
) {
  const supabase = await createClient()
  const updatedIds = []
  const insertedIds = []
  const deletedIds = []
  const errors = []

  console.log('Starting update process...')
  console.log('Items to update:', itemsToUpdate.length)
  console.log('Items to insert:', itemsToInsert.length)
  console.log('Items to delete:', idsToDelete?.length || 0)

  // Handle DELETES first
  if (idsToDelete && idsToDelete.length > 0) {
    const { data, error } = await supabase
      .from('itineraries')
      .delete()
      .in('id', idsToDelete)
      .eq('tour_id', tourId) // Safety check
      .select()

    if (error) {
      console.error('Delete error:', error)
      errors.push({ type: 'delete', error: error.message })
    } else {
      console.log('Items deleted successfully:', data.length)
      deletedIds.push(...idsToDelete)
    }
  }

  // Handle UPDATES for existing items
  if (itemsToUpdate && itemsToUpdate.length > 0) {
    for (const item of itemsToUpdate) {
      const { index, updated_at, created_at, ...updateData } = item

      if (!item.id) {
        console.warn('Skipping item without ID:', item)
        continue
      }

      const { data, error } = await supabase
        .from('itineraries')
        .update(updateData)
        .eq('id', item.id)
        .eq('tour_id', tourId)
        .select()
        .single()

      if (error) {
        console.error('Update error for ID', item.id, ':', error)
        errors.push({ id: item.id, error: error.message })
      } else {
        console.log('Item updated successfully:', item.id)
        updatedIds.push(item.id)
      }
    }
  }

  // Handle INSERTS for new items
  let insertedItems = []
  if (itemsToInsert && itemsToInsert.length > 0) {
    const dataToInsert = itemsToInsert.map((item) => {
      const { index, id, created_at, updated_at, ...cleanData } = item
      return {
        ...cleanData,
        tour_id: tourId,
      }
    })

    const { data, error } = await supabase
      .from('itineraries')
      .insert(dataToInsert)
      .select()

    if (error) {
      console.error('Insert error:', error)
      errors.push({ type: 'insert', error: error.message })
    } else {
      console.log('Items inserted successfully:', data.length)
      insertedItems = data
      insertedIds.push(...data.map((item) => item.id))
    }
  }

  const success = errors.length === 0

  return {
    success,
    updatedIds,
    insertedIds,
    deletedIds,
    insertedItems,
    totalUpdated: updatedIds.length,
    totalInserted: insertedIds.length,
    totalDeleted: deletedIds.length,
    errors: errors.length > 0 ? errors : undefined,
    message: success
      ? `Successfully updated ${updatedIds.length}, inserted ${insertedIds.length}, and deleted ${deletedIds.length} items`
      : `Completed with ${errors.length} error(s)`,
  }
}
