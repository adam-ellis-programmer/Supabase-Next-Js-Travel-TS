'use server'

import { createClient } from '../../../server'

export async function handleTest() {
  const supabase = await createClient()

  const { data: rootFolders, error: rootError } = await supabase.storage
    .from('tour-images')
    .list('', {
      limit: 100,
      offset: 0,
    })

  return { rootFolders }
}
