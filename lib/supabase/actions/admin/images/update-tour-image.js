'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '../../../server'

// ==========================================================================================================
// -- GET ALL TOURS ADMIN
// ==========================================================================================================
export async function updateTourImage(formData) {
  const supabase = await createClient()
  const tourId = formData.get('tourId')

  return {
    success: true,
    formData,
  }
}

//   for (const [key, val] of formData.entries()) {
// if (key.startsWith('file-')) {
