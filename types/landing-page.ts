// types/landing-page.ts

/**
 * Database types - matches the structure returned from Supabase
 */

export interface LandingPageDestination {
  id: string
  landing_page_id: string
  name: string
  image_url: string
  description: string
  display_order: number
  created_at: string
  updated_at: string
}

export interface LandingPageExperience {
  id: string
  landing_page_id: string
  icon: string
  title: string
  description: string
  display_order: number
  created_at: string
  updated_at: string
}

export interface LandingPageTravelTip {
  id: string
  landing_page_id: string
  icon: string
  title: string
  tip: string
  display_order: number
  created_at: string
  updated_at: string
}

/**
 * Main landing page data type
 * This matches what your getPage() function returns
 */
export interface LandingPageData {
  id: string
  country_name: string
  slug: string
  tagline: string
  hero_image_url: string
  description: string
  best_time: string
  currency: string
  language: string
  timezone: string
  visa: string
  attractions: string[]
  is_active: boolean
  created_at: string
  updated_at: string
  // Related data (from joins)
  landing_page_destinations: LandingPageDestination[]
  landing_page_experiences: LandingPageExperience[]
  landing_page_travel_tips: LandingPageTravelTip[]
}

/**
 * Transformed types - used in your component after data transformation
 */

export interface CountryDestination {
  name: string
  image: string
  description: string
}

export interface CountryExperience {
  icon: any // React icon component (IconType from react-icons)
  title: string
  description: string
}

export interface CountryTravelTip {
  icon: any // React icon component (IconType from react-icons)
  title: string
  tip: string
}

export interface CountryData {
  name: string
  tagline: string
  heroImage: string
  description: string
  quickFacts: {
    bestTime: string
    currency: string
    language: string
    timezone: string
    visa: string
  }
  topDestinations: CountryDestination[]
  experiences: CountryExperience[]
  attractions: string[]
  travelTips: CountryTravelTip[]
}
