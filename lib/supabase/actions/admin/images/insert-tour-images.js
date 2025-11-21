'use server'

import { createClient } from '../../../server'

export async function insertTourImages(formData) {
  const supabase = await createClient()

  const tourId = formData.get('tourId')
  const uploadedFiles = []

  for (const [key, val] of formData.entries()) {
    if (key.startsWith('file-')) {
      // Upload to bucket 'tour-images' with path 'tours/262/filename.jpg'
      const filePath = `tours/${tourId}/${val.name}`

      const { data, error } = await supabase.storage
        .from('tour-images')
        .upload(filePath, val)

      if (error) {
        console.log('Upload error:', error)
        continue
      }

      console.log('✅ Upload success:', data)

      // Get public URL from the SAME bucket
      const { data: urlData } = supabase.storage
        .from('tour-images') // ✅ Same bucket name
        .getPublicUrl(filePath) // ✅ Use the path, not fullPath

      console.log('Public URL:', urlData.publicUrl)

      // Save to database
      const { data: dbData, error: dbError } = await supabase
        .from('tour_images')
        .insert({
          tour_id: tourId,
          image_url: urlData.publicUrl,
          storage_path: filePath,
        })
        .select()
        .single()

      if (!dbError) {
        uploadedFiles.push(dbData)
      }
    }
  }

  return {
    success: true,
    uploadedFiles,
  }
}
