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
        `best_seller,
          tour_name,
          destinations,
          duration,
          group_size,
          description,
          tags,
          price,
          image:tour_images(image_url)
            `
      )
      .eq('show_case', true)
      .limit(1, options)
      .limit(4)

    if (error || !data) {
      throw new Error('Failed to load hero')
    }

    return data
  }
  // get popular destinations (countries)

  static async getPopular() {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from('countries')
      .select(
        `
      banner_img_url,
      country_name,
      currency_code,
      flag_emoji,
      img_url,
      continent
        `
      )
      .limit(8)

    if (error || !data) {
      throw new Error('Failed to load hero')
    }
    return data
  }

  static async getActivities() {
    const supabase = await createClient()
    const { data, error } = await supabase.from('activities').select(`*`)
    return data
  }
  // ==================
  // HERO
  // ==================
  static async getHero() {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from('hero_sections')
      .select(
        `
        heading,
        id,
        image_url,
        subheading
        `
      )
      .eq('page_location', 'home')
      .limit(1)

    if (error || !data) {
      throw new Error('Failed to load hero')
    }
    return data // TypeScript knows this is never null
  }

  // get activities
  // get reviews
  // get heo
}
