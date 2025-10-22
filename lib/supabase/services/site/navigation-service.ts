// lib/supabase/services/site/navigation-service.ts
import { getSlug } from '@/components/utils/regex'
import { createClient } from '@/lib/supabase/server'
import { cache } from 'react'

type ToursByCountry = {
  [country1: string]: {
    tours: Array<{
      country: any
      continent: any
      slug: any
      tour_images: Array<{
        image_url: string
      }>
    }>
    text: string
    count: number
  }
}

type ToursByContinentAndCountry = {
  [continent: string]: {
    tours: {
      [country: string]: Array<{
        country: any
        continent: any
        slug: any
        tour_images: Array<{
          image_url: string
        }>
      }>
    }
    count: number
    text: string
    slug: string
    img: string
  }
}

export class NavService {
  // Wrap the function with React's cache
  static getNavData = cache(async () => {
    console.log('🟢 SERVICE: Fetching nav data from database')
    const supabase = await createClient()

    const { data: countriesData, error } = await supabase
      .from('countries')
      .select()

    const { data: toursData, error: toursError } = await supabase.from('tours')
      .select(`
        id,
        country,
        continent,
        slug,
        tour_name, 
        tour_images(image_url)
      `)

    if (!countriesData || !toursData || error) {
      throw new Error('Error getting navigation data!!')
    }

    // Process data once in the service
    const sortedTours = toursData.reduce<ToursByCountry>((acc, item) => {
      if (!acc[item.country]) {
        acc[item.country] = { tours: [], text: '', count: 0 }
      }
      acc[item.country].tours.push(item)
      acc[item.country].text = item.country
      acc[item.country].count += 1
      return acc
    }, {})

    const sortedContinents = toursData.reduce<ToursByContinentAndCountry>(
      (acc, item) => {
        if (!acc[item.continent]) {
          acc[item.continent] = {
            tours: {},
            count: 0,
            text: '',
            slug: '',
            img: '',
          }
        }
        if (!acc[item.continent].tours[item.country]) {
          acc[item.continent].tours[item.country] = []
        }
        acc[item.continent].tours[item.country].push(item)
        acc[item.continent].count += 1
        acc[item.continent].text = item.continent
        acc[item.continent].slug = getSlug(item.continent)
        acc[item.continent].img = item.tour_images[0]?.image_url || ''
        return acc
      },
      {}
    )

    console.log('🟢 SERVICE: Data processed and cached')
    return { countriesData, toursData, sortedTours, sortedContinents }
  })
}
