'use server'

import { createClient } from '../lib/supabase/server'
// get user from token!
// get user from token!
// For backend / server guard. (Page access from server)
export async function checkIsAdmin(tour_id) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user || !tour_id) return false

  // ===============
  // check tour
  // ===============
  const { data: tourData, error: tourDataError } = await supabase
    .from('tours')
    .select(`*`)
    .eq('id', tour_id)

  const pageAccessLevel = tourData[0].access
  // ===============
  // check profile
  // ===============
  const { data, error } = await supabase
    .from('profiles')
    .select(`*`)
    .eq('id', user?.id)

  const isAdmin = data[0].user_role === 'admin'
  const correctRoleLevel = data[0].role_level >= pageAccessLevel

  // ===============
  // only allow acces
  // if admin and has
  // correct role level
  // ===============
  if (isAdmin && correctRoleLevel) {
    return true
  }

  return false
}
