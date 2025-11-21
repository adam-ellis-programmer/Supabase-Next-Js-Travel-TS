'use server'

import { createClient } from '../../server'
// ==========================================================================================================
// -- GET ALL TOURS ADMIN
// ==========================================================================================================
export async function getToursAdmin() {
  const supabase = await createClient()
}
