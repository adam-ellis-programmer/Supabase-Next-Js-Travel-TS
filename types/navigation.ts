// Navigation Type Definitions

export interface TourImage {
  id: string
  tour_id: string
  image_url: string
  caption?: string
  display_order?: number
}

export interface Tour {
  id: string
  tour_name: string
  tour_images: TourImage[]
  country?: string
  continent?: string
  price?: number
  duration?: number
  description?: string
  // Add other tour properties as needed
}

export interface CountryTours {
  [countryName: string]: Tour[]
}

export interface ContinentData {
  text: string
  slug: string
  tours: CountryTours
  img?: string
}

export interface SortedContinents {
  [continentName: string]: ContinentData
}

export interface ToursByCountry {
  text: string
  slug: string
  tours: Tour[]
}

export interface SortedTours {
  [countryName: string]: ToursByCountry
}

// Props interfaces for components
export interface NavDataProps {
  sortedContinents: SortedContinents
  sortedTours: SortedTours
}

export interface SuperNavProps {
  type: 'tours' | 'destinations'
  sortedContinents: SortedContinents
  sortedTours: SortedTours
}

export interface MobileNavProps {
  sortedContinents: SortedContinents
  sortedTours: SortedTours
}

// Helper type for continent entries
export type ContinentEntry = [string, ContinentData]

// Helper type for country/tour entries
export type CountryToursEntry = [string, Tour[]]
