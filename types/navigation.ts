// Navigation Types for the Travel Site
export interface TourImage {
  image_url: string
}

export interface Tour {
  id: number
  country: string
  continent: string
  slug: string
  tour_name: string
  tour_images: TourImage[]
}

export interface ToursByCountryData {
  tours: Tour[]
  text: string
  count: number
}

export interface ToursByCountry {
  [country: string]: ToursByCountryData
}

export interface ToursByContinent {
  tours: {
    [country: string]: Tour[]
  }
  count: number
  text: string
  slug: string
  img: string
}

export interface ToursByContinentAndCountry {
  [continent: string]: ToursByContinent
}

// Props interfaces for components
export interface NavigationProps {
  sortedContinents: ToursByContinentAndCountry
  sortedTours: ToursByCountry
}

export interface SuperNavProps extends NavigationProps {
  type: 'tours' | 'destinations'
}

// Legacy interfaces (kept for compatibility if needed)
export interface Destination {
  name: string
  slug: string
  image?: string
  featured?: boolean
}

export interface DestinationCategory {
  region: string
  destinations: Destination[]
  featuredImage?: string
  featuredDestination?: string
}

export interface MegaMenuData {
  tours: {
    categories: DestinationCategory[]
    featured: {
      title: string
      subtitle: string
      image: string
      link: string
    }
  }
  destinations: {
    categories: DestinationCategory[]
    featured: {
      title: string
      subtitle: string
      image: string
      link: string
    }
  }
}
