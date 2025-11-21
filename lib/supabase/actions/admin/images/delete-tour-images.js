'use server'

import { createClient } from '../../../server'

export async function deleteTourImages(imageId) {
  const supabase = await createClient()

  const { data: img, error } = await supabase
    .from('tour_images')
    .select()
    .eq('id', imageId)

  const imageData = img[0]

  console.log('iamge data')
  console.log(imageData)

  const storage_path = imageData.storage_path
  let image_url = imageData.image_url

  if (!imageData.is_seeded) {
    console.log('only run this if not a seeded image')
    console.log('deleting from storage bucket')

    await supabase.storage.from('tour-images').remove([storage_path])
    console.log('sucess object deleted!')
  }
  // systems thinking
  // anticipatory thinking
  // situatinal awareness
  // temporal awearness
  // complx set of skills
  // history
  // own mind intelect focus
  // pattern reconission

  return {
    success: true,
    data: {
      imageId,
      imageData,
      storage_path,
    },
  }
}
