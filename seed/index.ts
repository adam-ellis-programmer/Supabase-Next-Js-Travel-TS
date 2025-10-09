import 'dotenv/config'
import { createServiceClient } from '@/lib/supabase/service'
import { booking_slot_dates } from './data/booking_slot_dates'
import { booking_slots } from './data/booking_slots'
import { itineraries } from './data/itineraries'
import { tour_images } from './data/tour_images'
import { tours } from './data/tours'

interface SeedResult {
  table: string
  success: boolean
  count?: number
  error?: string
}

export class DatabaseSeeder {
  private supabase: any

  constructor() {
    this.supabase = createServiceClient()
  }

  /**
   * Seed a single table with data
   */
  async seedTable(table: string, data: any[]): Promise<SeedResult> {
    try {
      console.log(`🌱 Seeding ${table}...`)

      const { error } = await this.supabase.from(table).insert(data)

      if (error) {
        console.error(`❌ Error seeding ${table}:`, error)
        return {
          table,
          success: false,
          error: error.message,
        }
      }

      console.log(`✅ Successfully seeded ${table} with ${data.length} records`)
      return {
        table,
        success: true,
        count: data.length,
      }
    } catch (error) {
      console.error(`❌ Exception seeding ${table}:`, error)
      return {
        table,
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      }
    }
  }

  /**
   * Clear all data from a table
   */
  async clearTable(table: string): Promise<SeedResult> {
    try {
      console.log(`🧹 Clearing ${table}...`)

      const { error } = await this.supabase.from(table).delete().neq('id', 0)

      if (error) {
        console.error(`❌ Error clearing ${table}:`, error)
        return {
          table,
          success: false,
          error: error.message,
        }
      }

      console.log(`✅ Successfully cleared ${table}`)
      return {
        table,
        success: true,
      }
    } catch (error) {
      console.error(`❌ Exception clearing ${table}:`, error)
      return {
        table,
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      }
    }
  }

  /**
   * Seed all tables in the correct order (respecting foreign key constraints)
   */
  async seedAll(clearFirst: boolean = false): Promise<SeedResult[]> {
    const results: SeedResult[] = []

    console.log('🚀 Starting database seeding...')
    console.log('================================\n')

    // Clear tables first if requested (in reverse order)
    if (clearFirst) {
      console.log('🧹 Clearing existing data...\n')

      const clearOrder = [
        'booking_slot_dates',
        'booking_slots',
        'tour_images',
        'itineraries',
        'tours',
      ]

      for (const table of clearOrder) {
        const result = await this.clearTable(table)
        results.push(result)
      }

      console.log('\n')
    }

    // ✅ Step 1: Insert tours and get their IDs
    console.log(`🌱 Seeding tours...`)
    const { data: insertedTours, error: toursError } = await this.supabase
      .from('tours')
      .insert(tours)
      .select('id, slug')

    if (toursError) {
      console.error(`❌ Error seeding tours:`, toursError)
      results.push({
        table: 'tours',
        success: false,
        error: toursError.message,
      })
      return results
    }

    console.log(`✅ Successfully seeded tours with ${tours.length} records`)
    results.push({
      table: 'tours',
      success: true,
      count: tours.length,
    })

    // Create a mapping: original index → actual database ID
    const tourIdMap = new Map<number, number>()
    insertedTours.forEach((tour: any, index: number) => {
      tourIdMap.set(index + 1, tour.id) // Map fake id (1,2,3) to real id
    })

    // ✅ Step 2: Insert itineraries with correct tour_ids
    const itinerariesWithRealIds = itineraries.map((itinerary) => ({
      ...itinerary,
      tour_id: tourIdMap.get(itinerary.tour_id) || itinerary.tour_id,
    }))

    const itinerariesResult = await this.seedTable(
      'itineraries',
      itinerariesWithRealIds
    )
    results.push(itinerariesResult)

    // ✅ Step 3: Insert tour_images with correct tour_ids
    const tourImagesWithRealIds = tour_images.map((image) => ({
      ...image,
      tour_id: tourIdMap.get(image.tour_id) || image.tour_id,
    }))

    const tourImagesResult = await this.seedTable(
      'tour_images',
      tourImagesWithRealIds
    )
    results.push(tourImagesResult)

    // ✅ Step 4: Insert booking_slots with correct tour_ids and get their IDs
    const bookingSlotsWithRealIds = booking_slots.map((slot) => ({
      ...slot,
      tour_id: tourIdMap.get(slot.tour_id) || slot.tour_id,
    }))

    console.log(`🌱 Seeding booking_slots...`)
    const { data: insertedSlots, error: slotsError } = await this.supabase
      .from('booking_slots')
      .insert(bookingSlotsWithRealIds)
      .select('id')

    if (slotsError) {
      console.error(`❌ Error seeding booking_slots:`, slotsError)
      results.push({
        table: 'booking_slots',
        success: false,
        error: slotsError.message,
      })
      return results
    }

    console.log(
      `✅ Successfully seeded booking_slots with ${booking_slots.length} records`
    )
    results.push({
      table: 'booking_slots',
      success: true,
      count: booking_slots.length,
    })

    // Create a mapping for booking slot IDs
    const slotIdMap = new Map<number, number>()
    insertedSlots.forEach((slot: any, index: number) => {
      slotIdMap.set(index + 1, slot.id)
    })

    // ✅ Step 5: Insert booking_slot_dates with correct booking_slot_ids
    const bookingSlotDatesWithRealIds = booking_slot_dates.map((date) => ({
      ...date,
      booking_slot_id:
        slotIdMap.get(date.booking_slot_id) || date.booking_slot_id,
    }))

    const bookingSlotDatesResult = await this.seedTable(
      'booking_slot_dates',
      bookingSlotDatesWithRealIds
    )
    results.push(bookingSlotDatesResult)

    // Summary
    console.log('\n================================')
    console.log('📊 Seeding Summary:')
    console.log('================================')

    const successful = results.filter((r) => r.success).length
    const failed = results.filter((r) => !r.success).length

    results.forEach((result) => {
      const status = result.success ? '✅' : '❌'
      const count = result.count ? ` (${result.count} records)` : ''
      const error = result.error ? ` - ${result.error}` : ''
      console.log(`${status} ${result.table}${count}${error}`)
    })

    console.log(`\nTotal: ${successful} successful, ${failed} failed`)
    console.log('================================\n')

    return results
  }

  /**
   * Seed only specific tables
   */
  async seedTables(
    tables: string[],
    clearFirst: boolean = false
  ): Promise<SeedResult[]> {
    // For specific table seeding, just use seedAll with clearFirst
    // This ensures proper foreign key handling
    return this.seedAll(clearFirst)
  }
}

// Helper function to run seeder
export async function runSeeder(clearFirst: boolean = false) {
  const seeder = new DatabaseSeeder()
  return await seeder.seedAll(clearFirst)
}
