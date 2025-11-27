'use server'
import { Indent } from 'lucide-react'
import { createClient } from '../../../server'
import { error } from 'console'

export const createLandingPageAction = async (data) => {
  const supabase = await createClient()
  return data
}

// Option 1: Flatten on Submit (Current Approach)
// Option 2: Use JSONB in Database (Better Long-term)

// Transform nested object to flat structure for databas
// const dataForServer = {
//   countryName: formData.countryName,
//   slug: formData.slug,
//   // ... other fields

//   // Flatten quickFacts
//   best_time: formData.quickFacts.bestTime,
//   currency: formData.quickFacts.currency,
//   language: formData.quickFacts.language,
//   timezone: formData.quickFacts.timezone,
//   visa: formData.quickFacts.visa,

//   // ... rest of data
// }
