// types/navigation.ts
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
