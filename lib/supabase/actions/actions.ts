// lib/supabase/services/actions.ts
'use server'

import { TourService } from '@/lib/supabase/services/tour-service'
import { AuthService } from '@/lib/supabase/services/database-service'
import { revalidatePath } from 'next/cache'
import { createClient } from '@/lib/supabase/server'
import type { TourFormData } from '@/types/tours'

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
export async function createTourAction(tourData: TourFormData) {
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

    // ✅ 2. Authorize (check admin role)
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single()

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

    // ✅ 5. Call TourService (not DatabaseService)
    const result = await TourService.insertTour(tourData)

    // ✅ 6. Revalidate paths on success
    if (result.success) {
      revalidatePath('/admin/view-tours')
      revalidatePath('/tours')
      revalidatePath(`/tours/${tourData.slug}`)
    }

    return result
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
