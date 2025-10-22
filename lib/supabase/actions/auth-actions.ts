'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

// =====================
// -- LOGOUT ACTION
// =====================
export async function logoutAction() {
  const supabase = await createClient()
  await supabase.auth.signOut()

  // This forces Next.js to refetch server components
  revalidatePath('/', 'layout')
}

// =====================
// -- LOGIN ACTION
// =====================
export async function loginAction(email: string, password: string) {
  const supabase = await createClient()

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    return { error: error.message }
  }

  // Revalidate to update server components
  revalidatePath('/', 'layout')

  return { error: null }
}
