'use server'

import { createClient } from '../../server'

export async function updateArrayFields(dataFromDom, tourID) {
  const supabase = await createClient()

  try {
    const { data, error } = await supabase
      .from('tours')
      .select(`*`)
      .eq('id', tourID)
    if (data && !error) {
      console.log(data)
    }

    const updatedData = {
      ...data[0],
      ...dataFromDom,
    }

    const { data: updateData, error: updateError } = await supabase
      .from('tours')
      .update(updatedData)
      .eq('id', tourID)
      .select()

    if (!updateError) {
      console.log('update success')
      console.log(updateData)
    }
    return {
      data,
      dataFromDom,
      updatedData,
    }
  } catch (error) {
    console.log(error)
  }

  //   console.log('\n data from dom!')
  //   console.log(dataFromDom)
}
