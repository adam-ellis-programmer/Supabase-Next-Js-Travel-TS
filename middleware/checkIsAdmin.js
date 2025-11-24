'use server'

import { createClient } from '../lib/supabase/server'

export async function checkIsAdmin(userId, userLevel) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('profiles')
    .select(`*`)
    .eq('id', 'aa0d9363-74c0-45e9-a3cb-ed3d262f85f7')

  const isAdmin = data[0].user_role === 'admin'
  const accessLevel = data[0].role_level === 5

  if (isAdmin && accessLevel >= userLevel) {
  }
  return {
    isAdmin,
    accessLevel,
  }
}

// if (isAdmin && accessLevel >= userLevel) {
//   return true
// }
// return false
