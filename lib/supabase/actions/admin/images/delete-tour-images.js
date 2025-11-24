'use server'

import { createClient } from '../../../server'

export async function deleteTourImages(imageId) {
  const supabase = await createClient()

  // Get the image from the images table
  const { data: img, error } = await supabase
    .from('tour_images')
    .select()
    .eq('id', imageId)

  // Instantiate that object
  const imageData = img[0]

  console.log('iamge data')
  console.log(imageData)
  const imageDataId = imageData.id
  console.log('image data id: ', imageDataId)

  // get the correct storage path
  const storage_path = imageData.storage_path
  let image_url = imageData.image_url

  // Only if seeded data is false delete from storage as seeded data are just unsplash urls
  if (!imageData.is_seeded) {
    console.log('deleting from storage bucket')
    // delete image from storage
    await supabase.storage.from('tour-images').remove([storage_path])
    console.log('sucess object deleted!')
  }

  // delete image data and url from images table
  const response = await supabase
    .from('tour_images')
    .delete()
    .eq('id', imageDataId)

  console.log('RES->', response)
  console.log('imsge data deleted successfully')

  return {
    success: true,
    data: {
      imageId,
      imageData,
      storage_path,
    },
  }
}

export async function deleteAll(data) {
  const supabase = await createClient()

  const objIds = new Set()
  const storagePaths = new Set()

  for (const img of data) {
    objIds.add(img.id)
    storagePaths.add(img.storage_path)
  }

  try {
    const { data, error } = await supabase.storage
      .from('tour-images')
      .remove(Array.from(storagePaths))

    const response = await supabase
      .from('tour_images')
      .delete()
      .in('id', objIds)

    console.log('done')
    return {
      success: true,
      data: Array.from(storagePaths),
    }
  } catch (error) {
    console.log('error', error)
  }

  return {
    data,
    objIds,
    storagePaths,
    success: false,
  }
}
