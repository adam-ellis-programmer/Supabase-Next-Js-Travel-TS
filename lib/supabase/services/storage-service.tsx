// lib/supabase/services/storage-service.ts
import { createClient } from '@/lib/supabase/server'

export class a {
  //===================
  //--SINGLE UPLOAD
  //===================
  static async uploadTourImage(
    tourId: number,
    file: File,
    fileName: string
  ): Promise<
    | { success: true; url: string; path: string }
    | { success: false; error: string }
  > {
    const supabase = await createClient()

    // Create unique file path
    const timestamp = Date.now()
    const filePath = `tours/${tourId}/${timestamp}-${fileName}`

    // Step 1: Upload file
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('tour-images')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false,
      })

    if (uploadError) {
      console.error('Upload error:', uploadError)
      return { success: false, error: uploadError.message }
    }

    // Step 2: Get public URL
    const { data: urlData } = supabase.storage
      .from('tour-images')
      .getPublicUrl(uploadData.path)

    return {
      success: true,
      url: urlData.publicUrl,
      path: uploadData.path,
    }
  }
  //===================
  //--MULTI UPLOAD
  //===================
  static async uploadMultipleTourImages(
    tourId: number,
    files: File[],
    fileNames: string[]
  ): Promise<
    | { success: true; images: { url: string; path: string }[] }
    | { success: false; error: string }
  > {
    const supabase = await createClient()
    const uploadedImages: { url: string; path: string }[] = []

    try {
      for (let i = 0; i < files.length; i++) {
        const file = files[i]
        const fileName = fileNames[i]
        const timestamp = Date.now()
        const filePath = `tours/${tourId}/${timestamp}-${i}-${fileName}`

        // Upload
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('tour-images')
          .upload(filePath, file, {
            cacheControl: '3600',
            upsert: false,
          })

        if (uploadError) {
          return { success: false, error: uploadError.message }
        }

        // Get URL
        const { data: urlData } = supabase.storage
          .from('tour-images')
          .getPublicUrl(uploadData.path)

        uploadedImages.push({
          url: urlData.publicUrl,
          path: uploadData.path,
        })
      }

      return { success: true, images: uploadedImages }
    } catch (error) {
      console.error('Upload multiple images error:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Upload failed',
      }
    }
  }
}
