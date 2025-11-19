'use server'

import { createClient } from '../../server'

export async function itinerariesUpdate(tourId, dataFromDom) {
  const supabase = await createClient()
  const updateIds = new Set()
  const newItems = [] // Array to store all processed items

  console.log('starting updaate process...')
  for (const item of dataFromDom) {
    const { index, updated_at, ...newItem } = item

    const { error } = await supabase
      .from('itineraries')
      .update(newItem)
      .eq('id', newItem.id)

    // // Add to the array
    // newItems.push(newItem)

    // // If you need to track IDs
    // if (item.id) {
    //   updateIds.add(item.id)
    // }
    console.log('item updated success;')
  }

  return {
    data: dataFromDom,
    updateIds: Array.from(updateIds), // Convert Set to Array for JSON serialization
    newItems, // Return all processed items
  }
}
