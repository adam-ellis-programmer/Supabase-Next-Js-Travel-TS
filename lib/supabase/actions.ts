// lib/supabase/actions.ts
'use server'

import { AuthService } from '@/lib/supabase/database-service'
import { revalidatePath } from 'next/cache'
import { createClient } from '@/lib/supabase/server'

export async function updateUserProfileAction(updates: {
  email?: string
  full_name?: string
}) {
  try {
    // ✅ 1. Get current user from session (SERVER-SIDE)
    const supabase = await createClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    // ✅ Return error object instead of undefined
    if (authError || !user) {
      return {
        success: false,
        error: 'Unauthorized: Please log in',
      }
    }

    // ✅ 2. Validate input (optional but recommended)
    if (!updates.email && !updates.full_name) {
      return {
        success: false,
        error: 'No updates provided',
      }
    }

    // ✅ 3. Call service with server-verified userId
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
