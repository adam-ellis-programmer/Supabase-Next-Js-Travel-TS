import { createClient } from '@/lib/supabase/server'

export class HomePage {
  // ...
  static async getShowCase() {
    // get show_case
    const supabase = await createClient()

    const options = { referencedTable: 'tour_images' }

    const { data, error } = await supabase
      .from('tours')
      .select(
        `*,
      image:tour_images(image_url)`
      )
      .eq('show_case', true)
      .limit(1, options)
      .limit(4)

    return data
  }
  // get popular destinations (countries)

  static async getPopular() {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from('countries')
      .select(`*`)
      .limit(4)
    return data
  }
  static async getActivities() {
    const supabase = await createClient()
    const { data, error } = await supabase.from('activities').select(`*`)
    return data
  }

  // get activities
  // get reviews
  // get heo
}
