// lib/supabase/server-auth.ts
import { createClient } from '@/lib/supabase/server'

export async function getServerUser() {
  const supabase = await createClient()
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()
  return { user, error }
}

// Add this new function to get user with profile
export async function getServerUserWithProfile() {
  const supabase = await createClient()

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()

  if (authError || !user) {
    return { user: null, profile: null, error: authError }
  }

  // Fetch the user's profile
  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  return { user, profile, error: profileError }
}

// Helper function to check if user is admin
export async function isUserAdmin() {
  const { profile } = await getServerUserWithProfile()
  return profile?.user_role === 'admin'
}
