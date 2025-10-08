import { createClient } from '@/lib/supabase/server'

export class StorageService {
  //==================
  //-UPLOAD IMAGES
  //==================

  static async uploadImage(
    bucketName: string,
    fileName: string,
    avatarFile: File
  ) {
    // ...
    const supabase = await createClient()
    const { data, error } = await supabase.storage
      .from(bucketName)
      .upload(fileName, avatarFile, {
        cacheControl: '3600',
        upsert: false,
      })

    if (error) {
      console.error('Upload error:', error)
      return { success: false, error: error.message }
    }

    const { data: imgUrl } = supabase.storage
      .from(bucketName)
      .getPublicUrl(data.path)
    return { success: true, url: imgUrl }
  }
}
