// lib/supabase/actions.ts
'use server'

import { AuthService } from '@/lib/supabase/database-service'
import { revalidatePath } from 'next/cache'

export async function updateUserProfileAction(
  userId: string,
  updates: { email?: string; full_name?: string }
) {
  const result = await AuthService.updateUserProfiles(userId, updates)

  if (result.success) {
    // Revalidate the account page to show fresh data
    revalidatePath('/auth/account')
  }

  return result
}
