'use server'

import { createClient } from '../lib/supabase/server'

// For backend / server guard. (Page access from server)
export async function checkIsAdmin(tour_id) {
  const supabase = await createClient()

  const { data: tourData, error: tourDataError } = await supabase
    .from('tours')
    .select(`*`)
    .eq('id', tour_id)

  const pageAccessLevel = tourData[0].access
  console.log('pageAccessLevel', pageAccessLevel)

  const { data, error } = await supabase
    .from('profiles')
    .select(`*`)
    .eq('id', 'aa0d9363-74c0-45e9-a3cb-ed3d262f85f7')

  const isAdmin = data[0].user_role === 'admin'
  const correctRoleLevel = data[0].role_level >= pageAccessLevel

  console.log('correctRoleLevel', correctRoleLevel)
  // only allow acces if admin and correct role level
  if (isAdmin && correctRoleLevel) {
    return true
  }

  return false
}
