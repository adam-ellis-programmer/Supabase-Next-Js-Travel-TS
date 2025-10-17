import { createClient } from '@/lib/supabase/server'
export class NavService {
  static async getNavData() {
    const supabase = await createClient()

    const { data: countriesData, error } = await supabase
      .from('countries')
      .select()

    const { data: toursData, error: toursError } = await supabase
      .from('tours')
      .select()

    if (!countriesData || !toursData || error) {
      throw new Error('Error getting navigation data!!')
    }

    return { countriesData, toursData }
  }
}
