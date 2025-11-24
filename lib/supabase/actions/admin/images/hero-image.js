'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '../../../server'

// ==========================================================================================================
// -- GET ALL TOURS ADMIN
// ==========================================================================================================
export async function updateHeroImage(formData) {
  const supabase = await createClient()
  const tourId = formData.get('tourId')

  // get tour record
  const { data: tourData, error } = await supabase
    .from('tours')
    .select(`*`)
    .eq('id', tourId)
  const tourDataUrl = tourData[0].main_hero_url
  const heroPath = tourData[0].hero_path
  console.log('heroPath', heroPath)

  // detect if is a seeded image then remove from storage (do not run if no image in storage)
  if (!tourDataUrl.includes('https://images.unsplash.com')) {
    console.log('image NOT is a seeded image!!')

    const { data: removedData, error } = await supabase.storage
      .from('tour-images')
      .remove([heroPath])

    if (error) {
      console.log(error)
    }

    if (removedData) {
      console.log('removed: ', removedData)
    }
  }

  const filePath = `/hero/${tourId}`
  const heroImg = formData.get('hero_file')

  const { data: insertedData, error: fileUploadError } = await supabase.storage
    .from('tour-images')
    .upload(filePath, heroImg, {
      cacheControl: '3600',
      upsert: true,
    })

  console.log('fileUploadError', fileUploadError)

  if (!error) {
    console.log('upload completed!')
  }

  const { data: publicUrldata } = supabase.storage
    .from('tour-images')
    .getPublicUrl(insertedData.path)

  console.log('publicUrldata', publicUrldata)

  // ✅ Add cache-busting timestamp
  const urlWithCacheBust = `${publicUrldata.publicUrl}?v=${Date.now()}`

  const { data: updateData, error: updateError } = await supabase
    .from('tours')
    .update({
      main_hero_url: urlWithCacheBust,
      hero_path: insertedData.path,
    })
    .eq('id', tourId)
    .select()

  console.log(' nupdate error:\n')
  console.log(updateError)

  revalidatePath('/tours')
  revalidatePath(`/tours/${tourId}`)
  revalidatePath(`/admin/edit-tour/${tourId}`)
  return {
    insertedData,
    tourData,
    tourDataUrl,
    publicUrldata,
    updateData,
  }
}
