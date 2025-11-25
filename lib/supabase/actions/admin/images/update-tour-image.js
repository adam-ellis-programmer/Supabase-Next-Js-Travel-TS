'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '../../../server'
import { checkIsAdmin } from '@/middleware/checkIsAdmin'

// ==========================================================================================================
// -- GET ALL TOURS ADMIN
// ==========================================================================================================
export async function updateTourImage(formData) {
  const supabase = await createClient()
  const tourId = formData.get('tour-id')
  const imgId = formData.get('image-id')
  const file = formData.get('file-data')

  console.log('image-id', imgId)
  // console.log('formData', formData)
  console.log('file', file)
  // get tour images data to check if seeded and get storage path
  const { data: tourData, error } = await supabase
    .from('tour_images')
    .select(`*`)
    .eq('id', imgId)
    .eq('tour_id', tourId)

  const isSeeded = tourData[0].is_seeded // update to false
  const imgUrl = tourData[0].image_url // update always
  const storagePath = tourData[0].storage_path // only needed if not seeded

  if (!isSeeded) {
    //. Only delete from storage if seeded is false
    // Remove image from storage as no longer needed
    console.log('Not seeded: ', storagePath)
    const { data, error } = await supabase.storage
      .from('tour-images')
      .remove([storagePath])

    //. update url, storage path and set is_seeded to false
  }

  // ?v=${Date.now()}
  // Upload file to storage
  const newStoragePath = `tours/${tourId}/${file.name}`
  const { data: uploadData, error: fileUploadError } = await supabase.storage
    .from('tour-images')
    .upload(newStoragePath, file, {
      cacheControl: '3600',
      upsert: false,
    })

  // Get the public url
  const { data: publicUrlData } = supabase.storage
    .from('tour-images')
    .getPublicUrl(uploadData.path)

  const publicUrl = publicUrlData.publicUrl
  const path = uploadData.path
  const seeded = false

  // Update tour image record
  const { data: updateImgData, error: updateIMageDataError } = await supabase
    .from('tour_images')
    .update({ image_url: publicUrl, storage_path: path, is_seeded: seeded })
    .eq('id', imgId)
    .eq('tour_id', tourId)
    .select()

  return {
    success: true,
    formData,
    tourId,
    imgId,
    tourData,
    seeded: isSeeded,
    uploadData,
    publicUrlData,
    updateImgData,
    publicUrl,
    path,
    storagePath,
  }
}

//   for (const [key, val] of formData.entries()) {
// if (key.startsWith('file-')) {
