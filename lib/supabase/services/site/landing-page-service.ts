import { createClient } from '@/lib/supabase/server'

export class LandingPage {
  static async getPage(country: string) {
    const supabase = await createClient()

    const { data, error } = await supabase
      .from('landing_pages')
      .select(
        `*,
        landing_page_destinations(*),
        landing_page_experiences(*),
        landing_page_travel_tips(*)`
      )
      .eq('slug', country)

    if (error || !data) {
      throw new Error('Error getting landing page data!!')
    }

    return data
  }

  static async auth(page: string) {
    const supabase = await createClient()

    const { data, error } = await supabase
      .from('hero_sections')
      .select(`image_url`)
      .eq('page_location', page)

    if (error || !data) {
      throw new Error('Error getting landing page data!!')
    }

    return data
  }
}
