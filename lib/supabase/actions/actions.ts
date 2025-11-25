// lib/supabase/services/actions.ts
'use server'

import { TourService } from '@/lib/supabase/services/tour-service'
import { AuthService } from '@/lib/supabase/services/database-service'
import { revalidatePath } from 'next/cache'
import { createClient } from '@/lib/supabase/server'
import type { TourFormData } from '@/types/tours'
import { StorageService } from '../services/storage-service'

// ============================================
// UPDATE USER PROFILE ACTION
// ============================================
export async function updateUserProfileAction(updates: {
  email?: string
  full_name?: string
}) {
  try {
    const supabase = await createClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return { success: false, error: 'Unauthorized: Please log in' }
    }

    if (!updates.email && !updates.full_name) {
      return { success: false, error: 'No updates provided' }
    }

    const result = await AuthService.updateUserProfiles(user.id, updates)

    if (result.success) {
      revalidatePath('/auth/account')
    }

    return result
  } catch (error) {
    console.error('Update profile action error:', error)
    return {
      success: false,
      error: 'An unexpected error occurred',
    }
  }
}

// ============================================
// CREATE TOUR ACTION
// ============================================
interface BookingSlot {
  bookablePlaces: number
  show: boolean
  month: string
  year: string
  dates: Array<{ date: string; places: number }>
}

type ActionResult =
  | { success: true; tourId: number; message: string }
  | { success: false; error: string }

interface Dates {
  bookablePlaces: number
  show: boolean
  month: string
  year: string
  dates: { date: string; places: number }[]
}

// ============================================
// CREATE TOUR ACTION
// ============================================
export async function createTourAction(
  availableDates: BookingSlot[],
  tourData: TourFormData,
  imageFiles?: File[]
): Promise<ActionResult> {
  try {
    // ✅ 1. Authenticate
    const supabase = await createClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return {
        success: false,
        error: 'Unauthorized: Please log in',
      }
    }

    // ✅ 2. Authorize (check admin role) - commented out for now
    // const { data: profile } = await supabase
    //   .from('profiles')
    //   .select('role')
    //   .eq('id', user.id)
    //   .single()

    // if (profile?.role !== 'admin') {
    //   return {
    //     success: false,
    //     error: 'Unauthorized: Admin access required',
    //   }
    // }

    // ✅ 3. Validate required fields
    if (!tourData.tourName || !tourData.country) {
      return {
        success: false,
        error: 'Missing required fields: Tour name and country are required',
      }
    }

    if (!tourData.slug) {
      return {
        success: false,
        error: 'Missing slug',
      }
    }

    // ✅ 4. Additional validation
    if (tourData.price <= 0) {
      return {
        success: false,
        error: 'Price must be greater than 0',
      }
    }

    if (tourData.groupSize <= 0) {
      return {
        success: false,
        error: 'Group size must be greater than 0',
      }
    }

    // ✅ 5. Create tour FIRST (we need the tourId)
    const result = await TourService.insertTour(tourData)

    if (!result.success) {
      return result
    }

    const tourId = result.tourId

    // ✅ 6. Insert booking slots with dates
    const bookingSlotsResult = await TourService.insertBookingSlots(
      tourId,
      availableDates
    )

    if (!bookingSlotsResult.success) {
      return {
        success: false,
        error: `Tour created but booking slots failed: ${bookingSlotsResult.error}`,
      }
    }

    // ✅ 7. Upload images if provided
    if (imageFiles && imageFiles.length > 0) {
      const fileNames = imageFiles.map((file) => file.name)

      const uploadResult = await StorageService.uploadMultipleTourImages(
        tourId,
        imageFiles,
        fileNames
      )
      //
      if (!uploadResult.success) {
        return {
          success: false,
          error: `Tour created but image upload failed: ${uploadResult.error}`,
        }
      }

      // ✅ 8. Save image URLs to database
      const imageInserts = uploadResult.images.map((img, index) => ({
        tour_id: tourId,
        image_url: img.url,
        storage_path: img.path,
        image_alt: tourData.tourName,
        display_order: index,
        is_primary: index === 0,
      }))

      const { error: imageError } = await supabase
        .from('tour_images')
        .insert(imageInserts)

      if (imageError) {
        console.error('Failed to save image URLs:', imageError)
        return {
          success: false,
          error:
            'Tour and images uploaded but failed to save image data to database',
        }
      }
    }

    // ✅ 9. Revalidate paths on success
    revalidatePath('/admin/view-tours')
    revalidatePath('/tours')
    revalidatePath(`/tours/${tourData.slug}`)

    // ✅ 10. Return success with message
    return {
      success: true,
      tourId,
      message: `Tour created successfully with ${
        availableDates.length
      } booking slot(s)${
        imageFiles?.length ? ` and ${imageFiles.length} images` : ''
      }!`,
    }
  } catch (error) {
    console.error('Create tour action error:', error)
    return {
      success: false,
      error: 'An unexpected error occurred',
    }
  }
}

// ============================================
// UPDATE TOUR ACTION
// ============================================
export async function updateTourAction(
  tourId: number,
  tourData: Partial<TourFormData>
) {
  try {
    const supabase = await createClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return { success: false, error: 'Unauthorized: Please log in' }
    }

    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single()

    if (profile?.role !== 'admin') {
      return {
        success: false,
        error: 'Unauthorized: Admin access required',
      }
    }

    // Convert camelCase to snake_case for update
    const updates: any = {}

    if (tourData.tourName) updates.tour_name = tourData.tourName
    if (tourData.country) updates.country = tourData.country
    if (tourData.price) updates.price = tourData.price
    // ... add other fields as needed

    const result = await TourService.updateTour(tourId, updates)

    if (result.success) {
      revalidatePath('/admin/view-tours')
      revalidatePath('/tours')
    }

    return result
  } catch (error) {
    console.error('Update tour action error:', error)
    return {
      success: false,
      error: 'An unexpected error occurred',
    }
  }
}

// ============================================
// DELETE TOUR ACTION
// ============================================
export async function deleteTourAction(tourId: number) {
  try {
    const supabase = await createClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return { success: false, error: 'Unauthorized: Please log in' }
    }

    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single()

    if (profile?.role !== 'admin') {
      return {
        success: false,
        error: 'Unauthorized: Admin access required',
      }
    }

    const result = await TourService.deleteTour(tourId)

    if (result.success) {
      revalidatePath('/admin/view-tours')
      revalidatePath('/tours')
    }

    return result
  } catch (error) {
    console.error('Delete tour action error:', error)
    return {
      success: false,
      error: 'An unexpected error occurred',
    }
  }
}
